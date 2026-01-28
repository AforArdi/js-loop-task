// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let n = 2;

while (n<=100){
    if (Number.isInteger(Math.sqrt(n))){
        console.log('Square number found', n);
        break;
    }
    n++;
}