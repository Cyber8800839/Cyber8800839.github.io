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
  title.innerText = "Christian Emoji Selector";

  const desc = document.createElement("p");
  desc.innerText = "Select a Christian symbol emoji";

  // Create the Dropdown
  const select = document.createElement("select");
  select.style.padding = "10px";
  select.style.fontSize = "16px";
  select.style.cursor = "pointer";

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
  container.appendChild(select);
  container.appendChild(output);
  container.appendChild(caption);
  app.appendChild(container);

  // Description of each emoji
  const emojiDescriptions = {
    "latin cross": "The central symbol of Christianity, representing the sacrifice and resurrection of Jesus Christ.",
    "church": "The House of God and the gathering place for the faithful to celebrate the Eucharist.",
    "dove": "Represents the Holy Spirit, often associated with peace and the Baptism of the Lord.",
    "wine": "The Blood of Christ shared during the Sacrament of the Holy Eucharist.",
    "fleur-de-lis": "A symbol of the Holy Trinity, often associated with the purity of the Virgin Mary.",
    "angel": "God's messengers who protect us.",
    "praying hands": "A gesture of petition, gratitude, and submission to God's will.",
    "candle": "Symbolizes Christ as the Light of the World; often used in liturgy and prayer vigils."
  };


  // Whitelist of allowed emoji names (lowercase)
  const allowedNames = Object.keys(emojiDescriptions);
  let emojiData = []; // To store the filtered emoji data

  /// Fetch and filter emoji data from the API, then populate the dropdown
  async function init() {
    try {
      const res = await fetch(`${BASE_URL}/all`);
      const data = await res.json();

      const seen = new Set();
      emojiData = data.filter(e => {
        const name = (e.name || "").toLowerCase();
        const key = e.htmlCode?.[0];
        const isAllowed = allowedNames.some(allowed => name.includes(allowed));
        if (isAllowed && !seen.has(key)) {
          seen.add(key);
          return true;
        }
        return false;
      });

      // Add a placeholder option at the top of the dropdown
      const placeholder = document.createElement("option");
      placeholder.text = "-- Choose a symbol --";
      placeholder.value = "";
      select.appendChild(placeholder);

      // Populate dropdown options
      emojiData.forEach((emojiObj, index) => {
        const option = document.createElement("option");
        option.value = index; // The index connects the dropdown to the data
        option.text = emojiObj.name.charAt(0).toUpperCase() + emojiObj.name.slice(1);
        select.appendChild(option);
      });

    } catch (err) {
      desc.innerText = "Error loading symbols.";
    }
  }
  // ---------------------------------------

  // Event listener for dropdown changes
  select.addEventListener("change", (e) => {
    const selectedIndex = e.target.value;
    
    // Clear display if placeholder is selected
    if (selectedIndex === "") {
      output.innerHTML = "";
      caption.innerText = "";
      return;
    }

    // Get emoji from data using the dropdown index
    const selectedEmoji = emojiData[selectedIndex];
    const name = selectedEmoji.name.toLowerCase();

    output.innerHTML = selectedEmoji.htmlCode?.[0] || "❓";

    const matchingKey = allowedNames.find(key => name.includes(key));
    caption.innerText = matchingKey ? emojiDescriptions[matchingKey] : "";
  });

  // Initialize the app
  init();
});