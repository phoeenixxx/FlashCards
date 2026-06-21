const flashcardsData = [
    // ==========================================
    // JAVASCRIPT (7 კომპონენტი x 20 კითხვა = 140)
    // ==========================================

    // --- COMP_0: შესავალი და ისტორია (1-20) ---
    {
        category_ka: "JS შესავალი", category_en: "JS Introduction",
        question_ka: "რა როლს ასრულებს JavaScript ვებ ტექნოლოგიების 'Great 3' ეკოსისტემაში?",
        question_en: "What role does JavaScript play in the 'Great 3' web technology ecosystem?",
        answer_ka: "HTML განსაზღვრავს გვერდის სტრუქტურას, CSS მართავს ვიზუალს, ხოლო JavaScript პასუხისმგებელია დინამიურ ქცევასა და ინტერაქციაზე.",
        answer_en: "HTML defines the structure, CSS manages presentation, and JavaScript controls behavior and dynamic interactivity.",
        details_ka: "HTML არის სახლის კედლები, CSS არის შპალერი, ხოლო JS არის ელექტროობის სისტემა.",
        details_en: "HTML represents walls, CSS is decoration, and JS is electricity.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS ისტორია", category_en: "JS History",
        question_ka: "ვინ შექმნა JavaScript, რამდენ დღეში და რა იყო მისი პირველი კოდური სახელი?",
        question_en: "Who created JavaScript, in how many days, and what was its original code name?",
        answer_ka: "JavaScript შექმნა ბრენდან აიკმა 1995 წლის მაისში სულ რაღაც 10 დღეში კომპანია Netscape-ისთვის. მისი პირველი შიდა კოდური სახელი იყო Mocha.",
        answer_en: "JavaScript was created by Brendan Eich in May 1995 in just 10 days for Netscape. Its original internal code name was Mocha.",
        details_ka: "სახელწოდების ევოლუცია: Mocha -> LiveScript -> JavaScript.",
        details_en: "Name evolution: Mocha -> LiveScript -> JavaScript.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS სტანდარტები", category_en: "JS Standards",
        question_ka: "რა მიზნით შეიქმნა ECMAScript სტანდარტი და რით განსხვავდება ის ჯავასკრიპტისგან?",
        question_en: "Why was the ECMAScript standard created and how does it differ from JavaScript?",
        answer_ka: "ECMAScript არის ოფიციალური სპეციფიკაცია და დოკუმენტი, რომელიც შეიქმნა ბრაუზერებს შორის არსებული ქაოსის დასასრულებლად, ხოლო JS არის ამ სტანდარტის იმპლემენტაცია.",
        answer_en: "ECMAScript is the official specification document created to end browser chaos, while JavaScript is the actual implementation of this standard.",
        details_ka: "1997 წელს ECMA International-მა შექმნა ერთიანი სპეციფიკაცია (ES).",
        details_en: "In 1997, ECMA International created a unified specification (ES).",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS ძრავები", category_en: "JS Engines",
        question_ka: "რა არის Google-ის V8 ძრავი და რა მექანიზმით აჩქარებს ის კოდის შესრულებას?",
        question_en: "What is Google's V8 engine and by what mechanism does it accelerate code execution?",
        answer_ka: "V8 არის ძრავი, რომელიც კოდის ხაზობრივი ინტერპრეტაციის ნაცვლად იყენებს JIT (Just-In-Time) კომპილაციას კოდის პირდაპირ მანქანურ 0-ებად და 1-ებად სათარგმნად.",
        answer_en: "V8 is an engine that uses JIT (Just-In-Time) compilation instead of loose interpretation to compile source code directly into native machine code.",
        details_ka: "V8 გამოვიდა 2008 წელს Chrome ბრაუზერთან ერთად.",
        details_en: "V8 was released in 2008 alongside Chrome.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS ეკოსისტემა", category_en: "JS Ecosystem",
        question_ka: "რა არის Node.js და რა ძირეული ცვლილება შეიტანა მან ვებ დეველოპმენტში?",
        question_en: "What is Node.js and what fundamental shift did it bring to web development?",
        answer_ka: "Node.js არის გარემო, რომელმაც V8 ძრავი ბრაუზერის გარეთ გაიტანა და შესაძლებელი გახადა ჯავასკრიპტის სერვერზე (Back-end) გაშვება.",
        answer_en: "Node.js is a runtime environment that took the V8 engine outside the browser, enabling JavaScript execution on back-end servers.",
        details_ka: "იგი შექმნა რაიან დალმა 2009 წელს.",
        details_en: "It was crafted by Ryan Dahl in 2009.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS გარემო", category_en: "JS Runtime",
        question_ka: "რა კომპონენტებისგან შედგება JavaScript-ის Runtime გარემო ბრაუზერში?",
        question_en: "What components make up the JavaScript Runtime environment in a browser?",
        answer_ka: "ის შედგება JS ძრავისგან (Memory Heap, Call Stack), Web API-ებისგან (DOM, fetch), Callback Queue-სა და Event Loop-ისგან.",
        answer_en: "It consists of the JS engine (Memory Heap, Call Stack), Web APIs (DOM, fetch), Callback Queue, and the Event Loop.",
        details_ka: "ეს კომპონენტები უზრუნველყოფენ ასინქრონული კოდის გამართულ მუშაობას.",
        details_en: "These components ensure smooth execution of asynchronous code loops.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS არქიტექტურა", category_en: "JS Architecture",
        question_ka: "რას ნიშნავს, რომ JavaScript არის Single-threaded ენა?",
        question_en: "What does it mean that JavaScript is a Single-threaded language?",
        answer_ka: "ეს ნიშნავს, რომ მას აქვს მხოლოდ ერთი Call Stack და შეუძლია ერთდროულად მხოლოდ ერთი ოპერაციის/ინსტრუქციის შესრულება.",
        answer_en: "It means it has a single Call Stack and can execute only one operation or command at a time.",
        details_ka: "მიუხედავად ამისა, ასინქრონულობა მიიღწევა ბრაუზერის Web API-ების ხარჯზე.",
        details_en: "However, concurrency is handled via browser Web API structures.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Call Stack", category_en: "Call Stack",
        question_ka: "რა არის Call Stack-ის ძირითადი ფუნქცია ჯავასკრიპტში?",
        question_en: "What is the primary function of the Call Stack in JavaScript?",
        answer_ka: "Call Stack არის მექანიზმი, რომელიც თვალყურს ადევნებს თუ რომელი ფუნქცია სრულდება მოცემულ მომენტში და რა რიგითობით.",
        answer_en: "The Call Stack is a mechanism that keeps track of which function is currently executing and its sequence order.",
        details_ka: "მუშაობს LIFO (Last In, First Out) პრინციპით.",
        details_en: "It operates based on the LIFO (Last In, First Out) paradigm.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Heap Storage", category_en: "Heap Storage",
        question_ka: "რისთვის გამოიყენება Memory Heap ჯავასკრიპტის ძრავში?",
        question_en: "What is the Memory Heap used for in a JavaScript engine?",
        answer_ka: "Memory Heap არის დიდი, არასტრუქტურირებული მეხსიერების არეალი, სადაც ინახება ობიექტები, მასივები და ფუნქციები.",
        answer_en: "The Memory Heap is a large, unstructured memory region where objects, arrays, and functions are allocated.",
        details_ka: "აქ ხდება დინამიური მონაცემების შენახვა, რომელთა ზომაც წინასწარ არაა ცნობილი.",
        details_en: "This is where dynamic data variables with unpredictable memory footprints reside.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Event Loop", category_en: "Event Loop",
        question_ka: "რა არის Event Loop-ის მთავარი მოვალეობა?",
        question_en: "What is the main responsibility of the Event Loop?",
        answer_ka: "Event Loop მუდმივად ამოწმებს Call Stack-ს. თუ სთექი ცარიელია, მას გადააქვს ფუნქციები Callback Queue-იდან Call Stack-ში შესასრულებლად.",
        answer_en: "The Event Loop monitors the Call Stack. If the stack is empty, it transfers items from the Callback Queue to the Call Stack.",
        details_ka: "ეს მექანიზმი აძლევს JS-ს საშუალებას იყოს არაბლოკირებადი.",
        details_en: "This asset empowers JS to remain non-blocking during dense executions.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Callback Queue", category_en: "Callback Queue",
        question_ka: "როგორ მუშაობს Callback Queue და რა პრინციპს მიყვება ის?",
        question_en: "How does the Callback Queue work and what principle does it follow?",
        answer_ka: "Callback Queue ინახავს ასინქრონული ოპერაციების დასრულებულ ქოლბექებს და მიყვება FIFO (First In, First Out) პრინციპს.",
        answer_en: "The Callback Queue holds callbacks from completed async routines, processing them using FIFO (First In, First Out).",
        details_ka: "პირველი დასრულებული ასინქრონული მოვლენა პირველივე ელოდება სთექში გადასვლას.",
        details_en: "The first resolved async operation waits first in line to bounce into execution stacks.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Web APIs", category_en: "Web APIs",
        question_ka: "რა არის Web APIs და ვის მიერ არის ის მოწოდებული?",
        question_en: "What are Web APIs and who provides them?",
        answer_ka: "Web APIs არის ბრაუზერის მიერ მოწოდებული დამატებითი ფუნქციონალი (DOM, setTimeout, fetch), რომელიც არ არის უშუალოდ JS ენის ნაწილი.",
        answer_en: "Web APIs are browser-provided features (DOM, setTimeout, fetch) that extend the core JavaScript language environment.",
        details_ka: "ისინი სრულდება ბრაუზერის ფონურ სრედებში და არ ტვირთავს ძირითად ნაკადს.",
        details_en: "They execute concurrently inside browser threads without choking the main script flow.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Strict Mode", category_en: "Strict Mode",
        question_ka: "რა არის 'use strict' და რატომ ვიყენებთ მას კოდში?",
        question_en: "What is 'use strict' and why do we use it in code?",
        answer_ka: "ეს არის დირექტივა, რომელიც რთავს ჯავასკრიპტის მკაცრ რეჟიმს, რაც კრძალავს ცუდი სინტაქსის გამოყენებას და აჩენს ფარულ შეცდომებს.",
        answer_en: "It is a directive that enables JavaScript's strict mode, restricting poor syntax variants and exposing silent compilation bugs.",
        details_ka: "მაგალითად, მკაცრ რეჟიმში ცვლადის გამოცხადება let/const/var-ის გარეშე გამოიწვევს შეცდომას.",
        details_en: "For example, declaring a variable without bindings keys throws an error under strict flags.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS კომპილაცია", category_en: "JS Compilation",
        question_ka: "არის თუ არა JavaScript სუფთა ინტერპრეტირებადი ენა დღეს?",
        question_en: "Is JavaScript a purely interpreted language today?",
        answer_ka: "არა, თანამედროვე ბრაუზერები კოდს ჯერ აკომპილირებენ ბაიტკოდად (JIT კომპილაცია) და მხოლოდ ამის შემდეგ უშვებენ შესასრულებლად.",
        answer_en: "No, modern browsers perform just-in-time (JIT) compilation to transform source text into bytecode prior to immediate execution cycles.",
        details_ka: "ეს მნიშვნელოვნად ზრდის შესრულების სიჩქარეს ძველ ინტერპრეტატორებთან შედარებით.",
        details_en: "This pattern scales code optimization, leaving retro slow interpretation styles behind.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Garbage Collection", category_en: "Garbage Collection",
        question_ka: "როგორ მუშაობს მეხსიერების ავტომატური დასუფთავება (Garbage Collection) ჯავასკრიპტში?",
        question_en: "How does automatic Garbage Collection work in JavaScript?",
        answer_ka: "ის იყენებს 'Mark-and-Sweep' ალგორითმს, რომელიც პოულობს და შლის იმ ობიექტებს, რომლებთანაც გლობალური კონტექსტიდან წვდომა აღარ არსებობს.",
        answer_en: "It uses the 'Mark-and-Sweep' algorithm, which tracks and deletes memory nodes that are no longer reachable from the root execution graph.",
        details_ka: "დეველოპერს არ უწევს ხელით მეხსიერების გამოთავისუფლება.",
        details_en: "Developers are completely insulated from managing memory free blocks manually.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Microtasks", category_en: "Microtasks Queue",
        question_ka: "რა განსხვავებაა Microtask Queue-სა და Macrotask Queue-ს შორის?",
        question_en: "What is the difference between the Microtask Queue and the Macrotask Queue?",
        answer_ka: "Microtask Queue (Promises) აქვს უფრო მაღალი პრიორიტეტი და სრულდება ყოველი Macrotask-ის (setTimeout) შემდეგ, სანამ ბრაუზერი გვერდს დაარენდერებს.",
        answer_en: "The Microtask Queue (Promises) holds higher priority and empties out right after macro assignments (setTimeout) conclude before paint refreshes.",
        details_ka: "Promise-ის .then() ქოლბექები ყოველთვის უფრო მალე გაეშვება, ვიდრე setTimeout.",
        details_en: "Promise resolution blocks evaluate sooner than any pending timer interruptions.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "JS ვერსიები", category_en: "JS Versions",
        question_ka: "რატომ იყო მნიშვნელოვანი ES6 (ECMAScript 2015) ვერსიის გამოშვება?",
        question_en: "Why was the release of ES6 (ECMAScript 2015) considered a milestone?",
        answer_ka: "ES6-მა შემოიტანა რევოლუციური ცვლილებები: let/const, Arrow ფუნქციები, კლასები, პრომისები და დესტრუქტურიზაცია.",
        answer_en: "ES6 introduced major updates: let/const blocks, Arrow functions, classes, promises, and destructuring patterns.",
        details_ka: "ამ ვერსიამ სრულად შეცვალა და გაათანამედროვა JS-ის წერის სტილი.",
        details_en: "This major specification updated modernization workflows across global codebases.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Babel", category_en: "Babel Transpiler",
        question_ka: "რა ფუნქციას ასრულებს ინსტრუმენტი Babel ვებ დეველოპმენტში?",
        question_en: "What function does the Babel tool serve in web development?",
        answer_ka: "Babel არის ტრანსპილერი, რომელიც თანამედროვე JS (ES6+) კოდს თარგმნის ძველ ES5 ვერსიაში, რათა ის გაიგოს ძველმა ბრაუზერებმა.",
        answer_en: "Babel is a compiler that source-maps modern JS (ES6+) syntax back to retro ES5 variants to accommodate obsolete browser versions.",
        details_ka: "ეს საშუალებას გვაძლევს ვწეროთ მოდერნული კოდი თავსებადობის პრობლემების გარეშე.",
        details_en: "This lets engineers construct cutting edge systems while keeping deployment targets backward compatible.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Backward Compatibility", category_en: "Compatibility",
        question_ka: "რას ნიშნავს, რომ JavaScript არის Backward Compatible?",
        question_en: "What does it mean that JavaScript is Backward Compatible?",
        answer_ka: "ეს ნიშნავს, რომ 1995 წელს დაწერილი ძველი კოდი დღესაც უპრობლემოდ იმუშავებს თანამედროვე ბრაუზერის ძრავებში.",
        answer_en: "It implies that ancient software routines created in 1995 compile flawlessly inside up-to-date web systems today.",
        details_ka: "ინტერნეტის არქიტექტურა ორიენტირებულია იმაზე, რომ ძველი ვებგვერდები არასდროს გაფუჭდეს.",
        details_en: "Web standards are deliberately structured never to break legacy live code platforms.",
        lang: "js", component: "comp_0"
    },
    {
        category_ka: "Dynamic Typing", category_en: "Typing Model",
        question_ka: "რას ნიშნავს, რომ ჯავასკრიპტი არის დინამიურად ტიპიზებული ენა?",
        question_en: "What does it mean that JavaScript is a dynamically typed language?",
        answer_ka: "ეს ნიშნავს, რომ ტიპები ასოცირდება მნიშვნელობებთან და არა თავად ცვლადებთან, და ერთ ცვლადს შეუძლია სხვადასხვა დროს სხვადასხვა ტიპის მონაცემი მიიღოს.",
        answer_en: "It means types are bound to values rather than variables, allowing a variable to shift types dynamically across its lifecycle.",
        details_ka: "მაგალითად: let x = 5; x = 'ტექსტი'; — არ იწვევს კომპილაციის შეცდომას.",
        details_en: "For example: let x = 5; x = 'text'; — scales without throwing compiler errors.",
        lang: "js", component: "comp_0"
    },

    // --- COMP_1: გამოტანა და ცვლადები (21-40) ---
    {
        category_ka: "მონაცემთა გამოტანა", category_en: "Output Methods",
        question_ka: "რა ძირითადი დანიშნულება აქვს console.log()-ს და რით განსხვავდება ის console.error()-სგან?",
        question_en: "What is the primary purpose of console.log() and how does it differ from console.error()?",
        answer_ka: "console.log() ბეჭდავს ზოგად ინფორმაციას ტესტირებისთვის, ხოლო console.error() განკუთვნილია კრიტიკული შეცდომების წითლად გამოსატანად.",
        answer_en: "console.log() prints standard info logs for testing, whereas console.error() displays critical runtime errors inside a red frame box.",
        details_ka: "ორივე მეთოდი უხილავია საიტის რიგითი ვიზიტორებისთვის და ჩანს მხოლოდ დეველოპერის კონსოლში.",
        details_en: "Both diagnostic methods are hidden from regular site visitors, appearing only in developer tools.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "მონაცემთა გამოტანა", category_en: "Output Methods",
        question_ka: "რატომ ითვლება alert() მეთოდის გამოყენება პრობლემურად კოდის შესრულების ნაკადისთვის?",
        question_en: "Why is using the alert() method considered problematic for the code execution flow?",
        answer_ka: "alert() გამოაქვს სისტემური მოდალური ფანჯარა, რომელიც სრულად ბლოკავს კოდის შემდგომ შესრულებას მომხმარებლის მიერ 'OK'-ზე დაჭერამდე.",
        answer_en: "alert() triggers a system modal pop-up window that completely blocks and pauses further script execution until the user clicks 'OK'.",
        details_ka: "მის ქვეშ დაწერილი კოდის ხაზები არ გაეშვება მანამ, სანამ მომხმარებელი ფანჯარას არ დახურავს.",
        details_en: "Any code lines arranged underneath this expression will wait and stay frozen until the user dismisses the pop-up.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "ცვლადების სტრუქტურები", category_en: "Variable Structures",
        question_ka: "რა არის Hoisting მექანიზმი და რა სპეციფიკურ ქცევას აჩვენებს var ცვლადი ამ დროს?",
        question_en: "What is the Hoisting mechanism and what specific behavior does a var variable show during it?",
        answer_ka: "Hoisting არის დეკლარაციების ფარული აწევა სკოპის თავში, რის გამოც var ცვლადი გამოძახებისას აბრუნებს undefined-ს შეცდომის ნაცვლად.",
        answer_en: "Hoisting is the implicit lifting of declarations to the top of the scope, causing var to evaluate as undefined instead of throwing a reference error.",
        details_ka: "კოდი: console.log(x); var x = 5; — არ გამოიწვევს კრაშს, არამედ დაბეჭდავს undefined-ს.",
        details_en: "Code snippet: console.log(x); var x = 5; — won't crash the script run but returns undefined.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "ცვლადების ტიპები", category_en: "Variable Scope",
        question_ka: "რით განსხვავდება let და const ცვლადები var-ისგან ხილვადობის არეალის (Scope) მიხედვით?",
        question_en: "How do let and const variables differ from var in terms of visibility scope?",
        answer_ka: "var აქვს ფუნქციონალური ხილვადობა (Function Scope), ხოლო let და const შემოფარგლულია ბლოკური ხილვადობით (Block Scope {}).",
        answer_en: "var holds a functional visibility profile, while let and const stay bounded strictly within local block declarations {}.",
        details_ka: "თუ let ან const შეიქმნება if ან for ბლოკის შიგნით, მათ გარედან ვერ მივწვდებით.",
        details_en: "If let or const are declared inside an if block or loop, they stay unreachable from the outside context.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "მონაცემთა მოდიფიკაცია", category_en: "Immutability",
        question_ka: "შესაძლებელია თუ არა const-ით გამოცხადებული მასივის ან ობიექტის შიდა ელემენტების შეცვლა?",
        question_en: "Is it possible to modify internal elements of an array or object declared with const?",
        answer_ka: "დიახ, const კრძალავს თავად ცვლადზე ახალი მნიშვნელობის მინიჭებას (Reassignment), მაგრამ მასივის ან ობიექტის შიდა სტრუქტურა მაინც მუტაბელურია.",
        answer_en: "Yes, const restricts variable reassignment altogether, but the internal property graph of objects and arrays remains mutable.",
        details_ka: "მაგალითი: const arr = [1, 2]; arr.push(3); — იმუშავებს უპრობლემოდ.",
        details_en: "Example: const arr = [1, 2]; arr.push(3); — works safely.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "ტიპების გარდაქმნა", category_en: "Type Coercion",
        question_ka: "რა არის Implicit Coercion და რა შედეგს დააბრუნებს გამოსახულება '5' - 2 ჯავასკრიპტში?",
        question_en: "What is Implicit Coercion and what value will the expression '5' - 2 return in JavaScript?",
        answer_ka: "Implicit Coercion არის ტიპების ავტომატური გარდაქმნა. '5' - 2 დააბრუნებს რიცხვ 3-ს, რადგან მინუს ოპერატორი ტექსტს ავტომატურად აქცევს რიცხვად.",
        answer_en: "Implicit Coercion is an automatic underlying type casting. '5' - 2 returns number 3 because subtraction implicitly forces string to number transformation.",
        details_ka: "მიმატებისგან (+) განსხვავებით, რომელიც სტრიქონების კონკატენაციას აკეთებს ('5' + 2 = '52'), მინუსი ყოველთვის მათემატიკურ ოპერაციას ასრულებს.",
        details_en: "Unlike addition which triggers sequence concat ('5' + 2 = '52'), subtraction always executes numeric evaluation routines.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Temporal Dead Zone", category_en: "TDZ Mechanics",
        question_ka: "რა არის Temporal Dead Zone (TDZ) let და const ცვლადების შემთხვევაში?",
        question_en: "What is the Temporal Dead Zone (TDZ) for let and const variables?",
        answer_ka: "ეს არის პერიოდი სკოპის დაწყებიდან ცვლადის რეალურ გამოცხადებამდე, რომლის დროსაც ცვლადზე წვდომა იწვევს ReferenceError-ს.",
        answer_en: "It is the period from the start of the scope until the variable initialization, during which access attempts throw a ReferenceError.",
        details_ka: "ეს მექანიზმი გვიცავს ცვლადების ნაადრევი და არასწორი გამოყენებისგან.",
        details_en: "This architectural block insulates execution code from premature variable calls.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Primitive Types", category_en: "Primitives",
        question_ka: "ჩამოთვალეთ ყველა პრიმიტიული მონაცემთა ტიპი ჯავასკრიპტში.",
        question_en: "List all primitive data types available in JavaScript.",
        answer_ka: "სულ 7 პრიმიტივია: string, number, boolean, null, undefined, symbol და bigint.",
        answer_en: "There are 7 primitives: string, number, boolean, null, undefined, symbol, and bigint.",
        details_ka: "პრიმიტიული ტიპები ინახება პირდაპირ Stack მეხსიერებაში და გადაეცემა მნიშვნელობით.",
        details_en: "Primitive types reside inside Stack slots and are immutable passed by value.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Null vs Undefined", category_en: "Data Types Gap",
        question_ka: "რა არის ძირეული განსხვავება null-სა და undefined-ს შორის?",
        question_en: "What is the fundamental difference between null and undefined?",
        answer_ka: "undefined ნიშნავს რომ ცვლადი გამოცხადდა, მაგრამ მნიშვნელობა არ მიუღია, ხოლო null არის მნიშვნელობის არარსებობის განზრახ მინიჭება დეველოპერის მიერ.",
        answer_en: "undefined indicates a variable has been declared but not yet assigned a value, while null is an intentional assignment representing emptiness.",
        details_ka: "typeof null აბრუნებს 'object'-ს, რაც ცნობილი ისტორიული ბაგია JS-ში.",
        details_en: "typeof null returns 'object', which is a famous historic bug in JS layout design.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Typeof Operator", category_en: "Operators",
        question_ka: "რას აბრუნებს typeof ოპერატორი ფუნქციაზე და მასივზე გამოძახებისას?",
        question_en: "What does the typeof operator evaluate to when called against functions and arrays?",
        answer_ka: "ფუნქციაზე აბრუნებს 'function'-ს, ხოლო მასივზე აბრუნებს 'object'-ს.",
        answer_en: "It returns 'function' for functions, and evaluates to 'object' when triggered against arrays.",
        details_ka: "მასივი ტექნიკურად წარმოადგენს სპეციალურ ობიექტს ციფრული ინდექსებით.",
        details_en: "Arrays are technically sub-specialized object graphs anchored by numeric index strings.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "NaN Operations", category_en: "NaN Math",
        question_ka: "რა არის NaN, რა ტიპს მიეკუთვნება ის და რატომაა ის განსაკუთრებული?",
        question_en: "What is NaN, what data type does it belong to, and why is it unique?",
        answer_ka: "NaN ნიშნავს 'Not a Number', თუმცა მისი ტიპია 'number'. ის უნიკალურია იმით, რომ არ უდრის საკუთარ თავს (NaN === NaN არის false).",
        answer_en: "NaN stands for 'Not a Number', though its type evaluates to 'number'. It is unique because it does not equal itself (NaN === NaN is false).",
        details_ka: "მის შესამოწმებლად გამოიყენება სპეციალური ფუნქცია Number.isNaN().",
        details_en: "To safely validate it, developers invoke the explicit Number.isNaN() method context.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "String Conversion", category_en: "Casting Strings",
        question_ka: "როგორ შეგვიძლია სტრიქონი სწრაფად გადავაქციოთ რიცხვად უნარული პლუსის (+) ოპერატორით?",
        question_en: "How can we quickly cast a string sequence into a number using the unary plus (+) operator?",
        answer_ka: "სტრიქონის წინ პლუსის დასმით: let num = +5; ავტომატურად გადააქცევს მას რიცხვად 5.",
        answer_en: "By prepending a plus symbol before the string: let num = +5; forces immediate translation to the number 5.",
        details_ka: "ეს არის Number('5')-ის უფრო მოკლე და პოპულარული ალტერნატივა.",
        details_en: "This handles shorthand casting routines faster than explicit Number('5') wrappers.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Object References", category_en: "References",
        question_ka: "რატომ აბრუნებს {} === {} ფასეულობას false ჯავასკრიპტში?",
        question_en: "Why does {} === {} evaluate to false in JavaScript?",
        answer_ka: "ობიექტები შედარებისას ადარებენ თავიანთ მისამართებს მეხსიერებაში (References) და არა შიგთავსს. ორი ახალი ობიექტი ორ სხვადასხვა მისამართზე იქმნება.",
        answer_en: "Objects are compared by their underlying memory location pointers (references) rather than structural values. Two literal structures sit in split allocation blocks.",
        details_ka: "იგივე წესი ვრცელდება მასივებზეც: [] === [] ასევე არის false.",
        details_en: "The identical rule bounds array types: [] === [] evaluates to false uniformly.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Exponentiation", category_en: "Math Operators",
        question_ka: "რომელი ოპერატორი შემოიტანა ES6-მა ხარისხში აყვანისთვის?",
        question_en: "Which operator was introduced in ES6 to handle math exponentiation?",
        answer_ka: "ორმაგი ფიფქი (**). მაგალითად, 2 ** 3 ნიშნავს ორს კუბში და აბრუნებს 8-ს.",
        answer_en: "The double asterisk symbol (**). For instance, 2 ** 3 represents 2 cubed and evaluates directly to 8.",
        details_ka: "ეს არის ძველი Math.pow(2, 3) მეთოდის სინტაქსური ჩანაცვლება.",
        details_en: "This syntax updates legacy Math.pow(2, 3) routine calls gracefully.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Global Scope", category_en: "Global Context",
        question_ka: "რა საფრთხეს შეიცავს ცვლადების გლობალურ არეალში (Global Scope) გამოცხადება?",
        question_en: "What dangers come with declaring variables inside the global scope window?",
        answer_ka: "გლობალური ცვლადები ხელმისაწვდომია ყველგან, რაც ზრდის სახელების კონფლიქტის (Global Namespace Pollution) და კოდის სხვადასხვა ნაწილებიდან მათი შემთხვევითი გადაწერის რისკს.",
        answer_en: "Global variables are volatile, maximizing name collision rates (Global Namespace Pollution) and exposing states to unauthorized overrides across dependency tiers.",
        details_ka: "ყოველთვის ეცადეთ შეზღუდოთ ხილვადობა ლოკალურ ბლოკებში.",
        details_en: "Enforce strict block encapsulation boundaries whenever architecting modules.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Const Semantics", category_en: "Const Asserts",
        question_ka: "ნიშნავს თუ არა const სიტყვა იმას, რომ მნიშვნელობა მუდმივია?",
        question_en: "Does the const keyword guarantee value immutability across all types?",
        answer_ka: "არა, ის მხოლოდ ნიშნავს, რომ ცვლადის რეფერენსის (მისამართის) შეცვლაა აკრძალული. კომპოზიტური ტიპების (ობიექტები, მასივები) შიდა შიგთავსი კვლავ ცვლადია.",
        answer_en: "No, it implies that the memory pointer binding itself is immutable. Compound objects and collection sets maintain fluid properties graph values.",
        details_ka: "სრული გაყინვისთვის გამოიყენება Object.freeze().",
        details_en: "To secure absolute structural immutability, call Object.freeze() explicitly.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Truthy Falsy", category_en: "Logical States",
        question_ka: "ჩამოთვალეთ ძირითადი Falsy მნიშვნელობები ჯავასკრიპტში.",
        question_en: "List the essential Falsy values recognized by JavaScript logic engines.",
        answer_ka: "Falsy მნიშვნელობებია: false, 0, -0, '' (ცარიელი სტრიქონი), null, undefined და NaN.",
        answer_en: "Falsy entries map as: false, 0, -0, '' (empty string), null, undefined, and NaN.",
        details_ka: "ყველა სხვა დანარჩენი მნიშვნელობა (მათ შორის ცარიელი მასივი [] და ობიექტი {}) არის Truthy.",
        details_en: "Every single other value expression (including empty arrays [] and object structures {}) registers as Truthy.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Boolean Casting", category_en: "Casting Booleans",
        question_ka: "რა არის უმარტივესი გზა ნებისმიერი მონაცემის ლოგიკურ (Boolean) ტიპზე გადასაყვანად?",
        question_en: "What is the shortest shorthand pattern to cast any given expression into a strict Boolean state?",
        answer_ka: "ორმაგი ძახილის ნიშნის (!!) გამოყენება. მაგალითად !!1 დააბრუნებს true-ს.",
        answer_en: "Utilizing double exclamation signs (!!). For instance, !!1 evaluates to truthy state true.",
        details_ka: "პირველი ძახილის ნიშანი აბრუნებს საწინააღმდეგო ლოგიკურ მნიშვნელობას, ხოლო მეორე აბრუნებს მას რეალურ საწყის ლოგიკურ ბუნებამდე.",
        details_en: "The leading negation sign flips the operand boolean integrity, while the trailing operator locks the actual truth value.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "String Interpolation", category_en: "Strings",
        question_ka: "რა უპირატესობა აქვს Template Literals-ის გამოყენებას ჩვეულებრივ კონკატენაციასთან (+) შედარებით?",
        question_en: "What advantages do Template Literals hold over standard string concatenation (+)?",
        answer_ka: "ისინი საშუალებას გვაძლევენ ჩავსვათ ცვლადები პირდაპირ ტექსტში ${} სინტაქსით და დავწეროთ მრავალხაზოვანი ტექსტები სპეციალური სიმბოლოების (\\n) გარეშე.",
        answer_en: "They inject inline context evaluation using ${} brackets directly inside complex string paragraphs while safely handling multi-line strings without \\n escape characters.",
        details_ka: "Template Literals იწერება ბექტიკებში (``).",
        details_en: "Template Literals are configured using backtick (``) enclosures.",
        lang: "js", component: "comp_1"
    },
    {
        category_ka: "Function Scope", category_en: "Function Scope",
        question_ka: "როგორ იზოლირდება var ცვლადი ფუნქციის შიგნით?",
        question_en: "How does a var variable behave when nested inside a function scope?",
        answer_ka: "var ცვლადს აქვს Function Scope, რაც ნიშნავს რომ ფუნქციის შიგნით შექმნილი var გარედან მიუწვდომელია, თუმცა ბლოკებს (if/for) ის ვერ ემორჩილება.",
        answer_en: "var encapsulates within functional code blocks, meaning variables initialized inside functions are invisible to global systems, though block constraints have no impact over them.",
        details_ka: "სწორედ ამიტომ მოდერნულ კოდში let/const-ს ვანიჭებთ უპირატესობას.",
        details_en: "This architectural flaw prompted the standardization of let and const blocks.",
        lang: "js", component: "comp_1"
    },

    // --- COMP_2: პირობები, ციკლები, ივენთები (41-60) ---
    {
        category_ka: "პირობითი ოპერატორები", category_en: "Control Flow",
        question_ka: "როგორ მუშაობს Switch-case კონსტრუქცია და რატომ არის კრიტიკული break ოპერატორის გამოყენება?",
        question_en: "How does the Switch-case statement operate and why is using the break operator critical?",
        answer_ka: "Switch ადარებს მნიშვნელობას ქეისებს. break საჭიროა იმისთვის, რომ შესაბამისი ქეისის პოვნის შემდეგ კოდის შესრულება შეწყდეს და ქვედა ქეისები ავტომატურად არ გაეშვას.",
        answer_en: "Switch matches an expression value against multiple cases. break stops evaluation so execution doesn't bleed cascade-style into consecutive blocks.",
        details_ka: "თუ break გამოგვრჩება, ჯავასკრიპტი გააგრძელებს მომდევნო ქეისების კოდის შესრულებას (Fall-through).",
        details_en: "Omitting break statements causes code logic to slide directly down into subsequent cases.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "ციკლის მექანიზმები", category_en: "Loops Execution",
        question_ka: "რა ძირითადი დანიშნულება აქვს for...of ციკლს და რა ტიპის მონაცემებზე მუშაობს ის?",
        question_en: "What is the primary purpose of the for...of loop and what kind of data collections does it target?",
        answer_ka: "for...of გამოიყენება იტერირებადი კოლექციების (მასივები, სტრიქონები) ელემენტებზე პირდაპირ, ინდექსების გარეშე გადასარბენად.",
        answer_en: "for...of directly extracts native values from iterable data collections like arrays or strings without needing explicit counter indices.",
        details_ka: "ობიექტებზე მისი პირდაპირი გაშვება გამოიწვევს შეცდომას, რადგან ობიექტი არ არის იტერირებადი.",
        details_en: "Triggering it against generic objects throws an error because standard objects lack default iterators.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "მოვლენების მართვა", category_en: "Event Handlers",
        question_ka: "რა უპირატესობა აქვს addEventListener მეთოდს ელემენტზე პირდაპირი onclick თვისების მინიჭებასთან შედარებით?",
        question_en: "What advantage does addEventListener possess over assigning an inline onclick property?",
        answer_ka: "addEventListener საშუალებას გვაძლევს ერთსა და იმავე ელემენტზე დავაკავშიროთ რამდენიმე დამოუკიდებელი ივენთ მსმენელი, onclick კი წინა მნიშვნელობას გადააწერს.",
        answer_en: "addEventListener binds multiple independent listener routines to a singular target web node, whereas onclick overwrites any pre-existing pointer handler.",
        details_ka: "ეს მეთოდი უზრუნველყოფს კოდის მაღალ მოდულარობას.",
        details_en: "This architectural method enables clean modular code organization.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "ფუნქციების ოპტიმიზაცია", category_en: "Clean Code Rules",
        question_ka: "რა არის Early Return პატერნი და როგორ აუმჯობესებს ის კოდის წაკითხვადობას?",
        question_en: "What is the Early Return pattern and how does it optimize script readability?",
        answer_ka: "Early Return გულისხმობს ფუნქციიდან პასუხის დაუყოვნებლივ დაბრუნებას პირობის შეუსაბამობისას, რაც თავიდან გვაცილებს ღრმად ჩასმულ if-else კონსტრუქციებს.",
        answer_en: "Early Return terminates routine flows immediately when validation bounds fail, eliminating the cognitive load of deep nested if-else statements.",
        details_ka: "ეს კოდს უფრო ხაზოვანსა და მარტივს ხდის.",
        details_en: "This keeps function bodies linear and highly maintainable.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Ternary Operator", category_en: "Operators Shorthand",
        question_ka: "რა არის ტერნარული ოპერატორი და რა ფორმით იწერება ის?",
        question_en: "What is the ternary operator and what is its inline syntax profile?",
        answer_ka: "ეს არის if-else კონსტრუქციის შემოკლებული ფორმა, რომელიც იყენებს კითხვის ნიშანს და ორწერტილს: პირობა ? თუ_true : თუ_false.",
        answer_en: "It is a single-line conditional shorthand replacing blocky if-else expressions using a question mark and colon: condition ? exprIfTrue : exprIfFalse.",
        details_ka: "გამოიყენება მცირე ცვლადების სწრაფი მინიჭებებისთვის.",
        details_en: "Highly favored for quick inline variable state assignments.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "For in loop", category_en: "Loops Profile",
        question_ka: "რა ძირითადი დანიშნულება აქვს for...in ციკლს და რით განსხვავდება ის for...of-ისგან?",
        question_en: "What is the main objective of a for...in loop and how does it differ from for...of?",
        answer_ka: "for...in გამოიყენება ობიექტის გასაღებებზე (Properties Keys) გადასარბენად, მაშინ როცა for...of იღებს იტერირებადი მასივების უშუალო მნიშვნელობებს.",
        answer_en: "for...in iterates over the enumerable keys of an object structure, whereas for...of reads concrete array element values directly.",
        details_ka: "მასივზე მისი გამოყენებისას ის დააბრუნებს ელემენტების ინდექსებს (სტრიქონებად).",
        details_en: "When fired against arrays, it extracts indices instead of target elements directly.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "While loops", category_en: "Loops Workflows",
        question_ka: "რა დროსაა მიზანშეწონილი while ციკლის გამოყენება for ციკლის ნაცვლად?",
        question_en: "When is it recommended to employ a while loop configuration over a standard for loop?",
        answer_ka: "როდესაც წინასწარ არ ვიცით თუ ზუსტად რამდენჯერ უნდა შესრულდეს ციკლი და იტერაცია დამოკიდებულია კონკრეტული პირობის ცვლილებაზე.",
        answer_en: "When the exact total iteration cycle count is unknown beforehand and relies entirely on dynamic run state changes.",
        details_ka: "მაგალითად, ფაილის კითხვა მანამ, სანამ ფაილის დასასრულს არ მივაღწევთ.",
        details_en: "For instance, processing a data feed until termination flags are raised down the pipe.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Do while loop", category_en: "Loops Execution",
        question_ka: "რა უნიკალური თვისება გააჩნია do...while ციკლს სხვა ციკლებთან შედარებით?",
        question_en: "What unique execution pattern distinguishes do...while loops from other iterations?",
        answer_ka: "do...while ციკლი თავის კოდს მინიმუმ ერთხელ მაინც ასრულებს, მიუხედავად იმისა, პირობა თავიდანვე ჭეშმარიტია თუ მცდარი.",
        answer_en: "A do...while block executes its inner statements at least once before evaluating its conditional clause at the tail end.",
        details_ka: "პირობის შემოწმება ხდება კოდის ბლოკის შესრულების შემდეგ.",
        details_en: "Conditional checks trigger only after the initial execution pass finishes.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Loop Controls", category_en: "Break Continue",
        question_ka: "რით განსხვავდება break ოპერატორი continue ოპერატორისგან ციკლის შიგნით?",
        question_en: "How does the break operator differ from continue inside iteration nodes?",
        answer_ka: "break სრულად წყვეტს ციკლის მუშაობას და გამოდის მისგან, ხოლო continue ტოვებს მიმდინარე იტერაციას და გადადის მომდევნოზე.",
        answer_en: "break immediately terminates the loop layout, while continue aborts the current block pass to cycle into the next index step.",
        details_ka: "ორივე ოპერატორი გამოიყენება იტერაციების ოპტიმიზაციისთვის.",
        details_en: "Both keywords help streamline flow control across loops frameworks.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Event Bubbling", category_en: "Events Model",
        question_ka: "რა არის Event Bubbling (მოვლენის აფეთქება) მექანიზმი DOM-ში?",
        question_en: "What is the Event Bubbling mechanism within the DOM architecture?",
        answer_ka: "ეს არის პროცესი, როდესაც ივენთი ელემენტზე გააქტიურებისას ავტომატურად გადაეცემა ზემოთ მის მშობელ ელემენტებს, დოკუმენტის ძირამდე (window).",
        answer_en: "A propagation model where an event triggered on a deep leaf node bubbles up through parent targets until it hits the window container.",
        details_ka: "ეს არის ივენთების გავრცელების ნაგულისხმევი მიმართულება.",
        details_en: "This represents the default behavioral direction of browser interactions.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Event Capturing", category_en: "Events Flow",
        question_ka: "რა არის Event Capturing და როგორ აქტიურდება ის?",
        question_en: "What is Event Capturing and how can it be activated?",
        answer_ka: "ეს არის მოვლენის გავრცელება ზემოდან ქვემოთ — მშობლიდან სამიზნე ელემენტამდე. აქტიურდება addEventListener-ში მესამე პარამეტრად true-ს გადაცემით.",
        answer_en: "The inverse event propagation flow running top-down from root containers to the target child node. Activated by setting the third addEventListener argument to true.",
        details_ka: "მას ასევე უწოდებენ Trickling ფაზას.",
        details_en: "Commonly referred to as the trickling phase across document specs.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Stop Propagation", category_en: "Events Methods",
        question_ka: "როგორ შეგვიძლია შევაჩეროთ Event Bubbling მექანიზმი კოდში?",
        question_en: "How can we programmatically stop Event Bubbling propagation?",
        answer_ka: "ივენთის ობიექტზე სპეციალური მეთოდის — e.stopPropagation() გამოძახების საშუალებით.",
        answer_en: "By invoking the explicit e.stopPropagation() method on the underlying incoming event context object.",
        details_ka: "ეს ხელს უშლის ივენთს მშობელ ელემენტებზე გადასვლაში და იცავს კოდს გვერდითი ეფექტებისგან.",
        details_en: "This traps the interaction footprint inside the immediate block, insulating parent wrappers.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Prevent Default", category_en: "Events Core",
        question_ka: "რა მიზნით გამოიყენება e.preventDefault() მეთოდი?",
        question_en: "What is the exact purpose of the e.preventDefault() method call?",
        answer_ka: "ის აუქმებს ბრაუზერის ნაგულისხმევ ქცევას, მაგალითად ფორმის გაგზავნისას გვერდის გადატვირთვას ან ლინკზე დაჭერისას სხვა გვერდზე გადასვლას.",
        answer_en: "It intercepts and blocks native browser routines, such as preventing refresh sequences on form submit triggers or halting anchor tag redirects.",
        details_ka: "ძალიან ხშირად გამოიყენება AJAX და SPA აპლიკაციების აწყობისას.",
        details_en: "Extensively deployed when managing single page applications (SPA) forms routing.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Event Target", category_en: "Events Objects",
        question_ka: "რა განსხვავებაა e.target-სა და e.currentTarget-ს შორის ივენთის ქოლბექში?",
        question_en: "What sets e.target apart from e.currentTarget inside an event handler context?",
        answer_ka: "e.target არის ელემენტი, რომელზეც უშუალოდ დააკლიკეს, ხოლო e.currentTarget არის ელემენტი, რომელზეც მიბმულია addEventListener.",
        answer_en: "e.target represents the exact concrete node clicked by the pointer, whereas e.currentTarget targets the specific element binding the event listener.",
        details_ka: "ბაბლინგის დროს e.target უცვლელი რჩება, e.currentTarget კი იცვლება.",
        details_en: "During bubbling sequences, e.target tracks the leaf origin while currentTarget points to active boundaries.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Event Delegation", category_en: "Events Optimization",
        question_ka: "რა არის Event Delegation (მოვლენის დელეგირება) და რატომ გამოიყენება ის?",
        question_en: "What is Event Delegation and why is it considered an architectural optimization trick?",
        answer_ka: "ეს არის პატერნი, როდესაც ბევრი შვილობილი ელემენტის ნაცვლად ივენთს ვსვამთ მათ საერთო მშობელზე (Bubbling-ის დახმარებით), რაც მნიშვნელოვნად ზოგავს კომპიუტერის მეხსიერებას.",
        answer_en: "A design pattern where instead of binding listeners to dozens of child units, a singular handler attaches to their common parent node, conserving runtime memory configurations.",
        details_ka: "განსაკუთრებით სასარგებლოა დინამიურად დამატებული ახალი ელემენტებისთვის.",
        details_en: "Crucial when handling dynamically injected web element arrays.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Custom Events", category_en: "Events API",
        question_ka: "შესაძლებელია თუ არა ჯავასკრიპტში საკუთარი, უნიკალური ივენთის შექმნა?",
        question_en: "Is it possible to spin up proprietary custom events inside JavaScript architectures?",
        answer_ka: "დიახ, CustomEvent კონსტრუქტორის და დოკუმენტის dispatchEvent() მეთოდის გამოყენებით შეგვიძლია შევქმნათ და გავისროლოთ ნებისმიერი სახელით ივენთი.",
        answer_en: "Yes, by engineering instances using the CustomEvent constructor and dispatching them globally across the DOM tree using dispatchEvent().",
        details_ka: "მაგალითი: const myEv = new CustomEvent('userLogin'); elem.dispatchEvent(myEv);",
        details_en: "Implementation syntax: const myEv = new CustomEvent('userLogin'); elem.dispatchEvent(myEv);",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Logical Assignment", category_en: "Operators",
        question_ka: "როგორ მუშაობს ლოგიკური Nullish Assignment ოპერატორი (??=)?",
        question_en: "How does the logical Nullish Assignment operator (??=) operate?",
        answer_ka: "ის ცვლადს ახალ მნიშვნელობას ანიჭებს მხოლოდ იმ შემთხვევაში, თუ მისი მიმდინარე მნიშვნელობა არის null ან undefined.",
        answer_en: "It commits an incoming expression value to a variable reference exclusively if its active state reads null or undefined.",
        details_ka: "ეს ოპერატორი შემოღებულ იქნა ES2021 სტანდარტში.",
        details_en: "This syntactic mechanism was standardized as part of the ES2021 feature package.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Logical Short Circuit", category_en: "Short Circuit",
        question_ka: "როგორ მუშაობს მოკლე ჩართვა (Short-circuiting) OR (||) ოპერატორის შემთხვევაში?",
        question_en: "How does short-circuit evaluation behave for the logical OR (||) operator?",
        answer_ka: "ის მარცხნიდან მარჯვნივ კითხვისას აბრუნებს პირველივე Truthy მნიშვნელობას და წყვეტს შემდგომ კითხვას. თუ არცერთი არაა truthy, აბრუნებს ბოლო ელემენტს.",
        answer_en: "Evaluating from left to right, it returns the very first Truthy operand encountered, short-circuiting remaining steps. If none match, it yields the terminal node.",
        details_ka: "ხშირად გამოიყენება ნაგულისხმევი (Fallback) მნიშვნელობების მისანიჭებლად.",
        details_en: "Commonly leveraged to establish primitive default configurations for uncertain states.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Short Circuit AND", category_en: "Short Circuit",
        question_ka: "როგორ მუშაობს მოკლე ჩართვა (Short-circuiting) AND (&&) ოპერატორის შემთხვევაში?",
        question_en: "How does short-circuit evaluation behave for the logical AND (&&) operator?",
        answer_ka: "ის აბრუნებს პირველივე Falsy მნიშვნელობას, რომელსაც შეხვდება. თუ ყველა პირობა ჭეშმარიტია, აბრუნებს ყველაზე ბოლო გამოსახულების შედეგს.",
        answer_en: "It scans expressions and terminates immediately upon hitting the first Falsy condition. If all operands test positive, it evaluates to the last element.",
        details_ka: "გამოიყენება კოდის შესასრულებლად მხოლოდ მაშინ, როდესაც წინაპირობა დაცულია.",
        details_en: "Often used to trigger sequential rendering steps once dependency paths prove valid.",
        lang: "js", component: "comp_2"
    },
    {
        category_ka: "Infinite Loops", category_en: "Loops Vulnerabilities",
        question_ka: "რა საფრთხეს წარმოადგენს უსასრულო ციკლი (Infinite Loop) კოდში?",
        question_en: "What vulnerability does an infinite loop pose to application execution?",
        answer_ka: "ის სრულად აკავებს Call Stack-ს, გადატვირთავს პროცესორს და იწვევს ბრაუზერის ჩანართის სრულ გაყინვას (Hang/Crash), რადგან Event Loop-ს ვეღარ გადააქვს სხვა დავალებები.",
        answer_en: "It monopolizes call stacks, spiking CPU cycles and freezing browser rendering engine nodes completely because event loops get starved of updates.",
        details_ka: "ყოველთვის დარწმუნდით, რომ ციკლს აქვს მკაფიო გამოსვლის პირობა (Exit Condition).",
        details_en: "Always guarantee that your iteration logic hits valid boundary exit thresholds.",
        lang: "js", component: "comp_2"
    },

    // --- COMP_3: ობიექტები და მასივები (61-80) ---
    {
        category_ka: "ობიექტების საფუძვლები", category_en: "Objects Bindings",
        question_ka: "როგორ განისაზღვრება Key-value (გასაღები-მნიშვნელობა) წყვილები ობიექტში და როგორ ხდება მათთან წვდომა?",
        question_en: "How are Key-value bindings declared within objects and what are the ways to access them?",
        answer_ka: "წყვილები იწერება ფიგურულ ფრჩხილებში ორწერტილით, ხოლო წვდომა ხდება წერტილოვანი (obj.key) ან კვადრატული ფრჩხილების (obj['key']) სინტაქსით.",
        answer_en: "Bindings are structured within curly braces separated by colons, accessed via explicit dot notation (obj.key) or generic square brackets (obj['key']).",
        details_ka: "კვადრატული ფრჩხილები აუცილებელია, როდესაც გასაღების სახელი ინახება სხვა ცვლადში.",
        details_en: "Square bracket evaluation is required whenever property key paths are dynamic.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "მასივის ფილტრაცია", category_en: "Higher-Order APIs",
        question_ka: "როგორ მუშაობს მასივის .filter() მეთოდი და აკეთებს თუ არა ის ორიგინალი მასივის მუტაციას?",
        question_en: "How does the array .filter() method work and does it mutate the original source array?",
        answer_ka: ".filter() ამოწმებს მასივის ყველა ელემენტს გადაცემული ქოლბექ ფუნქციით და აბრუნებს სრულიად ახალ მასივს, ორიგინალს კი უცვლელს ტოვებს.",
        answer_en: ".filter() evaluates collection nodes via boolean callback functions, returning a brand new array while keeping the original source immutable.",
        details_ka: "ეს მეთოდი იცავს მონაცემთა მთლიანობას ფუნქციონალურ სტილში.",
        details_en: "This method preserves data predictability in functional patterns.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Map", category_en: "Higher-Order Arrays",
        question_ka: "რა არის .map() მეთოდის დანიშნულება და რა შედეგს აბრუნებს ის?",
        question_en: "What is the concrete purpose of the .map() method and what does it yield?",
        answer_ka: ".map() გარდაქმნის მასივის თითოეულ ელემენტს ქოლბექის ინსტრუქციის შესაბამისად და აბრუნებს იმავე ზომის ახალ ტრანსფორმირებულ მასივს.",
        answer_en: "The .map() tool projects transformations over each collection element, compiling them into an identical-length new transformed array.",
        details_ka: "ორიგინალი მასივი ამ დროსაც რჩება ხელუხლებელი და უცვლელი.",
        details_en: "The original source dataset avoids mutations entirely across execution steps.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Reduce", category_en: "Array Aggregations",
        question_ka: "როგორ მუშაობს .reduce() მეთოდი და რას ნიშნავს Accumulator?",
        question_en: "How does the .reduce() method operate and what does the Accumulator represent?",
        answer_ka: ".reduce() ავიწროებს მთელ მასივს ერთ კონკრეტულ საბოლოო მნიშვნელობამდე. Accumulator არის ცვლადი, რომელიც აგროვებს შუალედურ შედეგებს ყოველ ბიჯზე.",
        answer_en: ".reduce() boils down a whole array into a single combined output value. The Accumulator acts as a running tally compiling step iterations.",
        details_ka: "მას მეორე არგუმენტად გადაეცემა საწყისი მნიშვნელობა (Initial Value).",
        details_en: "It accepts an optional initial seed state value as its trailing argument.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Mutations", category_en: "Mutations",
        question_ka: "ჩამოთვალეთ მასივის რამდენიმე პოპულარული მეთოდი, რომლებიც აკეთებენ ორიგინალის მუტაციას.",
        question_en: "List several prominent array methods that perform mutations directly on the source dataset.",
        answer_ka: "მუტაციურ მეთოდებს მიეკუთვნება: .push(), .pop(), .shift(), .unshift(), .splice() და .sort().",
        answer_en: "Mutator operations incorporate: .push(), .pop(), .shift(), .unshift(), .splice(), and .sort().",
        details_ka: "ეს მეთოდები ცვლიან მონაცემებს პირდაპირ მეხსიერებაში, ახალი მასივის შექმნის გარეშე.",
        details_en: "These expressions alter values directly in-place without generating cloned arrays.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Object Keys", category_en: "Object Reflection",
        question_ka: "როგორ შეგვიძლია მივიღოთ ობიექტის ყველა გასაღები მასივის სახით?",
        question_en: "How can we capture all property keys of an object bundled inside an array format?",
        answer_ka: "სტატიკური მეთოდის — Object.keys(obj) გამოყენებით. ის აბრუნებს ობიექტის გასაღებების ტექსტურ მასივს.",
        answer_en: "By invoking the static helper tool: Object.keys(obj). It yields an array containing all iterable string keys of the object.",
        details_ka: "მნიშვნელობების მისაღებად არსებობს ანალოგიური მეთოდი — Object.values(obj).",
        details_en: "To mirror this and extract properties data values, call Object.values(obj) instead.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Object Entries", category_en: "Object Reflection",
        question_ka: "რას აბრუნებს მეთოდი Object.entries(obj) ჯავასკრიპტში?",
        question_en: "What layout matrix is compiled when running Object.entries(obj)?",
        answer_ka: "ის აბრუნებს ორგანზომილებიან მასივს, სადაც თითოეული ელემენტი არის [key, value] წყვილისგან შემდგარი მინი-მასივი.",
        answer_en: "It returns a multidimensional array where each entry is a nested tuple matrix formatted as [key, value].",
        details_ka: "ძალიან მოსახერხებელია ობიექტებზე რთული ციკლებისა და ტრანსფორმაციების გაშვებისას.",
        details_en: "Extensively utilized when running loop transformations across structural object configurations.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Spread Objects", category_en: "Spread Operator",
        question_ka: "რა მიზნით გამოიყენება Spread ოპერატორი (...) მასივებსა და ობიექტებში?",
        question_en: "What engineering goals does the Spread operator (...) satisfy for arrays and objects?",
        answer_ka: "ის შლის კოლექციას მის შემადგენელ ცალკეულ ელემენტებად. გამოიყენება მასივების/ობიექტების გასაერთიანებლად ან მათი ზედაპირული ასლების (Shallow Copy) შესაქმნელად.",
        answer_en: "It unpacks a collection container into standalone runtime parameters. Ideal for merging states or executing shallow copies.",
        details_ka: "მაგალითი: const clone = {...original}; ინარჩუნებს იმუტაბელურობას.",
        details_en: "Example: const clone = {...original}; helps maintain immutability conventions safely.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Destructuring", category_en: "Destructuring",
        question_ka: "რა არის დესტრუქტურიზაცია (Destructuring) და როგორ ამარტივებს ის კოდს?",
        question_en: "What is Destructuring and how does it clean up assignment routines?",
        answer_ka: "ეს არის სპეციალური სინტაქსი, რომელიც საშუალებას გვახვევს მასივიდან ან ობიექტიდან მონაცემები პირდაპირ ცალკეულ ცვლადებში ამოვყაროთ ერთ ხაზზე.",
        answer_en: "A design syntax enabling developers to extract inner fields from arrays or objects directly into standalone variable declarations in a single step.",
        details_ka: "მაგალითი: const { name, age } = user; აცილებს კოდს წერტილოვან ხაზებს user.name, user.age.",
        details_en: "Syntax blueprint: const { name, age } = user; removes repeated dot notation clutter.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Rest Parameter", category_en: "Rest Parameters",
        question_ka: "რით განსხვავდება Rest პარამეტრი Spread ოპერატორისგან, მიუხედავად იდენტური სინტაქსისა (...)?",
        question_en: "What sets the Rest parameter apart from the Spread operator despite using the identical (...) token?",
        answer_ka: "Spread შლის მასივს ცალკეულ ელემენტებად, ხოლო Rest პირიქით — აგროვებს ცალკეულ არგუმენტებს ერთ მთლიან მასივში ფუნქციის პარამეტრებში.",
        answer_en: "Spread expands collection members into separate elements, while Rest acts inversely — packaging individual trailing arguments inside a clean array wrapper inside functions.",
        details_ka: "Rest ყოველთვის ფუნქციის ბოლო პარამეტრი უნდა იყოს.",
        details_en: "Rest arguments must absolute occupy the trailing position inside parameter lists.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Find", category_en: "Searching Arrays",
        question_ka: "როგორ მუშაობს მასივის .find() მეთოდი და რას აბრუნებს ის, თუ ელემენტი ვერ მოიძებნა?",
        question_en: "How does the array .find() method behave and what does it evaluate to if no match occurs?",
        answer_ka: "ის აბრუნებს პირველივე ელემენტს, რომელიც აკმაყოფილებს ქოლბექის პირობას. თუ ასეთი ვერაფერი მოიძებნა, აბრუნებს undefined-ს.",
        answer_en: "It evaluates the array and yields the very first element passing the callback rule. If no element qualifies, it returns undefined.",
        details_ka: "ინდექსის საპოვნელად გამოიყენება მისი მონათესავე მეთოდი — .findIndex().",
        details_en: "To isolate the position coordinate instead, call its companion method: .findIndex().",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Includes", category_en: "Searching Arrays",
        question_ka: "რა ტიპის პასუხს აბრუნებს .includes() მეთოდი და რით განსხვავდება ის .indexOf()-ისგან?",
        question_en: "What response format does .includes() return and how does it vary from .indexOf()?",
        answer_ka: ".includes() აბრუნებს ლოგიკურ პასუხს (true/false), ხოლო .indexOf() აბრუნებს ელემენტის ციფრულ ინდექსს (ან -1-ს, თუ ვერ იპოვა).",
        answer_en: ".includes() yields a boolean status value (true/false), while .indexOf() exposes the numeric index position (returning -1 when missing).",
        details_ka: "includes() ბევრად უფრო წასაკითხია მარტივი პირობითი შემოწმებების დროს.",
        details_en: "includes() scales code legibility inside evaluation flow branches.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Some", category_en: "Quantifiers Arrays",
        question_ka: "როგორ მუშაობს მასივის .some() მეთოდი?",
        question_en: "What rule governs runtime validation for the array .some() method?",
        answer_ka: "ის აბრუნებს true-ს, თუ მასივის ერთი ელემენტი მაინც აკმაყოფილებს გადაცემულ კრიტერიუმს.",
        answer_en: "It yields true if at least one single element inside the array successfully passes the specified callback criteria.",
        details_ka: "მუშაობას წყვეტს პირველივე ჭეშმარიტი ელემენტის პოვნისთანავე (ოპტიმიზაცია).",
        details_en: "It optimizes checks by short-circuiting upon identifying the initial matching node element.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Every", category_en: "Quantifiers Arrays",
        question_ka: "რა პირობით მუშაობს მასივის .every() მეთოდი?",
        question_en: "What rule governs runtime validation for the array .every() method?",
        answer_ka: "ის აბრუნებს true-ს მხოლოდ და მხოლოდ მაშინ, თუ მასივის აბსოლუტურად ყველა ელემენტი აკმაყოფილებს ქოლბექის პირობას.",
        answer_en: "It returns true if and only if every single node element within the target collection passes the condition criteria.",
        details_ka: "თუ ერთი ელემენტი მაინც მცდარია, .every() მაშინვე აბრუნებს false-ს.",
        details_en: "If even one element fails the evaluation check, the operation drops out to false.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Flat", category_en: "Matrix Flattening",
        question_ka: "რას აკეთებს .flat() მეთოდი და რა პარამეტრს იღებს ის?",
        question_en: "What architectural adjustment does .flat() manage and what argument does it take?",
        answer_ka: "ის ასუფთავებს ჩასმულ, მრავალგანზომილებიან მასივებს და აქცევს მათ ერთგანზომილებიან ბრტყელ მასივად. პარამეტრად იღებს სიღრმეს (ნაგულისხმევად 1).",
        answer_en: "It unpacks multi-layered nested matrices, reducing them down to a unified flatter array structure. It accepts an optional recursion depth limit (defaulting to 1).",
        details_ka: "სრული სიღრმის გასასუფთავებლად გადაეცემა მნიშვნელობა Infinity: arr.flat(Infinity).",
        details_en: "To flatten all dimensions recursively, pass the global constant value: arr.flat(Infinity).",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Shallow Copy", category_en: "Memory References",
        question_ka: "რა არის Shallow Copy (ზედაპირული ასლი) და რა საფრთხეს შეიცავს ის ჩასმული ობიექტების დროს?",
        question_en: "What is a Shallow Copy and what limitation does it hold regarding deeply nested objects?",
        answer_ka: "ზედაპირული ასლი აკოპირებს მხოლოდ პირველი დონის ველებს. თუ ობიექტში ჩასმულია სხვა ობიექტი, მისი მისამართი კოპირდება და ორიგინალის შეცვლა ასლსაც შეცვლის.",
        answer_en: "A shallow copy replicates top-level properties. If fields store nested child objects, their reference addresses copy over, allowing child mutation leaks across instances.",
        details_ka: "ღრმა ასლისთვის (Deep Copy) თანამედროვე გზაა structuredClone(obj).",
        details_en: "To provision isolated deep duplicates, leverage the modern standard method: structuredClone(obj).",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Slice", category_en: "Slicing Arrays",
        question_ka: "რით განსხვავდება .slice() მეთოდი .splice()-სგან მასივებთან მუშაობისას?",
        question_en: "How does the array .slice() method differ fundamentally from .splice()?",
        answer_ka: ".slice() აბრუნებს მასივის ნაწილის ასლს და არ ცვლის ორიგინალს, ხოლო .splice() პირდაპირ ჭრის, ამატებს ან შლის ელემენტებს ორიგინალ მასივში.",
        answer_en: ".slice() copies a selective slice segment leaving the original data immutable, whereas .splice() physically extracts or patches items on the source configuration.",
        details_ka: "slice() უსაფრთხოა, splice() კი ახდენს მუტაციას.",
        details_en: "slice() operates inline safely, while splice() causes direct destructive structural side-effects.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Primitive vs Object", category_en: "Memory Layers",
        question_ka: "როგორ განსხვავდება მეხსიერებაში პრიმიტივების და ობიექტების შენახვის პრინციპი?",
        question_en: "How does memory allocation vary between primitive categories and object types?",
        answer_ka: "პრიმიტივები ინახება პირდაპირ Stack-ში მნიშვნელობის სახით, ხოლო ობიექტები თავსდება Heap-ში, Stack-ში კი მხოლოდ მათი მისამართი (Pointer) იწერება.",
        answer_en: "Primitives fit directly in Stack slots by value, whereas dense object structures occupy Heap sectors, leaving only access pointers recorded within Stack indices.",
        details_ka: "სწორედ ამიტომ, ობიექტების გადაცემისას ჩვენ მათ მისამართებს გადავცემთ.",
        details_en: "Consequently, assigning objects copies reference locations rather than physical data attributes.",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Object Assign", category_en: "Objects Merging",
        question_ka: "რა არის Object.assign() და რა ალტერნატივა აქვს მას თანამედროვე კოდში?",
        question_en: "What task does Object.assign() manage and what modern syntax has replaced it?",
        answer_ka: "ის აკოპირებს თვისებებს ერთი ან რამდენიმე წყარო ობიექტიდან სამიზნე ობიექტში. თანამედროვე კოდში ის თითქმის სრულად ჩაანაცვლა Spread {...obj} სინტაქსმა.",
        answer_en: "It copies enumerable properties from source structures into a target object. Modern code architectures largely bypass it in favor of Spread {...obj} expressions.",
        details_ka: "მაგალითი: Object.assign(target, source);",
        details_en: "Standard blueprint invocation: Object.assign(target, source);",
        lang: "js", component: "comp_3"
    },
    {
        category_ka: "Array Sort", category_en: "Sorting Routines",
        question_ka: "რატომ ახასიათებს მასივის .sort() მეთოდს უცნაური ქცევა რიცხვების სორტირებისას და როგორ ვასწორებთ ამას?",
        question_en: "Why does the array .sort() method behave unpredictably with numeric elements and how do we fix it?",
        answer_ka: "ნაგულისხმევად .sort() რიცხვებს აქცევს სტრიქონებად და ახდენს მათ ალფავიტურ შედარებას (ამიტომ 10 წინ უსწრებს 2-ს). ამის გამოსასწორებლად უნდა გადავცეთ კომპარატორი: (a, b) => a - b.",
        answer_en: "By default, .sort() coerces all elements to strings, evaluating them alphabetically (ranking 10 before 2). To sort numbers correctly, provide a comparative callback: (a, b) => a - b.",
        details_ka: "ეს მეთოდი ცვლის თავდაპირველ მასივს.",
        details_en: "This algorithm modifies the underlying source sequence directly.",
        lang: "js", component: "comp_3"
    },

    // --- COMP_4: სტრიქონები, საცავი და დრო (81-100) ---
    {
        category_ka: "თარიღების მანიპულაცია", category_en: "Date Object APIs",
        question_ka: "რა სპეციფიკური თავისებურება ახასიათებს Date ობიექტის .getMonth() მეთოდს ჯავასკრიპტში?",
        question_en: "What specific index configuration behavior is observed in the Date object's .getMonth() method?",
        answer_ka: ".getMonth() მეთოდი აბრუნებს თვის ინდექსს, რომელიც იწყება 0-იდან. შესაბამისად, იანვარი არის 0, ხოლო დეკემბერი არის 11.",
        answer_en: ".getMonth() evaluates standard calendar months via zero-based index structures, tracking January as 0 and December as index 11.",
        details_ka: "რეალური თვის ნომრის მისაღებად საჭიროა შედეგზე 1-ის მიმატება.",
        details_en: "To display human-readable month formats, increment the result value by 1.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "ბრაუზერის საცავები", category_en: "Web Storage Engine",
        question_ka: "რატომ არის საჭირო JSON.stringify() მეთოდი მონაცემების localStorage-ში შენახვისას?",
        question_en: "Why is JSON.stringify() mandatory when committing complex datasets to localStorage?",
        answer_ka: "localStorage-ს შეუძლია შეინახოს მხოლოდ ტექსტური სტრიქონები. JSON.stringify() აქცევს რთულ ობიექტებსა და მასივებს ტექსტად.",
        answer_en: "localStorage natively accepts text sequences only. JSON.stringify() normalizes complex structural models into serialized flat strings.",
        details_ka: "მონაცემის უკან წამოსაღებად ვიყენებთ საპირისპირო მეთოდს: JSON.parse().",
        details_en: "To parse the stringified entity back into an active memory layout, call JSON.parse().",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "LocalStorage", category_en: "Web Storage Engine",
        question_ka: "რა განსხვავებაა localStorage-სა და sessionStorage-ს შორის ხანგრძლივობის მიხედვით?",
        question_en: "What sets localStorage apart from sessionStorage in terms of data persistence?",
        answer_ka: "localStorage ინახავს მონაცემებს სამუდამოდ ბრაუზერის დახურვის შემდეგაც, ხოლო sessionStorage შლის ყველაფერს ჩანართის (Tab) დახურვისთანავე.",
        answer_en: "localStorage persists structured data indefinitely across sessions, while sessionStorage purges entries completely the moment the active browser tab closes.",
        details_ka: "ორივე საცავის მოცულობა დაახლოებით 5-10MB ფარგლებშია.",
        details_en: "Both key-value storage capacities range roughly around 5-10MB constraints.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Methods", category_en: "String Slice Split",
        question_ka: "რას აკეთებს .split() მეთოდი სტრიქონზე და რა ტიპის მონაცემს აბრუნებს ის?",
        question_en: "What operations domain does .split() cover and what type of data container does it return?",
        answer_ka: "ის ჭრის სტრიქონს მითითებული გამყოფის მიხედვით და აქცევს მას ქვესტრიქონების მასივად (Array).",
        answer_en: "It slices a text sequence using a specified separator delimiter token, compiling individual segments into a standard array.",
        details_ka: "მაგალითი: 'a,b,c'.split(',') აბრუნებს ['a', 'b', 'c'].",
        details_en: "Example trace: 'a,b,c'.split(',') yields the text array ['a', 'b', 'c'].",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Timers engine", category_en: "Timers Async",
        question_ka: "რით განსხვავდება setTimeout() ფუნქცია setInterval()-ისგან?",
        question_en: "What behavioral model differentiates setTimeout() from setInterval()?",
        answer_ka: "setTimeout ასრულებს გადაცემულ კოდს ერთჯერადად მითითებული დროის გასვლის შემდეგ, ხოლო setInterval მეორდება უსასრულოდ ყოველ მოცემულ ინტერვალში.",
        answer_en: "setTimeout fires its execution payload a single time following a specified millisecond delay, whereas setInterval loops indefinitely across set intervals.",
        details_ka: "ციკლური მუშაობის შესაჩერებლად გამოიყენება clearInterval(id).",
        details_en: "To clear ongoing interval loops, invoke clearInterval(id) explicitly.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Trim", category_en: "Sanitizing Strings",
        question_ka: "რა მიზნით გამოიყენება სტრიქონის .trim() მეთოდი ვებ ფორმებთან მუშაობისას?",
        question_en: "What data sanitization task does the .trim() method fulfill when analyzing web input forms?",
        answer_ka: "ის სტრიქონს აცილებს ზედმეტ გამოტოვებულ ჰაეროვან სივრცეებს (Spaces) დასაწყისში და დასასრულში, რაც გვიცავს მომხმარებლის მიერ შეყვანილი არასწორი მონაცემებისგან.",
        answer_en: "It strips empty space characters padding the leading and trailing borders of strings, immunizing back-end routines from accidental empty spaces errors.",
        details_ka: "ის არ ეხება ტექსტის შიგნით არსებულ გამოტოვებებს.",
        details_en: "It bypasses spaces embedded directly within text body segments.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Replace", category_en: "Text Rewrites",
        question_ka: "რა განსხვავებაა .replace() და .replaceAll() მეთოდებს შორის?",
        question_en: "What separates .replace() from .replaceAll() during string search routines?",
        answer_ka: ".replace() ანაცვლებს მხოლოდ პირველივე ნაპოვნ შესაბამისობას, ხოლო .replaceAll() ცვლის აბსოლუტურად ყველა ნაპოვნ სიტყვას ტექსტში.",
        answer_en: ".replace() rewrites only the very first matched occurrence, whereas .replaceAll() substitutes every single match found within the target text.",
        details_ka: "ძველ ვერსიებში replace-ით ყველაფრის შესაცვლელად იყენებდნენ რეგულარულ გამოსახულებებს /g ფლაგით.",
        details_en: "Legacy environments achieved global replacements utilizing regular expressions alongside /g flags.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Cookies API", category_en: "Web Data Cookies",
        question_ka: "რით განსხვავდება Cookie ფაილები Web Storage (localStorage)-სგან?",
        question_en: "What distinguishes Cookies from standard Web Storage modules like localStorage?",
        answer_ka: "ქუქიები არის ძალიან მცირე ზომის (4KB), ავტომატურად იგზავნება სერვერზე ყოველი HTTP მოთხოვნისას და ხშირად გამოიყენება ავტორიზაციის სესიებისთვის.",
        answer_en: "Cookies manage microscopic data blocks (4KB) that automatically package into every outgoing HTTP header request, making them ideal for handling session tokens.",
        details_ka: "localStorage სერვერზე ავტომატურად არასდროს მიდის.",
        details_en: "localStorage payloads never leave the browser client sandbox automatically.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Length", category_en: "String Reflection",
        question_ka: "როგორ ვიგებთ სტრიქონის სიმბოლოების რაოდენობას და არის თუ არა ეს მეთოდი?",
        question_en: "How do we extract the length of a string and is this property accessed as a function call?",
        answer_ka: "ვიგებთ თვისება .length-ის დახმარებით. ეს არის უბრალო თვისება (Property) და არა ფუნქცია, ამიტომ ფრჩხილები () არ სჭირდება.",
        answer_en: "By referencing the static .length attribute. It evaluates as a read-only property rather than an active routine, requiring no parentheses ().",
        details_ka: "მაგალითი: const size = 'hello'.length; // 5",
        details_en: "Execution profile: const size = 'hello'.length; // 5",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Substrings", category_en: "String Slicing",
        question_ka: "როგორ მუშაობს .substring(start, end) მეთოდი ჯავასკრიპტში?",
        question_en: "How does the text slicing tool .substring(start, end) operate?",
        answer_ka: "ის ჭრის და აბრუნებს ტექსტის ნაწილს მითითებული start ინდექსიდან end ინდექსამდე (end ინდექსის სიმბოლო არ შედის შედეგში).",
        answer_en: "It extracts a targeted slice of string starting from the specified start index up to but excluding the character at the end index parameter.",
        details_ka: "თუ end პარამეტრი გამოტოვებულია, ის კოდს სტრიქონის ბოლომდე მოჭრის.",
        details_en: "Omitting the end variable copies everything downstream to the final character index.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Case", category_en: "Casing APIs",
        question_ka: "რომელი მეთოდებით ხდება ტექსტის სრული გაპატარავება ან გაკაპიტალება?",
        question_en: "Which operational methods automate text lowercase conversions or total capitalization?",
        answer_ka: ".toLowerCase() აპატარავებს ყველა ასოს, ხოლო .toUpperCase() აქცევს მათ დიდ მთავრულ ასოებად.",
        answer_en: ".toLowerCase() standardizes elements to lowercase, while .toUpperCase() transforms characters into uppercase expressions.",
        details_ka: "ეს მეთოდები არ ცვლიან ორიგინალ სტრიქონს, რადგან სტრიქონები იმუტაბელურია.",
        details_en: "These procedures return updated instances because text sequences are structurally immutable.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Date Timestamps", category_en: "Timestamps Math",
        question_ka: "რა არის Unix Epoch Timestamp და როგორ მივიღოთ ის მიმდინარე მომენტისთვის?",
        question_en: "What is the Unix Epoch Timestamp and how do we capture its value for the current live moment?",
        answer_ka: "ეს არის მილიწამების რაოდენობა 1970 წლის 1 იანვრიდან. მიმდინარე თაიმსტემპს აბრუნებს სტატიკური მეთოდი — Date.now().",
        answer_en: "It counts cumulative milliseconds elapsed since January 1, 1970. The active instance timestamp evaluates directly by triggering Date.now().",
        details_ka: "ძალიან გამოსადეგია ორ მოვლენას შორის დროის ინტერვალების დასათვლელად.",
        details_en: "Incredibly reliable when benchmarking precision duration intervals between code runs.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Clear Timers", category_en: "Timers Cleanup",
        question_ka: "რატომაა მნიშვნელოვანი ტაიმერების გასუფთავება (ClearTimeout) კომპიუტერის მეხსიერებისთვის?",
        question_en: "Why is clearing timers (clearTimeout) considered mandatory for system memory management?",
        answer_ka: "თუ აქტიურ ტაიმერებს არ გავასუფთავებთ, ისინი ტოვებენ ფარულ რეფერენსებს მეხსიერებაში (Memory Leaks), რაც დროთა განმავლობაში ანელებს აპლიკაციას.",
        answer_en: "Unresolved active timers hold implicit variable scopes inside memory heaps (Memory Leaks), driving background performance degradation over time.",
        details_ka: "განსაკუთრებით მნიშვნელოვანია SPA ფრეიმვორკებში კომპონენტების წაშლის (Unmount) დროს.",
        details_en: "Critical during unmount lifecycle execution phases inside SPA framework view components.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "JSON Methods", category_en: "JSON Serialization",
        question_ka: "რა მოხდება თუ JSON.parse()-ს გადავცემთ არასწორ, არავალიდურ JSON სტრიქონს?",
        question_en: "What exception triggers if JSON.parse() processes a corrupted or invalid JSON string?",
        answer_ka: "პროცესი დააბრუნებს კრიტიკულ SyntaxError შეცდომას და სრულად გათიშავს კოდის შესრულებას, თუ ის არ არის ჩასმული try...catch ბლოკში.",
        answer_en: "The compilation engine logs a fatal SyntaxError exception, breaking further script execution unless insulated inside try...catch wrappers.",
        details_ka: "ყოველთვის დაიცავით გარედან წაკითხული JSON მონაცემები შეცდომების მართვის ბლოკით.",
        details_en: "Always shield network data parsers inside error tracking configurations.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Search", category_en: "Text Searching",
        question_ka: "როგორ შეგვიძლია შევამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას თანამედროვე მეთოდით?",
        question_en: "How can we safely verify if a text sequence contains a specific keyword using modern APIs?",
        answer_ka: ".includes() მეთოდის დახმარებით. მაგალითად: 'Fullstack'.includes('Full') დააბრუნებს ჭეშმარიტ true-ს.",
        answer_en: "By calling the robust .includes() method. For instance, 'Fullstack'.includes('Full') returns a boolean match of true.",
        details_ka: "ეს მეთოდი არის ქეის-სენსიტიური (Case-sensitive), ანუ დიდ და პატარა ასოებს ასხვავებს.",
        details_en: "This character analyzer operates under case-sensitive compilation match rules.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Padding", category_en: "Text Layouts",
        question_ka: "რას აკეთებენ მეთოდები .padStart() და .padEnd()?",
        question_en: "What formatting task do .padStart() and .padEnd() execute?",
        answer_ka: "ისინი ავსებენ მიმდინარე სტრიქონს სხვა სიმბოლოებით დასაწყისში ან ბოლოში მანამ, სანამ სტრიქონი არ მიაღწევს მოცემულ საბოლოო სიგრძეს.",
        answer_en: "They pad the active text element boundaries with repetitive character patterns until the text spans a precise structural length target.",
        details_ka: "გამოიყენება საათის ფორმატების (02:05) ან საკრედიტო ბარათების ნიღბების შესაქმნელად.",
        details_en: "Commonly configured when structuring UI clock digital readouts (02:05) or hiding card numbers.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Storage Limits", category_en: "Web Storage Engine",
        question_ka: "ინახება თუ არა მონაცემთა ტიპები (მაგ. რიცხვები, ბულიანები) localStorage-ში პირდაპირი სახით?",
        question_en: "Are core primitive types like integers and booleans stored natively inside localStorage layout states?",
        answer_ka: "არა, localStorage ყველაფერს ავტომატურად გარდაქმნის სტრიქონად. ამიტომ ჩაწერილი true უკან წაკითხვისას იქნება ტექსტი 'true'.",
        answer_en: "No, localStorage normalizes all entries into flat text sequences. Storing a primitive true returns it back as a literal string entity 'true'.",
        details_ka: "სწორედ ამიტომ ტიპების შესანარჩუნებლად JSON სერიალიზაცია საუკეთესო გზაა.",
        details_en: "This behavior highlights why structuring configurations inside JSON configurations is a development standard.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Date Setters", category_en: "Date Setters",
        question_ka: "როგორ შეგვიძლია შევუცვალოთ კონკრეტული წელი Date ობიექტის არსებულ ინსტანციას?",
        question_en: "How can we mutate the explicit calendar year property on an active Date instance?",
        answer_ka: "შესაბამისი სეტერ მეთოდის — .setFullYear(year) გამოძახების საშუალებით.",
        answer_en: "By triggering its built-in setter API logic configuration: .setFullYear(year).",
        details_ka: "არსებობს სეტერები ყველა სხვა პარამეტრისთვისაც: .setMonth(), .setDate(), .setHours().",
        details_en: "Complimentary mutation set tools exist for remaining segments: .setMonth(), .setDate().",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "String Index", category_en: "Text Indices",
        question_ka: "როგორ მივიღოთ კონკრეტულ ინდექსზე მყოფი სიმბოლო სტრიქონიდან?",
        question_en: "What expression syntax retrieves a specific isolated character value from a string index location?",
        answer_ka: "კვადრატული ფრჩხილების სინტაქსით str[index] ან სპეციალური მეთოდით — str.charAt(index).",
        answer_en: "Utilizing square brackets notation matrix str[index] or invoking the dedicated string method: str.charAt(index).",
        details_ka: "ინდექსაცია მასივების მსგავსად აქაც ნულიდან (0) იწყება.",
        details_en: "Character offset configurations track starting precisely from index slot zero.",
        lang: "js", component: "comp_4"
    },
    {
        category_ka: "Storage Clear", category_en: "Web Storage Engine",
        question_ka: "რომელი ბრძანებით შეგვიძლია სრულად წავშალოთ localStorage-ის მთელი საცავი ერთდროულად?",
        question_en: "Which API method call flushes and wipes out localStorage datasets completely?",
        answer_ka: "ბრძანებით localStorage.clear(). ის ასუფთავებს მოცემული დომენისთვის ჩაწერილ აბსოლუტურად ყველა გასაღებს.",
        answer_en: "Executing localStorage.clear() flushes every isolated variable binding active on the domain profile.",
        details_ka: "მხოლოდ ერთი კონკრეტული გასაღების წასაშლელად გამოიყენება localStorage.removeItem('key').",
        details_en: "To drop a singular isolated key from the register, apply localStorage.removeItem('key').",
        lang: "js", component: "comp_4"
    },

    // --- COMP_5: DOM არქიტექტურა (101-120) ---
    {
        category_ka: "DOM კვანძები", category_en: "DOM Graph Nodes",
        question_ka: "რა განსხვავებაა querySelector და querySelectorAll მეთოდებს შორის DOM არქიტექტურაში?",
        question_en: "What distinguishes querySelector from querySelectorAll within DOM query routing?",
        answer_ka: "querySelector აბრუნებს პირველივე ნაპოვნ ელემენტს, ხოლო querySelectorAll აბრუნებს ყველა შესაბამის ელემენტს NodeList კოლექციის სახით.",
        answer_en: "querySelector evaluates and yields the very first element match, while querySelectorAll fetches all matches inside a static NodeList.",
        details_ka: "querySelectorAll-ზე მიღებულ კოლექციაზე შეგვიძლია პირდაპირ .forEach() ციკლის გაშვება.",
        details_en: "The static NodeList compiled by querySelectorAll natively supports chained iteration utilities like .forEach().",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Elements", category_en: "DOM Modifiers",
        question_ka: "რით განსხვავდება innerHTML თვისება textContent-ისგან და რა უსაფრთხოების რისკს შეიცავს ის?",
        question_en: "What differentiates innerHTML from textContent and what structural security threat does it introduce?",
        answer_ka: "innerHTML აღქვამს და აშენებს HTML ტეგებს, ხოლო textContent ამუშავებს მხოლოდ სუფთა ტექსტს. innerHTML-ის საფრთხეა XSS (Cross-Site Scripting) თავდასხმები.",
        answer_en: "innerHTML parses raw text into executable HTML tags, whereas textContent handles plain text nodes exclusively. innerHTML exposes sites to dynamic XSS (Cross-Site Scripting) code injection attacks.",
        details_ka: "მომხმარებლისგან მიღებული ტექსტების გამოსატანად ყოველთვის გამოიყენეთ textContent.",
        details_en: "Always deploy textContent when mapping user inputs to the viewport layout.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Creation", category_en: "DOM Modifiers",
        question_ka: "რომელი მეთოდით იქმნება სრულიად ახალი DOM ელემენტი მეხსიერებაში და როგორ ვსვამთ მას გვერდზე?",
        question_en: "Which command provisions a fresh DOM element node inside memory and how is it attached to visible trees?",
        answer_ka: "ელემენტი იქმნება document.createElement('tag') მეთოდით, ხოლო გვერდზე დასამატებლად მშობელ ელემენტს უნდა მივაბათ parent.appendChild(child) მეთოდით.",
        answer_en: "Elements are provisioned via document.createElement('tag'), and appended into active layout structures using the parent.appendChild(child) interface routine.",
        details_ka: "თანამედროვე კოდში appendChild-ის ნაცვლად ხშირად გამოიყენება უფრო მოქნილი parent.append() მეთოდი.",
        details_en: "Modern workflows frequently embrace parent.append() for multi-node adjustments.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "ClassList API", category_en: "ClassList API",
        question_ka: "რა უპირატესობა აქვს element.classList.toggle() მეთოდის გამოყენებას?",
        question_en: "What engineering advantage does element.classList.toggle() bring to layout styling routines?",
        answer_ka: "ის ავტომატურად ამოწმებს კლასის არსებობას: თუ კლასი ელემენტს არ აქვს — ამატებს, ხოლო თუ უკვე აქვს — შლის. ეს აცილებს კოდს ზედმეტ if-else შემოწმებებს.",
        answer_en: "It automates class evaluation flags: if the CSS class is missing, it injects it; if already present, it strips it out, removing redundant conditional checks.",
        details_ka: "ძალიან პოპულარულია ღამის რეჟიმების (Dark mode) ჩართვა-გამორთვის დროს.",
        details_en: "An industry standard implementation when rolling out Dark mode layouts.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Removal", category_en: "DOM Tree Mutators",
        question_ka: "როგორ შეგვიძლია წავშალოთ კონკრეტული ელემენტი DOM ხიდან პირდაპირ?",
        question_en: "How can we drop an active element node directly from the web document graph tree?",
        answer_ka: "ელემენტზე პირდაპირ .remove() მეთოდის გამოძახებით. მაგალითად: element.remove(); სრულად აქრობს მას გვერდიდან.",
        answer_en: "By invoking the dynamic .remove() API method right on the target variable. Example: element.remove(); drops the node instantly.",
        details_ka: "ძველ კოდში ამისთვის გამოიყენებოდა parent.removeChild(child) კონსტრუქცია.",
        details_en: "Legacy software layers triggered parent.removeChild(child) expressions to handle deletions.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "HTML Collections", category_en: "DOM NodeList Matrix",
        question_ka: "რა არის ძირითადი განსხვავება Live HTMLCollection-სა და Static NodeList-ს შორის?",
        question_en: "What structural behaviors separate a Live HTMLCollection from a Static NodeList?",
        answer_ka: "HTMLCollection (getElementsByClassName) არის 'ცოცხალი' და ავტომატურად რეაგირებს DOM-ში ელემენტების ცვლილებაზე, ხოლო NodeList (querySelectorAll) არის სტატიკური კადრი და ინარჩუნებს პირვანდელ მდგომარეობას.",
        answer_en: "An HTMLCollection is a 'live' array-like entity reacting dynamically to runtime DOM shifts, whereas a NodeList functions as a frozen snapshot tracking state limits fixed at query times.",
        details_ka: "HTMLCollection არ უჭერს მხარს .forEach() მეთოდს, საჭიროებს მასივად გარდაქმნას.",
        details_en: "HTMLCollections lack built-in prototype chains supporting direct .forEach() iterations.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Manipulation", category_en: "DOM Modifiers",
        question_ka: "როგორ შეგვიძლია მივანიჭოთ ან შევცვალოთ ელემენტის Inline სტილები ჯავასკრიპტიდან?",
        question_en: "How can we append or alter inline structural style markers directly from JavaScript layers?",
        answer_ka: "თვისება element.style.property-ის გამოყენებით. მაგალითად: element.style.backgroundColor = 'blue'; სტილებს ცვლის უშუალოდ HTML ტეგში.",
        answer_en: "By accessing properties down the element.style path. For example, setting element.style.backgroundColor = 'blue'; mutates parameters on target nodes.",
        details_ka: "ჯავასკრიპტში CSS-ის ტირეებიანი თვისებები (background-color) გადადის CamelCase სინტაქსში (backgroundColor).",
        details_en: "CSS properties configured with hyphenated keys translate over into standard camelCase syntax bindings.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Attributes", category_en: "DOM Attributes",
        question_ka: "რომელი მეთოდები გამოიყენება HTML ატრიბუტების (მაგ. src, href) სამართავად?",
        question_en: "Which baseline API methods govern operations surrounding HTML data attributes?",
        answer_ka: "ატრიბუტების სამართავად გვაქვს სამი ძირითადი მეთოდი: element.getAttribute('attr'), element.setAttribute('attr', 'value') და element.removeAttribute('attr').",
        answer_en: "Attribute nodes align under three main methods: element.getAttribute(), element.setAttribute(), and element.removeAttribute().",
        details_ka: "მათი გამოყენებით შეგვიძლია ნებისმიერი ვალიდური ატრიბუტი დინამიურად შევცვალოთ.",
        details_en: "They make properties manipulation highly declarative during system runtime phases.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Data Attributes", category_en: "Dataset API",
        question_ka: "რა არის dataset თვისება და როგორ ვკითხულობთ custom HTML ატრიბუტებს (data-*)?",
        question_en: "What functionality does the dataset object resolve and how do we decode custom data-* attributes?",
        answer_ka: "dataset აერთიანებს ყველა ატრიბუტს, რომელიც HTML-ში იწყება data- პრეფიქსით. წვდომა ხდება data-id='5' -> element.dataset.id სინტაქსით.",
        answer_en: "The dataset API maps custom node tags defined with data- prefixes into active keys. A declaration like data-id='5' routes through element.dataset.id configurations.",
        details_ka: "ეს არის ოფიციალური გზა HTML-ში დამატებითი მეტამონაცემების უსაფრთხოდ შესანახად.",
        details_en: "This standard holds custom metadata states securely within document node configurations.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Navigation", category_en: "DOM Tree Routing",
        question_ka: "როგორ მივწვდეთ ელემენტის უშუალო მშობელ კვანძს DOM იერარქიაში?",
        question_en: "Which navigation selector points straight to an active element's immediate parent node?",
        answer_ka: "თვისება element.parentElement-ის დახმარებით. ის აბრუნებს იერარქიაში მის ზედა HTML ელემენტს.",
        answer_en: "Referencing the element.parentElement property tracking graph paths to the enclosing layout wrapper node.",
        details_ka: "თუ უშუალო მშობელი არ არის HTML ელემენტი, ის დააბრუნებს null-ს.",
        details_en: "If the parent bounding boundary falls outside structural elements specs, it evaluates to null.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Children", category_en: "DOM Tree Routing",
        question_ka: "რა განსხვავებაა element.children-სა და element.childNodes-ს შორის?",
        question_en: "What isolates element.children from the adjacent element.childNodes index array?",
        answer_ka: "element.children აბრუნებს მხოლოდ ნამდვილ HTML ელემენტების კოლექციას, ხოლო childNodes აბრუნებს აბსოლუტურად ყველა კვანძს, მათ შორის ტექსტებსა და გამოტოვებებს (Text nodes).",
        answer_en: "element.children filters out noise to target structural HTML elements, while childNodes maps everything including space fragments and text comment blocks.",
        details_ka: "უმეტეს შემთხვევაში დეველოპერებს სჭირდებათ სუფთა element.children თვისება.",
        details_en: "90% of structural layout scripts focus entirely on accessing standard element.children arrays.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "DOM Fragments", category_en: "DOM Optimizations",
        question_ka: "რა არის DocumentFragment და როგორ ზოგავს ის ვებგვერდის რენდერინგის რესურსებს?",
        question_en: "What is a DocumentFragment and how does it save webpage rendering resources?",
        answer_ka: "ეს არის ვირტუალური, უხილავი DOM კონტეინერი. მასზე ჯერ ვამაგრებთ ბევრ ახალ ელემენტს მეხსიერებაში და შემდეგ მთელ ფრაგმენტს ერთიანად ვსვამთ რეალურ DOM ხეში, რაც იცავს გვერდს ზედმეტი Reflow ოპერაციებისგან.",
        answer_en: "A lightweight, offscreen virtual DOM wrapper. Elements attach here in memory before a singular batch injection flushes changes to the live viewport tree, minimizing costly browser reflow computations.",
        details_ka: "ეს არის ერთ-ერთი საუკეთესო პრაქტიკა მაღალი პერფორმანსისთვის.",
        details_en: "An optimization pattern deployed to support smooth heavy layout modifications.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Closest Method", category_en: "DOM Tree Routing",
        question_ka: "როგორ მუშაობს element.closest(selector) მეთოდი DOM-ში?",
        question_en: "How does the native element.closest(selector) search routine operate?",
        answer_ka: "ის იწყებს ძებნას თავად ელემენტიდან და მიდის იერარქიულად ზემოთ (მშობლების მიმართულებით) მანამ, სანამ არ იპოვის პირველივე ელემენტს, რომელიც შეესაბამება მითითებულ CSS სელექტორს.",
        answer_en: "It initiates selector scans from the immediate node, testing ancestors sequentially upwards until resolving the first parent item passing the matched CSS parameter queries.",
        details_ka: "თუ ვერაფერი იპოვა იერარქიის მწვერვალამდე, მეთოდი აბრუნებს null-ს.",
        details_en: "If the selection query hits the root layout context document without success, it resolves to null.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Matches Method", category_en: "DOM Element Checks",
        question_ka: "რას აკეთებს მეთოდი element.matches(selector) ჯავასკრიპტში?",
        question_en: "What verification task does element.matches(selector) address?",
        answer_ka: "ის ამოწმებს, შეესაბამება თუ არა მოცემული ელემენტი კონკრეტულ CSS სელექტორს და აბრუნებს ლოგიკურ პასუხს (true/false).",
        answer_en: "It cross-references the targeted element criteria against CSS selector strings, returning a boolean confirmation (true/false).",
        details_ka: "ძალიან სასარგებლოა ივენთების დელეგირების (Event Delegation) დროს პირობის შესამოწმებლად.",
        details_en: "Highly efficient when executing inside event delegation filter traps.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Insert Adjacent", category_en: "DOM Tree Mutators",
        question_ka: "რა უპირატესობა აქვს element.insertAdjacentHTML() მეთოდს innerHTML-თან შედარებით?",
        question_en: "What structural benefit does element.insertAdjacentHTML() offer over standard innerHTML assignments?",
        answer_ka: "ის საშუალებას გვაძლევს ჩავსვათ HTML კოდი ელემენტის კონკრეტულ პოზიციაზე (მაგ. 'beforebegin', 'beforeend') ისე, რომ არ მოხდეს არსებული შიდა ელემენტების ხელახალი გადაწერა და განადგურება.",
        answer_en: "It provisions raw text string translations to direct HTML nodes targeting precise spatial tags ('beforebegin', 'beforeend') without triggering destructive re-parses on pre-existing child nodes.",
        details_ka: "ის ბევრად უფრო სწრაფია ვიდრე სრული innerHTML კონსტრუქციები.",
        details_en: "It executes layout updates faster than wiping innerHTML slots cleanly.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Window Load", category_en: "Page Lifecycle Events",
        question_ka: "რა განსხვავებაა DOMContentLoaded და window.onload ივენთებს შორის გვერდის ჩატვირთვისას?",
        question_en: "What timeline milestone separates DOMContentLoaded from window.onload execution triggers?",
        answer_ka: "DOMContentLoaded აქტიურდება მაშინვე, როგორც კი HTML სტრუქტურა სრულად აშენდება (სურათების და სტილების მოლოდინის გარეშე), ხოლო window.onload ელოდება აბსოლუტურად ყველა რესურსის, მათ შორის მძიმე სურათების ჩატვირთვას.",
        answer_en: "DOMContentLoaded fires immediately once the raw markup text parses into a valid HTML tree structure (bypassing heavy media styles loaders), whereas window.onload halts execution until all external images resolve.",
        details_ka: "სკრიპტების უმეტესობა ოპტიმიზაციისთვის ჯდება DOMContentLoaded ივენთზე.",
        details_en: "Standard frontend bootstrap scripts attach into the DOMContentLoaded phase to cut loading lags.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "ClassList API", category_en: "ClassList API",
        question_ka: "როგორ შეგვიძლია წავშალოთ კონკრეტული კლასი ელემენტის კლასების სიიდან?",
        question_en: "How do we explicitly drop a targeted style layout class from a DOM element?",
        answer_ka: "element.classList.remove('classname') მეთოდის გამოძახებით. ის უსაფრთხოდ შლის მითითებულ კლასს, სხვებს კი უცვლელს ტოვებს.",
        answer_en: "Invoking the precise method: element.classList.remove('classname'). It drops the single class configuration cleanly while isolating adjacent keys.",
        details_ka: "კლასის დასამატებლად გამოიყენება შესაბამისად .add() მეთოდი.",
        details_en: "To append style markers onto targets instead, issue a .add() sequence request.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Node Types", category_en: "DOM Tree Reflection",
        question_ka: "როგორ შეგვიძლია გავიგოთ DOM კვანძის ტიპი ციფრულად (NodeType)?",
        question_en: "How do we inspect a DOM node's raw internal type assignment code (nodeType)?",
        answer_ka: "თვისება element.nodeType-ის საშუალებით. მაგალითად, თუ ის აბრუნებს 1-ს — ეს არის ჩვეულებრივი ელემენტი, ხოლო თუ აბრუნებს 3-ს — ეს არის ტექსტური კვანძი (Text Node).",
        answer_en: "By probing the nodeType code repository. A returned code value of 1 marks standard Elements metadata, while an evaluation of 3 targets clean Text Nodes.",
        details_ka: "დოკუმენტის ძირეული კვანძი (document) აბრუნებს ციფრ 9-ს.",
        details_en: "The structural root node wrapper layout (document) drops an identifier value code of 9.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Clone Node", category_en: "DOM Tree Mutators",
        question_ka: "როგორ მუშაობს element.cloneNode(deep) მეთოდი და რას ცვლის პარამეტრი true?",
        question_en: "How does element.cloneNode(deep) execute and what layout shift occurs by passing true?",
        answer_ka: "ეს მეთოდი აკეთებს ელემენტის ასლს. თუ გადავცემთ true-ს, ის აკოპირებს ელემენტს მთელ მის შიდა სტრუქტურასთან და შვილებთან ერთად (Deep Clone), წინააღმდეგ შემთხვევაში კი მხოლოდ ცარიელ გარე ტეგს.",
        answer_en: "This interface compiles an object copy of the web node. Passing a true flag initiates deep cloning mechanics replicating all child sub-trees, whereas false mirrors empty outer shells.",
        details_ka: "გაითვალისწინეთ, რომ ივენთ მსმენელები (Event Listeners) ამ დროს ასლზე ავტომატურად არ გადადის.",
        details_en: "Note that underlying attached event listener bindings are discarded during deep node duplicates.",
        lang: "js", component: "comp_5"
    },
    {
        category_ka: "Dynamic Stylings", category_en: "DOM Modifiers",
        question_ka: "რატომ არ არის რეკომენდებული ბევრი სტილის შეცვლა element.style-ით და რა არის უკეთესი ალტერნატივა?",
        question_en: "Why is heavy inline style modification via element.style discouraged and what is the design alternative?",
        answer_ka: "element.style-ის ყოველი ხაზი ბრაუზერს აიძულებს ხელახლა გადაითვალოს გვერდის გეომეტრია (Reflow). უკეთესია წინასწარ შევქმნათ CSS კლასი და JS-ით მხოლოდ კლასის სახელი შევუცვალოთ ელემენტს.",
        answer_en: "Modifying elements inline repetitive-style challenges frame metrics calculation steps, triggering severe rendering recalculation bottlenecks (Reflow). The standard fix maps updates into pre-defined CSS classes toggled by script triggers.",
        details_ka: "ეს უზრუნველყოფს სტილების და ლოგიკის სუფთა გამიჯვნას.",
        details_en: "This architectural habit partitions styling design paradigms away from controller files.",
        lang: "js", component: "comp_5"
    },

    // --- COMP_6: ასინქრონული პროცესები (121-140) ---
    {
        category_ka: "ასინქრონული პროცესები", category_en: "Promise Lifecycle",
        question_ka: "რა სამი მდგომარეობა (States) შეიძლება ჰქონდეს Promise ობიექტს მისი სასიცოცხლო ციკლის განმავლობაში?",
        question_en: "What three state resolutions define a Promise object during its live network cycle?",
        answer_ka: "Promise შეიძლება იყოს: pending (მიმდინარე მოლოდინი), fulfilled (წარმატებით შესრულებული) ან rejected (შეცდომით დასრულებული).",
        answer_en: "A Promise holds either a pending state (waiting), a fulfilled state (success), or a rejected resolution state (error).",
        details_ka: "მდგომარეობის შეცვლა ხდება მხოლოდ ერთხელ. pending-იდან Promise გადადის ან fulfilled-ში, ან rejected-ში.",
        details_en: "Transitions lock permanently once established, resolving from pending into either fulfilled or rejected paths.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Async Await", category_en: "Async Syntax",
        question_ka: "რა არის async/await სინტაქსური დანიშნულება ჯავასკრიპტში?",
        question_en: "What is the strategic objective behind the async/await syntax in JavaScript?",
        answer_ka: "ეს არის სპეციალური სინტაქსური 'შაქარი' (Syntactic Sugar), რომელიც ასინქრონულ პრომისებზე დაფუძნებულ კოდს ვიზუალურად აქცევს სინქრონულ, ხაზოვან და მარტივად წასაკითხ კოდად.",
        answer_en: "It acts as a protective syntactic sugar wrap over native Promises, formatting async operations to mimic synchronous, linear block flows that scale code readability.",
        details_ka: "await ოპერატორის გამოყენება შესაძლებელია მხოლოდ იმ ფუნქციის შიგნით, რომელსაც აქვს async პრეფიქსი.",
        details_en: "The await execution call can only position inside function structures preceded with async keywords.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Error Handling", category_en: "Error Handling",
        question_ka: "როგორ ვმართავთ შეცდომებს (Errors) async/await სინტაქსის გამოყენების დროს?",
        question_en: "How do we trap and process operational errors when deploying async/await syntax rules?",
        answer_ka: "სტანდარტული try...catch ბლოკების დახმარებით. კოდს, რომელმაც შეიძლება შეცდომა დააბრუნოს, ვსვამთ try სექციაში, ხოლო ავარიულ სცენარს ვმართავთ catch ბლოკში.",
        answer_en: "By encapsulating asynchronous code parameters inside traditional try...catch architectural blocks, redirecting error routing pipelines down clean catch handlers.",
        details_ka: "ეს სრულად ანაცვლებს ძველ .catch() მეთოდებს პრომისების ჯაჭვიდან.",
        details_en: "This architecture replaces repetitive chain injections of explicit legacy .catch() method listeners.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Fetch API", category_en: "Network Operations",
        question_ka: "რა არის ჩაშენებული fetch() მეთოდის დანიშნულება და რა ტიპის ობიექტს აბრუნებს ის?",
        question_en: "What role does the native fetch() API address and what structure does it resolve?",
        answer_ka: "fetch() გამოიყენება ქსელში HTTP მოთხოვნების გასაგზავნად (მაგ. API-დან მონაცემების წამოსაღებად). ის დაუყოვნებლივ აბრუნებს Promise ობიექტს.",
        answer_en: "fetch() triggers underlying global web interface requests (fetching remote API packages), immediately compiling and returning a distinct native Promise model.",
        details_ka: "მიღებული პასუხის ობიექტი საჭიროებს ტრანსფორმაციას, მაგალითად response.json() მეთოდით.",
        details_en: "The raw response payload requires manual deserialization down common tracks like response.json().",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "JSON Parsing Async", category_en: "Network Operations",
        question_ka: "რატომ არის response.json() მეთოდი ასინქრონული და რატომ სჭირდება მას ხელახალი await?",
        question_en: "Why is the response.json() conversion routine classified as asynchronous, requiring its own await flag?",
        answer_ka: "რადგან HTTP პასუხის ჰედერების მიღების შემდეგ, თავად მონაცემთა ძირითადი ბლოკის (Body) სრული გადმოწერა და ტექსტიდან JS ობიექტად პარსვა ქსელში გარკვეულ დროს მოითხოვს.",
        answer_en: "Because intercepting initial HTTP data headers is instantaneous, while buffering the remaining payload text to parse strings into active memory configurations consumes real network duration.",
        details_ka: "მაგალითი: const data = await response.json();",
        details_en: "Standard script implementation layout: const data = await response.json();",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "HTTP Methods", category_en: "CRUD Conventions",
        question_ka: "ჩამოთვალეთ 4 ძირითადი HTTP მეთოდი, რომლებიც შეესაბამება CRUD არქიტექტურას.",
        question_en: "List 4 baseline HTTP verbs matching data storage CRUD conventions.",
        answer_ka: "CRUD მეთოდებია: GET (მონაცემის წაკითხვა), POST (ახლის შექმნა), PUT/PATCH (რედაქტირება) და DELETE (მონაცემის წაშლა).",
        answer_en: "The core HTTP verbs register as: GET (Read), POST (Create), PUT/PATCH (Update), and DELETE (Delete).",
        details_ka: "fetch()-ში ნაგულისხმევი მეთოდია GET. სხვა მეთოდებისთვის საჭიროა options კონფიგურაციის გადაცემა.",
        details_en: "fetch() implicitly triggers GET defaults unless alternative parameter vectors target configurations overrides.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Promise All", category_en: "Concurrency APIs",
        question_ka: "როგორ მუშაობს კომბინირებული მეთოდი Promise.all()?",
        question_en: "How does the concurrent combination helper Promise.all() behave?",
        answer_ka: "ის იღებს პრომისების მასივს და ელოდება აბსოლუტურად ყველას წარმატებით დასრულებას. თუ ერთი პრომისი მაინც ჩავარდება შეცდომით, მთელი Promise.all() მაშინვე უარყოფილია.",
        answer_en: "It processes an input collection of separate promises, pausing execution until every task resolves successfully. If even one promise fails, the overarching master thread aborts to a rejected state.",
        details_ka: "გამოიყენება პარალელური, ერთმანეთისგან დამოუკიდებელი რექვესტების დასაჩქარებლად.",
        details_en: "Designed to trigger highly optimized parallel micro-service background tracking queries.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Promise Race", category_en: "Concurrency APIs",
        question_ka: "რა პრინციპით მუშაობს მეთოდი Promise.race()?",
        question_en: "What core validation metric rules the Promise.race() algorithm?",
        answer_ka: "ის აბრუნებს იმ პირველივე პრომისის შედეგს (წარმატებას ან შეცდომას), რომელიც ყველაზე სწრაფად, პირველი მივა ფინიშამდე.",
        answer_en: "It intercept and locks the outcome payload of whichever single child promise settles first (either success or failure resolution entries), dropping late entries.",
        details_ka: "გამოიყენება ქსელის რექვესტებზე მაქსიმალური მოლოდინის დროის (Timeout) დასაწესებლად.",
        details_en: "Frequently deployed to configure absolute timeout limits on highly latent network nodes.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Fetch Options", category_en: "Network Operations",
        question_ka: "როგორ გადავცემთ POST რექვესტის დროს მონაცემებს fetch მეთოდში?",
        question_en: "How do we forward body data streams when building explicit POST fetch queries?",
        answer_ka: "fetch-ის მეორე კონფიგურაციის არგუმენტში ვწერთ method: 'POST', ვამატებთ სათანადო headers-ს და body ველში გადავცემთ JSON სტრიქონს: body: JSON.stringify(data).",
        answer_en: "Inside the optional secondary configuration object argument, assign method: 'POST', include appropriate content headers, and append serialized JSON string data payload inside fields under body.",
        details_ka: "ატრიბუტი 'Content-Type': 'application/json' აუცილებელია ჰედერებში.",
        details_en: "Specifying 'Content-Type': 'application/json' within request headers is required.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "HTTP Statuses", category_en: "Network Operations",
        question_ka: "რას ნიშნავს, როდესაც სერვერი აბრუნებს HTTP სტატუსის კოდს 404 ან 500?",
        question_en: "What runtime occurrences do HTTP status codes 404 or 500 communicate?",
        answer_ka: "404 ნიშნავს, რომ მოთხოვნილი რესურსი/მისამართი ვერ მოიძებნა (Not Found), ხოლო 500 მიუთითებს სერვერის შიდა კრიტიკულ შეცდომაზე (Internal Server Error).",
        answer_en: "Code 404 logs that target endpoints or resources are completely missing (Not Found), whereas 500 indexes severe backend software operational errors.",
        details_ka: "წარმატებული ქსელური ოპერაციები ძირითადად აბრუნებენ 200-იან კოდებს.",
        details_en: "Standard successful HTTP operations route status feedback signals within the 200-299 spectrum.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Response OK", category_en: "Network Operations",
        question_ka: "აგდებს თუ არა fetch() ავტომატურად შეცდომას (catch) თუ სერვერიდან მოვიდა 404 ან 500 სტატუსი?",
        question_en: "Does a native fetch() run automatically fail (triggering catch states) if network paths report a 404 or 500 status?",
        answer_ka: "არა, fetch() შეცდომას აგდებს მხოლოდ ფიზიკური ქსელის გათიშვის ან არასწორი დომენის დროს. სტატუსების შესამოწმებლად უნდა გამოვიყენოთ თვისება response.ok.",
        answer_en: "No, fetch() drops out to catch routines strictly under total hardware failure states or corrupted target URLs. To catch status problems, inspect response.ok flags.",
        details_ka: "თუ response.ok არის false, კოდში ხელით უნდა ვისროლოთ შეცდომა (throw new Error).",
        details_en: "If response.ok flags resolve as false, throw custom programmatic exceptions manually inside scripts.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Callbacks Hell", category_en: "Async Paradigms",
        question_ka: "რა არის 'Callback Hell' (ქოლბექების ჯოჯოხეთი) და რატომ შეიქმნა პრომისები მის მოსაგვარებლად?",
        question_en: "What layout anomaly constitutes 'Callback Hell' and why were Promises engineered to resolve it?",
        answer_ka: "ეს არის ასინქრონული კოდის წერის ძველი სტილი, სადაც ფუნქციები ჩასმული იყო ერთმანეთში, რაც კოდს პირამიდისებურს, წაუკითხავსა და ბაგებისკენ მიდრეკილს ხდიდა.",
        answer_en: "An ancient nested callback coding approach where operational dependencies branched deeply into multi-layered nested structures, creating hard-to-debug code shapes.",
        details_ka: "პრომისებმა ეს პრობლემა მოხსნეს ხაზოვანი .then() ჯაჭვების შემოღებით.",
        details_en: "Promises flattened these configurations by deploying chained linear .then() operational methods.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Promise Resolve", category_en: "Promise Constructors",
        question_ka: "როგორ იქმნება ახალი პრომისი ხელით და რა ორ ფუნქციას იღებს მისი კონსტრუქტორი?",
        question_en: "How do we construct a proprietary custom Promise instance and what parameters rule its executor routine?",
        answer_ka: "იქმნება new Promise((resolve, reject) => {}) სინტაქსით. resolve გამოიძახება წარმატებული დასრულებისას, ხოლო reject — შეცდომისას.",
        answer_en: "By initiating syntax blueprints: new Promise((resolve, reject) => {}). The resolve token triggers upon successful task completion, while reject pipes error events downstream.",
        details_ka: "ეს საშუალებას გვაძლევს ნებისმიერი ძველი ასინქრონული ფუნქცია პრომისად გადავაკეთოთ.",
        details_en: "This technique transitions older async utility flows into clean modern promise-compliant layers.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Promise Finally", category_en: "Promise Lifecycle",
        question_ka: "რა დანიშნულება აქვს .finally() ბლოკს პრომისების არქიტექტურაში?",
        question_en: "What unique execution role does the .finally() block fulfill within promise flows?",
        answer_ka: "ის სრულდება აბსოლუტურად ყოველთვის, მიუხედავად იმისა, პრომისი წარმატებით დასრულდა (fulfilled) თუ შეცდომით (rejected).",
        answer_en: "It executes unconditionally, running its structural cleanup payload regardless of whether the promise resolves successfully or aborts with an error.",
        details_ka: "გამოიყენება გვერდზე ჩატვირთვის ინდიკატორების (Spinners) გასათიშად ნებისმიერი ფინალის დროს.",
        details_en: "A standard destination to disable UI loading spinners once a network operation settles.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Axios vs Fetch", category_en: "Network Ecosystem",
        question_ka: "რა უპირატესობა აქვს გარე ბიბლიოთეკა Axios-ს სტანდარტულ fetch() მეთოდთან შედარებით?",
        question_en: "What developer conveniences does the Axios package manage over raw fetch() APIs?",
        answer_ka: "Axios ავტომატურად აკეთებს JSON მონაცემების სერიალიზაციას და პარსვას, პირდაპირ აგდებს შეცდომას 400/500 კოდებზე და უზრუნველყოფს რექვესტების მარტივ ინტერცეპტაციას (Interceptors).",
        answer_en: "Axios abstracts data transformations by auto-parsing JSON buffers, natively maps 400/500 status returns to error blocks, and implements globally shared interception routing hooks (Interceptors).",
        details_ka: "დიდ საწარმოო პროექტებში Axios-ის გამოყენება ძალიან პოპულარულია.",
        details_en: "Enterprise production frameworks integrate Axios deeply to standardize client management workflows.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "AJAX", category_en: "Asynchronous Web",
        question_ka: "რას ნიშნავს ტერმინი AJAX ვებ დეველოპმენტში?",
        question_en: "What structural web concept does the term AJAX capture?",
        answer_ka: "ნიშნავს Asynchronous JavaScript and XML. ეს არის მიდგომა, რომელიც საშუალებას აძლევს ვებგვერდს განაახლოს მონაცემები ფონურ რეჟიმში სერვერიდან, მთლიანი გვერდის გადატვირთვის გარეშე.",
        answer_en: "It stands for Asynchronous JavaScript and XML. It describes structural techniques that query remote backend API nodes in the background without refreshing active browser windows.",
        details_ka: "დღეს XML-ის ნაცვლად თითქმის ყველგან გამოიყენება ბევრად უფრო მსუბუქი JSON ფორმატი.",
        details_en: "Modern applications have replaced heavy historical XML nodes with high-performance flat JSON schemas.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "CORS policies", category_en: "Network Security",
        question_ka: "რა არის CORS შეცდომა (Cross-Origin Resource Sharing) ქსელური მოთხოვნებისას?",
        question_en: "What runtime browser security policy triggers a CORS (Cross-Origin Resource Sharing) exception?",
        answer_ka: "ეს არის ბრაუზერის უსაფრთხოების პოლიტიკა, რომელიც ბლოკავს ფრონტენდიდან მოთხოვნის გაგზავნას სხვა დომენზე/პორტზე, თუ ის სერვერიდან მკაფიოდ არ არის ნებადართული სათანადო ჰედერებით.",
        answer_en: "A critical browser layer firewall protecting clients by blocking script routines from accessing third-party domains or custom ports unless remote systems send compliant validation headers.",
        details_ka: "CORS-ის გასასწორებლად საჭიროა ცვლილებების შეტანა სერვერის (Back-end) კონფიგურაციაში.",
        details_en: "Resolving CORS blocks demands modifying backend headers to authorize cross-domain visibility paths.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Websockets API", category_en: "Realtime Protocols",
        question_ka: "რით განსხვავდება WebSocket პროტოკოლი ტრადიციული HTTP რექვესტებისგან?",
        question_en: "What protocol model isolates WebSockets from standard HTTP network operations?",
        answer_ka: "HTTP არის ცალმხრივი მოთხოვნა-პასუხის მოდელი, ხოლო WebSocket ხსნის ორმხრივ, მუდმივ, რეალურ დროში მომუშავე კავშირს (Full-duplex) კლიენტსა და სერვერს შორის.",
        answer_en: "HTTP follows one-way single-shot request-response patterns, whereas WebSockets anchor persistent, bi-directional, real-time data streaming (Full-duplex) bridges across contexts.",
        details_ka: "გამოიყენება ჩატების, ონლაინ თამაშებისა და ფინანსური თრექერების ასაწყობად.",
        details_en: "Crucial for engineering interactive live chat systems, multiplayer logic layouts, or financial tickers.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Event Loop micro", category_en: "Event Loop Async",
        question_ka: "რა რიგითობით დაიბეჭდება კონსოლში ციფრები ამ კოდის გაშვებისას: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);?",
        question_en: "What exact console sequence logs when firing this script: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);?",
        answer_ka: "დაიბეჭდება რიგითობით: 1, 4, 3, 2. ჯერ სრულდება სინქრონული კოდი (1, 4), შემდეგ მიკროდავალებები (Promise: 3) და ბოლოს მაკროდავალებები (setTimeout: 2).",
        answer_en: "The console prints in sequence: 1, 4, 3, 2. The engine discharges top-level synchronous code first (1, 4), drains the microtasks stack (Promise: 3), and handles macrotasks (setTimeout: 2).",
        details_ka: "ეს ქცევა სრულად არის განსაზღვრული Event Loop-ის არქიტექტურით.",
        details_en: "This deterministic order tracks parameters governed by the browser's core Event Loop design specifications.",
        lang: "js", component: "comp_6"
    },
    {
        category_ka: "Async Retvals", category_en: "Async Syntax",
        question_ka: "რას აბრუნებს ნებისმიერი ფუნქცია ავტომატურად, თუ მის წინ მიწერილია async საკვანძო სიტყვა?",
        question_en: "What structural container does any regular JavaScript function return automatically if prepended with async?",
        answer_ka: "ის ავტომატურად აბრუნებს Promise ობიექტს, მაშინაც კი, თუ ფუნქციის შიგნიდან უბრალო ტექსტს ან რიცხვს დავაბრუნებთ (ის პრომისში შეიფუთება).",
        answer_en: "It guarantees the configuration wraps its output inside a fully compliant Promise instance container, packaging primitives automatically.",
        details_ka: "მაგალითი: async function test() { return 5; } test().then(val => console.log(val));",
        details_en: "Code verify signature: async function test() { return 5; } test().then(val => console.log(val));",
        lang: "js", component: "comp_6"
    },


    // ==========================================
    // TYPESCRIPT (4 კომპონენტი x 20 კითხვა = 80)
    // ==========================================

    // --- COMP_7: სტატიკური ტიპიზაცია (141-160) ---
    {
        category_ka: "TS საფუძვლები", category_en: "TS Infrastructure",
        question_ka: "რა როლს ასრულებს ტიპების სისტემა კოდის წერის პროცესში?",
        question_en: "What role does the type system play during the code authoring process?",
        answer_ka: "JavaScript-ში ტიპების არარსებობა დიდ პროექტებში იწვევდა ბევრ შეცდომას მუშაობის დროს. TS აჩენს ამ შეცდომებს კომპილაციის ეტაპზევე.",
        answer_en: "The absence of type enforcement in JavaScript caused frequent runtime exceptions within large-scale codebases. TS exposes these issues early during compilation.",
        details_ka: "ეს ინსტრუმენტი კოდს უფრო პროგნოზირებადს ხდის.",
        details_en: "This tooling injects structural safety and predictability before runtime frames trigger.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ისტორია", category_en: "TS Roots",
        question_ka: "რომელ წელს წარადგინა პირველად Microsoft-მა TypeScript და ვინ არის მისი ავტორი?",
        question_en: "In what year did Microsoft launch TypeScript and who is its lead designer?",
        answer_ka: "2012 წელს, ავტორია ანდერს ჰეილსბერგი (Anders Hejlsberg), C#-ის შემქმნელი.",
        answer_en: "It debuted in 2012, designed by Anders Hejlsberg, the prominent engineer behind the C# language framework.",
        details_ka: "პროექტი თავიდანვე გამოვიდა, როგორც ღია კოდის (Open Source) მქონე პროდუქტი.",
        details_en: "The framework launched as a fully open-source ecosystem project from its very first day.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS პოპულარობა", category_en: "TS Ecosystem",
        question_ka: "Google-ის მიერ მიღებულმა რომელმა გადაწყვეტილებამ გაზარდა მკვეთრად TypeScript-ის პოპულარობა?",
        question_en: "Which critical architectural pivot by Google dramatically boosted TypeScript adoption?",
        answer_ka: "Google-მა გადაწყვიტა Angular 2 ფრეიმვორკი სრულად დაეწერა TypeScript-ზე.",
        answer_en: "Google mandated that the entire Angular 2 core architecture be re-engineered from scratch utilizing TypeScript options.",
        details_ka: "ამ ნაბიჯის შემდეგ TypeScript ინდუსტრიის სტანდარტად იქცა.",
        details_en: "This choice established TS as a modern web standard across development companies.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS თავსებადობა", category_en: "TS Execution Bounds",
        question_ka: "ესმით თუ არა ვებ-ბრაუზერებს TypeScript კოდი პირდაპირ?",
        question_en: "Can web browsers interpret and process TypeScript source code directly?",
        answer_ka: "არა, ბრაუზერებს არ ესმით TypeScript, მათ ესმით მხოლოდ JavaScript, ამიტომ საჭიროა კოდის წინასწარი კომპილაცია.",
        answer_en: "No, production web environments do not parse TypeScript; they interpret plain, standardized JavaScript engines exclusively.",
        details_ka: "ბრაუზერში გაშვებამდე .ts ფაილიდან ტიპების მთელი სისტემა იშლება.",
        details_en: "Before reaching production, compiler steps strip out all type assertions from assets.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ტიპიზაცია", category_en: "Type Annotations",
        question_ka: "რა არის 'Type Annotation' (ტიპის მინიჭება) TypeScript-ში?",
        question_en: "What is the core definition of a Type Annotation within TypeScript syntax?",
        answer_ka: "ცვლადის შექმნისას მისი მონაცემთა ტიპის მკაფიოდ გაწერა ორწერტილის (:) დახმარებით.",
        answer_en: "The explicit declaration of a memory binding's structural primitive data type appended via a colon sign.",
        details_ka: "მაგალითი: let age: number = 25;",
        details_en: "Syntax configuration standard: let age: number = 25;",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ტიპების დასკვნა", category_en: "Inference Systems",
        question_ka: "რა განსხვავებაა Explicit და Implicit ტიპის მინიჭებას შორის?",
        question_en: "What is the distinction between Explicit and Implicit type assignment tracks?",
        answer_ka: "Explicit-ის დროს ტიპს თავად ვწერთ, ხოლო Implicit-ის დროს TypeScript თავად ხვდება ტიპს მნიშვნელობიდან (Type Inference).",
        answer_en: "Explicit setups append types manually, whereas Implicit tracking lets the compiler infer types automatically from variable values.",
        details_ka: "მაგალითი: let name = 'Tatia'; — ავტომატურად ხვდება, რომ String-ია.",
        details_en: "Example logic tracking: let name = 'Tatia'; infers a primitive string template.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS რიცხვები", category_en: "Number Types",
        question_ka: "აქვს თუ არა TypeScript-ს ცალკე ტიპი მთელი და ათწილადი რიცხვებისთვის?",
        question_en: "Does TypeScript branch distinct primitive types for whole integers and decimals?",
        answer_ka: "არა, ორივესთვის გამოიყენება ერთი საერთო ტიპი — number, ისევე როგორც ჩვეულებრივ ჯავასკრიპტში.",
        answer_en: "No, both computational expressions are represented uniformly under a single primitive type definition: number.",
        details_ka: "აქ ყველა რიცხვი (int თუ float) თავსდება number-ში.",
        details_en: "Both integer entries and floating decimals map safely inside numbers parameters.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ლოგიკა", category_en: "Booleans Primitives",
        question_ka: "რისთვის გამოიყენება boolean ტიპი ტაიპსკრიპტში?",
        question_en: "What is the semantic purpose of the primitive boolean type?",
        answer_ka: "ლოგიკური მნიშვნელობების — true (ჭეშმარიტი) ან false (მცდარი) შესანახად.",
        answer_en: "To store true or false logical binary states inside execution properties variables.",
        details_ka: "გამოიყენება გადამრთველების და პირობითი შემოწმებების დროშების აღსაწერად.",
        details_en: "Mainly configured to handle conditional branches and view visibility layers toggle flags.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS საფრთხეები", category_en: "Escape Hatches",
        question_ka: "რას აკეთებს განსაკუთრებული ტიპი any და რატომაა ის საფრთხის შემცველი?",
        question_en: "What behavior does the special any type introduce into code compilation?",
        answer_ka: "any აუქმებს ტიპების ყოველგვარ შემოწმებას და ცვლადს აძლევს ნებისმიერი მონაცემის მიღების უფლებას, რაც აქრობს TS-ის უსაფრთხოებას.",
        answer_en: "any instructs the type checker to skip evaluation bounds on the target, welcoming any incoming data layout payload and disabling type safety.",
        details_ka: "მისი ბოროტად გამოყენება კოდს ისევ ჩვეულებრივ dynamic JS-ად აქცევს.",
        details_en: "Overusing any bypasses static compile-time safety benefits entirely.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS მასივები", category_en: "Array Configurations",
        question_ka: "როგორ განისაზღვრება მარტივი მასივის ტიპი TypeScript-ში?",
        question_en: "How is a uniform array dataset type declared in TypeScript syntax?",
        answer_ka: "ელემენტის ტიპის დასახელებით და კვადრატული ფრჩხილებით []. მაგალითად: let scores: number[] = [1, 2, 3];",
        answer_en: "By appending brackets [] directly to the targeted inner item type token. Example signature: let scores: number[] = [1, 2, 3];",
        details_ka: "ალტერნატიული სინტაქსია გენერიკული ფორმა Array<number>.",
        details_en: "An alternative implementation style leverages generic wrappers Array<number>.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS უცნობი ტიპი", category_en: "Unknown Type",
        question_ka: "რით განსხვავდება unknown ტიპი any ტიპისგან?",
        question_en: "What isolates the unknown type from the loose any type structure?",
        answer_ka: "unknown ბევრად უფრო უსაფრთხოა, რადგან მასზე ოპერაციების შესასრულებლად ან სხვა ტიპზე მისანიჭებლად ჯერ ტიპის შემოწმება (Type Checking) გვავალდებულებს.",
        answer_en: "unknown is significantly safer than any because it blocks down-stream property executions until code runs explicit type narrowing assertions first.",
        details_ka: "unknown გვაიძულებს კოდის დაცვას typeof ან instanceof შემოწმებებით.",
        details_en: "unknown forces runtime workflows to pass strict conditional checking checks safely.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ვოიდი", category_en: "Void Return",
        question_ka: "რას ნიშნავს დასაბრუნებელი ტიპი void ფუნქციებში?",
        question_en: "What context constraint does a void return type communicate inside a function?",
        answer_ka: "void მიუთითებს, რომ ფუნქცია არ აბრუნებს არანაირ მნიშვნელობას (მაგალითად, მხოლოდ console.log-ს ბეჭდავს).",
        answer_en: "void explicitly indicates that the routine performs inline actions without returning any active structural values back.",
        details_ka: "თუ ფუნქციას return არ აქვს, TS მას ავტომატურად void ტიპს მიანიჭებს.",
        details_en: "Omitting return keywords prompts inference engines to tag routines as void automatically.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ტაპლები", category_en: "Tuples",
        question_ka: "რა არის Tuple (კორტეჟი) და რით განსხვავდება ის ჩვეულებრივი მასივისგან?",
        question_en: "What defines a Tuple and what constraints separate it from generic arrays?",
        answer_ka: "Tuple არის ფიქსირებული სიგრძის მასივი, სადაც წინასწარაა განსაზღვრული თუ რომელ ინდექსზე რა ტიპის მონაცემი უნდა იჯდეს. მაგ: [string, number].",
        answer_en: "A Tuple represents a fixed-length array specification where each index position coordinates with a strict predetermined primitive data type. Example: [string, number].",
        details_ka: "მაგალითი: let user: [string, number] = ['Anano', 22];",
        details_en: "Code contract deployment: let user: [string, number] = ['Anano', 22];",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ენუმები", category_en: "Enums",
        question_ka: "რა არის Enum კონსტრუქციის მთავარი დანიშნულება?",
        question_en: "What problem domain do Enum declarations address inside software layers?",
        answer_ka: "Enum (დასახელებული კონსტანტები) გვეხმარება დასახელებული მუდმივი მნიშვნელობების ჯგუფის შექმნაში, რაც ზრდის კოდის წაკითხვადობას (მაგ. როლების მართვა).",
        answer_en: "Enums collect a unified suite of human-readable named constants under a single banner, scaling data safety across status flows (e.g. user roles management).",
        details_ka: "სინტაქსი: enum Role { Admin, User, Guest }",
        details_en: "Structural architecture syntax: enum Role { Admin, User, Guest }",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ნულოვანი ტიპები", category_en: "Null Checks",
        question_ka: "როგორ ეპყრობა TypeScript null და undefined მონაცემებს?",
        question_en: "How does TypeScript manage null and undefined inputs during static analysis?",
        answer_ka: "მკაცრ რეჟიმში (strictNullChecks) TS გვიკრძალავს null-ის მინიჭებას იმ ცვლადებისთვის, რომლებსაც ეს ტიპი მკაფიოდ გაწერილი არ აქვთ.",
        answer_en: "Under strict operational flags (strictNullChecks), TS flags type assignments as exceptions if values evaluate to empty states without explicit union mapping.",
        details_ka: "ეს გვიცავს ვებში ყველაზე პოპულარული შეცდომისგან — 'Cannot read property of null'.",
        details_en: "This shields application memory layers from encountering 'Cannot read property of null' crashes.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS ობიექტები", category_en: "Objects Inline",
        question_ka: "როგორ ხდება ობიექტის სტრუქტურის ტიპიზაცია inline ფორმატში?",
        question_en: "How is an object data configuration typed utilizing inline syntax configurations?",
        answer_ka: "ცვლადის გვერდით ფიგურულ ფრჩხილებშივე მიეთითება თითოეული ველის დასახელება და მისი ტიპი. მაგალითად: let pt: { x: number; y: number };",
        answer_en: "By declaring field primitives grouped inside inline curly braces arranged adjacent to the target instance token. Example: let pt: { x: number; y: number };",
        details_ka: "თუ ობიექტს სხვა ველს დავამატებთ, კომპილატორი მაშინვე შეცდომას დაწერს.",
        details_en: "Appending unexpected properties outside those parameters triggers immediate type errors.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "Type Alias", category_en: "Type Aliases",
        question_ka: "რა არის Type Alias და რომელი საკვანძო სიტყვით იქმნება ის?",
        question_en: "What is a Type Alias and which functional keyword maps its definition?",
        answer_ka: "Type Alias არის საკუთარი ტიპის სახელის შექმნა, რათა იგივე სტრუქტურა ბევრჯერ არ ვწეროთ. იქმნება საკვანძო სიტყვით type.",
        answer_en: "A Type Alias creates a custom reusable name assignment contract for complex type specifications, declared utilizing the keyword type.",
        details_ka: "მაგალითი: type ID = string | number; let userId: ID = 102;",
        details_en: "Implementation code contract: type ID = string | number; let userId: ID = 102;",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "Never Type", category_en: "Never Type",
        question_ka: "რისთვის გამოიყენება განსაკუთრებული ტიპი never TypeScript-ში?",
        question_en: "What strict logic condition does the special never type represent?",
        answer_ka: "never მიუთითებს მნიშვნელობაზე, რომელიც არასდროს დადგება. გამოიყენება ფუნქციებისთვის, რომლებიც ყოველთვის აგდებენ შეცდომას ან უსასრულო ციკლში შედიან.",
        answer_en: "never represents values that can never logically occur. It targets functions configured to throw exceptions or run infinite background loops.",
        details_ka: "ის აჩვენებს, რომ ფუნქცია ნორმალურ დასასრულამდე ფიზიკურად ვერასდროს მივა.",
        details_en: "It confirms that routine flows can never reach normal completion milestones.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "TS უპირატესობა", category_en: "TS Architecture",
        question_ka: "რა არის კოდის ავტოშევსება (IntelliSense) და როგორ აუმჯობესებს მას TypeScript?",
        question_en: "What is IntelliSense and how does TypeScript maximize its features inside IDEs?",
        answer_ka: "ვინაიდან რედაქტორმა წინასწარ იცის ობიექტის ზუსტი ტიპი, კოდის წერისას ის ავტომატურად გვიკარნახებს ყველა ხელმისაწვდომ მეთოდსა და ველს, რაც გამორიცხავს შეცდომებს.",
        answer_en: "Because text editors parse full static types metadata graphs beforehand, they populate autocompletion lists listing accessible methods safely, removing syntax errors.",
        details_ka: "ეს მნიშვნელოვნად ზრდის დიდი გუნდების პროდუქტიულობას.",
        details_en: "This speeds up development velocities across scalable software teams.",
        lang: "ts", component: "comp_7"
    },
    {
        category_ka: "Strict Config", category_en: "Strict Settings",
        question_ka: "რას ნიშნავს თვისება 'strict': true tsconfig.json-ში?",
        question_en: "What compile constraints are activated by setting 'strict': true inside configuration rules?",
        answer_ka: "რთავს ტიპების შემოწმების მაქსიმალურად მკაცრ რეჟიმს, რაც კრძალავს implicit any შემთხვევებს და იცავს კოდს null შეცდომებისგან.",
        answer_en: "Enables a broad suite of rigorous compiler validations, restricting implicit any variants and mandating strict null validation tracking.",
        details_ka: "ეს არის რეკომენდებული პარამეტრი ყველა ახალი პროექტისთვის.",
        details_en: "An industry best practice standard parameter across modern TS frameworks.",
        lang: "ts", component: "comp_7"
    },

    // --- COMP_8: TSC კომპილაცია (161-180) ---
    {
        category_ka: "TS ტრანსპილაცია", category_en: "TSC Routines",
        question_ka: "რა არის ტრანსპილაცია (Transpilation) და ვინ ასრულებს მას?",
        question_en: "What is the technical definition of Transpilation and what engine coordinates it?",
        answer_ka: "პროცესი, როდესაც TypeScript კოდი ითარგმნება სუფთა, სტანდარტულ JavaScript (.js) კოდად. ამას ასრულებს TypeScript-ის ოფიციალური კომპილატორი (tsc).",
        answer_en: "A compilation sequence where source code written in TypeScript is translated into industry-standard JavaScript, orchestrated by the TypeScript Compiler (tsc).",
        details_ka: "კომპილატორი ამოწმებს შეცდომებს და წარმატების შემთხვევაში შლის ტიპებს და ტოვებს სუფთა JS კოდს.",
        details_en: "The compiler parses syntax validity, dropping code declarations during deployment outputs generation.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS კონფიგურაცია", category_en: "TS Core Configs",
        question_ka: "რა არის tsconfig.json ფაილი და სად უნდა იყოს ის განთავსებული?",
        question_en: "What is the primary function of the tsconfig.json configuration document and where does it reside?",
        answer_ka: "ეს არის JSON ფორმატის ფაილი, რომელიც განსაზღვრავს ტაიპსკრიპტის კომპილერის ქცევასა და წესებს. ის თავსდება პროექტის მთავარ ძირეულ საქაღალდეში (Root).",
        answer_en: "A configuration manifest that configures compiler flags, strictness checks, and targets for the compiler engine, residing at the project workspace root directory.",
        details_ka: "ის წარმოადგენს მთელი პროექტის 'წესების კრებულს'.",
        details_en: "It operates as the foundational rules dictionary for source code processing.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS ბრძანებები", category_en: "TSC Commands",
        question_ka: "რა ბრძანებით ხდება ახალი tsconfig.json კონფიგურაციის ფაილის გენერირება?",
        question_en: "Which command initiates the setup of a fresh tsconfig.json configuration manifest?",
        answer_ka: "ტერმინალში ბრძანების — tsc --init ჩაწერით. ის ქმნის საბაზისო ფაილს პარამეტრების ფართო ჩამონათვალით.",
        answer_en: "By executing the terminal command: tsc --init. It provisions a base structural manifest document pre-populated with common option comments.",
        details_ka: "ამ ბრძანების გაშვებამდე დარწმუნდით, რომ ტაიპსკრიპტი გლობალურად გაქვთ დაინსტალირებული.",
        details_en: "Ensure typescript node tooling packages register across system paths before running setup.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS პარამეტრები", category_en: "TS Configuration Keys",
        question_ka: "რას განსაზღვრავს 'target' პარამეტრი tsconfig.json ფაილის შიგნით?",
        question_en: "What target requirement does the 'target' property in tsconfig.json control?",
        answer_ka: "მიუთითებს, თუ JavaScript-ის რომელ სპეციფიკაციაში/ვერსიაში (მაგ. ES5, ES6, ES2022) უნდა გადაითარგმნოს კოდი კომპილაციის ბოლოს ბრაუზერებისთვის.",
        answer_en: "Specifies the ECMAScript standard generation output target (e.g. ES5, ES6, ES2022) that generated JavaScript modules must conform to.",
        details_ka: "ეს პარამეტრი მართავს კოდის უკანა თავსებადობას (Backward Compatibility).",
        details_en: "This configuration keys directly influences backward compatibility bounds for older engines.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS რეჟიმები", category_en: "Watch Modes",
        question_ka: "რა განსხვავებაა tsc და tsc -w ბრძანებებს შორის მუშაობისას?",
        question_en: "What determines the operational behavior gap between tsc and tsc -w expressions?",
        answer_ka: "tsc აკეთებს ერთჯერად მიმდინარე კომპილაციას, ხოლო tsc -w რთავს 'Watch' რეჟიმს, რომელიც უსმენს ფაილებს და ავტომატურად აკომპილირებს მათ ყოველი შენახვისას (Save).",
        answer_en: "tsc triggers a single-shot asset compilation build, whereas tsc -w binds a continuous background observer that hot-recompiles files during file saves.",
        details_ka: "Watch რეჟიმი დეველოპერს უზოგავს დროს ტერმინალში ხელით გადატვირთვის გარეშე.",
        details_en: "The Watch mode eliminates manual terminal command overhead from development workflows.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS არქიტექტურა", category_en: "Workspace Layouts",
        question_ka: "რა პარამეტრებით ვყოფთ პროექტს ორ საქაღალდედ (src და dist) ფაილების წესრიგისთვის?",
        question_en: "Which properties regulate the directory division mapping src source code to dist output folders?",
        answer_ka: "პარამეტრებით — 'rootDir': './src' (საწყისი კოდი) და 'outDir': './dist' (დაკომპილირებული მზა JavaScript ფაილები).",
        answer_en: "Configuring the parameters 'rootDir': './src' (for source assets) and 'outDir': './dist' (for generated output production JavaScript modules).",
        details_ka: "ეს არის კლასიკური არქიტექტურული წყობა ვებ პროექტებში.",
        details_en: "This standard workspace partitioning keeps development modules separate from bundle destinations.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS დაკავშირება", category_en: "HTML Bridges",
        question_ka: "რომელ ფაილს უნდა მივუთითოთ ბმული HTML დოკუმენტში script ტეგში TypeScript პროექტის გაშვებისას?",
        question_en: "Which target file should code templates bind via script tags inside HTML documents?",
        answer_ka: "HTML-ში უნდა მიეთითოს ყოველთვის საბოლოოდ დაკომპილირებული .js ფაილის მისამართი (dist-იდან) და არა საწყისი .ts ფაილი, რადგან ბრაუზერი .ts-ს ვერ აღიქვამს.",
        answer_en: "The markup layout script tag src must always reference the generated compiled .js output file path, never raw .ts documents unreadable to browsers.",
        details_ka: "მაგალითი: <script src='dist/app.js'></script>",
        details_en: "Markup implementation standard configuration: <script src='dist/app.js'></script>",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS მოდულები", category_en: "Module Systems",
        question_ka: "რას მართავს 'module' პარამეტრი tsconfig.json-ში?",
        question_en: "What operational behavior does the 'module' parameter govern within configuration rules?",
        answer_ka: "განსაზღვრავს თუ მოდულების რომელი სისტემა იქნას გამოყენებული ფაილებს შორის იმპორტ-ექსპორტისთვის (მაგ. CommonJS ნოდისთვის თუ ESNext ბრაუზერებისთვის).",
        answer_en: "Dictates the targeted JavaScript module parsing pattern for tracking imports and exports statements (e.g. CommonJS configurations for Node or ESNext for modern web bundles).",
        details_ka: "ეს მართავს თუ როგორ დაუკავშირდებიან ფაილები ერთმანეთს.",
        details_en: "This setting synchronizes how code split assets resolve runtime dependencies during builds.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS სიმკაცრე", category_en: "Strict Settings",
        question_ka: "რა შემოწმებას ააქტიურებს 'noImplicitAny' დროშა ტაიპსკრიპტში?",
        question_en: "What specific validation rule is enforced by checking the 'noImplicitAny' compilation flag?",
        answer_ka: "ის გვიკრძალავს ისეთი ცვლადების ან პარამეტრების დატოვებას, რომელთა ტიპსაც TS ვერ ხვდება და ფარულად ანიჭებს any-ს. ის მოითხოვს ტიპის მკაფიო გაწერას.",
        answer_en: "It blocks expressions or parameters from fallback compiling into implied any slots when type resolution bounds can't infer types, demanding manual annotations.",
        details_ka: "ეს პარამეტრი შედის 'strict': true ნაკრებში.",
        details_en: "This strict parameter is nested natively inside the master strict configuration array block.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS ლოკალური მონაცემები", category_en: "Local TSC",
        question_ka: "რა განსხვავებაა გლობალურად დაინსტალირებულ tsc-სა და npm პროექტის ლოკალურ tsc-ს შორის?",
        question_en: "What is the difference between a globally installed tsc and a local tsc within an npm project?",
        answer_ka: "გლობალური tsc მუშაობს მთელ კომპიუტერში ნებისმიერ საქაღალდეში, ხოლო ლოკალური (node_modules) მიბმულია კონკრეტული პროექტის ვერსიაზე, რაც გამორიცხავს ვერსიების შეუსაბამობას დეველოპერებს შორის.",
        answer_en: "Global tsc acts system-wide across folder pathways, while local node_modules bundles couple strictly to the project manifest version, protecting builds uniform consistency.",
        details_ka: "ლოკალური tsc-ს გასაშვებად გამოიყენება npx tsc ბრძანება.",
        details_en: "To run project scoped tsc binaries directly from terminal shells, invoke npx tsc statements.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS კომენტარები", category_en: "TSC Compilation",
        question_ka: "რომელი პარამეტრი შლის კომენტარებს კოდის კომპილაციის დროს, ფაილის ზომის შესამცირებლად?",
        question_en: "Which configuration option drops code comments during compilation to optimize file production sizes?",
        answer_ka: "პარამეტრი 'removeComments': true. მისი გააქტიურებისას, საბოლოო .js ფაილში არცერთი კომენტარი არ გადავა, რაც ამცირებს კოდის ზომას.",
        answer_en: "The rule parameter 'removeComments': true. When activated, it ensures no development comments copy into final code assets, decreasing footprint size.",
        details_ka: "ეს პარამეტრი სასარგებლოა პროდუქციაში კოდის ოპტიმიზაციისთვის (Production build).",
        details_en: "Extensively leveraged to support compilation pipeline deployment compressions.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Source Maps", category_en: "Source Maps Debug",
        question_ka: "რა მიზნით გამოიყენება პარამეტრი 'sourceMap': true?",
        question_en: "What debugging capabilities are unlocked by validating 'sourceMap': true inside parameters?",
        answer_ka: "ის ქმნის .js.map ფაილებს, რომლებიც აკავშირებენ .js კოდს თავდაპირველ .ts კოდთან, რაც დეველოპერს აძლევს საშუალებას შეცდომები ბრაუზერის კონსოლშივე პირდაპირ .ts ფაილში იპოვოს.",
        answer_en: "It generates companion .js.map files binding active production scripts back to baseline development code, enabling engineers to debug issues inside original .ts nodes via developer tools.",
        details_ka: "ეს აადვილებს შეცდომების პოვნის (Debugging) პროცესს.",
        details_en: "An essential component to streamline error testing inside production runtimes.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Strict Null Checks", category_en: "Strict Settings",
        question_ka: "რას აკეთებს კონკრეტულად 'strictNullChecks' პარამეტრი?",
        question_en: "What specific logic scope boundaries are adjusted by activating 'strictNullChecks'?",
        answer_ka: "ის აცალკევებს null და undefined ტიპებს ყველა სხვა ტიპისგან, რის გამოც, მაგალითად, string ტიპის ცვლადში null-ს ვეღარ ჩავწერთ, თუ არ გამოვიყენებთ Union (|) სინტაქსს.",
        answer_en: "It segregates null and undefined away from general types matrix definitions, blocking developers from injecting null states into string slots unless combined via Union (|) expressions.",
        details_ka: "ეს პარამეტრი ხელს უშლის ბევრ გაუთვალისწინებელ კრაშს აპლიკაციაში.",
        details_en: "This parameter prevents a multitude of accidental baseline app state failures.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Include Exclude", category_en: "Inclusion Filters",
        question_ka: "რისთვის გამოიყენება 'include' და 'exclude' მასივები tsconfig.json-ში?",
        question_en: "What pipeline selection targets do the 'include' and 'exclude' arrays manage?",
        answer_ka: "include განსაზღვრავს თუ რომელი საქაღალდეების ფაილები უნდა დაკომპილირდეს, ხოლო exclude ეუბნება კომპილატორს, თუ რომელი საქაღალდეები (მაგ. node_modules) დააიგნოროს.",
        answer_en: "include targets specific directory pathways containing files chosen for compilation parsing, while exclude signals the compiler to ignore folders (e.g. node_modules).",
        details_ka: "exclude-ში node_modules-ის ჩაწერა იცავს პროექტს გარე ბიბლიოთეკების ხელახალი გადამოწმებისგან.",
        details_en: "Configuring node_modules within exclusion lists reduces redundant tracking checks.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Unused Variables", category_en: "Linting Rules",
        question_ka: "რა პარამეტრით ვკრძალავთ პროექტში გამოუყენებელი ცვლადების დატოვებას?",
        question_en: "Which flag configurations raise compile errors whenever dead unused variables reside inside scripts?",
        answer_ka: "პარამეტრით 'noUnusedLocals': true. თუ ცვლადს შევქმნით და კოდში არსად გამოვიყენებთ, tsc კომპილაციას შეცდომით დაასრულებს კოდის სისუფთავისთვის.",
        answer_en: "By deploying rules flag: 'noUnusedLocals': true. If a variable is instantiated but completely neglected across modules, the compiler logs errors.",
        details_ka: "ეს გვეხმარება კოდის ბაზის მუდმივად სუფთად შენარჩუნებაში.",
        details_en: "An excellent constraint helping projects prune away dead or orphan reference paths cleanly.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Unused Parameters", category_en: "Linting Rules",
        question_ka: "რას აკეთებს თვისება 'noUnusedParameters': true?",
        question_en: "What structural checking condition does 'noUnusedParameters': true mandate?",
        answer_ka: "ის აგდებს კომპილაციის შეცდომას, თუ ფუნქციას გადავცემთ პარამეტრს (არგუმენტს), რომელსაც თავად ფუნქციის შიდა კოდის ლოგიკაში არასდროს ვიყენებთ.",
        answer_en: "It flags compilation exceptions if function declarations state parameters that are never referenced or evaluated inside their local routine body structures.",
        details_ka: "ეს უზრუნველყოფს ფუნქციების ინტერფეისების მაქსიმალურ სიზუსტეს.",
        details_en: "This parameter ensures interface parameters signatures remain streamlined and accurate.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Implicit Returns", category_en: "Strict Settings",
        question_ka: "რა მიზანს ემსახურება 'noImplicitReturns': true პარამეტრი?",
        question_en: "What logical execution paths verification is handled by 'noImplicitReturns': true?",
        answer_ka: "ის ითხოვს, რომ თუ ფუნქცია გარკვეულ პირობებში აბრუნებს პასუხს (return), მან ყველა სხვა შესაძლო განტოტებაშიც (if/else) აუცილებლად დააბრუნოს მნიშვნელობა.",
        answer_en: "It guarantees that if a routine uses return statements within branches, it must map returning expressions across all remaining logical code blocks (if/else) uniformly.",
        details_ka: "ეს გამორიცხავს შემთხვევებს, როცა ფუნქცია შემთხვევით აბრუნებს ფარულ undefined-ს.",
        details_en: "This layout mechanism ensures functions don't accidentally drop silent implied undefined values.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS იგნორირება", category_en: "TSC Directives",
        question_ka: "როგორ შეგვიძლია გამოვრთოთ ტიპების შემოწმება კოდის კონკრეტულ ერთ კონკრეტულ ხაზზე?",
        question_en: "How can we force the type checker to bypass evaluation completely on a single line?",
        answer_ka: "იმ ხაზის თავზე სპეციალური კომენტარის — // @ts-ignore ჩაწერის საშუალებით.",
        answer_en: "By prepending a targeted inline macro comment layout: // @ts-ignore directly above the expression.",
        details_ka: "გამოიყენეთ ეს მხოლოდ უკიდურეს შემთხვევაში, როდესაც გარე ბიბლიოთეკას არ აქვს ტიპების მხარდაჭერა.",
        details_en: "Deploy this code override sparingly, mostly when third-party libraries lack native declaration layers.",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "TS ვერსია", category_en: "TSC Commands",
        question_ka: "როგორ შევამოწმოთ ტერმინალიდან, თუ კომპილატორის (TSC) რომელი ვერსიაა დაინსტალირებული?",
        question_en: "Which terminal expression queries the active version numbering of the global TSC component?",
        answer_ka: "ბრძანებით tsc -v ან tsc --version. ის გამოიტანს ვერსიის ნომერს კონსოლში.",
        answer_en: "By sending the terminal inquiry call: tsc -v or tsc --version. It outputs the active framework build code.",
        details_ka: "მაგალითად, გამოიტანს პასუხს: Version 5.3.3",
        details_en: "Example prompt output return format: Version 5.3.3",
        lang: "ts", component: "comp_8"
    },
    {
        category_ka: "Target ESNext", category_en: "TS Core Configs",
        question_ka: "რას ნიშნავს, თუ tsconfig-ში 'target' მნიშვნელობად მივუთითებთ 'ESNext'-ს?",
        question_en: "What code output is targeted by designating 'ESNext' inside target properties?",
        answer_ka: "ეს ნიშნავს, რომ კოდი დაკომპილირდება JavaScript-ის ყველაზე უახლეს, მიმდინარე ეტაპზე არსებულ ვერსიაში, ყოველგვარი ძველი სინტაქსური დაცვის გარეშე.",
        answer_en: "It tells the compilation engine to preserve the cutting-edge ECMAScript standard specification formatting available, dropping heavy backward translation layers.",
        details_ka: "გამოიყენება მაშინ, როდესაც პროექტი ეშვება მხოლოდ უახლეს გარემოებში (მაგ. თანამედროვე Node.js სერვერებზე).",
        details_en: "Favorited when deploy environments support absolute modern engine runtimes natively.",
        lang: "ts", component: "comp_8"
    },

    // --- COMP_9: ფუნქციები და კოლექციები (181-200) ---
    {
        category_ka: "TS ფუნქციები", category_en: "Function Return Contracts",
        question_ka: "როგორ აღვწეროთ ფუნქციის პარამეტრების და დასაბრუნებელი მნიშვნელობის ტიპი?",
        question_en: "What is the standard syntax to enforce types across routine parameters and function returns?",
        answer_ka: "ტიპებს ვუწერთ როგორც ფრჩხილებში არსებულ ცვლადებს, ისე თავად ფრჩხილების გარეთაც. მაგალითად: function add(x: number): number { return x; }",
        answer_en: "Type annotations are appended immediately following parameters, as well as right after the parameter list closure. Example: function add(x: number): number { return x; }",
        details_ka: "ეს უზრუნველყოფს, რომ ფუნქციამ არასწორი ტიპის პასუხი არ დააბრუნოს.",
        details_en: "This stops semantic leakage types inside localized function return routines.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Optional Parameters", category_en: "Function Parameters",
        question_ka: "როგორ განისაზღვრება არასავალდებულო (Optional) პარამეტრი ფუნქციაში?",
        question_en: "How do we tag an optional parameter inside function parameter signatures?",
        answer_ka: "პარამეტრის სახელის ბოლოში კითხვის ნიშნის (?) დასმით. მაგალითად: function greet(name: string, age?: number).",
        answer_en: "By appending a trailing question mark (?) right to the variable name label. Example block: function greet(name: string, age?: number).",
        details_ka: "არასავალდებულო პარამეტრები ყოველთვის სავალდებულოების შემდეგ, ბოლოში უნდა ეწეროს.",
        details_en: "Optional parameters must structurally reside following mandatory positional arguments.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Default Parameters", category_en: "Function Parameters",
        question_ka: "როგორ მუშაობს ნაგულისხმევი (Default) პარამეტრები ტაიპსკრიპტში და გვჭირდება თუ არა მათი ტიპის ხელით გაწერა?",
        question_en: "How do default parameters operate and is explicit type declaration mandatory for them?",
        answer_ka: "მნიშვნელობის პირდაპირი მიწერით: (ratio = 0.5). ტიპის ხელით გაწერა საჭირო არაა, რადგან TS ტიპის დასკვნას (Type Inference) ავტომატურად აკეთებს საწყისი მნიშვნელობიდან.",
        answer_en: "By appending values directly during signatures declaration: (ratio = 0.5). Manual type annotations become redundant since inference engines extract data types from defaults values.",
        details_ka: "მაგალითი: function build(id: number, active = true).",
        details_en: "Code signature sample: function build(id: number, active = true).",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Union Types", category_en: "Union Types",
        question_ka: "რა არის Union Type (გაერთიანებული ტიპი) და რომელი ოპერატორით გამოიხატება ის?",
        question_en: "What defines a Union Type and which operator maps its logical implementation?",
        answer_ka: "საშუალებას გვაძლევს ცვლადს მივანიჭოთ რამდენიმე ალტერნატიული ტიპი. გამოიხატება Pipe (|) ოპერატორით. მაგალითად: let id: string | number;",
        answer_en: "Enables a single variable location to ingest discrete structural primitive variations separated via the pipe (|) token. Example: let id: string | number;",
        details_ka: "ეს ზრდის ცვლადების მოქნილობას კოდში.",
        details_en: "This pattern injects runtime flexibility while maintaining type validation boundaries.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Type Narrowing", category_en: "Type Guards",
        question_ka: "რა არის Type Narrowing (ტიპის დავიწროება) და როგორ გვეხმარება typeof ოპერატორი ამ დროს?",
        question_en: "What does the concept of Type Narrowing describe and how does typeof facilitate it?",
        answer_ka: "ეს არის Union ტიპის ცვლადის კონკრეტულ ტიპამდე დაყვანა if პირობის შიგნით. typeof-ით ვამოწმებთ რეალურ ტიპს, რათა უსაფრთხოდ გავუშვათ მეთოდები (მაგ. .toUpperCase()).",
        answer_en: "The logical processing of filtering conditional logic blocks down from wide Union potentials to an isolated type. typeof branches scripts safely to fire precise type-specific routines.",
        details_ka: "მაგალითი: if (typeof id === 'string') { id.toUpperCase(); }",
        details_en: "Code template trace: if (typeof id === 'string') { id.toUpperCase(); }",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "TS ინტერფეისები", category_en: "Interfaces Basics",
        question_ka: "რა არის Interface (ინტერფეისი) და რა მიზნით გამოიყენება ის ობიექტებთან მუშაობისას?",
        question_en: "What is an Interface and what structural configuration role does it handle for objects?",
        answer_ka: "ინტერფეისი არის სტრუქტურული კონტრაქტი, რომელიც განსაზღვრავს თუ რა ვარდები და მეთოდები უნდა გააჩნდეს ობიექტს.",
        answer_en: "An interface operates as an explicit object structural layout specification mapping key fields and method models that conforming instances must implement.",
        details_ka: "იქმნება საკვანძო სიტყვით interface. მაგალითი: interface User { name: string; }",
        details_en: "Constructed utilizing interface signatures. Example configuration: interface User { name: string; }",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Readonly Fields", category_en: "Immutability",
        question_ka: "როგორ შეგვიძლია ინტერფეისის ველი გავხადოთ მხოლოდ წაკითხვადი (უხელშეუხებელი) მინიჭების შემდეგ?",
        question_en: "How do we tag an interface property field to rank as read-only across applications?",
        answer_ka: "ველის სახელის წინ საკვანძო სიტყვის — readonly მიწერით. მისი შეცვლის მცდელობა გამოიწვევს კომპილაციის შეცდომას.",
        answer_en: "By prefixing the targeted contract key directly with the readonly operator modifier, blocking rewrite routines post initialization.",
        details_ka: "მაგალითი: interface Config { readonly apiKey: string; }",
        details_en: "Code implementation pattern: interface Config { readonly apiKey: string; }",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Interface Extends", category_en: "Interfaces Inheritance",
        question_ka: "როგორ ხდება ინტერფეისების მემკვიდრეობითობა (გაფართოება) TypeScript-ში?",
        question_en: "How do interfaces manage structural extension and inheritance within TypeScript hierarchies?",
        answer_ka: "საკვანძო სიტყვის — extends გამოყენებით. შვილობილი ინტერფეისი სრულად იღებს მშობლის ყველა ველს და ამატებს თავის საკუთარ თვისებებს.",
        answer_en: "By deploying the extends design keyword framework. Sub-interfaces copy properties charts from parent declarations while embedding explicit local field tracks.",
        details_ka: "მაგალითი: interface Employee extends Person { salary: number; }",
        details_en: "Structural inheritance sample: interface Employee extends Person { salary: number; }",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Interface vs Type", category_en: "TS Architecture",
        question_ka: "რა არის ერთ-ერთი ძირითადი განსხვავება Interface-სა და Type Alias-ს შორის?",
        question_en: "What represents a fundamental operational gap dividing Interfaces from Type Aliases?",
        answer_ka: "ინტერფეისებს აქვთ 'Declaration Merging'-ის უნარი (ორი იდენტური ინტერფეისი ავტომატურად გაერთიანდება), ხოლო Type-ის ხელახლა გამოცხადება იგივე სახელით გამოიწვევს შეცდომას.",
        answer_en: "Interfaces natively support automatic Declaration Merging (matching declarations combine traits automatically), whereas Type Aliases throw syntax duplication errors if repeated.",
        details_ka: "ასევე, Type Alias-ს შეუძლია პრიმიტივების გაერთიანებების აღწერა, ინტერფეისს კი არა.",
        details_en: "Furthermore, Type Aliases hold capability to bind primitive collections or unions directly.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Declaration Merging", category_en: "Declaration Merging",
        question_ka: "რა არის Declaration Merging (დეკლარაციების შერწყმა) ინტერფეისებში?",
        question_en: "What mechanics rule Declaration Merging inside interface frameworks?",
        answer_ka: "პროცესი, როდესაც კომპილატორი ერთსა და იმავე საქაღალდეში არსებულ ორ დამოუკიდებელ იდენტურსახელიან ინტერფეისს აერთიანებს ერთ საერთო სტრუქტურაში.",
        answer_en: "A compilation routing where the parsing engine targets matching named interface blocks inside scopes, combining their fields into a singular extended footprint.",
        details_ka: "ეს ძალიან მოსახერხებელია გარე ბიბლიოთეკების ტიპების გაფართოების დროს.",
        details_en: "Crucial feature when augmenting core global type matrices for third-party scripts.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Array Generic", category_en: "Generic Collections",
        question_ka: "როგორ ჩავწეროთ მასივის ტიპი გენერიკული სინტაქსის (Generic Syntax) გამოყენებით?",
        question_en: "How is an array datatype declared utilizing modern explicit Generic syntax constructs?",
        answer_ka: "Array<ტიპი> კონსტრუქციის დახმარებით. მაგალითად: let list: Array<string> = ['a', 'b']; იგივეა რაც string[].",
        answer_en: "By calling the dynamic class signature footprint: Array<Type>. For example, configuring let list: Array<string> implements matching metrics as string[].",
        details_ka: "ეს სინტაქსი ხშირად გამოიყენება რთული მონაცემთა მოდელების აღწერისას.",
        details_en: "Favorited when dealing with complex data mappings configurations.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Readonly Array", category_en: "Immutability arrays",
        question_ka: "რას აკეთებს ReadonlyArray ტიპი მასივებზე გამოყენებისას?",
        question_en: "What structural block does ReadonlyArray enforce upon collection targets?",
        answer_ka: "ის მასივს სრულად უკრძალავს მუტაციურ ოპერაციებს (მაგ. .push(), .pop(), .splice()). მასივის შეცვლა შეუძლებელი ხდება.",
        answer_en: "It completely restricts mutator prototype operations (such as .push(), .pop(), or splice()), treating the target array state as strictly unchangeable.",
        details_ka: "მაგალითი: let immutableNums: ReadonlyArray<number> = [1, 2, 3];",
        details_en: "Standard initialization pattern: let immutableNums: ReadonlyArray<number> = [1, 2, 3];",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Function Overloads", category_en: "Routine Overloads",
        question_ka: "რა არის Function Overloading (ფუნქციის გადატვირთვა) ტაიპსკრიპტში?",
        question_en: "What capability does Function Overloading introduce into TypeScript application layers?",
        answer_ka: "საშუალება, რომ ერთსა და იმავე ფუნქციას ჰქონდეს რამდენიმე განსხვავებული ხელმოწერა (Signatures) პარამეტრების მიხედვით, მაგრამ ერთი საერთო იმპლემენტაცია.",
        answer_en: "The tooling provision to declare multiple structural signatures for a single function name, adjusting logic paths based on incoming argument types via a singular execution block.",
        details_ka: "ეს ზრდის ფუნქციების მოქნილობას სხვადასხვა ტიპის არგუმენტების მიღებისას.",
        details_en: "This architectural method cleans up messy routine execution pathways across interfaces.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Callback Types", category_en: "Function Parameter Contracts",
        question_ka: "როგორ განისაზღვრება ქოლბექ (Callback) ფუნქციის ტიპი სხვა ფუნქციის პარამეტრებში?",
        question_en: "How do you map types for a callback parameter passed inside another function?",
        answer_ka: "Arrow სინტაქსის მსგავსი ჩანაწერით: (param: type) => return_type. მაგალითად: cb: (num: number) => void.",
        answer_en: "Utilizing inline type syntax configurations resembling arrow arrow structures: (param: type) => return_type. Example: cb: (num: number) => void.",
        details_ka: "ეს მკაცრად განსაზღვრავს თუ რა არგუმენტები უნდა მიიღოს გადაცემულმა ქოლბექმა.",
        details_en: "This traps contract validation compliance for functional arguments passing inside utilities.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Index Signatures", category_en: "Index Signatures",
        question_ka: "რა არის Index Signature და როდის გამოიყენება ის ობიექტებში?",
        question_en: "What problem domain does an Index Signature manage within dynamic objects?",
        answer_ka: "გამოიყენება მაშინ, როცა წინასწარ არ ვიცით ობიექტის გასაღებების ზუსტი სახელები, მაგრამ ვიცით მათი ტიპი. სინტაქსი: [key: string]: number;",
        answer_en: "Deploys when explicit property key string names remain fluid or unpredictable, but their baseline value format types are verified. Syntax mapping signature: [key: string]: number;",
        details_ka: "საშუალებას გვაძლევს ობიექტს დინამიურად დავამატოთ ნებისმიერი რაოდენობის ველები უსაფრთხოდ.",
        details_en: "Enables structural mappings to ingest dynamic key logs safely without breaking contracts constraints.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Excess Properties", category_en: "Objects Checking",
        question_ka: "რა არის Excess Property Checks მექანიზმი ობიექტების შექმნისას?",
        question_en: "What verification track handles Excess Property Checks during direct assignments?",
        answer_ka: "ეს არის TS-ის მექანიზმი, რომელიც ობიექტის პირდაპირი ლიტერალით შექმნისას კრძალავს ისეთი ველების გადაცემას, რომლებიც ინტერფეისში აღწერილი არ არის.",
        answer_en: "A protection subsystem running compile validations that blocks configuration instances from accepting unmapped key properties during literal assignment structures.",
        details_ka: "თუ ობიექტს ჯერ ცვლადში შევინახავთ და შემდეგ მივანიჭებთ, ეს შემოწმება რბილდება.",
        details_en: "Bypassed or mitigated if objects pass references using intermediary pointer variables.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Intersection Types", category_en: "Intersection Types",
        question_ka: "რა არის Intersection Type (გადაკვეთის ტიპი) და რომელი ოპერატორით იწერება ის?",
        question_en: "What defines an Intersection Type and which character token builds it?",
        answer_ka: "Intersection აერთიანებს რამდენიმე არსებულ ტიპს ერთ ახალ სტრუქტურაში, სადაც ცვლადი ვალდებულია ყველა მათგანს აკმაყოფილებდეს. იწერება ამპერსანდით (&).",
        answer_en: "An Intersection compiles fields from multiple individual types into a unified contract, mandating full compliance across properties. Syntactically bounded using ampersand symbols (&).",
        details_ka: "მაგალითი: type PersonWithEmail = Person & { email: string };",
        details_en: "Composition syntax tracing: type PersonWithEmail = Person & { email: string };",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "TS ობიექტის მეთოდი", category_en: "Objects Inline",
        question_ka: "როგორ აღვწეროთ მეთოდი ინტერფეისის შიგნით?",
        question_en: "What are the ways to declare routine method definitions inside interfaces?",
        answer_ka: "ორნაირად: ან სტანდარტული სახით greet(lang: string): void, ან Arrow თვისების სახით greet: (lang: string) => void.",
        answer_en: "Via two patterns: regular definition patterns greet(lang: string): void, or employing embedded arrow field bindings definitions: greet: (lang: string) => void.",
        details_ka: "ორივე მიდგომა სრულიად ვალიდური და პოპულარულია.",
        details_en: "Both structural styles translate smoothly into fine type rules definitions.",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "Type Assertions", category_en: "Type Assertions",
        question_ka: "რა არის Type Assertion და რომელი საკვანძო სიტყვით სრულდება ის?",
        question_en: "What functionality does Type Assertion automate and which keyword guides its execution?",
        answer_ka: "ეს არის კომპილატორისთვის ხელით მითითება, რომ ჩვენ უკეთ ვიცით ცვლადის ზუსტი ტიპი, ვიდრე თავად TS-მა. სრულდება საკვანძო სიტყვით as.",
        answer_en: "The programmatic path telling the compiler to trust the developer's explicit type evaluation over its own tracking, initiated using the as operator context.",
        details_ka: "მაგალითი: const element = document.getElementById('canvas') as HTMLCanvasElement;",
        details_en: "Standard application footprint: const element = document.getElementById('canvas') as HTMLCanvasElement;",
        lang: "ts", component: "comp_9"
    },
    {
        category_ka: "TS მასივის ძებნა", category_en: "Searching Collections",
        question_ka: "როგორ მუშაობს ტიპების დაცვა მასივის მეთოდების (მაგ. .find()) გამოყენებისას?",
        question_en: "How do static types handle return mutations from core collection APIs like .find()?",
        answer_ka: "ვინაიდან .find()-მა შეიძლება ელემენტი ვერ იპოვოს, TS ავტომატურად ამატებს undefined-ს ტიპის პასუხში (მაგ. User | undefined), რაც გვაიძულებს if შემოწმების გაკეთებას.",
        answer_en: "Since array element queries might fail, inference systems augment output targets by automatically appending undefined traits (User | undefined), forcing conditional guard checks.",
        details_ka: "ეს გვაიძულებს კოდის დაცვას შეცდომებისგან.",
        details_en: "This mechanism stops systems from triggering silent runtime unhandled errors.",
        lang: "ts", component: "comp_9"
    },

    // --- COMP_10: ინტერფეისები და უტილიტები (201-220) ---
    {
        category_ka: "TS ოპერატორები", category_en: "Arithmetic Operators",
        question_ka: "რას აკეთებს მიმატების ოპერატორი + რიცხვებთან და სტრიქონებთან ტაიპსკრიპტში?",
        question_en: "How does the evaluation operator + act against numeric values versus text string payloads?",
        answer_ka: "რიცხვებს კრებს ფიზიკურად, ხოლო სტრიქონებს (ტექსტებს) აერთებს (კონკატენაცია), ზუსტად ისე, როგორც ჩვეულებრივ ჯავასკრიპტში.",
        answer_en: "Sums mathematical numbers together while combining text elements via string concatenation, mimicking JavaScript.",
        details_ka: "ეს ქცევა სრულად გადმოყოლილია ჯავასკრიპტის საბაზისო ძრავიდან.",
        details_en: "This evaluation behavior is inherited directly from underlying JS runtime engines.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS მათემატიკა", category_en: "Unary Operators Operations",
        question_ka: "რას აკეთებენ ინკრემენტი ++ და დეკრემენტი -- ცვლადებთან მუშაობისას?",
        question_en: "What state modification tasks do increment ++ and decrement -- fulfill?",
        answer_ka: "ინკრემენტი ზრდის ცვლადის მიმდინარე მნიშვნელობას 1-ით, ხოლო დეკრემენტი პირიქით — ამცირებს მას ზუსტად 1-ით.",
        answer_en: "The increment tool steps values up by 1, while the decrement expression reduces them by 1.",
        details_ka: "ეს ოპერაციები ხშირად გამოიყენება ციკლების მრიცხველებში.",
        details_en: "These shorthand systems operate heavily inside iteration loop configurations.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS ლოგიკა", category_en: "Logical Operators Gates",
        question_ka: "როგორ მუშაობს ლოგიკური ოპერატორი && (AND) ტაიპსკრიპტში?",
        question_en: "What rule governs runtime evaluation inside a logical && (AND) block?",
        answer_ka: "ის აბრუნებს true-ს მხოლოდ და მხოლოდ იმ შემთხვევაში, თუ მის გარშემო არსებული ორივე დამოუკიდებელი პირობა ერთდროულად ჭეშმარიტია.",
        answer_en: "Yields a true result exclusively if all individual operand statements resolve to true simultaneously.",
        details_ka: "მაგალითი: if (age > 18 && hasID) — ორივე პირობა სავალდებულოა.",
        details_en: "Example trace context: if (age > 18 && hasID) validates both prerequisites tightly.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS ლოგიკა", category_en: "Logical Operators Junctions",
        question_ka: "როგორ მუშაობს ლოგიკური ოპერატორი || (OR) კოდის შემოწმებისას?",
        question_en: "What rule governs validation logic for the || (OR) operator?",
        answer_ka: "ის აბრუნებს ჭეშმარიტ true მნიშვნელობას, თუ გადაცემული პირობებიდან ერთი პირობა მაინც მაინც აღმოჩნდება ჭეშმარიტი.",
        answer_en: "Evaluates to true if at least one parameter statement resolves as matching true.",
        details_ka: "მაგალითი: if (hasCash || hasCard) — ერთ-ერთი საკმარისია.",
        details_en: "Example: if (hasCash || hasCard) checks if either option matches target requirements.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS ინვერსია", category_en: "Inversion Tools",
        question_ka: "როგორ მუშაობს ლოგიკური უარყოფის ოპერატორი ! (NOT)?",
        question_en: "What structural modification does the logical ! (NOT) operator automate?",
        answer_ka: "ის აბრუნებს გადაცემული ბულიანის ლოგიკურად აბსოლუტურად საწინააღმდეგო მნიშვნელობას (true-ს აქცევს false-ად და პირიქით).",
        answer_en: "Flips any given boolean input into its exact opposite binary status value maps.",
        details_ka: "მაგალითი: !true მოგვცემს მნიშვნელობას false.",
        details_en: "Calculation example: !true yields the exact negative outcome false.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS ტოლობა", category_en: "Strict Equality Contracts",
        question_ka: "რა განსხვავებაა შედარების ოპერატორებს == და === შორის ტაიპსკრიპტში?",
        question_en: "What runtime differentiation exists between standard == and strict === operators?",
        answer_ka: "== ამოწმებს მხოლოდ მნიშვნელობების მსგავსებას ავტომატური გარდაქმნით, ხოლო === არის მკაცრი ტოლობა და ადარებს როგორც მონაცემის მნიშვნელობას, ისე მის ტიპს.",
        answer_en: "== tests value similarities with loose coercion, whereas === compares structural data type matching along with values.",
        details_ka: "ტაიპსკრიპტში ყოველთვის მკაცრ === ოპერატორს ვანიჭებთ უპირატესობას უსაფრთხოებისთვის.",
        details_en: "Static compile-time architectures strongly encourage sticking to === configurations exclusively.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS ბიტები", category_en: "Bitwise Operators Engine",
        question_ka: "რას აკეთებენ ბინარული (Bitwise) ოპერატორები კოდის დაბალ დონეზე?",
        question_en: "What operations domain do Bitwise operators address?",
        answer_ka: "ისინი ასრულებენ ლოგიკურ მანიპულაციებს უშუალოდ ინფორმაციის ბიტების (ციფრული 0-ებისა და 1-ების) დონეზე კომპიუტერის რეგისტრებში.",
        answer_en: "Perform structural logic manipulations directly on underlying binary code bit layers (0 and 1).",
        details_ka: "ოპერატორებია & და |. იშვიათად გამოიყენება მაღალი დონის ფრონტენდ ლოგიკაში.",
        details_en: "Expressions like & and | process parameters inside low-level rendering or performance optimization modules.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS მინიჭება", category_en: "Compound Assignments Shortcuts",
        question_ka: "როგორ მუშაობს შემოკლებული მათემატიკური მინიჭების ოპერატორი +=?",
        question_en: "What mathematical assignment rule does the compound += token implement?",
        answer_ka: "ცვლადის მიმდინარე მნიშვნელობას ავტომატურად უმატებს ახალს და მიღებულ ჯამს ისევ იმავე საწყის ცვლადში გადააწერს.",
        answer_en: "Increments the existing variable value by the newly provided expression, re-committing the sum into the same state variable.",
        details_ka: "x += 5; იგივეა, რაც x = x + 5; ეს სინტაქსი კოდს ამოკლებს.",
        details_en: "Example pattern: x += 5; maps identical execution steps as writing x = x + 5; cleanly.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "TS გამრავლება", category_en: "Multiplication Compound Keys",
        question_ka: "როგორ მუშაობს შემოკლებული მინიჭების ოპერატორი *=?",
        question_en: "What mathematical assignment rule does the compound *= token implement?",
        answer_ka: "ცვლადის მიმდინარე მნიშვნელობას ამრავლებს მითითებულ რიცხვზე და მიღებულ ნამრავლს ინახავს მასშივე.",
        answer_en: "Multiplies the targeted variable reference by an expression, updating the source value destination directly.",
        details_ka: "x *= 2; იგივეა, რაც x = x * 2; მოსახერხებელია სწრაფი გამოთვლებისთვის.",
        details_en: "Example: x *= 2; resolves with exactly the same runtime bounds as x = x * 2; statements.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Omit Utility", category_en: "TS Utilities",
        question_ka: "როგორ მუშაობს Omit Utility ტიპი და რა მიზნით გამოიყენება ის მონაცემთა ტრანსფორმაციისას?",
        question_en: "How does the Omit generic utility operate and what configuration task does it automate?",
        answer_ka: "Omit<T, K> აშენებს ახალ სტრუქტურას არსებული ინტერფეისის (T) ბაზაზე, საიდანაც ხელით გამოვრიცხავთ კონკრეტულ მითითებულ ველებს (K).",
        answer_en: "Omit<T, K> returns a modified custom structural model derived from a source interface (T), removing specified property keys (K).",
        details_ka: "type SecureUser = Omit<User, 'password'>; — იქმნება ტიპი პაროლის ველის გარეშე.",
        details_en: "Example: type SecureUser = Omit<User, 'password'>; strips sensitive entries safely.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Partial Utility", category_en: "TS Utilities",
        question_ka: "რას აკეთებს გენერიკული უტილიტა Partial<T> ტაიპსკრიპტში?",
        question_en: "What structural adjustment does the generic utility Partial<T> execute?",
        answer_ka: "ის იღებს ობიექტის ტიპს (T) და მის აბსოლუტურად ყველა შიდა ველს ავტომატურად ხდის არასავალდებულოდ (ანუ უმატებს კითხვის ნიშნებს ?).",
        answer_en: "It transforms an entire target object contract schema (T), converting every single internal property field into an optional attribute automatically.",
        details_ka: "ძალიან პოპულარულია მონაცემთა ბაზების განახლების (Update/Patch) ფუნქციების წერისას.",
        details_en: "Extensively leveraged when structuring partial dataset update routines (HTTP PATCH actions).",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Required Utility", category_en: "TS Utilities",
        question_ka: "რა მიზანს ემსახურება Required<T> უტილიტა?",
        question_en: "What contract rule does the Required<T> utility enforce upon interfaces?",
        answer_ka: "ის Partial-ის საპირისპიროა. იღებს ტიპს და მის ყველა არსებულ არასავალდებულო ველს ხდის მკაცრად სავალდებულოდ, აცილებს კითხვის ნიშნებს.",
        answer_en: "It acts inversely to Partial, stripping away all optional modifiers inside a type to force every single property to register as mandatory.",
        details_ka: "ის უზრუნველყოფს, რომ არცერთი ველი არ დარჩეს ცარიელი ობიექტის შევსებისას.",
        details_en: "This guarantees absolute property validation across active configuration instances.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Readonly Utility", category_en: "TS Utilities",
        question_ka: "როგორ მუშაობს Readonly<T> გენერიკული უტილიტა?",
        question_en: "How does the built-in Readonly<T> generic utility behave?",
        answer_ka: "ის ობიექტის სტრუქტურის ყველა ველს ავტომატურად უწერს readonly მოდიფიკატორს, რაც კრძალავს ობიექტის შექმნის შემდგომ მის შეცვლას.",
        answer_en: "It processes the entirety of an object contract, injecting immutable readonly traits onto every single parameter field, locking state graphs.",
        details_ka: "ეს გვეხმარება მონაცემთა სრული იმუტაბელურობის დაცვაში.",
        details_en: "An efficient helper that locks down configuration datasets against unauthorized mutations.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Pick Utility", category_en: "TS Utilities",
        question_ka: "რით განსხვავდება Pick<T, K> უტილიტა Omit-ისგან?",
        question_en: "What sets the Pick<T, K> utility apart from the adjacent Omit mapping tool?",
        answer_ka: "Omit გამორიცხავს მითითებულ ველებს, ხოლო Pick პირიქით — არსებული ტიპიდან (T) ირჩევს და ინარჩუნებს მხოლოდ ჩვენთვის სასურველ კონკრეტულ ველებს (K).",
        answer_en: "While Omit filters out listed properties, Pick works inversely — selecting and maintaining exclusively specified fields (K) from a source type (T).",
        details_ka: "type UserInfo = Pick<User, 'name' | 'email'>; — ირჩევს მხოლოდ სახელს და მეილს.",
        details_en: "Example: type UserInfo = Pick<User, 'name' | 'email'>; isolates chosen entries solely.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Record Utility", category_en: "TS Utilities",
        question_ka: "რა სტრუქტურის ასაგებადაა განკუთვნილი Record<K, T> უტილიტა?",
        question_en: "What explicit architectural design does the Record<K, T> utility simplify?",
        answer_ka: "ის გამოიყენება Key-value ტიპის ობიექტების ასაგებად, სადაც მკაფიოდ განვსაზღვრავთ გასაღებების ტიპს (K) და თავად მნიშვნელობების სტრუქტურას (T).",
        answer_en: "It maps structured key-value configurations dictionary models easily, specifying precise type requirements for both keys (K) and internal properties values (T).",
        details_ka: "მაგალითი: const userRoles: Record<string, boolean> = { admin: true, user: false };",
        details_en: "Usage sample: const userRoles: Record<string, boolean> = { admin: true, user: false };",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Exclude Utility", category_en: "TS Utilities",
        question_ka: "როგორ მუშაობს Exclude<T, U> უტილიტა გაერთიანებულ (Union) ტიპებთან მუშაობისას?",
        question_en: "How does Exclude<T, U> execute modifications across Union type definitions?",
        answer_ka: "ის იღებს Union ტიპების ნაკრებს (T) და მისგან სრულად ყრის/გამორიცხავს იმ ტიპებს, რომლებიც ემთხვევა მეორე პარამეტრს (U).",
        answer_en: "It filters an active Union type cluster (T), systematically dropping and stripping out any primitive attributes that match second parameters (U).",
        details_ka: "type Primitives = Exclude<string | number | boolean, boolean>; // დარჩება string | number",
        details_en: "Example: Exclude<string | number | boolean, boolean> yields alternative string | number tracks.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Extract Utility", category_en: "TS Utilities",
        question_ka: "რა პრინციპით მუშაობს Extract<T, U> უტილიტა ტაიპსკრიპტში?",
        question_en: "What operations strategy governs execution for the Extract<T, U> utility?",
        answer_ka: "ის არის Exclude-ის საპირისპირო. Union ნაკრებიდან (T) იღებს და ტოვებს მხოლოდ იმ საერთო ტიპებს, რომლებიც ასევე არსებობენ მეორე ნაკრებშიც (U).",
        answer_en: "It functions as the exact converse of Exclude, scanning type sets (T) to extract and isolate only attributes shared inside secondary matrices (U).",
        details_ka: "ის პოულობს ტიპების საერთო გადაკვეთას.",
        details_en: "It filters out unshared keys to secure intersection commonalities across unions.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "NonNullable", category_en: "TS Utilities",
        question_ka: "რას აკეთებს უტილიტა NonNullable<T>?",
        question_en: "What compilation adjustment does the NonNullable<T> utility process?",
        answer_ka: "ის Union ტიპების სიიდან ავტომატურად შლის და მთლიანად აგდებს null და undefined მნიშვნელობებს, ტოვებს მხოლოდ რეალურ მყარ პრიმიტივებს.",
        answer_en: "It filters type specifications (T), purging null and undefined elements completely from prospective assignments variations.",
        details_ka: "type ValidData = NonNullable<string | null | undefined>; // დარჩება მხოლოდ string",
        details_en: "Example execution output: NonNullable<string | null | undefined> resolves down strictly to string.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "ReturnType", category_en: "TS Utilities",
        question_ka: "რა დანიშნულება აქვს ReturnType<T> გენერიკულ უტილიტას?",
        question_en: "What structural metadata metadata does ReturnType<T> resolve from functions?",
        answer_ka: "ის ავტომატურად იგებს და ამოიღებს ფუნქციის (T) მიერ დასაბრუნებელი მნიშვნელობის ზუსტ ტიპს კოდის სხვა ნაწილში გამოსაყენებლად.",
        answer_en: "It programmatically extracts and captures the explicit return type layout specified on a target function routine signature (T) for reuse.",
        details_ka: "გამოიყენება მაშინ, როდესაც გსურთ ფუნქციაზე მყარად მიბმული ახალი ტიპების შექმნა.",
        details_en: "Extremely helpful when synchronizing client states tightly with backend routing return outputs.",
        lang: "ts", component: "comp_10"
    },
    {
        category_ka: "Parameters Utility", category_en: "TS Utilities",
        question_ka: "რას აბრუნებს უტილიტა Parameters<T> ტაიპსკრიპტში?",
        question_en: "What layout data profile does Parameters<T> bundle from targeted routines?",
        answer_ka: "ის იღებს ფუნქციის ტიპს (T) და მისი ყველა არგუმენტის/პარამეტრის ტიპებს აბრუნებს ერთიანი Tuple (კორტეჟის) მასივის სახით.",
        answer_en: "It accepts a valid function signature model (T), isolating and packaging all its stated parameters types inside a clean dynamic Tuple matrix layout.",
        details_ka: "ეს გვაძლევს საშუალებას სრულად დავაკოპიროთ ნებისმიერი ფუნქციის არგუმენტების ინტერფეისი.",
        details_en: "This enables developers to replicate or forward argument parameters requirements safely across wrapper patterns.",
        lang: "ts", component: "comp_10"
    }
];