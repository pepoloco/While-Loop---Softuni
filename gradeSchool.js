function loop(input) {

    let name = input[0];
    let index = 0;
    let excluded = 0;
    let averageGrade = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade >= 4.00) {
            sum += grade;
            grades++;
        } else {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
        }
        averageGrade = sum / 12;
    }
    if (excluded <= 1) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }

}
loop(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);
