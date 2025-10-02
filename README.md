 One Piece Random Character Generator  

## 📌 Overview  
This project is a **randomized message generator** built in JavaScript.  
Every time you run the program, it will create a new **One Piece inspired character description** by combining randomized elements such as:  

- **Category** (Pirate, Marine, Bounty Hunter, Holy Knight)  
- **Race** (Human, Fish-Man, Lunarian, etc.)  
- **Devil Fruit** (Sand, Sun God, Magma, etc.)  
- **Intention** (Money, Power, Revenge, the One Piece, etc.)  

The result is a unique character profile each time you execute the code.  

---

## 🛠 How It Works  
1. Each category (faction, race, devil fruit, intention) is stored in an array.  
2. A helper function `selectRandomWord()` chooses a random index from any given array.  
3. The `createMessage()` function assembles a sentence by picking one random element from each category.  
4. The generated character description is printed to the console.  

## 🚀 How to Run
1. Save the code in a file, for example: onepiece.js.
2. Open a terminal and run: node onepiece.js
3. Each run will generate a new random character.

## 📖 Footer

Created by **Oliver Antonio Soto Merán**.
This project was developed according to the requirements of **the Back-End Engineering Path from Codecademy**.

