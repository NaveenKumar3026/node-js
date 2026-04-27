const calc = require('./index4_4.js');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number 1: ', a => {
    rl.question('Enter number 2: ', b =>{
        rl.question("Enter operator(+, -, *, /) and other chars to exit: ", op =>{
            switch(op){
                case '+':
                    console.log(calc.add(a,b));
                    break;
                case '-':
                    console.log(calc.sub(a,b));
                    break;
                case '*':
                    console.log(calc.mul(a,b));
                    break;
                case '/':
                    console.log(calc.div(a,b));
                    break;
                default:
                    console.log('Invalid option');
            }
            rl.close();
        })
    })
})