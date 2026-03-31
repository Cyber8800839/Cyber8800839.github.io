// Initialize an object to track character frequencies
const charCounts = {};
// The specific character and count for the style change rule
const targetChar = 'g';
const targetCount = 3;
// Create stylesheet 
const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
const styleSheet = styleElement.sheet;
// Ask the browser to call the `eventHandler` function anytime a key is released.
window.addEventListener("keyup", eventHandler);
// Define the behavior for that `eventHandler` function.
function eventHandler(event) {
    // Use event.key to get the specific character/key pressed
    const key = event.key; 
    // Update the count for any character pressed
    charCounts[key] = (charCounts[key] || 0) + 1;

    // Log counts to the console using a for loop
    console.clear(); // Clear the console for a clean view of current counts
    for (const char in charCounts) {
        console.log(`'${char}' count: ${charCounts[char]}`);
    }

    // Apply special rules based on the count
    if (key === targetChar && charCounts[key] >= targetCount) {
        triggerSpecialRules();
    }
}
// Trigger function for special rules
function triggerSpecialRules() {
     // Insert rule for body background
    styleSheet.insertRule(
        "body { background-color: #8f774c; }",
        styleSheet.cssRules.length
    );

    // Insert rule for <strong> elements
    styleSheet.insertRule(
        "strong { color: #9c9992; }",
        styleSheet.cssRules.length
    );

    console.log("Special rules triggered!");
}