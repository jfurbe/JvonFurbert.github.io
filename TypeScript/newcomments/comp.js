const randomFloor = Math.floor(Math.random() * 3) + 1;

var twoEggDrop = function(n, b=1, count=0) {
    let half = Math.ceil((n-b)/2);
    console.log(n, b, count, randomFloor);
    if(half == randomFloor){ return count }
    if(half <= randomFloor) {return twoEggDrop(n, half, count+1)}
    if(half > randomFloor) {return twoEggDrop(half-1, b, count+1 )}
};

console.log(twoEggDrop(3));