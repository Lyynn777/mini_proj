const budgetForm = document.getElementById("budgetForm");
const budgetList = document.getElementById("budgetList");
const totalAmount = document.getElementById("totalAmount");

let total = parseFloat(localStorage.getItem("total")) || 0;  // Load total from localStorage if available
let budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];  // Load budget items from localStorage

// Function to update the UI with budget items and total
function updateUI() {
    budgetList.innerHTML = '';  // Clear the current list
    budgetItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name}: $${item.amount.toFixed(2)}`;
        budgetList.appendChild(listItem);
    });
    totalAmount.textContent = total.toFixed(2);
}

// Handle form submission
budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (item && amount) {
        // Add to list
        const newItem = { name: item, amount: amount };
        budgetItems.push(newItem);
        total += amount;

        // Save to localStorage
        localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
        localStorage.setItem("total", total.toString());

        // Update UI
        updateUI();

        // Clear inputs
        budgetForm.reset();
    }
});

// Initial UI update
updateUI();
