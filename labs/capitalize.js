function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    let restOfWord = string.slice(1).toLowerCase();
    console.log(restOfWord);
    let fullWord = firstLetter + restOfWord;
/*     console.log(firstLetter.toUpperCase());
    console.log(restOfWord.toLowerCase()); */
    console.log(fullWord);
}

capitalize('string');
capitalize('friend');
capitalize('animal');
capitalize('dinner');