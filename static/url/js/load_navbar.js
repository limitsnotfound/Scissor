
document.addEventListener('DOMContentLoaded', function() {
    // The path to your separate navigation bar HTML file
    const navbarPath = '/static/url/components/navbar.html';
    
    // The element on your main pages where the navbar will be placed
    const navbarContainer = document.getElementById('nav-container');

    if (navbarContainer) {
        fetch(navbarPath)
            .then(response => {
                // Check if the request was successful (status 200)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Inject the fetched HTML into the container
                navbarContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading the navigation bar:', error);
                navbarContainer.innerHTML = '<p>Error loading navigation.</p>';
            });
    }
});



