/* 
! Classes
    - Introduced in 2015
    - A function that helps us create objects
    - Defines a category of objects

    Base Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }

        methodName() {
        ...code block
        }
    }

    * new keywords: class, this, constructor, new
*/
 // 1  2
class Item {
//      3              4
    constructor(name, desc, price) {
//       5     6     7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Keyword to establish what type of "function".
    2. The Name of our class. Should be Pascal Case.
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameter four our constructed object. Established the values of the new object.
    5. "this" keyword established the context of THIS specific object.
    6. The name of a key to our new object.
        - "Item" has 3 keys being constructed.
    7. The value for those keys (referenced by the parameter)
*/

//* Instantiating Classes
class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
console.log('ONE: ', one);

let itemZero = new Item();
console.log(itemZero); // onject with undefined values within each key.

let itemOne = new Item('beans', 'canned', 0.89);
console.log(itemOne);

// letbrokenItem = Item();
//console.log(brokenItem); //Class constructor Item cannot be invoked without 'new' keyword

//* Factory Functions
let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);

//* Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; //making a default value for this key.
    }
//         1          2
    addToInventory(newItem) {
//           3           4
        this.items.push(newItem);
        console.log("Item Added!")
    }
}

/* 
    1. Establish a name for the method.
    2. requiring a parameter for an argument to pass through
    3. "this" keyword being use to reference the specific object before the method.
    4. pushing the argument into the items array.
*/

// 5
let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn', 'canned', .79);

// 6
dryGoods.addToInventory(itemOne);
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

//* Factory Methods
class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale *.25);
        return new Expense(wholesale, upcharge);
    }
    // ^^^ only reachable within the class itself.

    constructor(w, s) {
        this.purchased_price = w;
        this.sell_at = s;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
itemToSell.addTax(.075);
console.log(itemToSell);