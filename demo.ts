interface Point {
    x: number;
    y: number;
}

function tsDemo(data: Point) {
    console.log('123')
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({x: 1, y: 123})
