const entrees = ['Choisir...', 'Salade', 'Escargots', 'Soupe'];
const repas = ['Choisir...', 'Spaghetti', 'Lasagne', 'Boeuf'];
const prixEntrees = [0, 5, 7, 3];
const prixRepas = [0, 10, 15, 20];


function chargerPlats() {
    let taille = entrees.length;
    let elem = document.getElementById('entrees');
    let choix = 'Choisir...';
    for (let i = 0; i < taille; i++) {
        let node = document.createElement('LI');
        let textnode = document.createTextNode(entrees[i]);
        if (entrees[i] == choix) {
            node.setAttribute("data-selected", true);
        }
        node.appendChild(textnode);
        node.classList.add('mdl-menu__item');
        elem.appendChild(node);
    }

    taille = repas.length;
    elem = document.getElementById('repas');
    for (let i = 0;i < taille;i++){
        let node = document.createElement('LI');
        let textnode = document.createTextNode(repas[i]);
        if (entrees[i] == choix){
            node.setAttribute("data-selected", true);
        }
        node.appendChild(textnode);
        node.classList.add('mdl-menu__item');
        elem.appendChild(node);
    }
}

function chargerEntree() {

    let elem = document.getElementById('sample4');
    let conteneur = document.getElementById('selectdiv1');
    let choix = elem.value;
    switch (choix) {
        case 'Salade':
            conteneur.style.backgroundImage = 'url(images/salad.jpg)';
            break;
        case 'Escargots':
            conteneur.style.backgroundImage = 'url(images/snails.jpg)';
            break;
        case 'Soupe':
            conteneur.style.backgroundImage = 'url(images/soup.jpg)';
            break;
        default:
            conteneur.style.backgroundImage = 'url(images/entrees.jpg)';
        break;
    }
}

function chargerRepas() {
    let elem = document.getElementById('sample5');
    let conteneur = document.getElementById('selectdiv2');
    let choix = elem.value;
    switch(choix){
        case 'Spaghetti':
            conteneur.style.backgroundImage = 'url(images/spaghetti.jpg)';
            break;
            case 'Lasagne':
            conteneur.style.backgroundImage = 'url(images/lasagna.jpg)';
            break;
            case 'Boeuf':
            conteneur.style.backgroundImage = 'url(images/beef.jpg)';
            break;
            default:
            conteneur.style.backgroundImage = 'url(images/burger.jpg)';
            break;

    }
}

function updateTable() {
    let index = 0;
    let elem1 = document.getElementById('sample4');
    let elem2 = document.getElementById('sample5');
    let nomEntree = document.getElementById('nomEntree');
    let prixEntree = document.getElementById('prixEntree');
    let nomRepas = document.getElementById('nomRepas');
    let prixPlat = document.getElementById('prixRepas');
    entrees.forEach(element => {
        if (element == elem1.value){
            index = entrees.indexOf(element);
            nomEntree.textContent = entrees[index];
            prixEntree.textContent = '$ ' + prixEntrees[index];
        }
    });

    prixEntree = prixEntrees[index];

    repas.forEach(element => {
        if (element == elem2.value){
            index = repas.indexOf(element);
            nomRepas.textContent = repas[index];
            prixPlat.textContent = '$ ' + prixRepas[index];
        }
    });

    prixPlat = prixRepas[index];
    let sous_total = prixEntree + prixPlat;
    let taxes = sous_total * 0.14975;
    let total = sous_total + taxes;

    document.getElementById('sous-total').textContent = '$ ' + sous_total;
    document.getElementById('taxes').textContent = '$ ' + taxes.toFixed(2);
    document.getElementById('total').textContent = '$ ' + total.toFixed(2);

}