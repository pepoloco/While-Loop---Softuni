function movingOut(input) {


    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let totalFreeSpace = width * length * height;

    let data = input[index];

    while (data != "Done") {
        totalFreeSpace -= data;
        if (data === "Done") {
            console.log(`${totalFreeSpace} Cubic meters left.`);
            break;
        }
        if (totalFreeSpace <= 0) {
            break;
        }
        index++;
        data = input[index];
    }
    let result = Math.abs(totalFreeSpace);
    if (totalFreeSpace > 0) {
        console.log(`${result} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${result} Cubic meters more.`);
    }
}
movingOut(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);