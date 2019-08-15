// Déclaration des plats et des prix dans des tableaux

const entrees = ['Choisir...', 'Salade', 'Escargots', 'Soupe'];
const repas = ['Choisir...', 'Spaghetti', 'Lasagne', 'Boeuf'];
const prixEntrees = [0, 5, 7, 3];
const prixRepas = [0, 10, 15, 20];

// fonction pour charger les plats de la page, invoquée au chargement du BODY (ONLOAD)
function chargerPlats() {

    // les entrées
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

    // les plats
    taille = repas.length;
    elem = document.getElementById('repas');
    for (let i = 0; i < taille; i++) {
        let node = document.createElement('LI');
        let textnode = document.createTextNode(repas[i]);
        if (entrees[i] == choix) {
            node.setAttribute("data-selected", true);
        }
        node.appendChild(textnode);
        node.classList.add('mdl-menu__item');
        elem.appendChild(node);
    }
}

//fonction pour changer l'image de l'entrée, invoquée si un changement survient (ONCHANGE)
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

//fonction pour changer l'image du plat, invoquée si un changement survient (ONCHANGE)
function chargerRepas() {
    let elem = document.getElementById('sample5');
    let conteneur = document.getElementById('selectdiv2');
    let choix = elem.value;
    switch (choix) {
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

// fonction pour mettre à jour la facture (le tableau), chargée dès qu'un changement survient (ONCHANGE)
function updateTable() {
    let index = 0;
    let elem1 = document.getElementById('sample4');
    let elem2 = document.getElementById('sample5');
    let nomEntree = document.getElementById('nomEntree');
    let prixEntree = document.getElementById('prixEntree');
    let nomRepas = document.getElementById('nomRepas');
    let prixPlat = document.getElementById('prixRepas');

    // trouve quel élément est sélectionné pour l'entrée
    entrees.forEach(element => {
        if (element == elem1.value) {
            index = entrees.indexOf(element);
            nomEntree.textContent = entrees[index];
            prixEntree.textContent = '$ ' + prixEntrees[index];
        }
    });

    prixEntree = prixEntrees[index];

    // trouve quel élément est sélectionné pour le repas principal
    repas.forEach(element => {
        if (element == elem2.value) {
            index = repas.indexOf(element);
            nomRepas.textContent = repas[index];
            prixPlat.textContent = '$ ' + prixRepas[index];
        }
    });

    prixPlat = prixRepas[index];
    let sous_total = prixEntree + prixPlat;
    let taxes = sous_total * 0.14975;
    let total = sous_total + taxes;

    //met à jour la table
    document.getElementById('sous-total').textContent = '$ ' + sous_total;
    document.getElementById('taxes').textContent = '$ ' + taxes.toFixed(2);
    document.getElementById('total').textContent = '$ ' + total.toFixed(2);

}