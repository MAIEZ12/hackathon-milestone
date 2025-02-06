// Show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Show bio by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('bio');
});
