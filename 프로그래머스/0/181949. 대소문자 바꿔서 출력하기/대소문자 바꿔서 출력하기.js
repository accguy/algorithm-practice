const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const isUpper = (x) => {
    if(x === x.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    arr = input[0].split('').map(x => isUpper(x) ? 
    x.toLowerCase(): x.toUpperCase());
    let str = '';
    arr.forEach(x => str += x)
    console.log(str);
});