const noteArea = document.getElementById("noteArea");

// Load saved notes from localStorage
noteArea.value = localStorage.getItem("notes") || "";  // Default to an empty string if no notes

// Save notes in real-time
noteArea.addEventListener("input", () => {
    localStorage.setItem("notes", noteArea.value);  // Save notes every time the user types
});
