let currentIndex = 0;
const flashcard = document.getElementById('flashcard');
const categoryEl = document.getElementById('card-category');
const questionEl = document.getElementById('card-question');
const answerEl = document.getElementById('card-answer');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const detailsBtn = document.getElementById('details-btn');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeModal = document.getElementById('close-modal');
const modalText = document.getElementById('modal-text');

function renderCard(index) {
    flashcard.classList.remove('flipped');
    setTimeout(() => {
        const item = flashcardsData[index];
        categoryEl.textContent = item.category;
        questionEl.textContent = item.question;
        answerEl.textContent = item.answer;
        const total = flashcardsData.length;
        progressText.textContent = `${index + 1} / ${total}`;
        progressFill.style.width = `${((index + 1) / total) * 100}%`;
    }, 150);
}

flashcard.addEventListener('click', (e) => {
    if (e.target.id === 'details-btn') return;
    flashcard.classList.toggle('flipped');
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCard(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcardsData.length - 1) {
        currentIndex++;
        renderCard(currentIndex);
    }
});

detailsBtn.addEventListener('click', () => {
    modalText.textContent = flashcardsData[currentIndex].details;
    modalBackdrop.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        modalBackdrop.style.display = 'none';
    }
});

renderCard(currentIndex);