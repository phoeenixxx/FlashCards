let currentLanguage = "js";
let currentMode = "flashcards";
let currentLevel = "beginner";
let activeUiLang = "ka";
let currentIndex = 0;

let filteredCards = [];
let quizCards = [];
let quizCurrentIndex = 0;
let quizScore = 0;

const languageScreen = document.getElementById('language-screen');
const modeScreen = document.getElementById('mode-screen');
const levelScreen = document.getElementById('level-screen');
const cardScreen = document.getElementById('card-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizResultScreen = document.getElementById('quiz-result-screen');
const flashcard = document.getElementById('flashcard');

const categoryEl = document.getElementById('card-category');
const questionEl = document.getElementById('card-question');
const answerEl = document.getElementById('card-answer');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

const quizCategoryEl = document.getElementById('quiz-card-category');
const quizQuestionTextEl = document.getElementById('quiz-question-text');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressFill = document.getElementById('quiz-progress-fill');
const quizNextBtn = document.getElementById('quiz-next-btn');
const resultScoreDisplay = document.getElementById('result-score-display');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const detailsBtn = document.getElementById('details-btn');

const backToLangBtn = document.getElementById('back-to-lang');
const backToModeBtn = document.getElementById('back-to-mode');
const backToLevelsFcBtn = document.getElementById('back-to-levels-fc');
const backToLevelsQzBtn = document.getElementById('back-to-levels-qz');

const retrySameBtn = document.getElementById('retry-same-btn');
const startNewBtn = document.getElementById('start-new-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

const modalBackdrop = document.getElementById('modal-backdrop');
const closeModal = document.getElementById('close-modal');
const modalText = document.getElementById('modal-text');

const uiTranslations = {
    ka: {
        dirTitle: "აირჩიეთ მიმართულება",
        jsDesc: "საფუძვლები, DOM API და ასინქრონული ოპერაციები",
        tsDesc: "ტიპების უსაფრთხოება და კონფიგურაცია",
        modeTitle: "აირჩიეთ რეჟიმი",
        modeFcDesc: "ისწავლეთ საკითხები ბარათების გადატრიალებით",
        modeQzDesc: "შეამოწმეთ ცოდნა 10-კითხვიან ქვიზში",
        levelTitle: "აირჩიეთ სირთულე",
        begDesc: "საწყისი დონე და ფუნდამენტური ბაზისი",
        intDesc: "საშუალო დონე და პრაქტიკული კონსტრუქციები",
        advDesc: "სიღრმისეული არქიტექტურა და ოპტიმიზაცია",
        badgeUnitCards: "ბარათი",
        badgeUnitQuestions: "კითხვა",
        hint: "დააწკაპუნეთ პასუხისთვის",
        detailsBtn: "ვრცლად განმარტება",
        modalTitle: "საკითხის დეტალური ახსნა",
        resTitle: "ქვიზის შედეგი",
        retryTitle: "იგივე კითხვები",
        newTitle: "ახალი კითხვები",
        quizNext: "შემდეგი &rarr;",
        back: "← უკან",
        menu: "← მენიუ",
        backToMenu: "← მენიუში დაბრუნება"
    },
    en: {
        dirTitle: "Select Direction",
        jsDesc: "Basics, DOM API, and Asynchronous Operations",
        tsDesc: "Type Safety and Workspace Configuration",
        modeTitle: "Select Mode",
        modeFcDesc: "Learn topics by flipping interactive cards",
        modeQzDesc: "Test your knowledge in a 10-question quiz",
        levelTitle: "Select Difficulty",
        begDesc: "Entry level structures and core foundations",
        intDesc: "Intermediate structures and practical concepts",
        advDesc: "Deep architectural setups and optimization",
        badgeUnitCards: "cards",
        badgeUnitQuestions: "questions",
        hint: "Click to reveal the answer",
        detailsBtn: "Detailed Explanation",
        modalTitle: "In-Depth Topic Analysis",
        resTitle: "Quiz Result",
        retryTitle: "Same Questions",
        newTitle: "New Questions",
        quizNext: "Next &rarr;",
        back: "← Back",
        menu: "← Menu",
        backToMenu: "← Back to Main Menu"
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateUiStrings() {
    const trans = uiTranslations[activeUiLang];
    document.getElementById('lng-dir-title').textContent = trans.dirTitle;
    document.getElementById('lng-js-desc').textContent = trans.jsDesc;
    document.getElementById('lng-ts-desc').textContent = trans.tsDesc;
    document.getElementById('lng-mode-title').textContent = trans.modeTitle;
    document.getElementById('lng-mode-fc-desc').textContent = trans.modeFcDesc;
    document.getElementById('lng-mode-qz-desc').textContent = trans.modeQzDesc;
    document.getElementById('lng-level-title').textContent = trans.levelTitle;
    document.getElementById('lng-beg-desc').textContent = trans.begDesc;
    document.getElementById('lng-int-desc').textContent = trans.intDesc;
    document.getElementById('lng-adv-desc').textContent = trans.advDesc;
    document.getElementById('lng-hint').textContent = trans.hint;
    document.getElementById('lng-modal-title').textContent = trans.modalTitle;
    document.getElementById('lng-res-title').textContent = trans.resTitle;
    document.getElementById('lng-retry-title').textContent = trans.retryTitle;
    document.getElementById('lng-new-title').textContent = trans.newTitle;
    backToMenuBtn.textContent = trans.backToMenu;
    
    quizNextBtn.innerHTML = trans.quizNext;
    detailsBtn.textContent = trans.detailsBtn;
    backToLangBtn.textContent = trans.back;
    backToModeBtn.textContent = trans.back;
    backToLevelsFcBtn.textContent = trans.menu;
    backToLevelsQzBtn.textContent = trans.menu;
    
    updateBadgeLabels();
    langToggle.textContent = activeUiLang === "ka" ? "EN" : "KA";
}

function updateBadgeLabels() {
    const trans = uiTranslations[activeUiLang];
    const badges = document.querySelectorAll('.count-badge');
    badges.forEach(b => {
        if (currentMode === "quiz") {
            b.innerHTML = `10 <span class="badge-unit">${trans.badgeUnitQuestions}</span>`;
        } else {
            b.innerHTML = `50 <span class="badge-unit">${trans.badgeUnitCards}</span>`;
        }
    });
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});

langToggle.addEventListener('click', () => {
    activeUiLang = activeUiLang === "ka" ? "en" : "ka";
    updateUiStrings();
    if (!cardScreen.classList.contains('hidden')) {
        renderCard();
    } else if (!quizScreen.classList.contains('hidden')) {
        renderQuizCard();
    }
});

document.querySelectorAll('#language-screen .menu-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.getAttribute('data-lang');
        languageScreen.classList.add('hidden');
        modeScreen.classList.remove('hidden');
    });
});

document.querySelectorAll('#mode-screen .mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentMode = btn.getAttribute('data-mode');
        updateBadgeLabels();
        modeScreen.classList.add('hidden');
        levelScreen.classList.remove('hidden');
    });
});

document.querySelectorAll('.level-row-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLevel = btn.getAttribute('data-level');
        levelScreen.classList.add('hidden');
        
        filteredCards = flashcardsData.filter(card => card.lang === currentLanguage && card.level === currentLevel);
        
        if (currentMode === "flashcards") {
            cardScreen.classList.remove('hidden');
            filteredCards = shuffleArray([...filteredCards]);
            currentIndex = 0;
            renderCard();
        } else {
            quizScreen.classList.remove('hidden');
            generateNewQuizDeck();
        }
    });
});

backToLangBtn.addEventListener('click', () => {
    modeScreen.classList.add('hidden');
    languageScreen.classList.remove('hidden');
});

backToModeBtn.addEventListener('click', () => {
    levelScreen.classList.add('hidden');
    modeScreen.classList.remove('hidden');
});

backToLevelsFcBtn.addEventListener('click', () => {
    cardScreen.classList.add('hidden');
    levelScreen.classList.remove('hidden');
});

backToLevelsQzBtn.addEventListener('click', () => {
    quizScreen.classList.add('hidden');
    levelScreen.classList.remove('hidden');
});

backToMenuBtn.addEventListener('click', () => {
    quizResultScreen.classList.add('hidden');
    languageScreen.classList.remove('hidden');
});

function renderCard() {
    flashcard.classList.remove('flipped');
    setTimeout(() => {
        const item = filteredCards[currentIndex];
        categoryEl.textContent = activeUiLang === "ka" ? item.category_ka : item.category_en;
        questionEl.textContent = activeUiLang === "ka" ? item.question_ka : item.question_en;
        answerEl.textContent = activeUiLang === "ka" ? item.answer_ka : item.answer_en;
        
        const total = filteredCards.length;
        progressText.textContent = `${currentIndex + 1} / ${total}`;
        progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
    }, 150);
}

flashcard.addEventListener('click', (e) => {
    if (e.target.id === 'details-btn') return;
    flashcard.classList.toggle('flipped');
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < filteredCards.length - 1) {
        currentIndex++;
        renderCard();
    }
});

detailsBtn.addEventListener('click', () => {
    const item = filteredCards[currentIndex];
    modalText.textContent = activeUiLang === "ka" ? item.details_ka : item.details_en;
    modalBackdrop.style.display = 'flex';
});

function generateNewQuizDeck() {
    let pool = shuffleArray([...filteredCards]);
    quizCards = pool.slice(0, 10);
    quizCurrentIndex = 0;
    quizScore = 0;
    renderQuizCard();
}

function renderQuizCard() {
    quizNextBtn.classList.add('hidden');
    const item = quizCards[quizCurrentIndex];
    
    quizCategoryEl.textContent = activeUiLang === "ka" ? item.category_ka : item.category_en;
    quizQuestionTextEl.textContent = activeUiLang === "ka" ? item.question_ka : item.question_en;
    
    quizProgressText.textContent = `${quizCurrentIndex + 1} / 10`;
    quizProgressFill.style.width = `${((quizCurrentIndex + 1) / 10) * 100}%`;
    
    const correctAnswer = activeUiLang === "ka" ? item.answer_ka : item.answer_en;
    
    let incorrectAnswers = filteredCards
        .filter(c => c.question_ka !== item.question_ka)
        .map(c => activeUiLang === "ka" ? c.answer_ka : c.answer_en);
        
    incorrectAnswers = [...new Set(incorrectAnswers)];
    shuffleArray(incorrectAnswers);
    
    let options = [correctAnswer];
    for (let i = 0; i < 3; i++) {
        if (incorrectAnswers[i]) {
            options.push(incorrectAnswers[i]);
        }
    }
    shuffleArray(options);
    
    quizOptionsContainer.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('quiz-option-btn');
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(btn, opt, correctAnswer));
        quizOptionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedBtn, chosenOpt, correctOpt) {
    const allButtons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctOpt) {
            btn.classList.add('correct');
        }
    });
    
    if (chosenOpt === correctOpt) {
        quizScore++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    
    quizNextBtn.classList.remove('hidden');
}

quizNextBtn.addEventListener('click', () => {
    if (quizCurrentIndex < 9) {
        quizCurrentIndex++;
        renderQuizCard();
    } else {
        quizScreen.classList.add('hidden');
        quizResultScreen.classList.remove('hidden');
        resultScoreDisplay.textContent = `${quizScore} / 10`;
    }
});

retrySameBtn.addEventListener('click', () => {
    quizResultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizCurrentIndex = 0;
    quizScore = 0;
    renderQuizCard();
});

startNewBtn.addEventListener('click', () => {
    quizResultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    generateNewQuizDeck();
});

closeModal.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        modalBackdrop.style.display = 'none';
    }
});

updateUiStrings();