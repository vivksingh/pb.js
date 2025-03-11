class Player extends Entity {
    constructor({ position, width, height, imagePath, frames = { max: 1 }, animations = {} }) {
        super({ position, width, height, imagePath, frames, animations });

        this.actions = {}; // Store dynamically added actions
    }

    addAction(name, actionFunction) {
        this.actions[name] = actionFunction;
    }

    performAction(name, ...args) {
        if (this.actions[name]) {
            this.actions[name](...args);
        } else {
            console.warn(`Action '${name}' is not defined.`);
        }
    }

    update() {
        this.draw(); // Default update method (draw the player)
    }
}





// const player = new Player({
//     position: { x: 100, y: 100 },
//     width: 48,
//     height: 48,
//     imagePath: "player_idle.png",
//     frames: { max: 4 },
//     animations: {
//         walk: "player_walk.png",
//         jump: "player_jump.png"
//     },
//     attributes: {
//         health: 100,
//         speed: 5
//     }
// });

// // Adding new attributes dynamically
// player.addAttribute("stamina", 50);
// console.log(player.getAttribute("stamina")); // 50

// // Updating attributes dynamically
// player.updateAttribute("health", 90);
// console.log(player.getAttribute("health")); // 90

// // Adding dynamic movement action
// player.addAction("move", (direction) => {
//     const speed = player.getAttribute("speed") || 1;
//     switch (direction) {
//         case "up":
//             player.position.y -= speed;
//             break;
//         case "down":
//             player.position.y += speed;
//             break;
//         case "left":
//             player.position.x -= speed;
//             break;
//         case "right":
//             player.position.x += speed;
//             break;
//     }
// });

// // Adding a jump action
// player.addAction("jump", () => {
//     console.log("Jumping!");
//     player.image = player.animations.jump;
// });

// // Executing actions dynamically
// player.performAction("move", "right"); // Moves right by speed
// player.performAction("jump"); // Switches to jump animation
