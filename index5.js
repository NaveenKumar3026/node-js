const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name: ', (name)=>{
    rl.question('Enter the age: ', (age)=>{
        rl.question('Enter the city: ',(city)=>{
            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
            console.log(`City: ${city}`);
            rl.close();
        })
    })
})