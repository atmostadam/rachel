import { drawFilledRectangle } from "https://atmostadam.github.io/game-library/util/DrawingUtils.js";

/**
 * This class is our Drawing and Animation implementation using the
 * Animation Frame Game Loop Design Pattern. This class handles drawing
 * flow of control for the entire game.
 * 
 * @see https://atmostadam.com/doc/index.html
 */
export class RachelsGameLoop {
    constructor() {
        // Ignore constructor() for now. This will be covered in a future lesson.
    }

    update(tick) {
        // Ignore update(tick) for now. This will be covered in a future lesson.
    }

    draw() {
        drawFilledRectangle("green", 100, 100, 100, 100);
    }
}