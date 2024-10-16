// Fetching emoji data from the db.json file
function fetchEmojis() {
    return fetch('db.json')  // Fetch the emoji data from the JSON file
      .then((response) => response.json())  // Convert the response to JSON
      .catch((error) => console.error('Error fetching emoji data:', error));
  }
  
  // Get a random emoji from the selected category
  function getRandomEmoji(emojis, category) {
    const selectedEmojis = emojis[category];  // Get emojis from the selected category
    const randomIndex = Math.floor(Math.random() * selectedEmojis.length);
    return selectedEmojis[randomIndex];  // Return a random emoji from the category
  }
  
  // Render the emoji in the emojiContainer
  function renderEmoji(emoji) {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.textContent = emoji;  // Display the emoji in the container
  }
  
  // Render the whole list of emojis in a container
  function renderEmojiList(emojis) {
    const emojiListContainer = document.getElementById('emojiListContainer');
    emojiListContainer.innerHTML = '';  // Clear previous list
    
    emojis.forEach(emoji => {
      const emojiItem = document.createElement('span');  // Create a span for each emoji
      emojiItem.textContent = emoji;
      emojiItem.style.margin = '5px';  // Add some spacing between emojis
      emojiItem.style.fontSize = '2rem';  // Make emojis larger
      emojiListContainer.appendChild(emojiItem);  // Append the emoji to the container
    });
  }
  
  // Event listener for the button click to get a random emoji
  document.getElementById('randomEmojiBtn').addEventListener('click', () => {
    const category = document.getElementById('categorySelect').value;  // Get selected category
  
    fetchEmojis().then((emojis) => {
      const randomEmoji = getRandomEmoji(emojis, category);  // Get a random emoji
      renderEmoji(randomEmoji);  // Display the emoji
      renderEmojiList(emojis[category]);  // Display the entire list of emojis for the selected category
    });
  });
  
  