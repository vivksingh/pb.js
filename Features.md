## Structure

### **Base Classes**

1. **`GameObject`** → Base for all objects (e.g., Sprites, Tiles, etc.)
2. **`Entity`** (extends `GameObject`) → Movable objects (e.g., Player, NPCs)
3. **`Tile`** (extends `GameObject`) → Static objects (e.g., collision tiles, triggers)
4. **`Scene`** → Represents the game world for a level

### **Specialized Classes**

1. **`TriggerTile`** (extends `Tile`) → Triggers events on collision
2. **`Sprite`** (extends `Entity`) → Handles rendering and animation
3. **`Player`** (extends `Sprite`) → Controls the player character
4. **`NPC`** (extends `Sprite`) → Handles AI/movement logic
5. **`SceneManager`** → Manages scene transitions
6. **`UIElement`** → Base for UI elements like text, buttons, etc.
7. **`MessageBox`** (extends `UIElement`) → Displays messages
8. **`SceneTitle`** (extends `UIElement`) → Displays scene title

## **`GameObject` (Base Class for All Objects)**

### **🔹 Responsibilities:**

- Represents **anything that exists in the game world** (background, entities, objects).
- Stores **position, size**, and handles basic rendering.

### **🛠 Key Functions:**

- `draw()`: Placeholder method to be overridden in subclasses.

## **`Entity` (Base Class for Moving Objects)**

### **🔹 Responsibilities:**

- Represents **any moving/interacting character or object**.
- Stores **velocity, animations, and movement logic**.

### **🛠 Key Functions:**

- `move()`: Updates position based on velocity.
- `draw()`: Handles sprite rendering.

## **`Player` (Playable Character)**

### **🔹 Responsibilities:**

- Handles **player-specific controls & camera focus**.
- Stores **animation states** and movement logic.

### **🛠 Key Functions:**

- `handleInput()`: Listens for keyboard input.
- `update()`: Moves player and updates animation.

## **`NPC` (Non-Playable Characters)**

### **🔹 Responsibilities:**

- Represents **friendly or enemy characters** that move/interact.
- Handles **dialogue, AI movement, and event triggers**.

### **🛠 Key Functions:**

- `startConversation()`: Triggers dialogue.
- `update()`: Moves NPC based on behavior.

## **`TriggerTile` (Special Tiles for Events)**

### **🔹 Responsibilities:**

- **Triggers events when the player steps on it**.
- Can be used for **cutscenes, level transitions, or NPC dialogue triggers**.

### **🛠 Key Functions:**

- `triggerEvent()`: Calls a function when activated.

## **`Scene` (Manages the Game World)**

### **🔹 Responsibilities:**

- **Loads and manages everything in a level** (background, player, entities, triggers).
- **Checks for collisions & interactions**.

### **🛠 Key Functions:**

- `checkTriggers()`: Checks if the player stepped on an event tile.
- `draw()`: Draws all objects in the scene.

## **`TransitionManager` (Handles Scene Transitions)**

### **🔹 Responsibilities:**

- Creates **fade-in and fade-out effects** for smooth scene transitions.

### **🛠 Key Functions:**

- `startTransition()`: Begins transition effect.
- `update()`: Adjusts opacity over time.

### **ConversationManager**

- **Responsibility**: Handles in-game conversations and dialogue flow.
- **Functions**:
    - `startConversation(npc)` - Begins a dialogue sequence.
    - `nextMessage()` - Moves to the next dialogue message.
    - `isConversationActive()` - Checks if a conversation is ongoing.

GameObject (Base)
│
├── Background (Static Scenery)
│
├── Entity (Moving Objects)
│   ├── Player (Controlled by User)
│   ├── NPC (Friendly/Enemy Characters)
│    |— Projectile

 |
├── TriggerTile (Triggers Events)
│
└── Scene (Manages Everything in a Level)