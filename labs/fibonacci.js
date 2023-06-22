let series = [0, 1];

while (series.length < 10) {
    let x = series.pop();
    let y = series.pop();
    let sum = x + y;
    series.push( x, y, sum);
};

console.log(series);