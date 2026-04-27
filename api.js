document.addEventListener("DOMContentLoaded", () => {

  const BASE_URL = "https://emojihub.yurace.pro/api";
  const app = document.getElementById("app");

  // User interface setup
  const container = document.createElement("div");
  container.style.textAlign = "center";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.marginTop = "50px";

  // Title and description
  const title = document.createElement("h1");
  title.innerText = "Christian Emoji Generator";

  const desc = document.createElement("p");
  desc.innerText = "Generate a random Christian symbol emoji";

  // Button to trigger emoji generation
  const button = document.createElement("button");
  button.innerText = "Generate Emoji";
  button.style.padding = "10px 15px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";

  // Element to display the emoji
  const output = document.createElement("div");
  output.style.fontSize = "80px";
  output.style.marginTop = "30px";

  // New element for the emoji description
  const caption = document.createElement("p");
  caption.style.fontSize = "18px";
  caption.style.marginTop = "15px";
  caption.style.color = "#070707";
  caption.style.maxWidth = "400px";
  caption.style.marginLeft = "auto";
  caption.style.marginRight = "auto";
  caption.style.lineHeight = "1.5";

  // Append elements to the container and then to the app
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(button);
  container.appendChild(output);
  container.appendChild(caption);
  app.appendChild(container);

  // Description of each emoji
  const emojiDescriptions = {
    "latin cross": "The central symbol of Christianity, representing the sacrifice and resurrection of Jesus Christ.",
    "church": "The House of God and the gathering place for the faithful to celebrate the Eucharist.",
    "dove": "Represents the Holy Spirit, often associated with peace and the Baptism of the Lord.",
    "wine": "Symbolizes the Blood of Christ shared during the Sacrament of the Holy Eucharist.",
    "fleur-de-lis": "A symbol of the Holy Trinity, often associated with the purity of the Virgin Mary.",
    "angel": "God's messengers who protect us.",
    "praying hands": "A gesture of petition, gratitude, and submission to God's will.",
    "candle": "Symbolizes Christ as the Light of the World; often used in liturgy and prayer vigils."
  };

  // Fetch all emojis from the API
  async function fetchAllEmojis() {
    const res = await fetch(`${BASE_URL}/all`);
    if (!res.ok) throw new Error("API failed");
    return await res.json();
  }

  // Whitelist of allowed emoji names (lowercase)
  const allowedNames = Object.keys(emojiDescriptions);

  // Filter API results to only include emojis with names that match allowed keywords
  function filterAllowed(data) {
    return data.filter(e => {
      const name = (e.name || "").toLowerCase();
      return allowedNames.some(allowed => name.includes(allowed));
    });
  }

  // Remove duplicates based on htmlCode, unicode, or name
  function removeDuplicates(data) {
    const seen = new Set();
    return data.filter(e => {
      const key = e.htmlCode?.[0] || e.unicode || e.name;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // Main function to generate and display emoji with description
  async function generateEmoji() {
    try {
      output.innerHTML = "Loading...";
      caption.innerText = ""; // Clear caption while loading

      const data = await fetchAllEmojis();

      let filtered = filterAllowed(data);
      filtered = removeDuplicates(filtered);

      if (filtered.length === 0) {
        output.innerHTML = "No matching emojis";
        return;
      }

      const random = filtered[Math.floor(Math.random() * filtered.length)];
      const emoji = random.htmlCode?.[0] || "❓";
      const name = random.name.toLowerCase();

      // Display the emoji
      output.innerHTML = emoji;

      // Find and display the description
      const matchingKey = allowedNames.find(key => name.includes(key));
      caption.innerText = matchingKey ? emojiDescriptions[matchingKey] : "";

    // Catch and display any errors
    } catch (err) {
      console.error(err);
      output.innerHTML = "Error loading emoji";
      caption.innerText = "";
    }
  }

  // Event button
  button.addEventListener("click", generateEmoji);

});