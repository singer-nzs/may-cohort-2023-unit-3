class Location {
    constructor(name, description) {
        this.name = name,
        this.description = description
    }
}

let home = new Location('37 Conger Ave', 'Apartment');
let sidewalk = new Location('Church Street', 'Marketplace');
let store = new Location('City Market', 'Grocery Store');

let locationCurrent = "home";

let locationLookUp = {
    'home': home,
    'sidewalk': sidewalk,
    'store': store
};

let locationStates = {
    home: ['sidewalk'],
    sidewalk: ['home', 'store'],
    store: ['sidewalk']
};

console.log(`You are at your ${locationCurrent}.`)

function moveLocation(newLocation) {
    let x = locationStates[locationCurrent];
    if(x.includes(newLocation)) {
        let locationCurrent = newLocation;
        console.log(locationLookUp(newLocation[0,1]));
    } else
        console.log(`You cannot go from ${locationCurrent} to ${newLocation}.`)
};

moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
moveLocation("store");
  // Prints 'You are in the store.'
moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
moveLocation("home");
  // Prints 'You are at your house.'
moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'