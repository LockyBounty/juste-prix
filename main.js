let min = 20;
let max = 80;
let prix = 0;
let count = 0;

let aleatoire = () => {
    let i = Math.floor(Math.random() * ((max + 1) - min) + min);
    return i;
}

let generer = () => {
    prix = aleatoire();
    document.querySelector('.grosBoutton').style.display = "none";
    document.querySelector('.champ').style.display = "block";
    document.querySelector('.boutonConfirme').style.display = "block";
}

let check = () => {
    let prixEntree = document.querySelector('.champ').value;
    if (prixEntree < prix) {
        count++;
        document.querySelector('.plus').style.display = "block";
        document.querySelector('.moin').style.display = "none";
    } else if (prixEntree > prix) {
        count++;     
        document.querySelector('.moin').style.display = "block";
        document.querySelector('.plus').style.display = "none";
    } else if (prixEntree === prix) {
        count++;
        document.querySelector('.text').innerHTML = "(`Exact, vous avez trouvé en ${count} coups`)";
    } else {
        document.querySelector('.text').innerHTML = "(`Lamentable, vous n'avez pas pu trouver en 6 coups...`)";
    }
}

document.querySelector('.grosBoutton').addEventListener('click', generer);

document.querySelector('.boutonConfirme').addEventListener('click', check);
