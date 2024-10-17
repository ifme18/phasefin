// Fetching emoji data from the db.json file
function fetchEmojis() {
  return fetch('https://ifme18.github.io/jsonfile/db.json')  // Fetch the emoji data from the JSON file
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching emoji data:', error));
}

// Get a random emoji from the selected category
function getRandomEmoji(emojis, category) {
  const selectedEmojis = emojis[category]; // Access the selected category's emoji array
  const randomIndex = Math.floor(Math.random() * selectedEmojis.length);
  return selectedEmojis[randomIndex].emoji; // Return the emoji property
}

// Render the emoji in the emojiContainer
function renderEmoji(emoji) {
  const emojiContainer = document.getElementById('emojiContainer');
  emojiContainer.textContent = emoji;
}

// Render the whole list of emojis in a container
function renderEmojiList(emojis) {
  const emojiListContainer = document.getElementById('emojiListContainer');
  emojiListContainer.innerHTML = '';

  emojis.forEach(item => {
    const emojiItem = document.createElement('span');
    emojiItem.textContent = item.emoji;  // Use item.emoji to access the emoji
    emojiItem.style.margin = '5px';
    emojiItem.style.fontSize = '2rem';
    emojiListContainer.appendChild(emojiItem);
  });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Event listener for mouseover to change the theme for the whole html file
  document.addEventListener('mouseover', () => {
    document.body.classList.add('purple-theme');
  });

  document.addEventListener('mouseout', () => {
    document.body.classList.remove('purple-theme');
  });

  // Event listener for the button click to get a random emoji
  document.getElementById('randomEmojiBtn').addEventListener('click', () => {
    const category = document.getElementById('categorySelect').value;

    fetchEmojis().then((emojis) => {
      const randomEmoji = getRandomEmoji(emojis, category);
      renderEmoji(randomEmoji);  // Display the random emoji
      renderEmojiList(emojis[category]);  // Display the entire list of emojis for the selected category
    });
  });
});
