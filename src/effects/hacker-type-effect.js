function apply_this_effect_on(element) { // Create function with element as the parameter
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Declare constant variable for storing letters
    let interval = null; // Declare local variable, that will be used later, for storing interval-process ID
    for (let i = 0; i < document.querySelectorAll(element).length; i++) {
        document.querySelectorAll(element)[i].dataset.value = document.querySelectorAll(element)[i].innerText; // Store the original value of the element to data-value
    }

    document.querySelectorAll(element).forEach(e => {
        e.onmouseover = event => { // Create event onmouseover on element
            let iteration = 0; // Declare local variable
            clearInterval(interval); // Clear the previous interval-process before run the new interval-process.

            interval = setInterval(() => { // Run this function every 20 ms interval and return as intervalID
                event.target.innerText = event.target.innerText 
                    .split("") // Split the innerText into an array
                    .map((letter, index) => { // iterating over the array
                        if(index < iteration) { // If the position of the letter is less than the interval then:
                            return event.target.dataset.value[index]; // Use the original character
                        }
                        return letters[Math.floor(Math.random() * letters.length)] // Use the random character
                    }).join(""); // Join the array to become string

                if(iteration >= event.target.dataset.value.length){ // Set the max iteration count to the length of the word
                    clearInterval(interval); // End this interval-process
                }
                iteration += 1 / 3; // Set the iteration per letter
            }, 20);
        }

    })
}

setTimeout(() => {
    apply_this_effect_on("a"); // Call the function
    apply_this_effect_on(".apply-hacker-type-effect"); // Call the function
}, 500);
