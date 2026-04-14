document.addEventListener("DOMContentLoaded", function() {
    // Select all collapsible headers
    var headers = document.querySelectorAll(".collapsible-header");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            // Toggle 'active' class for styling the header
            this.classList.toggle("active");

            // Get the content sibling
            var content = this.nextElementSibling;
            
            // Toggle max-height for smooth transition
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapsed
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expanded
            }
        });
    });
});