let abc = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r,','s','t','u','v','w','x','y','z'
];

let pulledLetters = [];

const findLetter = () => {
    let num = Math.floor(Math.random() * abc.length - 1);
    let returnedLtr = abc[num];
    // console.log(num);
    // return `Coming from findLetter function`
    abc.splice(num,1);

    pulledLetters.push(returnedLtr);

    return returnedLtr.toUpperCase();
}

function getLetter() {
    let ltr = findLetter()

    let res = `Your letter is ${ltr}. \nHere are the pulled letters: ${pulledLetters}. \n Here is what remains: ${abc}.`;

    return res
}