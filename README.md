🪙 Coin Toss Game






<img width="1042" height="692" alt="Screenshot 2026-10-06 at 7 52 24 PM" src="https://github.com/user-attachments/assets/c3fde04a-0298-491b-ad06-6a6d9e664935" />
Project Description

The Coin Toss Game is a simple interactive web application where the player chooses either Heads or Tails and tries to guess the result of a randomly generated coin toss.

The player's choice is sent to a Node.js server. The server randomly generates Heads or Tails, compares the result to the player's choice, and sends back whether the player won or lost.

🎮 How to Play

Open the Coin Toss Game.

Choose Heads or Tails.

Click the button to make your choice.

The computer randomly generates Heads or Tails.

If your choice matches the coin toss, you win!

If your choice does not match the coin toss, you lose!

Play again and try your luck!

🛠️ Tech Stack

HTML

HTML creates the structure of the game, including the input, button, and area where the game results are displayed.

CSS

CSS styles the game and controls the appearance of the webpage.

JavaScript

JavaScript handles the player's interaction with the game. It gets the player's choice, uses fetch() to communicate with the server, and displays the results on the webpage.

Node.js

Node.js runs the backend server. The server receives the player's choice, randomly generates Heads or Tails, determines whether the player won or lost, and sends the result back to the frontend as JSON.

💻 Download and Run on Your Machine

1. Clone the Repository

Copy the repository to your computer using:

git clone YOUR-GITHUB-REPOSITORY-LINK

2. Open the Project Folder

Move into the project folder:

cd YOUR-PROJECT-FOLDER

3. Install Dependencies

Run:

npm install

If Figlet is not already installed, run:

npm install figlet

4. Start the Server

Run:

node server.js

5. Open the Game

Open your browser and go to:

http://localhost:8000


I completed the challenge: 5
I feel good about my code: 4


