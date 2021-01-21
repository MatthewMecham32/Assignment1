var submit = document.getElementById("SubmitButton");

submit.addEventListener("click", function () {

    var nAssignments = document.getElementById('Assignments').value *.5
    var nProjects = document.getElementById('Projects').value * .1
    var nQuizzez = document.getElementById('Quiz').value * .1
    var nExams = document.getElementById('exam').value * .2
    var nIntex = document.getElementById('INTEX').value * .1
    var pFinalGrade = nAssignments + nProjects + nQuizzez + nExams + nIntex
    var sGrade = 'A'
    if (pFinalGrade >= 94) {
        sGrade = 'A'
    }
    else if (pFinalGrade >= 90) {
        sGrade = 'A-'
    }
    else if (pFinalGrade >= 87) {
        sGrade = 'B+'
    }
    else if (pFinalGrade >= 84) {
        sGrade = 'B'
    }
    else if (pFinalGrade >= 80) {
        sGrade = 'B-'
    }
    else if (pFinalGrade >= 77) {
        sGrade = 'C+'
    }
    else if (pFinalGrade >= 74) {
        sGrade = 'C'
    }
    else if (pFinalGrade >= 70) {
        sGrade = 'C-'
    }
    else if (pFinalGrade >= 67) {
        sGrade = 'D+'
    }
    else if (pFinalGrade >= 64) {
        sGrade = 'D'
    }
    else if (pFinalGrade >= 60) {
        sGrade = 'A-'
    }
    else if (pFinalGrade >= 90) {
        sGrade = 'D-'
    }
    else {
        sGrade = 'E'
    }



    alert("Assignments" + nAssignments + ", " +
        "Group Projects: " + nProjects + ", " +
        "Quizes: " + nQuizzez + ", " +
        "Exams: " + nExams + "," +
        "Intex: " + nIntex + ", " + "Final Grade: " + sGrade)
});