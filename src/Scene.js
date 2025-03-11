class Scene {
    constructor({ background, entities = [], foreground, collisionBoundaries = [], triggerTiles = [], title = "", conversationManager }) {
        this.background = background;
        this.entities = entities;  // Includes player, NPCs, objects, etc.
        this.foreground = foreground;
        this.collisionBoundaries = collisionBoundaries;
        this.triggerTiles = triggerTiles;
        this.title = new SceneTitle({ text: title });
        this.conversationManager = conversationManager;
    }

    draw() {
        this.background.draw();

        // Draw all entities (Player, NPCs, Objects, etc.)
        this.entities.forEach(entity => entity.draw());

        if (this.foreground) this.foreground.draw();
        if(this.title) this.title.draw();

        // Draw conversations if active
        if (this.conversationManager && this.conversationManager.isActive()) {
            this.conversationManager.draw();
        }
    }

    checkTriggers() {
        for (let tile of this.triggerTiles) {
            if (Utility.isColliding({ player: this.getPlayer(), boundary: tile })) {
                tile.triggerEvent();
                return;
            }
        }
    }

    drawTriggers() {
        this.triggerTiles.forEach(tile => tile.draw('blue'));
    }

    drawBounds() {
        this.collisionBoundaries.forEach(boundary => boundary.draw());
    }

    getPlayer() {
        return this.entities.find(entity => entity instanceof Player);
    }
}
