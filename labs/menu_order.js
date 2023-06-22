let menu = {
    burger: 5.55,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,
    order (orderPlaced) {
        let orderSplit = orderPlaced.split(' ');
            sum = 0;
        for (x of orderSplit) {
            sum+=menu[x];
        }
        console.log(sum);
    }
}

menu.order("burger fries shake");