
$("#submitButton").click( function () {
    //declare variables
    var nAssignments = parseInt($('#Assignments').val())
    var nProjects = parseInt($('#Projects').val())
    var nQuizzez = parseInt($('#Quiz').val())
    var nExams = parseInt($('#exam').val())
    var nIntex = parseInt($('#INTEX').val())
    var pFinalGrade = nAssignments + nProjects + nQuizzez + nExams + nIntex
    var sGrade = 'A'
    if ((nAssignments <= 0 || nProjects <= 0 || nQuizzez <= 0 || nExams <= 0 || nIntex <= 0) || (nAssignments > 100 || nProjects > 100 || nQuizzez > 100 || nExams > 100 || nIntex > 100)) {
        alert("You must use a number between 1-100")
    }
    else {
        //determine if numbers were used in all variables
        if (Number.isInteger(nAssignments) == true && Number.isInteger(nProjects) == true && Number.isInteger(nQuizzez) == true && Number.isInteger(nExams) == true && Number.isInteger(nIntex) == true) {
            //if all categories have a variable then assign a final grade letter based on score
            nAssignment = nAssignments * .5
            nProjects = nProjects * .1
            nQuizzez = nQuizzez * .1
            nExams = nExams * .2
            nIntex = nIntex * .1
            pFinalGrade = nAssignments + nProjects + nQuizzez + nExams + nIntex
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


            //output the results
            alert("Assignments" + nAssignments + ", " +
                "Group Projects: " + nProjects + ", " +
                "Quizes: " + nQuizzez + ", " +
                "Exams: " + nExams + "," +
                "Intex: " + nIntex + ", " + "Final Grade: " + sGrade)
        }
        //if a category was missing a grade this message will display
        else {
            alert("You did not enter a number in one of the fields")
        }
    }
});