const groceries = [
    "Apples",
    "Bananas",
    "Carrots",
    "Bread",
    "Milk",
    "Eggs",
    "Chicken",
    "Rice",
    "Pasta",
    "Tomatoes"
];

const groceryInput = document.getElementById('groceryInput');
const dropdownList = document.getElementById('dropdownList');


function populateDropdown() {
    dropdownList.innerHTML = '';

    groceries.forEach((item) => {
        const div = document.createElement('div');
        div.textContent = item;
        div.className = 'dropdown-item';
        div.addEventListener('click', () => {
            groceryInput.value = item;
            dropdownList.style.display = 'none';
        });
        dropdownList.appendChild(div);
    });

      
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    }
    
   
    dropdownIcon.addEventListener('click', populateDropdown);
    
    document.addEventListener('click', (event) => {
        if (!groceryInput.contains(event.target) && !dropdownIcon.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    });
    
