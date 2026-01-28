// sum of odd numbers from 81 to 131 using while loop

function sumOfOdd(nFrom, nTo){
    let sum = 0;
    while (nFrom<=nTo){
        if(nFrom%2===1){
            sum+=nFrom;
        }
        nFrom++;
    }
    return sum;
}

console.log(sumOfOdd(81, 131));