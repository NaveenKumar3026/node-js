const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function bmi(w, h){
    return (w/(h*h));
}

function calc(){
    rl.question('Enter your weight: ', w =>{
        rl.question('Enter your height: ', h =>{
            let BMI = bmi(w, h);
            if(BMI>=0 && BMI<18.5) console.log('Under category');
            else if(BMI>=18.5 && BMI<25) console.log('Normal')
            else if(BMI>=25 && BMI<30) console.log('Overweight');
            else console.log('Obese');
            rl.close();
        })
    })
}
calc();