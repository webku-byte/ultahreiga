function getQueryParam(name) {
    const query = window.location.search.substring(1); // Get the query string without '?'
    const vars = query.split('&'); // Split by '&' to get key-value pairs
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('='); // Split each pair by '='
        if (pair[0] === name) {
            return decodeURIComponent(pair[1]); // Decode and return the value
        }
    }
    return null; // Return null if the parameter is not found
}

function displayGreeting() {
    // Get the 'name' parameter
    const name = getQueryParam('name');
    
    // Get the greeting element
    const greetingElement = document.getElementById('greeting');
    
    // Update the greeting text
    if (name) {
        greetingElement.textContent = `Halo, ${name}!`;
    } else {
        greetingElement.textContent = 'Halo!!';
    }
}
