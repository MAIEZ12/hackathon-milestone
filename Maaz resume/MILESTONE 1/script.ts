
// Show the selected section
function showSection(sectionId: string): void {
    // Hide all sections
    const sections = document.querySelectorAll<HTMLElement>('.resume-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection instanceof HTMLElement) {
        selectedSection.style.display = 'block';
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

// Show bio by default when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showSection('bio');
});
