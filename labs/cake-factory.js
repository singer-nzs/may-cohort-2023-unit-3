class Cake {
    constructor(flavor, icing, decoration) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
    };
    describe() {
        console.log(this.flavor, this.icing, this.decoration);
    };

    eat(slice) {
        console.log(this.flavor, slice)
    }
}

let chocolateCake = new Cake('chocolate', 'caramel', 'sprinkles');

let coconutCake = new Cake('vanilla', 'whipped-topping', 'dried-coconut');

let redVelvetCake = new Cake('red-velvet-chocolate', 'cream-cheese', 'cake-crumble');

let blackForestCake= new Cake('dark-chocolate', 'vanilla', 'dark-cherries');

chocolateCake.describe();
coconutCake.describe();
redVelvetCake.describe();
blackForestCake.describe();

coconutCake.eat();