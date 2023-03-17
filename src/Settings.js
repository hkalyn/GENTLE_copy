/*************************************************************************
 * This file contains the majority of customizable settings that can be 
 * manipulated to tweak the survey to your needs. 
 * NOTE: Not all settings are found here, and I have simply pulled out 
 * certain elements from the Utils.js file that are more static exports 
 * than utility functions.
 *************************************************************************/
import React from "react";
// Constant imports
import
{
    SVGHEIGHT,
    SVGWIDTH,
    MOBILE,
} from "./Graph";

/*************************************************************************
 * Exporting alerts and Warnings
 *************************************************************************/
export const DELETEWARNING = "Cannot delete Nodes after linking them in the network stage!";
export const DUPLICATEWARNING = "You already chose this name. Please modify it to be slightly different!";
export const SLIDERWARNING = "You provided a value for every person, thank you. Click on a node to change their age!";
export const CATEGORYWARNING = "You provided the category for every person, thank you. Click on a node to change their category!";
export const CATEGORYCHANGED = "You have changed the category for an individual. Please ensure that any dependant subcategories are updated as well."

/*************************************************************************
 * A constant object that defines the on-screen questions for the survey.
 * To add additional questions, simply create a new <div></div> containing 
 * the question, and add it to the array. It is important to know the 
 * location of a div when you add it to a route in main.
 * For Example, SURVEYQUESTIONS[1] would be the second div in the array, 
 * since arrays are 0 based.
 *************************************************************************/
export const SURVEYQUESTIONS = [
    // Question 1 Instructions (appearing in text-box)
    <div>
        <p>Q1. Please start by listing your supervisor(s), lab members, and committee members. Next, consider listing other members of your academic community that you frequently interact with as a student. These could include other non-lab students or classmates, previous supervisors or mentors, other professors, instructors, or departmental staff. You are also free to list individuals from your non-academic environment that you interact with as a student (e.g., non-academic mentors, professional affiliates, employers, family, friends, or partners). You can include individuals that you interact with either in-person, phone, email, or other online platforms. <b>You should be able to recognize all these individuals by face or name, and they should be able to recognize you by face or name.</b></p>
        <p>Give everyone a name that is unique and easily recognizable to you (e.g., nicknames, initials, or pseudonyms). It is important that you will be
            able to easily identify all 25 individuals by their name in a future survey. Note that you must list 25 individuals to proceed through the survey,
            so please continue listing individuals until you reach 25. It’s ok if those individuals at the end of your list are only minimally connected to you. </p></div>,
    // Question 2 Instructions (appearing in text-box)
    <div>
        <p>Q2. Please select a gender for each individual.</p>
        <p> You can do this by clicking an individual until their color matches the appropriate gender found in the Legend.</p>
    </div>,
    // Question 3 Instructions
    <div>
        <p>Q3. Please enter an age for each individual. If you do not know it, an approximation is acceptable.</p>
        <p>You can do this by clicking an individual, and entering an age below.</p>
    </div>,
    // Question 4a Instructions
    <div>
        <p>
            Q4a. Please place everyone into either the 'academic' or 'non-academic' box. You can do this by clicking on an individual and dragging them into
            the desired box. If needed, you can place individuals into the 'other' box, and then specify how they fit differently (e.g., maybe your partner is
            also an academic and you're not sure in which bubble to place them)
        </p>
    </div>
    // "5) Cycle through two boolean options for each node.",
    // "6) Move nodes closer to the line to indicate proximity. Useful to measure continuous relative scales.",
    // "7) Move nodes closer to the right to indicate proximity. Useful to measure continuous relative scales.",
    // (MOBILE ? "8) Link connected people together and split existing links by clicking on two connected nodes." :
    //   "8) Link connected people together by first selecting a node (becomes colored in green) and then clicking on all the other nodes connected to this one. Clicking on the green node again permits selecting a new connection source."),
    // "Thank you very much for participating in our study. Your responses have been collected and you should close this window."
];
/*************************************************************************
 * Template Node that represents an alter for the survey. The Node 
 * consists of a series of Key-Value pairs that make up both the Node 
 * State as well as the values that will be exported to the database to 
 * gather the survey results. 
 * You can add additional keys or modify existing keys to hold your custom 
 * survey data.
 * @param {number} counter: Esentiall the unique key representing the 
 * node.
 * @param {string} name: The Name of the Alter.
 *************************************************************************/
export function returnTemplateNode(counter, name)
{
    return {
        // State values used to control the node during execution
        key: counter,
        name: name,
        size: (MOBILE ? 20 : 30),
        fixed: false,
        float: false,
        link: false,
        fixedPosX: SVGWIDTH / 2,
        fixedPosY: SVGHEIGHT * 0.1 + (Math.random() * (SVGHEIGHT * 0.8)),
        continuous1: -1,
        continuous2: -1,
        academic: -1,
        booleanCondition: false,
        x: 250,
        y: 250,
        floatX: 0,
        floatY: 0,
        shouldFloat: false,
        // Values for the purposes of data collection.
        // Name belongs in both locations, but I have chosen to leave it as a control value.
        color: "grey",
        sex: "",
        age: "",
        box: "",
        academicSubCategory: "",
        categoryColor: "white",
    };
}

/*************************************************************************
 * You Node template controls the appearance of the 'You' node.
 * Default: 
 * key: 0, name: "You", categoryColor: "green", 
 * color: "green", size: 10, x: SVGWIDTH / 2, y: SVGHEIGHT / 2,
 * floatX: SVGWIDTH / 2, floatY: SVGHEIGHT / 2, fixed: false,
 * float: false, link: false, shouldFloat: false
 *************************************************************************/
export function returnYouTemplate()
{
    return {
        key: 0,
        name: "You",
        categoryColor: "green",
        color: "green",
        size: 10,
        x: SVGWIDTH / 2,
        y: SVGHEIGHT / 2,
        floatX: SVGWIDTH / 2,
        floatY: SVGHEIGHT / 2,
        fixed: false,
        float: false,
        link: false,
        shouldFloat: false
    }
}

/*************************************************************************
 * The Informed Consent information that survey takers will agree to prior 
 * to taking the survey. 
 * TODO: This text should be replaced with an html block, to have more 
 * control over the appearance of the consent sheet.
 *************************************************************************/
export const INFORMATION = "Place-holder for informed consent sheet.";

/*************************************************************************
 * Object contains the settings for Gender. You can add additional values
 * If you would like to incorperate more genders than Male, Female, and 
 * Other.
 *************************************************************************/
export const GENDERSETTINGS = {
    female: {
        name: "female",
        color: "#7030a0"
    },
    male: {
        name: "male",
        color: "#ffc002"
    },
    other: {
        name: "other",
        color: "#92d050"
    }
}

/*************************************************************************
 * A category object that is used to define the selectable categories for 
 * a single question. This will assign node properties, colors, and text.
 * To add additional categories to this question, simply follow this 
 * format.
 * To Create another question that uses categories, you need to create 
 * an entirely new Categories object by a different name, and assign it 
 * to a key in the node using a callback function provided.
 *************************************************************************/
// export const CATEGORIES = [
//     { key: 0, text: "Cat1", color: "#E27D60" },
//     { key: 1, text: "Cat2", color: "#85DCBA" },
//     { key: 2, text: "Cat3", color: "#E8A87C" },
//     { key: 3, text: "Cat4", color: "red" }
// ];

export const ACADEMICSUBCATEGORIES = [
    { key: 0, text: "Undergraduate Student", color: "#400080" },
    { key: 1, text: "Masters Student", color: "#0000cc" },
    { key: 2, text: "PhD Student", color: "#29a329" },
    { key: 3, text: "Post-doctoral Fellow", color: "#ffff00" },
    { key: 4, text: "Technician", color: "#e65c00" },
    { key: 5, text: "Instructor", color: "#ff0000" },
    { key: 6, text: "Professor", color: "#800040" },
    { key: 7, text: "Committee Member", color: "#ff4dd2" },
    { key: 8, text: "Other", color: "#000080" }

];

/*************************************************************************
 * A Boxes oject used to define the drag and drop boxes for a single 
 * question.
 * To add an additional box, you will need to change the sizes and colors 
 * of the provided boxes to allow more room for boxes. 
 * To Create a new set of boxes for a seperate question, you can copy the 
 * template, and give it a new name. Then reference that object in the 
 * callback 
 *************************************************************************/
export const ACADEMICBOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Academic",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.7 - 200),
            width: window.innerWidth * 0.16,
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "Non-Academic",
            color: "#0070c0",
            x: 383,
            y: (window.innerHeight * 0.7 - 200),
            width: window.innerWidth * 0.16,
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Other",
            color: "#548235",
            x: 751,
            y: (window.innerHeight * 0.7 - 200),
            width: window.innerWidth * 0.16,
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Acedemic Box",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.7 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "Non-Acedemic Box",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.7 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Other",
            color: "#548235",
            x: 15,
            y: (window.innerHeight * 0.7 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

/*************************************************************************
 * Separator for showing how the rendering of categories can also be
 * used to create visually seperating elements on screen.
 *************************************************************************/
export const SEPARATOR = [
    {
        key: 0, text: "",
        color: "white",
        x: 1015,
        y: 35,
        width: 0,
        height: 0
    },
    {
        key: 1,
        text: "",
        color: "green",
        x: SVGWIDTH * 0.5,
        y: 10, width: 2,
        height: SVGHEIGHT * 0.9
    }
];

