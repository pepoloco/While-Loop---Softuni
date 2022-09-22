function examPrep(input) {

    let badGradeCounter = 0;
    let index = 0;
    let badGrades = Number(input[index]); // loshi ocenki
    index++;
    let command = input[index];
    index++;
    let sum = 0;
    let countProblem = 0;
    let taskName = "";
    let booleanFlag = false;

    while (command !== "Enough") {
        taskName = command;
        let tempGrade = Number(input[index]);
        index++;
        sum += tempGrade;
        countProblem++;
        if (tempGrade <= 4.00) {
            badGradeCounter++;
            if (badGradeCounter === badGrades) {
                booleanFlag = true
                break;
            }
        }

        command = input[index];
        index++;
    }

    let avgScore = sum / countProblem;
    if (booleanFlag) {
        console.log(`You need a break, ${badGradeCounter} poor grades.`);

    } else {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countProblem}`);
        console.log(`Last problem: ${taskName}`);
    }


}
examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "SpringTime",
    "5",
    "Bus",
    "6",
    "Enough"]);