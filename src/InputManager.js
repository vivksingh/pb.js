class InputManager {
    constructor() {
        this.bindings = {}; // Stores key-action-function mappings
        this.activeKeys = new Set(); // Tracks pressed keys

        // Event Listeners
        window.addEventListener("keydown", (event) => this.handleKeyDown(event));
        window.addEventListener("keyup", (event) => this.handleKeyUp(event));
    }

    registerInput(key, action, callback) {
        this.bindings[action] = { key, callback };
    }

    unregisterInput(action) {
        delete this.bindings[action];
    }

    handleKeyDown(event) {
        for (const action in this.bindings) {
            const { key, callback } = this.bindings[action];
            if (event.key === key && !this.activeKeys.has(key)) {
                this.activeKeys.add(key);
                callback();
            }
        }
    }

    handleKeyUp(event) {
        this.activeKeys.delete(event.key);
    }
}

// // Usage Example:
// const inputManager = new InputManager();
// inputManager.registerInput("ArrowUp", "moveUp", () => player.move(0, -1));
// inputManager.registerInput("ArrowDown", "moveDown", () => player.move(0, 1));
// inputManager.registerInput("Enter", "interact", () => player.interact());
