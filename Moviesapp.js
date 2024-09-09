document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector(".movies");
    
    // Deleting a movie
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const li = e.target.closest('li'); // Get the closest <li> element
            li.remove(); // Remove the specific <li> element
        }
    });

    // Adding a movie
    const addform = document.querySelector(".addmovie"); // Target form by class
    addform.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the input value
        const value = addform.querySelector('input[type="text"]').value.trim();
        
        // Check if input is not empty
        if (value === "") return;

        // Create elements
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deletebtn = document.createElement('button');

        // Add text content
        movieName.textContent = value;
        deletebtn.textContent = 'delete';

        // Add classes
        movieName.classList.add('name');
        deletebtn.classList.add('delete');

        // Append to DOM
        li.appendChild(movieName);
        li.appendChild(deletebtn);
        list.appendChild(li);

        // Clear the input field after adding the movie
        addform.querySelector('input[type="text"]').value = "";
    });
});
