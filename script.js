
let multipliDiEntrambi = 0;
let multipliDiTre = 0;
let multipliDiCinque = 0;



for (let i = 1; i <= 100; i++){

    if (i % 3 === 0 && i % 5 === 0){
        console.log (i + " FizzBuzz");
        multipliDiEntrambi ++;

    }
    else if (i % 3 === 0){
        console.log (i + " Fizz");
        multipliDiTre ++;
        
    }

    else if (i % 5 === 0 ){
        console.log (i + " Buzz");
        multipliDiCinque ++;

    }

    else {
        console.log (`${i} non è divisibile ne per 3 ne per 5`);
    }   
}

console.log ("Ci sono " + multipliDiEntrambi + " multipli sia di 3 che di 5");
console.log ("Ci sono " + multipliDiTre + " multipli di 3");
console.log ("Ci sono " + multipliDiCinque + " multipli di 5");
    