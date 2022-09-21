function loop(input) {

let name = input[0]; // Imeto - Gosho 
let grades = 1; // Purvi klas 
let index = 0; // indeksa za ocenki 
let sum = 0; // suma na ocenkite
let excluded = 0; // counter za negativni ocenki
let averageGrade = 0; //sredna ocenka 

while(grades <= 12 ){ // dokato klasovete sa po-malko ot 12;
    index++; //indeks za ocenkite ++;
    let grade = Number(input[index]); // ocenkite se promenqt;
    
    if (grade >= 4.00){ // ako ocenkaata e po-golqma ot 4.00 / dobavqm kum obshtata suma ocenkite
        sum+=grade;
        grades++;
    }else {
        excluded++; // ako ocenkat e pod 4 , dobavqm negativni ocenki 
        if (excluded > 1){ // ako negativnata ocenta e poveche ot 1 me izkluchvat ot uchilishte i spiram programata
            console.log(`${name} has been excluded at ${grades} grade`);
            break;
        }    
    }
    averageGrade = sum / 12; // ako ne sa ni izkluchili obshtat suma ot polojitelnite ocenki q delim na klasovete;
    }
    if (excluded <= 1){ 
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
