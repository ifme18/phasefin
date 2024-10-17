Emoji Selector Project
Description
This project is a simple web application that interacts with a public API to fetch emoji data from a db.json file hosted on a server. It has three main event listeners:

Hover Event: Detects when the mouse is hovered over the document and changes the theme from purple to white.
Select Event: Displays a list of different emoji categories when a selection is made.
Click Event: Fetches a random emoji from the selected category and displays it when the "Get a Random Emoji" button is clicked.
Additionally, the page listens to the DOMContentLoaded event to initialize the functionality once the DOM is fully loaded.

Features
Dynamic Theme Change: The theme changes between purple and white based on hover events.
Category Selection: Users can select an emoji category and view a list of emojis from that category.
Random Emoji Display: Clicking the "Get a Random Emoji" button fetches and displays a random emoji from the selected category.
JSON API Integration: Emoji data is fetched from a public API hosted on a server.
Project Structure
The following files are stored under the public/ directory:

index.html: The main HTML page for the project.
index.css: The stylesheet that manages the theme switch and overall styles.
index.js: JavaScript file containing functionality and event listeners.
Event Listeners
Hover Event: Changes the theme to purple when the mouse hovers over the document and reverts to white when the mouse leaves.

Select Event: Displays a list of emojis based on the selected category.

Click Event: Fetches and displays a random emoji from the selected category when the "Get a Random Emoji" button is clicked.


