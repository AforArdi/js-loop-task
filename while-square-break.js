let n = 2;

while (n<=100){
    if (Number.isInteger(Math.sqrt(n))){
        console.log('Square number found', n);
        break;
    }
    n++;
}