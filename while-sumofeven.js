// sum of all the even numbers from 206 to 311
function sumOfEven(nFrom, nTo){
    let sum = 0;
    while(nFrom<=nTo){
        if(nFrom%2===0){
            sum+=nFrom;
        }
        nFrom++;
    }
    return sum;
}
console.log(sumOfEven(206, 311));