class Entity extends GameObject {
    constructor({ position, velocity = { x: 0, y: 0 }, width, height, imagePath, frames = { max: 1 }, animations = {} }) {
        super({ position, width, height });

        this.velocity = velocity;
        this.image = new Image();
        this.image.src = imagePath;

        this.frames = { ...frames, current: 0, elapsed: 0 };
        this.animations = this.loadAnimations(animations);

        this.isMoving = false;
    }

    loadAnimations(animations) {
        let loadedAnimations = {};
        for (const key in animations) {
            loadedAnimations[key] = new Image();
            loadedAnimations[key].src = animations[key];
        }
        return loadedAnimations;
    }

    move(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
        this.isMoving = true;
    }

    stop() {
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.isMoving = false;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.frames.max > 1 && this.isMoving) {
            this.frames.elapsed++;
            if (this.frames.elapsed >= 5) {
                this.frames.elapsed = 0;
                this.frames.current = (this.frames.current + 1) % this.frames.max;
            }
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.frames.current * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        );
    }
}

/*

const player = new Entity({
    position: { x: 100, y: 100 },
    velocity: { x: 0, y: 0 },
    width: 48,
    height: 48,
    imagePath: "player_idle.png",
    frames: { max: 4 },  // 4 animation frames
    animations: {
        walk: "player_walk.png",
        run: "player_run.png"
    }
});

*/
