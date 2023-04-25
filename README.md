# Welcome to the Gentle Survey ReadMe
Below, you will find all of the steps necessary to get the built version of the project up and running on your local machine.

#Running the built version of the project (recemmended) 

How to run the build version of Gentle.

1. Start by cloning the project to your local machine by running the git clone command

  `git clone https://github.com/CalvinLloyd117/GentleSurvey.git`
1. (Optional) In order for gentle to utilize a persistant database, you will need to create a new file locally in your projects parent directory (Gentle Survey). You can easily create a .env file by first creating a .txt file and removing the entire file name (including the file extension .txt) and renaming the file '.env'.
  a. Open .env and add the following lines:
		
		COLLECTION_NAME = THE_NAME_OF_A_COLLECTION
		DB_USERNAME = super_admin
		DB_PASSWORD = xxxxxxxxxx
    
    Of course, the above are just placeholders. You will need to create your own database collection [here](https://www.mongodb.com/cloud/atlas/register), or utilize an existing collection. For more information about MongoDB, here is [the documentation](https://www.mongodb.com/docs/atlas/).

2. Navigate to the parent directory of the project in your terminal using
	
	`cd path/to/GentleSurvey`

	Note: The above path is just a placeholder. You will have to navigate to the project directory unique to your computer.
  
3. Once you have gone to the parent directory of your project, you can run the following command:

    `npm install`

3. Run the following command

	npm run build

	Check your terminal for errors. If building is successful, you should see the following output in your terminal
	.
	.
	.
	The build folder is ready to be deployed.
	You may serve it with a static server:

  		serve -s build

	Find out more about deployment here:

  		bit.ly/CRA-deploy

	If you recieve errors running the above build command, here are some troubleshooting steps. If at any point during the troulbeshooting you recieve the success message above, you may move on to step 3.
  
   a. If you recieve an error in your terminal that resembles the following, 
   
   <img width="1132" alt="Screen_Shot_2023-04-07_at_10 27 30_PM" src="https://user-images.githubusercontent.com/45299786/234142083-991188c0-0e8c-42e8-b97b-f4c038a8ec3c.png">
   
   you can try to force the build using:
		
		`npm run build -f`

		b. Depending on the version of React you are using, you may recieve an additional error like:
    
    <img width="1356" alt="Screen_Shot_2023-04-07_at_10 28 13_PM" src="https://user-images.githubusercontent.com/45299786/234142834-a05d475d-7954-469e-9283-a84f4dbd6d3a.png">

  If this error occurs, you will need to go into the projects package.json file and make some modifications to a couple of lines in the file.
  
  a. Open the package.json file using any text editor or IDE.
  
  b. Find the "scripts" section, and ensure it matches the following by modifying the `"start"` and `"build"` fields.
  
  ![image](https://user-images.githubusercontent.com/45299786/234143354-ae23a12f-2e27-498a-ac86-f074ba3d203c.png)

  c. Save the file.
  
  d. Run the following build command
  
  `npm run build -f`

4) Return to the terminal (in your project parent directory) and type the following command

	`node app.js`
  
  you should see a success message that resembles the following: 
  
  ![image](https://user-images.githubusercontent.com/45299786/234147160-abad4c8c-341c-4808-9974-699c316f694e.png)

5) You can then view the project by opening your browser (I would recemmend Google Chrome) and serching for the following URL:

  `localhost:3002`






	
	

