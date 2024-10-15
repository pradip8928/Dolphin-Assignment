function toggleFAQ(question) {
    const answer = question.nextElementSibling; // Select the answer element next to the question
    const toggleIcon = question.querySelector('.toggle');

    answer.classList.toggle('open'); // Toggle the open class for smooth transition

    // Change the icon based on the state
    if (answer.classList.contains('open')) {
        toggleIcon.textContent = '−'; // Change icon to minus when open
    } else {
        toggleIcon.textContent = '+'; // Change icon to plus when closed
    }
}