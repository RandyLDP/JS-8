const big = function(number){

    if (number > 100){
        return true;
    }   return false;
    };
console.log(big(99));
console.log(big(101));

const Brenda = function (maxNumber, current, age){
    if (maxNumber >= 200){
       return "it's to busy now, come back later";
    };
    if  (current <= 200){
        return "come in";
    };
    if (age <18){
        return "this club is for adults";
    };
}
console.log(Brenda(203, 90, 17));
console.log(Brenda(190, 90, 18));
console.log(Brenda(120, 290, 17));

const grades = [30, 35, 100, 98, 33];
let total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
let avg = total / grades.length;
console.log(avg);
