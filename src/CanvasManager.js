class CanvasManager {
    static canvas = null;
    static context = null;

    static initialize({ width, height }) {
        if (!CanvasManager.canvas) {
            CanvasManager.canvas = document.createElement("canvas");
            CanvasManager.canvas.width = width;
            CanvasManager.canvas.height = height;
            document.body.appendChild(CanvasManager.canvas);
            CanvasManager.context = CanvasManager.canvas.getContext("2d");
        }
    }

    static getContext() {
        return CanvasManager.context;
    }
}
