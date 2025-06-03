class Bird{
    fly(){
        return "flying.................";
    }
}
class Penguin extends Bird{
    fly() {
        return "penguins can't fly..............";
    }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());