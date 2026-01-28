// sum of even numbers from 51 to 85 using for loop

let sum = 0;

for (let i = 51; i <= 85; i++){
    if(i%2===0){
        sum+=i;
    }
}
console.log(sum);