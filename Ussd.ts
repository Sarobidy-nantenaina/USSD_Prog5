import * as readline from 'readline';

const createReadlineInterface = () => readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const codeMenu = () => {
    const valideCode = '#111#';
    const rl = createReadlineInterface();
    rl.question('Enter the code: ', (inputCode) => {
        if (valideCode === inputCode) {
            console.log('Code is correct');
        } else {
            console.log('Code is incorrect');
        }
        rl.close();
    });
}

codeMenu();
