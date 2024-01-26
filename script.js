document.addEventListener('DOMContentLoaded', function () {
    // Add interactivity here

    // Example: Hover effect for project entries
    const projectEntries = document.querySelectorAll('.project');

    projectEntries.forEach(entry => {
        entry.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f2f2f2';
        });

        entry.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#fff';
        });
    });
});
