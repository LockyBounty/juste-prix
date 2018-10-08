let min = 20;
let max = 80;

let aleatoire = ()=> {
    let i = Math.floor(Math.random() * ((max + 1) - min) + min);
    return i;
}

let check = ()=> {
    let prixEntree;
    let prix = aleatoire();
    let count = 0;
    while(prixEntree !== prix) {
        prixEntree = prompt(`Entrez un nombre entre 20 et 80 !\nTentatives : ${count}/6`);
        if(prixEntree < prix) {
            alert(`C'EST PLUS !`);
        } else if(prixEntree > prix) {
            alert(`C'EST MOINS !`);

        } else {
            break;
        }
        count++;
        if (count>6){
            break;
        }

    }
    if (count>6){
        confirm(`Lamentable, vous n'avez pas pu trouver en 6 coups...`);
    } else {
    confirm(`Exact, vous avez trouvé en ${count} coups`);}
}

check();
