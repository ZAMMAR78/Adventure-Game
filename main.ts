import inquirer from "inquirer";

class Hero {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}

(async () => {
    let Player = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Please enter your name'
        }
    ]);
    let opponent = await inquirer.prompt([
        {
            name: 'select',
            type: 'list',
            message: 'Select your opponent',
            choices: ["Skeleton", "Alien", "Zombie"]
        }
    ]);

    let h1 = new Hero(Player.name);
    let o1 = new Opponent(opponent.select);

    do {
        if (opponent.select == 'Skeleton') {
            let ask = await inquirer.prompt([
                {
                    name: "opt",
                    type: "list",
                    message: "what would u like to do?",
                    choices: ["Attack", "Drink potion", "Run for your life"]
                }
            ]);
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    h1.fuelDecrease();
                    console.log(`${h1.name} fuel is ${h1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${h1.name} fuel is ${h1.fuel}`);
                    console.log(`${o1.name} fuel is ${o1.fuel}`);
                }

            }
            if (ask.opt == "Drink potion") {
                h1.fuelIncrease();
                console.log(`You Drink Health potion you fuel is ${h1.fuel}`);
            }
            if (ask.opt == "Run for your life") {
                console.log("You lose, better luck next time");
                break; 
            }
            else if (opponent.select == 'Alien') {
                
            }

            
        }
    }
    while (true); // You might want to consider adding a condition to exit the loop
})();
