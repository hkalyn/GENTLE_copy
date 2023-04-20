let express = require('express');
let monk = require("monk");
let bodyParser = require('body-parser')
require('dotenv').config();
let bcrypt = require('bcrypt')
/* Content:
Simple node server that can call to MONGODB ATLAS
*/


//Setup
const port = process.env.PORT || 3002;
const location = process.env.URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.luzii.mongodb.net/?retryWrites=true&w=majority`;
const local = process.env.LOCAL_DEVELOPMENT || 'true';

//create app
let app = express();
app.use(express.urlencoded({ extended: true }));

// Connect db
if (local === 'true')
{
    console.log('Building for local environment...');
    var db = monk(location, { authSource: 'admin' });
} else
{
    var db = monk(location);
}
let collection = db.collection(process.env.COLLECTION_NAME);


//show all entries in collection
collection.find().then((docs) =>
{
    console.log("Connected to data")
    console.log(docs.length);
})

app.use(express.static(__dirname + "/build"));


//serve react app
app.get('/', (req, res) =>
{
    console.log("SERVING APP")
    res.sendFile(__dirname + "/index.html");
})

/**
 * Sends data to db
 */
app.post("/ajax", (req, res) =>
{
    let ID = req.body.ID;
    let data = req.body.data;
    data = JSON.parse(data);
    collection.find({ ID: ID }).then((doc) =>
    {
        if (doc.length === 0)
        {
            console.log("User does not exist");
            collection.insert({ ID: ID, data: data }).then(() => { res.send("Success") })
        } else
        {
            console.log("User exists. Updating.");
            collection.findOneAndUpdate({ ID: ID },
                { $set: { ID: ID, data: data } }).then(() => { res.send("Success") })
        }
    }
    )
})

// My APIs for registering and authenticating a user
app.post("/register", (req, res) =>
{
    let ID = req.body.ID;
    let data = req.body.data;
    let password = req.body.password
    let passwordConfirm = req.body.passwordConfirm

    var password_h = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    if (data)
    {
        data = JSON.parse(data);
    }
    
    collection.find({ ID: ID }).then((doc) =>
    {
        //first failure case, if a user already exists
        if (doc.length !== 0)
        {
            console.log("User already exists.");
            return res.status(500).json({ status: "User Not Found" })
        }

        //second failure case, if the passwrords dont't match
        //better to double check surver side.
        else if(password!==passwordConfirm)
        {
            console.log("password do not match", password_h)
            return res.status(500).json({ status: "password mismatch" })
        }

        //add a new user
        else
        {
            var newUser = {
                ID: ID,
                password: password_h,
                data: {}
            }

            collection.insert(newUser).then(() => {
                return res.status(200).send("Success") })
            // collection.insertOne({ ID: req.body.ID }, function (err, user)
            // {
    
            //     if (bcrypt.compareSync(password, user.password))
            //     {
            //         //password did not match
            //         console.log("Passwords match", user)
            //         return res.status(200).json({ status: "success", ID: ID, password: password_h, data: user.data })
            //     } else
            //     {
            //         // password matched. proceed forward
            //         console.log("password do not match", user, password_h)
            //         console.log("password do not match", password_h)
            //         return res.status(500).json({ status: "password mismatch" })
            //     }
            // });
        }
    })
})

app.post("/login", (req, res) =>
{
    let ID = req.body.ID;
    let data = req.body.data;
    let password = req.body.password
    var password_h = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    if (data)
    {
        data = JSON.parse(data);
    }

    collection.find({ ID: ID }).then((doc) =>
    {
        if (doc.length === 0)
        {
            console.log("User does not exist");
            return res.status(500).json({ status: "User Not Found" })
        } else
        {
            collection.findOne({ ID: req.body.ID }, function (err, user)
            {

                if (bcrypt.compareSync(password, user.password))
                {
                    //password did not match
                    console.log("Passwords match", user)
                    return res.status(200).json({ status: "success", ID: ID, password: password_h, data: user.data })
                } else
                {
                    // password matched. proceed forward
                    console.log("password do not match", user, password_h)
                    console.log("password do not match", password_h)
                    return res.status(500).json({ status: "password mismatch" })
                }
            });
        }
    }
    )
})





app.listen(port);
