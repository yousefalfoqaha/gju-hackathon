// JavaScript source code
// array of object courses database
const courses = [
    {
        id: "ENGL1001",
        name: "Upper-Intermediate English",
        creditHours: 3
    },
    {
        id: "GERL101B1",
        name: "German I - B1 Track",
        creditHours: 3
    },
    {
        id: "CS116",
        name: "Computing Fundamentals",
        creditHours: 3
    },
    {
        id: "CS1160",
        name: "Computing Fundamentals Lab",
        creditHours: 1
    },
    {
        id: "ARB100",
        name: "Arabic 100",
        creditHours: 3
    },
    {
        id: "MATH101",
        name: "Calculus I",
        creditHours: 3
    },
    {
        id: "GERL102B1",
        name: "German II - B1 Track",
        creditHours: 3
    },
    {
        id: "NE101",
        name: "National Education",
        creditHours: 3
    },
    {
        id: "MATH102",
        name: "Calculus II",
        creditHours: 3
    },
    {
        id: "CS117",
        name: "Object-Oriented Programming",
        creditHours: 3
    },
    {
        id: "CS1170",
        name: "Object-Oriented Programming Lab",
        creditHours: 1
    },
    {
        id: "CS201",
        name: "Discrete Structures",
        creditHours: 3
    },
    {
        id: "CE212",
        name: "Digital Systems",
        creditHours: 3
    },
    {
        id: "CE2120",
        name: "Digital Systems Lab",
        creditHours: 1
    },
    {
        id: "GERL201B1",
        name: "German III - B1 Track",
        creditHours: 3
    },
    {
        id: "CE201",
        name: "Computer Architecture and Organization",
        creditHours: 3
    },
    {
        id: "CS222",
        name: "Theory of Algorithms",
        creditHours: 3
    },
    {
        id: "CS223",
        name: "Data Structures",
        creditHours: 3
    },
    {
        id: "CS263",
        name: "Database Management Systems",
        creditHours: 3
    },
    {
        id: "EE317",
        name: "Linear Algebra",
        creditHours: 3
    },
    {
        id: "GERL202B1",
        name: "German IV - B1 Track",
        creditHours: 3
    },
    {
        id: "MILS100",
        name: "Military Science",
        creditHours: 3
    },
    {
        id: "IE0121",
        name: "Probability and Statistics",
        creditHours: 3
    },
    {
        id: "CS264",
        name: "Visual Programming",
        creditHours: 3
    },
    {
        id: "CS342",
        name: "Software Engineering",
        creditHours: 3
    },
    {
        id: "CS355",
        name: "Web Technologies",
        creditHours: 3
    },
    {
        id: "CS451",
        name: "Artificial Intelligence",
        creditHours: 3
    },
    {
        id: "GERL301B1",
        name: "German V - B1 Track",
        creditHours: 3
    },
    {
        id: "CS323",
        name: "Computational Theory",
        creditHours: 3
    },
    {
        id: "CS332",
        name: "Computer Graphics",
        creditHours: 3
    },
    {
        id: "CE352",
        name: "Computer Networks",
        creditHours: 3
    },
    {
        id: "CE357",
        name: "Operating Systems",
        creditHours: 3
    },
    {
        id: "CE3570",
        name: "Operating Systems Lab",
        creditHours: 1
    },
    {
        id: "CS419",
        name: "Compiler Construction",
        creditHours: 3
    },
    {
        id: "GERL302B1",
        name: "German VI - B1 Track",
        creditHours: 3
    },
    {
        id: "ENGL1002",
        name: "Advanced English",
        creditHours: 3
    },
    {
        id: "CS330",
        name: "Image Understanding",
        creditHours: 3
    },
    {
        id: "CS356",
        name: "Information Security",
        creditHours: 3
    },
    {
        id: "CS391",
        name: "Field Training (160 hours)",
        creditHours: 0
    },
    {
        id: "CS416",
        name: "Systems Programming",
        creditHours: 3
    },
    {
        id: "CS477",
        name: "Mobile Computing",
        creditHours: 3
    },
    {
        id: "CS492",
        name: "Senior Project",
        creditHours: 3
    }
];

const generalTrackElectives = [
    {
        id: "CS333",
        name: "Game Programming",
        creditHours: 3
    },
    {
        id: "CS357",
        name: "Cybersecurity",
        creditHours: 3
    },
    {
        id: "CS358",
        name: "Multimedia Systems Design",
        creditHours: 3
    },
    {
        id: "CS359",
        name: "Internet of Things",
        creditHours: 3
    },   
    {
        id: "CS364",
        name: "Information Retrieval",
        creditHours: 3
    },   
    {
        id: "CS365",
        name: "Systems Analysis and Design",
        creditHours: 3
    },   
    {
        id: "CS371",
        name: "Bioinformatics",
        creditHours: 3
    },   
    {
        id: "CS430",
        name: "Virtual and Augmented Reality",
        creditHours: 3
    },   
    {
        id: "CS432",
        name: "Scientific Visualization",
        creditHours: 3
    },   
    {
        id: "CS439",
        name: "Computer Animation",
        creditHours: 3
    },   
    {
        id: "CS450",
        name: "Operations Optimization",
        creditHours: 3
    },   
    {
        id: "CS457",
        name: "Decision Support Systems and Intelligent Systems",
        creditHours: 3
    },
    {
        id: "CS458",
        name: "Wireless Networks",
        creditHours: 3
    },
    {
        id: "CS460",
        name: "Data Mining",
        creditHours: 3
    },
    {
        id: "CS462",
        name: "Database Design",
        creditHours: 3
    },
    {
        id: "CS481",
        name: "Special Topics in Computer Graphics",
        creditHours: 3
    },
    {
        id: "CS482",
        name: "Special Topics in Software Engineering",
        creditHours: 3
    },
    {
        id: "CS484",
        name: "Special Topics in Database Technologies and Applications",
        creditHours: 3
    },
    {
        id: "CS489",
        name: "Special Topics in Algorithms",
        creditHours: 3
    },
    {
        id: "CS4512",
        name: "Natural Language Processing",
        creditHours: 3
    },
    {
        id: "CS4811",
        name: "Special Topics in Data Science Technologies and Applications",
        creditHours: 3
    },
    {
        id: "CS4831",
        name: "Special Topics in Applied Computer Science",
        creditHours: 1
    },
    {
        id: "CS4832",
        name: "Special Topics in Applied Computer Science",
        creditHours: 2
    },
    {
        id: "CS4833",
        name: "Special Topics in Applied Computer Science",
        creditHours: 3
    }
];

// mearged code.
document.querySelectorAll(".course").forEach(courseDOM => {
    let courseObj = courses.find(courseObj => courseObj.id === courseDOM.id);
    document.getElementById(courseDOM.id).innerHTML += `
        <p class="courseInfo" id="${courseObj.id}"><i class="fa-sharp fa-solid fa-info fa-fade"></i></p>
        <p class="courseCode" id="${courseObj.id}">${courseObj.id}</p>
        <p class="courseName" id="${courseObj.id}">${courseObj.name}</p>
        <p class="requisiteArrow" id="requisiteArrow-${courseObj.id}"></p>
        <p class="creditHours" id="${courseObj.id}">${courseObj.creditHours} Cr Hr</p>
        <div class="courseModal"></div>
    `;
});

document.querySelectorAll(".dropdownContent").forEach(option => {
    generalTrackElectives.forEach(courseObj => {
        option.innerHTML += `
            <div class="electiveOption" id="${courseObj.id}">
                <p class="electiveOptionCode" id="${courseObj.id}">${courseObj.id}</p>                                            
                <p class="electiveOptionName" id="${courseObj.id}">${courseObj.name}</p>
                <p class="electiveOptionCreditHours" id="${courseObj.id}">${courseObj.creditHours} Cr Hr</p>
            </div>
        `;
    })
});

document.querySelectorAll(".electiveOption").forEach(option => {
    option.addEventListener("click", event => {
        console.log(event.target.id);
        if (event.target.id === "clearElective") {
            let electiveContentDOM = event.target.closest(".electiveCourse").querySelector(".electiveContent");
            electiveContentDOM.innerHTML = `<p class="defaultElective">Select Program Elective</p>`;
            event.target.closest(".electiveCourse").querySelector(".dropdownButton").innerHTML = `
                <p class="dropdownArrow"><i class="fa-solid fa-chevron-up"></i></p>
            `;

        } else {
            let electiveCourseObj = generalTrackElectives.find(courseObj => courseObj.id === event.target.id);
            console.log('Selected elective course object:', electiveCourseObj);
            let electiveContentDOM = event.target.closest(".electiveCourse").querySelector(".electiveContent");
            electiveContentDOM.innerHTML = ``;
            electiveContentDOM.innerHTML += ` 
                <p>-</p>                                       
                <p class="courseName" id="${electiveCourseObj.id}">${electiveCourseObj.name}</p>
                <p class="creditHours" id="${electiveCourseObj.id}">${electiveCourseObj.creditHours} Cr Hr</p>
            `;
            event.target.closest(".electiveCourse").querySelector(".dropdownButton").innerHTML = `
                <p class="programElectiveCode" id="${electiveCourseObj.id}">${electiveCourseObj.id}</p><p class="dropdownArrow"><i class="fa-solid fa-chevron-up"></i></p>
            `;
        }
    });
});

document.querySelectorAll(".courseInfo").forEach(infoButton => {
    infoButton.addEventListener('click', event => {
        let courseObj = courses.find(courseObj => courseObj.id === infoButton.id);
        let courseModal = event.target.closest('.course').querySelector('.courseModal');
        console.log(courseModal);
        if (courseModal.style.display === "block")
            courseModal.style.display = "none";
        else
            courseModal.style.display = "block";
        
        if (courseObj.id === "CS116") {
            courseModal.innerHTML = `
            <div class="courseModalHeader">CS116 Course Details</div>
                                        <div class="courseModalInfo">
                                            <div class="modalLabel"><b>Course Delivery Method: </b>Face-To-Face (F2F)</div>
                                            <p class="courseDescription">Basic computer skills, programming concepts, algorithms, variables and data types; arithmetic, logical,
relational, Boolean, and assignment operators; simple input and output statements, selection structures,
loop structures, single and multidimensional arrays, character strings, functions, data structures, pointers,
input/output file operations.</p>
                                            <div class="modalLabel"><b>Credit Hours: </b>3</div>
                                            <table class="contactHoursTable">
                                                <tr><th colspan="2" class="tableHeader">Contact Hours</th></tr>
                                                <tr class="contactHourType"><th>Lecture</th><th>Practical</th></tr>
                                                <tr><td>3</td><td>0</td></tr>
                                                <tr><td colspan="2" class="tableFooter"><b>Total: </b>3</td></tr>
                                            </table>
                                        </div>
            `   
        } else {
            courseModal.innerHTML = `
            <div class="courseModalHeader">[courseCode] Course Details</div>
            <div class="courseModalInfo">
                <div class="modalLabel"><b>Course Delivery Method: </b>[deliveryMethod]</div>
                <p class="courseDescription">[courseDescription]</p>
                <div class="modalLabel"><b>Credit Hours: </b>[creditHour]</div>
                <table class="contactHoursTable">
                    <tr><th colspan="2" class="tableHeader">Contact Hours</th></tr>
                    <tr class="contactHourType"><th>Lecture</th><th>Practical</th></tr>
                    <tr><td>[lectureHours]</td><td>[practicalHours]</td></tr>
                    <tr><td colspan="2" class="tableFooter"><b>Total: </b>[contactHours]</td></tr>
                 </table>
            </div>
        `;
        }
    })
});

let courseID;
let postReqIds = [];
let preReqIds = [];
let preReqSequence = [];

document.querySelectorAll('.course').forEach(courseDOM => {
    courseDOM.addEventListener('mouseover', event => {
        courseID = event.target.id;

        colorPostReqs(courseID);
        colorPreReqs(courseID);
        colorPreReqSequence(preReqSequence);

        if (co.has(courseID)) {
            document.getElementById(co.get(courseID)).classList.add('coReqCourse');
            document.getElementById("requisiteArrow-" + co.get(courseID)).innerHTML = `<i class="fa-solid fa-chevron-up fa-bounce"></i>`;
        }

    });
});

document.querySelectorAll('.course').forEach(courseDOM => {
    courseDOM.addEventListener('mouseout', event => {
        courseID = event.target.id;

        resetPostReqs();
        resetPreReqs();
        resetPreReqSequence();

            if (co.has(courseID)) {
                document.getElementById(co.get(courseID)).classList.remove('coReqCourse');
                document.getElementById("requisiteArrow-" + co.get(courseID)).innerHTML = ``;
            }
    });
});

function getGraphLocation(courseID) {
    let l = 0;
    for (let i = 0; i < allCourses.length; i++) {
        if (allCourses[i].match(courseID)) {
            //console.log("l = " + l);
            return i;
        }
        l++;
    }
    //console.log("l = -1");
    return -1;
}

function getPostReqs(courseID) {
    let row = getGraphLocation(courseID);
    if (row == -1) {
        console.log('Course isn\'t exist in graph getPost');
        return;
    }

    for (let column = 0; column < allCourses.length; column++) {
        if (graph[row][column] !== "") {
            postReqIds.push(graph[row][column]);
            getPostReqs(graph[row][column]);
        }
    }
}

function colorPostReqs(courseID) {
    getPostReqs(courseID);
    for (let i = 0; i < postReqIds.length; i++) {
        document.getElementById(postReqIds[i]).classList.add('postReqSequence');
        document.getElementById("requisiteArrow-" + postReqIds[i]).innerHTML = `<i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-angle-right"></i>`;
    }
}

function getPreReqs(courseID) {
    let column = getGraphLocation(courseID);
    if (column == -1) {
        console.log('Course doesn\'t exist in graph getPre');
        return;
    }
    for (let row = 0; row < allCourses.length; row++) {
        if (graph[row][column] !== "") {
            preReqIds.push(allCourses[row]);
        }
    }
}
function colorPreReqs(courseID) {
    getPreReqs(courseID);
    for (let i = 0; i < preReqIds.length; i++) {
        document.getElementById(preReqIds[i]).classList.add('preReqCourse');
        document.getElementById("requisiteArrow-" + preReqIds[i]).innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
    }
}

function getPreReqSequence(courseID) {
    let column = getGraphLocation(courseID);
    if (column == -1) {
        console.log('Course isn\'t exist in graph getDPR');
        return;
    }
    for (let row = 0; row < allCourses.length; row++) {
        if (graph[row][column] !== "") {
            preReqSequence.push(allCourses[row]);
            getPreReqSequence(allCourses[row]);
        }
    }
}

function colorPreReqSequence() {
    for (let i = 0; i < preReqIds.length; i++) {
        getPreReqSequence(preReqIds[i]);
    }

    for (let i = 0; i < preReqSequence.length; i++) {
        if (contains(preReqIds, preReqSequence[i]) == false) {
            document.getElementById(preReqSequence[i]).classList.add('preReqSequence');
            document.getElementById("requisiteArrow-" + preReqSequence[i]).innerHTML = `<i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-arrow-left"></i>`;
        }
    }
}

function resetPostReqs() {
    for (let i = 0; i < postReqIds.length; i++) {
        document.getElementById(postReqIds[i]).classList.remove('postReqSequence');
        document.getElementById("requisiteArrow-" + postReqIds[i]).innerHTML = '';
    }
    postReqIds.length = 0;    
}

function resetPreReqs() {
    for (let i = 0; i < preReqIds.length; i++) {
        document.getElementById(preReqIds[i]).classList.remove('preReqCourse');
        document.getElementById("requisiteArrow-" + preReqIds[i]).innerHTML = '';
    }
    preReqIds.length = 0;
}

function resetPreReqSequence() {
    for (let i = 0; i < preReqSequence.length; i++) {
        document.getElementById(preReqSequence[i]).classList.remove('preReqSequence');
        document.getElementById("requisiteArrow-" + preReqSequence[i]).innerHTML = '';
    }
    preReqSequence.length = 0;
}

let allCourses = ['ENGL1001', 'GERL101B1', 'CS116', 'CS1160', 'ARB100', 'MATH101', 'GERL102B1', 'NE101', 'MATH102', 'CS117', 'CS1170', 'CS201', 'CE212', 'CE2120', 'GERL201B1', 'CE201', 'CS222', 'CS223', 'CS263', 'EE317', 'GERL202B1', 'MILS100', 'IE0121', 'CS264', 'CS342', 'CS355', 'CS451', 'GERL301B1', 'CS323', 'CS332', 'CE352', 'CE357', 'CE3570', 'CS419', 'GERL302B1', 'ENGL1002', 'CS330', 'CS356', 'CS391', 'CS416', 'CS477', 'CS492'];
//length = 41

let co = new Map();

// Add key-value pairs to the Map
co.set('CS116', 'CS1160');
co.set('CS117', 'CS1170');
co.set('CS357', 'CS3570');
co.set('CE212', 'CE2120');
co.set('EE317', 'MATH102');
co.set('CS1160', 'CS116');
co.set('CS1170', 'CS117');
co.set('CS3570', 'CS357');
co.set('CE2120', 'CE212');
co.set('MATH102', 'EE317');


let graph =     [/*'ENGL1001', 'GERL101B1', 'CS116', 'CS1160', 'ARB100', 'MATH101', 'GERL102B1', 'NE101', 'MATH102', 'CS117', 'CS1170', 'CS201', 'CE212','CE2120', 'GERL201B1', 'CE201', 'CS222', 'CS223', 'CS263', 'EE317', 'GERL202B1', 'MILS100', 'IE0121', 'CS264', 'CS342', 'CS355', 'CS451', 'GERL301B1', 'CS323', 'CS332', 'CE352', 'CE357', 'CE3570', 'CS419', 'GERL302B1', 'ENGL1002', 'CS330', 'CS356', 'CS391', 'CS416', 'CS477', 'CS492'  */
/*'ENGL1001'*/  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ENGL1002', '', '', '', '', '', ''], // 2
/*'GERL101B1'*/ ['', '', '', '', '', '', 'GERL102B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 3
/*'CS116'*/     ['', '', '', '', '', '', '', '', '', 'CS117', 'CS1170', '', 'CE212', 'CE2120', '', '', '', 'CS223', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 4
/*'CS1160'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 5
/*'ARB100'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 6
/*'MATH101'*/   ['', '', '', '', '', '', '', '', 'MATH102', '', '', '', '', '', '', '', '', '', '', 'EE317', '', '', 'IE0121', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 7
/*'GERL102B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL201B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 8
/*'NE101'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 9
/*'MATH102'*/   ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 10
/*'CS117'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS263', '', '', '', '', 'CS264', 'CS342', 'CS355', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS477', ''], // 11
/*'CS1170'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 12
/*CS201*/       ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS222', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 12
/*CE212 */      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CE201', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 13
/*'CE2120'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 14
/*'GERL201B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL202B1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 15
/*'CE201'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CE352', 'CE357', 'CE3570', '', '', '', '', '', '', '', '', ''], // 16
/*'CS222'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS451', '', 'CS323', '', '', '', '', 'CS419', '', '', '', '', '', '', '', ''], // 17
/*'CS223'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS451', '', 'CS323', 'CS332', '', '', '', 'CS419', '', '', 'CS330', '', '', 'CS416', '', ''], // 18
/*'CS263'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS264', 'CS342', 'CS355', '', '', '', '', '', '', '', '', '', '', '', 'CS356', '', '', 'CS477', ''], // 19
/*'EE317'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'CS332', '', '', '', '', '', '', 'CS330', '', '', '', '', ''], // 20
/*'GERL202B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL301B1', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 21
/*'MILS100'*/   ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 22
/*'IE0121'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 23
/*'CS264'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 24
/*'CS342'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 25
/*'CS355'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 26
/*'CS451'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 27
/*'GERL301B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'GERL302B1', '', '', '', '', '', '', ''], // 28
/*'CS323'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 29
/*'CS332'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 30
/*'CE352'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 31
/*'CE357'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 32
/*'CE3570'*/    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 33
/*'CS419'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 34
/*'GERL302B1'*/ ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 35
/*'ENGL1002'*/  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 36
/*'CS330'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 37
/*'CS356'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 38
/*'CS391'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 39
/*'CS416'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 40
/*'CS477'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 41
/*'CS492'*/     ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], // 42
];
/*function consoleArray(A) {
    for (let i = 0; i < A.length; i++) {
        console.log(A[i] + " ");
    }
}*/

function contains(preReqIds, courseID) {
    for (let i = 0; i < preReqIds.length; i++) {
        if (courseID === preReqIds[i])
            return true;
    }
    return false;
}