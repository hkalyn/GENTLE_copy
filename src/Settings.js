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
 * Object contains the settings for Gender. You can add additional values
 * If you would like to incorperate more genders than Male, Female, and 
 * Other.
 *************************************************************************/
export const GENDER_SETTINGS = {
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
            Q1. Please start by listing your supervisor(s), lab members, and committee members.
        </p>
        <p>
            Next, consider listing other members of your academic community that you frequently interact with as a student. These could include other non-lab students or classmates, previous supervisors or mentors, other professors, instructors, or departmental staff. You are also free to list individuals from your non-academic environment that you interact with as a student (e.g., non-academic mentors, professional affiliates, employers, family, friends, or partners).
        </p>
        <p>
            You can include individuals that you interact with either in-person, phone, email, or other online platforms.
        </p>
        <p>
            <b>You should be able to recognize all these individuals by face or name, and they should be able to recognize you by face or name.</b>
        </p>
        <p>
            Give everyone a name that is unique and easily recognizable to you (e.g., nicknames, initials, or pseudonyms). It is important that you will be
            able to easily identify all 25 individuals by their name in a future survey. Note that you must list 25 individuals to proceed through the survey,
            so please continue listing individuals until you reach 25. It’s ok if those individuals at the end of your list are only minimally connected to you.
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
            Q3. Please enter an age for each individual. If you do not know it, an approximation is acceptable.
        </p>
        <p>
            You can do this by clicking an individual, and entering an age below.
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
            Q5. Please indicate which of these individuals are lab members.
        </p>
        <p>
            Click and drag lab members into the box.
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
            Q10. Do you feel comfortable talking with anyone below about <b>personal failure, disappointment, or struggle in your academic work</b>?
        </p>
        <p>
            Click and drag individuals into the appropriate box.
        </p>
    </div>,
    // Question 12 (now 11)
    <div>
        <p>
            Q11. <b>Do you provide</b> (or would be willing to provide) support to any individuals below about
            <b>personal failure, disappointment, or struggle in their academic work</b>?
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
            For each individual listed below, create links between individuals that could identify each other by either face or name. It's ok if you have
            individuals that cannot name anyone else.
        </p>
        <p>
            This can be done by clicking one individual, and then clicking another individual to create a link between them. Please take your time to ensure the most complete social network.
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
        iAmComfortable_PersonalFailure_Disappointment_Struggle_Academic: -1,
        iProvideSupport_PersonalFailure_Disappointment_Struggle_Academic: -1,
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

export const NONACADEMIC_SUBCATEGORIES = [
    { key: 0, text: "Mentor", color: "#400080" },
    { key: 1, text: "Employer", color: "#0000cc" },
    { key: 2, text: "Co-worker", color: "#29a329" },
    { key: 3, text: "Friend", color: "#ffff00" },
    { key: 4, text: "Family", color: "#e65c00" },
    { key: 5, text: "Partner", color: "#ff0000" },
    { key: 6, text: "Other", color: "#800040" },
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
// Boxes for Q4a
export const ACADEMIC_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "Academic:",
            value: "academic",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "Non-Academic:",
            value: "non-academic",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "Other:",
            value: "other",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "Acedemic",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "Non-Acedemic",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "Other",
            color: "#548235",
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
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
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
            color: "#c00000",
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
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 2) - 15),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I would like to collaborate with:",
            value: "would like to",
            color: "#ffc20d",
            x: ((SVG_WIDTH / 2) + 15),
            y: (window.innerHeight * 0.9 - 200),
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
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I would like to collaborate with:",
            value: "I would like to",
            color: "#0070c0",
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
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "No technical support:",
            value: "none",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
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
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "A little technical support:",
            value: "a little",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "No technical support:",
            value: "none",
            color: "#548235",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Box for Question 9
export const WOULD_LIKE_MORE_TECHNICAL_SUPPORT = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "I would like more technical support from:",
            value: "true",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
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
            color: "#c00000",
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
            text: "I provide a lot of technical support for:",
            value: "a lot",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I provide a little technical support for:",
            value: "a little",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I provide no technical support for:",
            value: "none",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I provide a lot of technical support for:",
            value: "a lot",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I provide a little technical support for:",
            value: "a little",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I provide no technical support for:",
            value: "none",
            color: "#548235",
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
            text: "I feel very comfortable talking with:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I feel a little comfortable talking with:",
            value: "a little comfortable",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I do not feel comfortable talking with:",
            value: "not comfortable",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I feel very comfortable talking with:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I feel a little comfortable talking with:",
            value: "a little comfortable",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I do not feel comfortable talking with:",
            value: "not comfortable",
            color: "#548235",
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
            text: "I feel very comfortable providing support for:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I feel a little comfortable providing support for:",
            value: "a little comfortable",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I would not provide support for:",
            value: "not comfortable",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I feel very comfortable providing support for:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I feel a little comfortable providing support for:",
            value: "a little comfortable",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I would not provide support for:",
            value: "not comfortable",
            color: "#548235",
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
            text: "I feel very comfortable talking to:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I feel a little comfortable talking to:",
            value: "a little comfortable",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I would not feel comfortable talking to:",
            value: "not comfortable",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I feel very comfortable talking to:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I feel a little comfortable talking to:",
            value: "a little comfortable",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I would not feel comfortable talking to:",
            value: "not comfortable",
            color: "#548235",
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
            text: "I feel very comfortable providing support for:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I feel a little comfortable providing support for:",
            value: "a little comfortable",
            color: "#0070c0",
            x: ((SVG_WIDTH / 3) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I would not provide support for:",
            value: "not comfortable",
            color: "#548235",
            x: ((SVG_WIDTH / 3) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 3) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I feel very comfortable providing support for:",
            value: "very comfortable",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I feel a little comfortable providing support for:",
            value: "a little comfortable",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I would not provide support for:",
            value: "not comfortable",
            color: "#548235",
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
            text: "I find these individuals very difficult to interact with:",
            value: "very difficult",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I find these individuals a little difficult to interact with:",
            value: "a little difficult",
            color: "#0070c0",
            x: ((SVG_WIDTH / 4) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I find these individuals are not difficult to interact with at all:",
            value: "not difficult",
            color: "#548235",
            x: ((SVG_WIDTH / 4) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 3,
            text: "I'm not sure about these individuals:",
            value: "not sure",
            color: "#7030a0",
            x: ((SVG_WIDTH / 4) * 3 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I find these individuals very difficult to interact with:",
            value: "very difficult",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I find these individuals a little difficult to interact with:",
            value: "a little difficult",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I find these individuals are not difficult to interact with at all:",
            value: "not difficult",
            color: "#548235",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 3,
            text: "I'm not sure about these individuals:",
            value: "not sure",
            color: "#7030a0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
    ]
)

// Boxes for Question 14
export const SIMILAR_ANSWER_BOXES = (window.innerWidth > 700 ?
    // desktop sized boxes.
    [
        {
            key: 0,
            text: "I think our answers would be very similar:",
            value: "very similar",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 1,
            text: "I think our answers would be somewhat similar:",
            value: "somewhat similar",
            color: "#0070c0",
            x: ((SVG_WIDTH / 4) + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 2,
            text: "I don't think our answers would be similar at all:",
            value: "not similar",
            color: "#548235",
            x: ((SVG_WIDTH / 4) * 2 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        },
        {
            key: 3,
            text: "I'm not sure about these individuals:",
            value: "not sure",
            color: "#7030a0",
            x: ((SVG_WIDTH / 4) * 3 + 15),
            y: (window.innerHeight * 0.9 - 200),
            width: ((SVG_WIDTH / 4) - 30),
            height: window.innerHeight * 0.17
        }
    ] :
    // Mobile Considerations. If the screensize is less than 700px, return the bollowing boxes
    [
        {
            key: 0,
            text: "I think our answers would be very similar:",
            value: "very similar",
            color: "#c00000",
            x: 15,
            y: (window.innerHeight * 0.9 - 250 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725,
            height: window.innerHeight * 0.20
        },
        {
            key: 1,
            text: "I think our answers would be somewhat similar:",
            value: "somewhat similar",
            color: "#0070c0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 2,
            text: "I don't think our answers would be similar at all:",
            value: "not similar",
            color: "#548235",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
            width: window.innerWidth * 0.725, height: window.innerHeight * 0.20
        },
        {
            key: 3,
            text: "I'm not sure about these individuals:",
            value: "not sure",
            color: "#7030a0",
            x: 15,
            y: (window.innerHeight * 0.9 - 10 - window.innerHeight * 0.20),
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
        x: SVG_WIDTH * 0.5,
        y: 10, width: 2,
        height: SVG_HEIGHT * 0.9
    }
];

