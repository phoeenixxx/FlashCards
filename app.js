let currentLanguage = "js";
let currentMode = "flashcards";
let currentLevel = "comp_0";
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

const componentsConfig = {
    js: [
        { id: "comp_0", ka: "შესავალი და ისტორია", en: "Introduction & History", descKa: "Great 3, ისტორია, V8 ძრავი, Node.js და მოვლენათა ციკლი", descEn: "Great 3, History, V8 Engine, Node.js & Event Loop" },
        { id: "comp_1", ka: "გამოტანა და ცვლადები", en: "Output & Variables", descKa: "კონსოლები, Hoisting მექანიზმი, let/const, ფუნქციები და Coercion", descEn: "Logging, Hoisting, let/const, Functions & Type Coercion" },
        { id: "comp_2", ka: "პირობები, ციკლები, ივენთები", en: "Control Flow & Events", descKa: "Switch-case, for-of ციკლი, addEventListener და Early Return", descEn: "Switch statement, for-of loops, Event Listeners & Early Return" },
        { id: "comp_3", ka: "ობიექტები და მასივები", en: "Objects & Arrays", descKa: "Key-value წყვილები, ფილტრაცია, მოდიფიკაცია და იმუტაბელურობა", descEn: "Key-value bindings, higher-order filter, map & immutability" },
        { id: "comp_4", ka: "სტრიქონები, საცავი და დრო", en: "Strings, Storage & Dates", descKa: "getMonth სპეციფიკა, სტრიქონული მეთოდები, localStorage და ტაიმერები", descEn: "getMonth index, string APIs, localStorage serialization & timers" },
        { id: "comp_5", ka: "DOM არქიტექტურა", en: "DOM Architecture", descKa: "კვანძები, querySelector, classList, createElement და ოპტიმიზაცია", descEn: "Web nodes graph, querySelectorAll, classList, node injection" },
        { id: "comp_6", ka: "ასინქრონული პროცესები", en: "Asynchronous API Flow", descKa: "პრომისის მდგომარეობები, async/await, try-catch, Fetch და CRUD", descEn: "Promise states, async/await rules, network fetch & CRUD methods" }
    ],
    ts: [
        { id: "comp_7", ka: "სტატიკური ტიპიზაცია", en: "Static Typing Basics", descKa: "Microsoft ისტორია, Explicit vs Implicit მინიჭება, any საფრთხე", descEn: "Microsoft footprint, Explicit vs Implicit inference, any type leak" },
        { id: "comp_8", ka: "TSC კომპილაცია", en: "TSC Compilation", descKa: "npm ინსტალაცია, tsc --init, tsconfig პარამეტრები და Watch Mode", descEn: "npm packages, tsconfig rules, target/strict/dirs bounds & Watch Mode" },
        { id: "comp_9", ka: "ფუნქციები და კოლექციები", en: "Functions & Array Matrix", descKa: "არგუმენტების ტიპიზაცია, void მაჩვენებელი, არასავალდებულო ველები", descEn: "Parameter contracts, void retvals, optionals parameters configurations" },
        { id: "comp_10", ka: "ინტერფეისები და უტილიტები", en: "Interfaces & Utilities", descKa: "Declaration Merging, extends იერარქია, Union ტიპები და Omit", descEn: "Declaration merging blocks, extends inheritance, Unions & Omit utility" }
    ]
};

const uiTranslations = {
    ka: {
        dirTitle: "აირჩიეთ მიმართულება",
        jsDesc: "საფუძვლები, DOM API და ასინქრონული ოპერაციები",
        tsDesc: "ტიპების უსაფრთხოება და კონფიგურაცია",
        modeTitle: "აირჩიეთ რეჟიმი",
        modeFcDesc: "ისწავლეთ საკითხები ბარათების გადატრიალებით",
        modeQzDesc: "შეამოწმეთ ცოდნა 20-კითხვიან ქვიზში",
        levelTitle: "აირჩიეთ კომპონენტი",
        badgeUnitCards: "ბარათი",
        badgeUnitQuestions: "კითხვა",
        hint: "დააწკაპუნეთ პასუხისთვის",
        detailsBtn: "დამატებითი ინფორმაცია",
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
        modeQzDesc: "Test your knowledge in a 20-question quiz",
        levelTitle: "Select Component",
        badgeUnitCards: "cards",
        badgeUnitQuestions: "questions",
        hint: "Click to reveal the answer",
        detailsBtn: "More Details",
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

function renderComponentGrid() {
    const container = document.querySelector('.level-options-container');
    if (!container) return;
    container.innerHTML = "";
    
    const activeList = componentsConfig[currentLanguage];
    const trans = uiTranslations[activeUiLang];
    
    activeList.forEach(comp => {
        const targetArray = flashcardsData.filter(card => card.lang === currentLanguage && card.component === comp.id);
        const displayTitle = activeUiLang === "ka" ? comp.ka : comp.en;
        const displayDesc = activeUiLang === "ka" ? comp.descKa : comp.descEn;
        const badgeUnit = currentMode === "quiz" ? trans.badgeUnitQuestions : trans.badgeUnitCards;
        const badgeValue = targetArray.length;
        
        const rowBtn = document.createElement('button');
        rowBtn.classList.add('level-row-btn');
        rowBtn.setAttribute('data-level', comp.id);
        
        rowBtn.innerHTML = `
            <div class="level-row-info">
                <div class="level-row-name">${displayTitle}</div>
                <div class="level-row-desc">${displayDesc}</div>
            </div>
            <div class="count-badge">${badgeValue} <span class="badge-unit">${badgeUnit}</span></div>
        `;
        
        rowBtn.addEventListener('click', () => {
            currentLevel = comp.id;
            levelScreen.classList.add('hidden');
            
            filteredCards = flashcardsData.filter(card => card.lang === currentLanguage && card.component === currentLevel);
            
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
        
        container.appendChild(rowBtn);
    });
}

function updateUiStrings() {
    const trans = uiTranslations[activeUiLang];
    const dirTitleEl = document.getElementById('lng-dir-title');
    const modeTitleEl = document.getElementById('lng-mode-title');
    const modeFcDescEl = document.getElementById('lng-mode-fc-desc');
    const modeQzDescEl = document.getElementById('lng-mode-qz-desc');
    const levelTitleEl = document.getElementById('lng-level-title');
    const hintEl = document.getElementById('lng-hint');
    const modalTitleEl = document.getElementById('lng-modal-title');
    const resTitleEl = document.getElementById('lng-res-title');
    const retryTitleEl = document.getElementById('lng-retry-title');
    const newTitleEl = document.getElementById('lng-new-title');

    if (dirTitleEl) dirTitleEl.textContent = trans.dirTitle;
    if (modeTitleEl) modeTitleEl.textContent = trans.modeTitle;
    if (modeFcDescEl) modeFcDescEl.textContent = trans.modeFcDesc;
    if (modeQzDescEl) modeQzDescEl.textContent = trans.modeQzDesc;
    if (levelTitleEl) levelTitleEl.textContent = trans.levelTitle;
    if (hintEl) hintEl.textContent = trans.hint;
    if (modalTitleEl) modalTitleEl.textContent = trans.modalTitle;
    if (resTitleEl) resTitleEl.textContent = trans.resTitle;
    if (retryTitleEl) retryTitleEl.textContent = trans.retryTitle;
    if (newTitleEl) newTitleEl.textContent = trans.newTitle;

    backToMenuBtn.textContent = trans.backToMenu;
    quizNextBtn.innerHTML = trans.quizNext;
    detailsBtn.textContent = trans.detailsBtn;
    backToLangBtn.textContent = trans.back;
    backToModeBtn.textContent = trans.back;
    backToLevelsFcBtn.textContent = trans.menu;
    backToLevelsQzBtn.textContent = trans.menu;
    
    renderComponentGrid();
    langToggle.textContent = activeUiLang === "ka" ? "EN" : "KA";
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
        modeScreen.classList.add('hidden');
        levelScreen.classList.remove('hidden');
        renderComponentGrid();
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
    renderComponentGrid();
});

backToLevelsQzBtn.addEventListener('click', () => {
    quizScreen.classList.add('hidden');
    levelScreen.classList.remove('hidden');
    renderComponentGrid();
});

backToMenuBtn.addEventListener('click', () => {
    quizResultScreen.classList.add('hidden');
    languageScreen.classList.remove('hidden');
});

function renderCard() {
    if (filteredCards.length === 0) return;
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
    if (filteredCards.length === 0) return;
    const item = filteredCards[currentIndex];
    modalText.textContent = activeUiLang === "ka" ? item.details_ka : item.details_en;
    modalBackdrop.style.display = 'flex';
});

function generateNewQuizDeck() {
    quizCards = shuffleArray([...filteredCards]);
    quizCurrentIndex = 0;
    quizScore = 0;
    renderQuizCard();
}

function renderQuizCard() {
    if (quizCards.length === 0) return;
    quizNextBtn.classList.add('hidden');
    const item = quizCards[quizCurrentIndex];
    
    quizCategoryEl.textContent = activeUiLang === "ka" ? item.category_ka : item.category_en;
    quizQuestionTextEl.textContent = activeUiLang === "ka" ? item.question_ka : item.question_en;
    
    quizProgressText.textContent = `${quizCurrentIndex + 1} / ${quizCards.length}`;
    quizProgressFill.style.width = `${((quizCurrentIndex + 1) / quizCards.length) * 100}%`;
    
    const correctAnswer = activeUiLang === "ka" ? item.answer_ka : item.answer_en;
    
    let incorrectAnswers = flashcardsData
        .filter(c => c.lang === currentLanguage && c.component === currentLevel)
        .map(c => activeUiLang === "ka" ? c.answer_ka : c.answer_en)
        .filter(ans => ans !== correctAnswer);
        
    incorrectAnswers = [...new Set(incorrectAnswers)];
    shuffleArray(incorrectAnswers);
    
    let options = [correctAnswer];
    for (let i = 0; i < incorrectAnswers.length; i++) {
        if (options.length < 4 && !options.includes(incorrectAnswers[i])) {
            options.push(incorrectAnswers[i]);
        }
    }
    while (options.length < 4) {
        options.push(activeUiLang === "ka" ? `ალტერნატიული პასუხი ${options.length + 1}` : `Alternative Choice ${options.length + 1}`);
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
    if (quizCurrentIndex < quizCards.length - 1) {
        quizCurrentIndex++;
        renderQuizCard();
    } else {
        quizScreen.classList.add('hidden');
        quizResultScreen.classList.remove('hidden');
        resultScoreDisplay.textContent = `${quizScore} / ${quizCards.length}`;
    }
});

retrySameBtn.addEventListener('click', () => {
    quizResultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizCurrentIndex = 0;
    quizScore = 0;
    quizCards = shuffleArray([...quizCards]);
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