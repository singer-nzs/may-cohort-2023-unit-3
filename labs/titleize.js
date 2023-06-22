let aString = "Did this work?";

function capitalize(string) {
    let firstLetter = string[0];
    console.log(firstLetter);
    firstLetter = firstLetter.toUpperCase();
    let restOfWord = string.slice(1).toLowerCase();
    let fullWord = firstLetter + restOfWord;
    return(fullWord);
};


function titleize(string) {
    let x = string.split(" ");
    console.log(x);
    let y = x.map(capitalize);
    console.log(y.join(" "));
};

titleize(aString);