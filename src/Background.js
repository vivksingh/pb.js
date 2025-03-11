class Background extends GameObject {
    constructor({ imagePath, position = { x: 0, y: 0 } }) {
        super(position); // Call GameObject constructor
        this.image = new Image();
        this.image.src = imagePath;

        this.width = 0; // Will be set after image loads
        this.height = 0;

        this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
        };
    }

    draw() {
        if (!CanvasManager.context) {
            console.error("CanvasManager is not initialized.");
            return;
        }

        const ctx = CanvasManager.getContext();
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}
