function cake(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let size = width * height;

    let total = 0

    while (size >= total) {
        let current = input[index];
        index++;
        if (current === "STOP") {
            break;
        }
        let piece = Number(current);
        total += piece;
    }
    if (total > size) {
        let difference = total - size;
        console.log(`No more cake left! You need ${Math.abs(difference)} pieces more.`);
    } else {
        let left = size - total;
        console.log(`${Math.abs(left)} pieces are left.`);
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"]);
