
// Function to toggle visibility of additional options
function toggleOptions(optionNumber) {
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');

    // Hide all additional options first
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";


    // Display the selected option's additional fields and add 'active' class
    if (optionNumber === 1) {
        option1.style.display = "block"; 
    } else if (optionNumber === 2) {
        option2.style.display = "block";
    } else if (optionNumber === 3) {
        option3.style.display = "block";
    }

    // Update total based on the selected option
    calculateTotal();
}

// Function to calculate total price
function calculateTotal() {
    const oneUnitPrice = 10.00;
    const twoUnitPrice = 18.00;
    const threeUnitPrice = 24.00;

    let total = 0;

    const oneUnit = document.getElementById('oneUnit').checked;
    const twoUnit = document.getElementById('twoUnit').checked;
    const threeUnit = document.getElementById('threeUnit').checked;

    if (oneUnit) {
        total = oneUnitPrice;
    } else if (twoUnit) {
        total = twoUnitPrice;
    } else if (threeUnit) {
        total = threeUnitPrice;
    }

    document.getElementById('total').textContent = `$${total.toFixed(2)} USD`;
}

// To add active class to cliked div
const boxes = document.querySelectorAll('.option');

boxes.forEach(function(box) {
    box.addEventListener('click', function(e) {
        // Stop the click event from bubbling up to the children
        e.stopPropagation();
        
        // Remove the 'active' class from all boxes
        boxes.forEach(function(b) {
            b.classList.remove('active');
        });

        // Add the 'active' class only to the clicked parent div
        box.classList.add('active');
    });
});
