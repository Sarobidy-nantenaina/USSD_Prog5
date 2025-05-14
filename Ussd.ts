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
            menuYas();
        } else {
            console.log('Code is incorrect');
        }
    });
};


const menuYas = () => {
    const rl = createReadlineInterface();
    console.log('--- Yas et Moi ---');
    console.log('1. MVOLA');
    console.log('2. Rappelle moi');
    console.log('3. SOS Credit');
    console.log('4. Service Yas');
    console.log('5. Promotion');
    console.log('6. Produit et Divertissement');
    console.log('7. Banque et Micro-finances');
    console.log('0. Page suivante');
    console.log('00. Quitter');

    rl.question('Entrez votre choix : ', (choix) => {
        switch (choix) {
            case '1':
                console.log('MVOLA sélectionné');
                 menuYas();
                break;
            case '2':
                console.log('Rappelle-moi sélectionné');
                menuYas();
                break;
            case '3':
                console.log('SOS Crédit sélectionné');
                menuYas();
                break;
            case '4':
                console.log('Service Yas sélectionné');
                menuYas();
                break;
            case '5':
                console.log('Promotion sélectionnée');
                menuYas();
                break;
            case '6':
                console.log('Produit et Divertissement sélectionné');
                break;
            case '7':
                console.log('Banque et Micro-finances sélectionnée');
                menuYas();
                break;
            case '0':
                console.log('Page suivante sélectionnée');
                break;
            case '00':
                console.log('Quitter...');
                rl.close();
                return;
            default:
                console.log('Choix invalide, veuillez réessayer.');
                menuYas();
                break;
        }
    });
};

codeMenu();
