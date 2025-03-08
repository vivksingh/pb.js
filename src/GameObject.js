class GameObject {
    constructor({ position, width = 48, height = 48 }) {
        this.position = position;
        this.width = width;
        this.height = height;
    }

    draw() {
        // Placeholder - each subclass should implement its own draw method.
    }

    update() {
        // Placeholder - entities like players will override this.
    }
}