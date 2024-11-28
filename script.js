const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question, index) => {
  question.addEventListener('click', () => {
    // Close all other FAQ items
    faqItems.forEach((item) => {
      if (item !== faqItems[index]) {
        item.classList.remove('active');
      }
    });

    // Toggle the clicked FAQ item
    faqItems[index].classList.toggle('active');
  });
});