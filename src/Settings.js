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
    SVG_HEIGHT,
    SVG_WIDTH,
    MOBILE,
} from "./Graph";

/*************************************************************************
 * Exporting alerts and Warnings
 *************************************************************************/
export const DELETE_WARNING = "Cannot delete Nodes after linking them in the network stage!";
export const DUPLICATE_WARNING = "You already chose this name. Please modify it to be slightly different!";
export const SLIDER_WARNING = "You provided a value for every person, thank you. Click on a node to change their age!";
export const CATEGORY_WARNING = "You provided the category for every person, thank you. Click on a node to change their category!";
export const CATEGORY_CHANGED = "You have changed the category for an individual. Please ensure that any dependant subcategories are updated as well."

/*************************************************************************
 * Constants for creating alters
 *************************************************************************/
// The maximum number of individuals that participants can add.
export const MAX_ALTERS = 25

// The minimum number of alters that participants can add. Having this value higher than 0 will prevent users from 
//navigating the site and skipping the name generation screen. Participants MUST add 
//<MIN_ALTERS> individuals in order to proceed to subsequent questions.
export const MIN_ALTERS = 0

/*************************************************************************
 * Object contains the settings for Gender. You can add additional values
 * If you would like to incorperate more genders than Male, Female, and 
 * Other.
 *************************************************************************/
export const GENDER_SETTINGS = {
    female: {
        name: "female",
        color: "#C8A4DB"
    },
    male: {
        name: "male",
        color: "#FECC80"
    },
    other: {
        name: "other",
        color: "#80FED0"
    }
}
/*************************************************************************
 * A constant object that defines the on-screen questions for the survey.
 * To add additional questions, simply create a new <div></div> containing 
 * the question, and add it to the array. It is important to know the 
 * location of a div when you add it to a route in main.
 * For Example, SURVEYQUESTIONS[1] would be the second div in the array, 
 * since arrays are 0 based.
 *************************************************************************/
export const SURVEY_QUESTIONS = [
    // Question 1 Instructions (appearing in text-box)
    <div>
        <p>
            Name <b>25 individuals</b> that you interact with <u>most frequently</u> in your academic program (e.g., supervisor(s), committee
            members, lab members, other fellow students/classmates, professors, instructors, teaching assistants, or staff members). Feel
            free to name individuals from non-academic environments if you interact with them as a student (e.g., professional affiliates,
            employers, community members, elders, family, friends, or partners).

        </p>
        <p>
            *You should be able to recognize all these individuals by face or name, and they should recognize you by face or name via inperson or online interactions.
        </p>
    </div>,
    // Question 2 Instructions (appearing in text-box)
    <>
        <div>
            <p>
                Q2. Please select a gender for each individual.
            </p>
            <p>
                You can do this by clicking an individual to cycle through options until their color matches the appropriate gender found in the Legend.
            </p>
        </div>

        <div className="legend">
            <h3>Legend</h3>
            <div className="legendNode" style={{ backgroundColor: GENDER_SETTINGS.female.color }}><p>Female</p></div>
            <div className="legendNode" style={{ backgroundColor: GENDER_SETTINGS.male.color }}><p>Male</p></div>
            <div className="legendNode" style={{ backgroundColor: GENDER_SETTINGS.other.color }}><p>Other</p></div>
        </div>
    </>,
    // Question 3 Instructions
    <div>
        <p>
            Q3. Please enter an age for each individual. If you are unsure, an approximate is acceptable.
        </p>
        <p>
            You can do this by clicking an individual and entering an age below.
        </p>
    </div>,
    // Question 4a Instructions
    <div>
        <p>
            Q4a. Please place everyone into either the 'academic' or 'non-academic' box.
        </p>
        <p>
            You can do this by clicking on an individual and dragging them into
            the appropriate box. If needed, you can place individuals into the 'other' box, and then specify how they fit differently (e.g., maybe your partner is
            also an academic and you're not sure in which bubble to place them)
        </p>
    </div>,
    //Question 4b Instructions and message 
    <div>
        <p>
            Q4b. Here are the individuals you placed in the academic box. Can you tell me more about each of their positions?
        </p>
        <p>
            You can do this by clicking an individual and then selecting the appropriate position below.
        </p>
    </div>,
    //Question 4c Instructions message
    <div>
        <p>
            Q4c. Here are the individuals you placed in the non-academic box. Can you tell me more about each of their positions?
        </p>
        <p>
            You can do this by clicking an individual and then selecting the appropriate position below.
        </p>
    </div>,
    //Question 5 Instructions and message
    <div>
        <p>
            Q5. Place all individuals that are YOUR lab mates in the box below.
        </p>
    </div>,
    // Question 6 (Network linking supposed to go here, but I want to move it ot the end.)
    //Question 7 (now 6)
    <div>
        <p>
            Q6. Do you collaborate with anyone below on research?
        </p>
        <p>
            Next, please indicate if there is anyone that you would like to collaborate with?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 8 (now 7)
    <div>
        <p>
            Q7. Does anyone below <b>provide technical support</b> that helps you develop your skills as a researcher or student?
        </p>
        <p>
            For example, this could be help with things like developing research skills, field or lab work, writing, reading, class work, or statistics.
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 9 (now 8)
    <div>
        <p>
            Q8. Is there anyone you would like more technical support from?
        </p>
        <p>
            You can do this by clicking and dragging relevant individuals into the box.
        </p>
    </div>,
    // Question 10 (now 9)
    <div>
        <p>
            Q9. <b>Do you provide</b> (or would be willing to provide) technical support to help others develop their skills as a researcher or student?
        </p>
        <p>
            For example, this could be things like help with developing research skills, field or lab work, writing, reading, class work, or statistics.
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 11 (now 10)
    <div>
        <p>
            Q10. Do you feel comfortable talking with anyone below about <b>failure, disappointment, or struggle in your academic work</b>?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 12 (now 11)
    <div>
        <p>
            Q11. <b>Do you provide</b> (or would be willing to provide) support to any individuals below about <b>failure, disappointment, or struggle in their academic work</b>?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 13 (now 12)
    <div>
        <p>
            Q12. Is there anyone below that you feel comfortable talking with about <b>personal, non-academic matters</b>?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 14 (now 13)
    <div>
        <p>
            Q13. <b>Do you provide</b> (or would be willing to provide) support to help others with <b>personal, non-academic matters</b>?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 15 (now 14)
    <div>
        <p>
            Q14. Is there anyone below with whom you find it difficult to interact?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 16 (now 15)
    <div>
        <p>
            Q15. If the individuals below also took the norm survey, do you think they would answer the norm statements in a similar way as you?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 6 (now 16)
    <div>
        <p>
            Q16. Create a detailed social network by linking individuals that know eachother by face or name. It's ok if you have
            individuals that cannot identify anyone else.
        </p>
        <p>
            Create links by clicking one individual, and then clicking another individual. Please take your time to ensure the most complete social network. You can also unlink individuals by clicking on one individual, and clicking another individual that they are already linked to.
        </p>
    </div>
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
        fixedPosX: SVG_WIDTH / 2,
        fixedPosY: SVG_HEIGHT * 0.1 + (Math.random() * (SVG_HEIGHT * 0.8)),
        continuous1: -1,
        continuous2: -1,

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
        // box: "",
        academic: -1,
        academicSubCategory: "",
        nonAcademicSubCategory: "",
        isLabMember: -1,
        collaboration: -1,
        providesMeSupport_Technical: -1,
        iWouldLikeMoreTechnicalSupport: -1,
        iProvideSupport_Technical: -1,
        iAmComfortable_Failure_Disappointment_Struggle_Academic: -1,
        iProvideSupport_Failure_Disappointment_Struggle_Academic: -1,
        iAmComfortable_Personal_NonAcademic: -1,
        iProvideSupport_Personal_NonAcademic: -1,
        difficultToInteractWith: -1,
        wouldAnswerSimilarToMe: -1,
        categoryColor: "white",
        border: "#FFFFFF"
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
        x: SVG_WIDTH / 2,
        y: SVG_HEIGHT / 2,
        floatX: SVG_WIDTH / 2,
        floatY: SVG_HEIGHT / 2,
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

export const ACADEMIC_SUBCATEGORIES = [
    { key: 0, text: "Undergraduate Student", color: "#FEEDB3" },
    { key: 1, text: "Masters Student", color: "#FDE4B5" },
    { key: 2, text: "PhD Student", color: "#FBDBB7" },
    { key: 3, text: "Post-doctoral Fellow", color: "#FAD4B8" },
    { key: 4, text: "Technician", color: "#F8CEB9" },
    { key: 5, text: "Instructor", color: "#F7C4BA" },
    { key: 6, text: "Professor", color: "#F6BBBB" },
    { key: 7, text: "Committee Member", color: "#F9B9CD" },
    { key: 8, text: "Administration", color: "#fEB4E3" },
    { key: 9, text: "Other", color: "#F2BFEA" }

];

export const NONACADEMIC_SUBCATEGORIES = [
    { key: 0, text: "Professional Affiliate", color: "#CACEE7" },
    { key: 1, text: "Employer", color: "#C6D4EC" },
    { key: 2, text: "Community Member", color: "#C1DBF0" },
    { key: 3, text: "Friend", color: "#BBE4F6" },
    { key: 4, text: "Family", color: "#B5EDFC" },
    { key: 5, text: "Partner", color: "#B4FDF9" },
    { key: 6, text: "Elder", color: "#B3FFE3" },
    { key: 7, text: "Other", color: "#CAEAC8" },
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

/*************************************************************************
 * Defining Box Colors to avoid repetition
 *************************************************************************/
export const BOX_COLORS = [
    "#E9621F", "#0795BB", "#F4E401", "#6D3A8A"
]

// Boxes for Q4a
export var ACADEMIC_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Academic:",
            value: "academic",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "Non-Academic:",
            value: "non-academic",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Other:",
            value: "other",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Acedemic",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "Non-Acedemic",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Other",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Q5
export const LAB_MEMBER_BOX = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Lab Members",
            value: "true",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: SVG_WIDTH - 30,
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Lab Members",
            value: "true",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: SVG_WIDTH - 30,
            height: window.innerHeight * 0.20
        }
    ]
)

// Boxes for Q6
export const COLLABORATOR_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "I am collaborating with:",
            value: "current collaborator",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 2) - 15),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I would like to collaborate with:",
            value: "would like to",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 2) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 2) - 30),
            height: window.innerHeight * 0.17
        },
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I am collaborating with:",
            value: "current collaborator",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I would like to collaborate with:",
            value: "I would like to",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 7
export const PROVIDES_ME_TECHNICAL_SUPPORT = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "A lot of technical support:",
            value: "a lot",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "No technical support:",
            value: "none",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "A lot of technical support:",
            value: "a lot",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "No technical support:",
            value: "none",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Box for Question 8
export const WOULD_LIKE_MORE_TECHNICAL_SUPPORT = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "I would like more technical support from:",
            value: "true",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: SVG_WIDTH - 30,
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I would like more technical support from:",
            value: "true",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: SVG_WIDTH - 30,
            height: window.innerHeight * 0.20
        }
    ]
)

// Boxes for Question 9
export const I_PROVIDE_TECHNICAL_SUPPORT = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "A lot of technical support:",
            value: "a lot",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "No technical support for:",
            value: "none",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "A lot of technical support:",
            value: "a lot",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "No technical support:",
            value: "none",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 10
export const PROVIDES_ME_SUPPORT_ACADEMIC = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 11
export const I_PROVIDE_SUPPORT_ACADEMIC = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not Comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 12
export const I_AM_COMFORTABLE_NONACADEMIC = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not  comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 13
export const I_PROVIDE_SUPPORT_NONACADEMIC = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very comfortable:",
            value: "very comfortable",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little comfortable:",
            value: "a little comfortable",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not comfortable:",
            value: "not comfortable",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 14
export const DIFFICULT_INTERACTION_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very difficult:",
            value: "very difficult",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little difficult:",
            value: "a little difficult",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not difficult at all:",
            value: "not difficult",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        // {
        //     key: 3,
        //     text: "I'm not sure about these individuals:",
        //     value: "not sure",
        //     color: BOX_COLORS[3],
        //     x: ((SVG_WIDTH / 4) * 3 + 15),
        //     y: (window.innerHeight - window.innerHeight * 0.17 - 30),
        //     width: ((SVG_WIDTH / 4) - 30),
        //     height: window.innerHeight * 0.17
        // }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very difficult:",
            value: "very difficult",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little difficult:",
            value: "a little difficult",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not difficult at all:",
            value: "not difficult",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        // {
        //     key: 3,
        //     text: "I'm not sure about these individuals:",
        //     value: "not sure",
        //     color: BOX_COLORS[3],
        //     x: 15,
        //     y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
        //     width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        // },
    ]
)

// Boxes for Question 15
export const SIMILAR_ANSWER_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Very similar:",
            value: "very similar",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "Somewhat similar:",
            value: "somewhat similar",
            color: BOX_COLORS[1],
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Not similar at all:",
            value: "not similar",
            color: BOX_COLORS[2],
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight - window.innerHeight * 0.17 - 30),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        // {
        //     key: 3,
        //     text: "I'm not sure about these individuals:",
        //     value: "not sure",
        //     color: BOX_COLORS[3],
        //     x: ((SVG_WIDTH / 4) * 3 + 15),
        //     y: (window.innerHeight - window.innerHeight * 0.17 - 30),
        //     width: ((SVG_WIDTH / 4) - 30),
        //     height: window.innerHeight * 0.17
        // }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Very similar:",
            value: "very similar",
            color: BOX_COLORS[0],
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "Somewhat similar:",
            value: "somewhat similar",
            color: BOX_COLORS[1],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Not similar at all:",
            value: "not similar",
            color: BOX_COLORS[2],
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        // {
        //     key: 3,
        //     text: "I'm not sure about these individuals:",
        //     value: "not sure",
        //     color: BOX_COLORS[3],
        //     x: 15,
        //     y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
        //     width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        // },
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
        x: SVG_WIDTH * 0.5,
        y: 10, width: 2,
        height: SVG_HEIGHT * 0.9
    }
];

