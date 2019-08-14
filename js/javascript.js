const entrees = ['Choisir...', 'Salade', 'Escargots', 'Soupe'];
const repas = ['Choisir...', 'Spaghetti', 'Lasagne', 'Boeuf'];

function chargerPlats() {
    let taille = entrees.length;
    let elem = document.getElementById('entrees');
    let choix = 'Choisir...';
    for (let i = 0;i < taille;i++){
        let node = document.createElement('LI');
        let textnode = document.createTextNode(entrees[i]);
        if (entrees[i] == choix) {
            node.setAttribute("data-selected", true);
        }
        node.appendChild(textnode);
        node.classList.add('mdl-menu__item');
        elem.appendChild(node);
    }
}

function chargerImage(){
    
    let elem = document.getElementById('sample4');
    let conteneur = document.getElementById('selectdiv1');
    choix = elem.value;
    switch(choix){
        case 'Salade':
            conteneur.style.backgroundImage = 'url(images/salad.jpg)';
            break;
        default:break;
    }
}