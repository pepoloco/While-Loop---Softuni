function oldLibraby(input) {

    let favBook = input[0];

    let index = 1;
    let newBook = input[index];


    let booksIsFound = false;

    let checkedBooks = 0; // counter za kolko knigi sme proverili.

    while (newBook !== "No More Books") {
        checkedBooks++;
        if (newBook === favBook) {
            booksIsFound = true;
            break;
        } else {
            booksIsFound = false;
        }
        index++;
        newBook = input[index];

    }
    if (booksIsFound === true) {
        console.log(`You checked ${checkedBooks - 1} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }


}
oldLibraby(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);