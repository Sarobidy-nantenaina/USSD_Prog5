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
                console.log('MVOLA');
                mvolaMenu();
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
                suivanteMenuYas();
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

const suivanteMenuYas = () => {
    const rl = createReadlineInterface();
    console.log('8. Mon identité');
    console.log('9. Configurer mon mobile');
    console.log('0. Page precedente');
    console.log('00. Quitter');

    rl.question('Entrez votre choix : ', (choix) => {
        switch (choix) {
            case '8':
                console.log('Mon identité sélectionné');
                suivanteMenuYas();
                break;
            case '9':
                console.log('Configurer mon mobile sélectionné');
                suivanteMenuYas();
                break;
            case '0':
                console.log('Page précédente sélectionnée');
                menuYas();
                break;
            case '00':
                console.log('Quitter...');
                rl.close();
                return;
            default:
                console.log('Choix invalide, veuillez réessayer.');
                suivanteMenuYas();
                break;
        }
    }); 
};

const mvolaMenu = () => {
    const rl = createReadlineInterface();
    console.log(' MVOLA');
    console.log('1. Acheter Credit ou Offre Yas');
    console.log('2. transferer argent (vers toute destination)');
    console.log('3. MVOLA Credit ou Epargne');
    console.log('4. Retraite d\'argent');
    console.log('#. Page suivante');
    console.log('00. Quitter');

    rl.question('Entrez votre choix : ', (choix) => {
        switch (choix) {
            case '1':
                console.log('Acheter Credit ou Offre Yas');
                mvolaMenu();
                break;
            case '2':
                console.log('transferer argent (vers toute destination)');
                mvolaMenu();
                break;
            case '3':
                console.log('MVOLA Credit ou Epargne');
                mvolaMenu();
                break;
            case '4':
                console.log('Retraite d\'argent');
                mvolaMenu();
                break;
            case '#':
                console.log('Page suivante');
                mvolaMenuSuivante();
                break;
            case '00':
                console.log('Quitter...');
                rl.close();
                return;
            default:
                console.log('Choix invalide, veuillez réessayer.');
                mvolaMenu();
                break;
        }    
    });
};

const mvolaMenuSuivante = () => {
    const rl = createReadlineInterface();
    console.log(' MVOLA');
    console.log('5. Paiement de Facture & Partenaire');
    console.log('6. Mon Compte');
    console.log('7. Recevoir de l\'argent');
    console.log('8. Banque et Micro-finances');
    console.log('*. Page precedente');
    console.log('**. Menu principal');
    console.log('00. Quitter');


    rl.question('Entrez votre choix : ', (choix) => {
        switch (choix) {
            case '5':
                console.log('Paiement de Facture & Partenaire');
                mvolaMenuSuivante();
                break;
            case '6':
                console.log('Mon Compte');
                mvolaMenuSuivante();
                break;
            case '7':
                console.log('Recevoir de l\'argent');
                mvolaMenuSuivante();
                break;
            case '8':
                console.log('Banque et Micro-finances');
                mvolaMenuSuivante();
                break;
            case '*':
                console.log('Page precedente');                
                mvolaMenu();
                break;
            case '**':
                console.log('Menu principal');
                menuYas();
                break;
            case '00':
                console.log('Quitter...');
                rl.close();
                return;
            default:
                console.log('Choix invalide, veuillez réessayer.');
                mvolaMenuSuivante();
                break;
        }    
    });
    
};

codeMenu();
