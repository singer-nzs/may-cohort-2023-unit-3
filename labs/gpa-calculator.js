let grades = {
    midterm: {
        grade: 50,
        weight: 1,
    },
    project: {
        grade: 50,
        weight: 1,
    },
    final: {
        grade: 50,
        weight: 2,
    },
}

let gradeSum = 0;
let weightSum = 0;

function gpa(object) {
    gradesToWeight = Object.keys(object);
    gradesToWeight.forEach(key) {
        gradeSum = [((object * weight) + gradeSum), key];
    
    };
}