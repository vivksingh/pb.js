class Entity extends GameObject {
    constructor({ position, width, height, imagePath, frames = { max: 1 }, animations = {} }) {
        super({ position, width, height });

        this.image = new Image();
        this.image.src = imagePath;
        this.frames = { ...frames, current: 0, elapsed: 0 };
        this.animations = this.loadAnimations(animations);
    }

    loadAnimations(animations) {
        let loadedAnimations = {};
        for (const key in animations) {
            loadedAnimations[key] = new Image();
            loadedAnimations[key].src = animations[key];
        }
        return loadedAnimations;
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
