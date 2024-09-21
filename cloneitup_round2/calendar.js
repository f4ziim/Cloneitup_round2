document.querySelectorAll('.day-selector').forEach(function(element) {
    element.addEventListener('click', function() {
        // Remove active class from all other day-selectors
        document.querySelectorAll('.day-selector').forEach(function(el) {
            el.classList.remove('bg-indigo-600', 'text-white');
            el.classList.add('text-black');
            // Reset the number color
            const numberSpan = el.querySelector('span:nth-of-type(2)');
            numberSpan.classList.remove('text-white'); 
            numberSpan.classList.add('text-black'); 
        });
        
        // Add active class to the clicked element
        this.classList.add('bg-indigo-600', 'text-white');
        this.classList.remove('text-black');
        // Set number to white
        const activeNumberSpan = this.querySelector('span:nth-of-type(2)');
        activeNumberSpan.classList.add('text-white'); 
        activeNumberSpan.classList.remove('text-black'); 
    });
});

