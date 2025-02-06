// Show the selected section
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.resume-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection instanceof HTMLElement) {
        selectedSection.style.display = 'block';
    }
    else {
        console.error("Section with id \"".concat(sectionId, "\" not found."));
    }
}
// Show bio by default when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    showSection('bio');
});
