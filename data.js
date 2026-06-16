const jsBeginner = [
    {
        category_ka: "JS ცვლადები",
        category_en: "JS Variables",
        question_ka: "რა არის ცვლადი?",
        question_en: "What is a variable?",
        answer_ka: "ცვლადი არის მეხსიერებაში გამოყოფილი ყუთი მონაცემების შესანახად.",
        answer_en: "A variable is a container for storing data values in memory.",
        details_ka: "წარმოიდგინეთ მუყაოს ყუთი, რომელსაც გარედან აწერთ ნებისმიერ გასაგებ სახელს, ხოლო შიგნით დებთ რაიმე კონკრეტულ მონაცემს. კოდში ამ ინფორმაციის გამოსაყენებლად პირდაპირ ყუთის სახელს მიმართავთ.",
        details_en: "Imagine a cardboard box labeled with a specific name, inside which you place data. To use this information in your code, you simply reference the box by its name."
    },
    {
        category_ka: "JS ცვლადები",
        category_en: "JS Variables",
        question_ka: "რა განსხვავებაა let-სა და const-ს შორის?",
        question_en: "What is the difference between let and const?",
        answer_ka: "let ცვლადის მნიშვნელობის შეცვლა ნებადართულია, const კი მუდმივაა.",
        answer_en: "let allows reassignment of the value, while const is read-only.",
        details_ka: "let გამოიყენება მაშინ, როცა მონაცემის შეცვლას მომავალში გეგმავთ (მაგ. ქულები თამაშში). const არის ჩაკეტილი ყუთი, რომელშიც მონაცემს დებთ მხოლოდ ერთხელ - მისი შექმნისას.",
        details_en: "let is used when you plan to change the data later (e.g., game scores). const is a locked box where you place data only once during its creation."
    },
    {
        category_ka: "JS ცვლადები",
        category_en: "JS Variables",
        question_ka: "რა არის var?",
        question_en: "What is var?",
        answer_ka: "ცვლადის გამოცხადების მოძველებული გზა, რომელიც დღეს აღარ გამოიყენება.",
        answer_en: "An outdated way to declare variables that is no longer recommended.",
        details_ka: "var-ს აქვს ფუნქციური მოქმედების არეალი და არაპროგნოზირებადი ქცევა, რის გამოც თანამედროვე პროგრამირებაში ის სრულად ჩაანაცვლა let-მა და const-მა.",
        details_en: "var has function scope and unpredictable behavior, which is why it has been completely replaced by let and const in modern development."
    },
    {
        category_ka: "JS მონაცემები",
        category_en: "JS Data Types",
        question_ka: "რა არის String (სტრიქონი)?",
        question_en: "What is a String?",
        answer_ka: "უბრალო ტექსტი, რომელიც მოქცეულია ბრჭყალებში.",
        answer_en: "Plain text wrapped inside quotes.",
        details_ka: "ნებისმიერი სიმბოლო, სიტყვა ან წინადადება, რომელიც მოქცეულია ერთმაგ, ორმაგ ან დახრილ ბრჭყალებში, არის სტრიქონი.",
        details_en: "Any character, word, or sentence enclosed in single, double, or backtick quotes is considered a string."
    },
    {
        category_ka: "JS მონაცემები",
        category_en: "JS Data Types",
        question_ka: "რა არის Number ტიპი?",
        question_en: "What is the Number type?",
        answer_ka: "ნებისმიერი რიცხვი - როგორც მთელი, ისე წილადი.",
        answer_en: "Any numeric value, including both integers and decimals.",
        details_ka: "JavaScript-ში 5-იც და 5.5-იც ერთნაირად Number ტიპში გადის. სხვა ენებისგან განსხვავებით, მათ ცალ-ცალკე გამოყოფა არ სჭირდებათ.",
        details_en: "In JavaScript, both 5 and 5.5 belong to the Number type. Unlike some other languages, they do not require separate data types."
    },
    {
        category_ka: "JS მონაცემები",
        category_en: "JS Data Types",
        question_ka: "რა არის Boolean (ბულევანი)?",
        question_en: "What is a Boolean?",
        answer_ka: "მონაცემი, რომელსაც აქვს მხოლოდ ორი მნიშვნელობა: true ან false.",
        answer_en: "A data type that has only two values: true or false.",
        details_ka: "გამოიყენება გადამრთველის პრინციპით ლოგიკურ პირობებში. მაგალითად, ცვლადი მიგვითითებს, არის თუ არა მომხმარებელი სისტემაში შესული.",
        details_en: "Used as a switch in logical conditions. For example, a variable indicating whether a user is currently logged into the system."
    },
    {
        category_ka: "JS ოპერატორები",
        category_en: "JS Operators",
        question_ka: "რა განსხვავებაა = და == შორის?",
        answer_ka: "= არის მნიშვნელობის მინიჭება, == არის მნიშვნელობების შედარება.",
        question_en: "What is the difference between = and ==?",
        answer_en: "= is for assignment, while == is for comparison.",
        details_ka: "ერთი ტოლობა გამოიყენება ცვლადში მონაცემის ჩასაწერად, ხოლო ორი ტოლობა გამოიყენება შესამოწმებლად, უდრის თუ არა ორი მონაცემი ერთმანეთს მნიშვნელობით.",
        details_en: "A single equals sign is used to assign data to a variable, while a double equals sign is used to check if two values are equal in value."
    },
    {
        category_ka: "JS გამოტანა",
        category_en: "JS Output",
        question_ka: "რა არის console.log()?",
        answer_ka: "ინფორმაციის დაბეჭდვა ბრაუზერის დეველოპერის კონსოლში.",
        question_en: "What is console.log()?",
        answer_en: "Printing information directly into the browser's developer console.",
        details_ka: "ეს არის დეველოპერების მთავარი იარაღი კოდის შესამოწმებლად. ჩვეულებრივი მომხმარებელი ამას ვერ ხედავს, სანამ საინსპექციო ფანჯარას არ გახსნის.",
        details_en: "This is the primary tool for developers to test code. A regular user cannot see this unless they open the developer tools inspection window."
    },
    {
        category_ka: "JS პირობები",
        category_en: "JS Conditions",
        question_ka: "რა არის if ოპერატორი?",
        answer_ka: "კონსტრუქცია, რომელიც კოდს უშვებს მხოლოდ პირობის სიმართლის შემთხვევაში.",
        question_en: "What is the if statement?",
        answer_en: "A conditional structure that executes code only if the condition is true.",
        details_ka: "თუ მრგვალ ფრჩხილებში მოცემული ლოგიკური პირობა არის ჭეშმარიტი (true), მაშინ ფიგურულ ფრჩხილებში მოთავსებული კოდი შესრულდება.",
        details_en: "If the logical condition inside the parentheses evaluates to true, the code block inside the curly braces will execute."
    },
    {
        category_ka: "JS ციკლები",
        category_en: "JS Loops",
        question_ka: "რა არის ციკლი (Loop)?",
        answer_ka: "კოდის გარკვეული ნაწილის მრავალჯერ გამეორების მექანიზმი.",
        question_en: "What is a loop?",
        answer_en: "A mechanism designed to repeat a block of code multiple times.",
        details_ka: "ციკლი გვეხმარება ავიცილოთ თავიდან კოდის ხელით დუბლირება. თუ გვსურს ერთი და იგივე მოქმედება შევასრულოთ 50-ჯერ, ციკლი ამას გააკეთებს რამდენიმე ხაზში.",
        details_en: "Loops help avoid manual duplication of code. If you want to perform the same action 50 times, a loop handles it in just a few lines."
    }
];

const jsIntermediate = [
    {
        category_ka: "JS ოპერატორები",
        category_en: "JS Operators",
        question_ka: "რა განსხვავებაა == და === ოპერატორებს შორის?",
        answer_ka: "== ადარებს მხოლოდ მნიშვნელობებს, === ადარებს მნიშვნელობებსაც და ტიპებსაც.",
        question_en: "What is the difference between == and ===?",
        answer_en: "== compares only values, while === compares both values and data types.",
        details_ka: "== ოპერატორი შედარებამდე ახდენს ტიპების იძულებით გარდაქმნას. === არის მკაცრი შედარება გარდაქმნის გარეშე, ამიტომ 5 === '5' არის false.",
        details_en: "The == operator performs implicit type coercion before comparing. === is a strict comparison without coercion, making 5 === '5' evaluate to false."
    },
    {
        category_ka: "JS პირობები",
        category_en: "JS Conditions",
        question_ka: "რა როლი აქვს default სექციას switch კონსტრუქციაში?",
        answer_ka: "ასრულებს კოდს მაშინ, როდესაც არცერთი ქეისი (case) არ დაემთხვა ცვლადს.",
        question_en: "What is the purpose of the default section in a switch statement?",
        answer_en: "It executes code when none of the defined cases match the expression.",
        details_ka: "ეს არის switch კონსტრუქციის ბოლო ალტერნატივა, რომელიც ანალოგიურია if-else სტრუქტურის ბოლოში არსებული სუფთა else ბლოკისა.",
        details_en: "This is the final fallback for a switch statement, serving the same functional role as the final else block in an if-else structure."
    },
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რას აკეთებს მასივის push() მეთოდი?",
        answer_ka: "ამატებს ახალ ელემენტს მასივის სულ ბოლოში.",
        question_en: "What does the array push() method do?",
        answer_en: "Adds a new element directly to the very end of an array.",
        details_ka: "ეს მეთოდი პირდაპირ ცვლის თავდაპირველ მასივს მეხსიერებაში. ის სვამს ახალ გადაცემულ წევრს სიის ბოლოში და შედეგის სახით აბრუნებს მასივის განახლებულ ჯამურ სიგრძეს.",
        details_en: "This method mutates the original array in place and returns the updated total length of the array as its result."
    },
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რას აკეთებს მასივის pop() მეთოდი?",
        answer_ka: "აშორებს და სამუდამოდ შლის ყველაზე ბოლო ელემენტს მასივიდან.",
        question_en: "What does the array pop() method do?",
        answer_en: "Removes and deletes the last element from an array.",
        details_ka: "ცვლის მასივს, აგდებს ბოლო წევრს და შედეგის სახით აბრუნებს სწორედ ამ წაშლილ ელემენტს, რათა სურვილისამებრ გამოიყენოთ კოდში.",
        details_en: "Modifies the array, discards its last member, and returns that specific removed element so you can utilize it elsewhere in your code."
    },
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რით განსხვავდება shift() მეთოდი pop()-ისგან?",
        answer_ka: "pop() შლის მასივის ბოლო ელემენტს, ხოლო shift() შლის ყველაზე პირველ ელემენტს.",
        question_en: "How does the shift() method differ from pop()?",
        answer_en: "pop() deletes the last element of an array, while shift() removes the first element.",
        details_ka: "shift() აშლის მასივის ნულოვან ინდექსზე მყოფ წევრს, ხოლო მასივში დარჩენილ ყველა სხვა ელემენტს ავტომატურად გადმოწევს ერთი ინდექსით უკან.",
        details_en: "shift() removes the item located at index zero and automatically shifts all remaining elements back by one index position."
    },
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რას აკეთებს unshift() მეთოდი?",
        answer_ka: "ამატებს ახალ ელემენტს მასივის დასაწყისში, სულ პირველ ადგილზე.",
        question_en: "What does the unshift() method do?",
        answer_en: "Adds a new element to the very beginning of an array.",
        details_ka: "სვამს ახალ მონაცემს ნულოვან ინდექსზე, ხოლო მასივში უკვე არსებულ ყველა დანარჩენ წევრს თითო პოზიციით წინ გადასწევს.",
        details_en: "Inserts new data at index zero, moving all pre-existing elements forward by one position in the array structure."
    },
    {
        category_ka: "JS მოვლენები",
        category_en: "JS Events",
        question_ka: "რა არის Event Bubbling (მოვლენის აფეთქება)?",
        answer_ka: "მოვლენის ავტომატური გავრცელება შვილობილი ელემენტიდან ზემოთ მშობელ ელემენტებამდე.",
        question_en: "What is Event Bubbling?",
        answer_en: "The automatic propagation of an event from a child element upwards through its parent elements.",
        details_ka: "როდესაც აკლიკებთ შიდა ღილაკს, კლიკის მოვლენა ჯერ მასზე სრულდება, შემდეგ ავტომატურად გადადის მის მშობელ კონტეინერ div-ზე, body-ზე და window-მდე.",
        details_en: "When you click an inner button, the click event executes on it first, then automatically bubbles up to its parent div, body, and window."
    },
    {
        category_ka: "JS ფორმები",
        category_en: "JS Forms",
        question_ka: "რისთვის გამოიყენება event.preventDefault() მეთოდი?",
        answer_ka: "ბრაუზერის ნაგულისხმევი სტანდარტული ავტომატური ქცევის შესაჩერებლად.",
        question_en: "What is event.preventDefault() used for?",
        answer_en: "To cancel the browser's default standard automated behavior associated with an event.",
        details_ka: "ყველაზე ხშირად გამოიყენება HTML ფორმების გაგზავნისას, რათა შეაჩეროს გვერდის ავტომატური გადატვირთვა და მონაცემები ჯერ JS-ით დაამუშავდეს.",
        details_en: "Most commonly used during HTML form submission to stop the page from automatically reloading, allowing JS to handle data processing first."
    },
    {
        category_ka: "ბრაუზერი API",
        category_en: "Browser API",
        question_ka: "რა განსხვავებაა localStorage-სა და sessionStorage-ს შორის?",
        answer_ka: "localStorage ინახავს მონაცემებს სამუდამოდ, sessionStorage კი ჩანართის დახურვამდე.",
        question_en: "What is the difference between localStorage and sessionStorage?",
        answer_en: "localStorage persists data permanently, while sessionStorage lasts only until the tab is closed.",
        details_ka: "localStorage-ში ჩაწერილი ინფორმაცია არ იშლება ბრაუზერის ან კომპიუტერის გამორთვის შემდეგაც კი. sessionStorage კი იშლება ჩანართის დახურვისთანავე.",
        details_en: "Information in localStorage is not wiped even after closing the browser or restarting. sessionStorage clears the exact moment the tab is closed."
    },
    {
        category_ka: "ტაიმერები",
        category_en: "Timers",
        question_ka: "როგორ მუშაობს setInterval() ფუნქცია?",
        answer_ka: "პერიოდულად უშვებს ფუნქციას ყოველ მითითებულ მილიწამში.",
        question_en: "How does the setInterval() function work?",
        answer_en: "Repeatedly executes a function at every specified millisecond interval.",
        details_ka: "თუ მივუთითებთ 1000 მილიწამს, ფუნქცია განმეორდება ყოველ 1 წამში. ის აბრუნებს ID ნომერს, რომელიც საჭიროა ამ ტაიმერის შესაჩერებლად.",
        details_en: "If set to 1000ms, the function runs every 1 second continuously. It returns an ID integer used to cancel this recurring cycle via code."
    }
];

const jsAdvanced = [
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რას აკეთებს მასივის reduce() მეთოდი?",
        answer_ka: "მასივის ყველა ელემენტს აკუმულირებს და ამცირებს ერთ საბოლოო მნიშვნელობამდე.",
        question_en: "What does the array reduce() method do?",
        answer_en: "Accumulates all array elements down to a single final computed value.",
        details_ka: "იდეალურია მასივის ელემენტების ჯამის დასათვლელად ან მონაცემთა სტრუქტურის შესაცვლელად. ის იყენებს აკუმულატორს, რომელიც ინახავს წინა იტერაციების შუალედურ პასუხს.",
        details_en: "Perfect for calculating the sum of array values or shifting data structures. It utilizes an accumulator to store intermediate results across iterations."
    },
    {
        category_ka: "JS მასივები",
        category_en: "JS Arrays",
        question_ka: "რა განსხვავებაა slice() და splice() მეთოდებს შორის?",
        answer_ka: "slice() აბრუნებს მასივის ნაწილის ასლს, splice() კი ფიზიკურად ჭრის და ცვლის მასივს.",
        question_en: "What is the difference between slice() and splice()?",
        answer_en: "slice() returns a copy of a section of an array, while splice() alters the array by removing/adding elements.",
        details_ka: "slice() არის უსაფრთხო მეთოდი, რომელიც ორიგინალ მასივს არ აზიანებს. splice() კი აკეთებს ქირურგიულ ჩარევას და პირდაპირ ცვლის მასივს მეხსიერებაში.",
        details_en: "slice() is a safe method that leaves the original array pristine. splice() modifies the targeted array in place, modifying memory records directly."
    },
    {
        category_ka: "DOM მანიპულაცია",
        category_en: "DOM Manipulation",
        question_ka: "რით განსხვავდება textContent innerHTML-ისგან უსაფრთხოების მხრივ?",
        answer_ka: "textContent კითხულობს მხოლოდ სუფთა ტექსტს, innerHTML კი აკეთებს HTML კოდის რენდერს.",
        question_en: "How does textContent differ from innerHTML regarding security?",
        answer_en: "textContent handles only plain text, whereas innerHTML compiles and renders HTML nodes.",
        details_ka: "innerHTML-ის გამოყენება სახიფათოა XSS თავდასხმების გამო, რადგან მომხმარებლის მიერ შემოყვანილი კოდი შესრულდება. textContent ყველაფერს აღიქვამს როგორც უსაფრთხო ტექსტს.",
        details_en: "innerHTML can introduce severe XSS vulnerabilities if user input is unescaped. textContent treats everything as safe, unexecutable string literals."
    },
    {
        category_ka: "ასინქრონული JS",
        category_en: "Async JS",
        question_ka: "რა არის Promise და რა ძირითად 3 მდგომარეობაში შეიძლება იმყოფებოდეს ის?",
        answer_ka: "ობიექტი ასინქრონული ოპერაციის მომავალი შედეგისთვის. მდგომარეობებია: pending, fulfilled, rejected.",
        question_en: "What is a Promise and what are its 3 primary states?",
        answer_en: "An object representing the eventual completion of an async operation. States: pending, fulfilled, rejected.",
        details_ka: "Pending არის მოლოდინის რეჟიმი. Fulfilled ნიშნავს, რომ ოპერაცია წარმატებით დასრულდა. Rejected მიუთითებს, რომ პროცესი შეცდომით დასრულდა.",
        details_en: "Pending means the operation is ongoing. Fulfilled guarantees a successful operation. Rejected means an error or network crash took place."
    },
    {
        category_ka: "ასინქრონული JS",
        category_en: "Async JS",
        question_ka: "როგორ მუშაობს async და await სინტაქსი?",
        answer_ka: "საშუალებას გვაძლევს ასინქრონული კოდი დავწეროთ სინქრონულ სტილში, პრომისების ჯაჭვების გარეშე.",
        question_en: "How do async and await syntaxes work?",
        answer_en: "They allow you to write asynchronous logic in a synchronous-looking sequential style.",
        details_ka: "async ფუნქცია ყოველთვის აბრუნებს პრომისს. await აჩერებს კოდის ხაზის შესრულებას პრომისის დასრულებამდე საიტის ინტერფეისის გაჭედვის გარეშე.",
        details_en: "An async function always returns a promise. await pauses the execution path line-by-line until the promise settles, without freezing the main thread."
    },
    {
        category_ka: "ასინქრონული JS",
        category_en: "Async JS",
        question_ka: "როგორ ხდება შეცდომების მართვა async/await სტრუქტურაში?",
        answer_ka: "try...catch ბლოკების გამოყენებით.",
        question_en: "How do you handle errors in an async/await structure?",
        answer_en: "By utilizing standard try...catch blocks around your await calls.",
        details_ka: "ასინქრონული ოპერაციები თავსდება try ბლოკში. თუ რომელიმე მოთხოვნა ჩავარდება, კონტროლი მყისიერად გადადის catch ბლოკზე, სადაც ვამუშავებთ შეცდომას.",
        details_en: "Asynchronous statements are written inside the try scope. If an awaited promise rejects, control transitions immediately into the catch parameter."
    },
    {
        category_ka: "HTTP მეთოდები",
        category_en: "HTTP Methods",
        question_ka: "რა განსხვავებაა PUT და PATCH HTTP მეთოდებს შორის?",
        answer_ka: "PUT ანაცვლებს რესურსს სრულად, PATCH კი აკეთებს რესურსის ნაწილობრივ განახლებას.",
        question_en: "What is the difference between PUT and PATCH HTTP methods?",
        answer_en: "PUT completely replaces a target resource, while PATCH applies partial dynamic updates.",
        details_ka: "PUT მოითხოვს მთლიანი განახლებული ობიექტის გაგზავნას. PATCH-ის დროს კი სერვერზე აგზავნით მხოლოდ იმ კონკრეტულ ველებს, რომელთა შეცვლაც გსურთ.",
        details_en: "PUT requires sending the entire payload to overwrite the resource. PATCH lets you supply only the specific parameters you intend to modify."
    },
    {
        category_ka: "ბრაუზერი API",
        category_en: "Browser API",
        question_ka: "რა არის Zero-Delay Execution setTimeout(fn, 0)-ის დროს?",
        answer_ka: "ფუნქციის გადატანა მაკროტასკების რიგში მიმდინარე სინქრონული კოდის დასრულებისთანავე.",
        question_en: "What is Zero-Delay Execution when using setTimeout(fn, 0)?",
        answer_en: "Deferring function execution to the macrotask queue right after the main synchronous stack empties.",
        details_ka: "ეს არ ნიშნავს კოდის გაშვებას მომენტალურად 0 მილიწამში. ის აგზავნის ფუნქციას რიგის ბოლოში, რათა შესრულდეს მთავარი სინქრონული ნაკადის დაცლის შემდეგ.",
        details_en: "It does not run code instantly at 0ms. It lines up the execution thread inside the queue, waiting until the synchronous loop concludes."
    },
    {
        category_ka: "DOM მანიპულაცია",
        category_en: "DOM Manipulation",
        question_ka: "რას აკეთებს მეთოდი appendChild() და რა სპეციფიკა აქვს მას?",
        answer_ka: "ამატებს ელემენტს მშობლის ბოლოში, ხოლო თუ ელემენტი უკვე არსებობს DOM-ში, გადააქვს ის ახალ ადგილას.",
        question_en: "What does appendChild() do and what is its specific behavior?",
        answer_en: "Appends a node to the end of a parent, or moves it to the new position if it already exists in the DOM.",
        details_ka: "ეს მეთოდი არ აკეთებს ელემენტის დუბლირებას. თუ ელემენტი უკვე ზის საიტზე სხვაგან, ის ფიზიკურად წამოვა ძველი ადგილიდან და ჩაჯდება ახალ პოზიციაზე.",
        details_en: "This method never clones the node. If the element is already attached to the DOM, it physically detaches from its old spot and moves."
    },
    {
        category_ka: "ტაიმერები",
        category_en: "Timers",
        question_ka: "რატომ არის აუცილებელი clearInterval-ის გამოყენება?",
        answer_ka: "მეხსიერების გაჟონვის (Memory Leaks) თავიდან ასაცილებლად და პროცესის გასაჩერებლად.",
        question_en: "Why is it absolutely necessary to use clearInterval?",
        answer_en: "To prevent background memory leaks and clear active performance-consuming intervals.",
        details_ka: "თუ საიტიდან წაშლით ელემენტს, მაგრამ არ გამოიძახებთ clearInterval-ს, ინტერვალის ფუნქცია გააგრძელებს ფარულად მუშაობას კომპიუტერის მეხსიერებაში.",
        details_en: "If you remove an element from the page but fail to run clearInterval, the callback will persist running inside memory, degrading performance."
    }
];

const tsBeginner = [
    {
        category_ka: "TS შესავალი",
        category_en: "TS Introduction",
        question_ka: "რა არის TypeScript და ვინ არის მისი ავტორი?",
        answer_ka: "TypeScript არის Microsoft-ის მიერ შექმნილი პროგრამირების ენა, რომლის ავტორია ანდერს ჰეილსბერგი.",
        question_en: "What is TypeScript and who created it?",
        answer_en: "TypeScript is an open-source programming language developed by Microsoft, created by Anders Hejlsberg.",
        details_ka: "წარმოადგენს JavaScript-ის მკაცრ ზესიმრავლეს. ნებისმიერი სწორი JS კოდი ავტომატურად არის სწორი TS კოდიც, თუმცა TS ამატებს სტატიკურ ტიპიზაციას შეცდომების ადრეულ ეტაპზე აღმოსაჩენად.",
        details_en: "It is a strict superset of JavaScript, meaning any valid JS code is valid TS code. TS introduces static typing to capture analysis errors during compilation."
    },
    {
        category_ka: "TS შესავალი",
        category_en: "TS Introduction",
        question_ka: "რა მიზნით შეიქმნა TypeScript?",
        answer_ka: "დიდ პროექტებში კოდის პროგნოზირებადობისთვის და შეცდომების წერის პროცესშივე დასაჭერად.",
        question_en: "Why was TypeScript created?",
        answer_en: "To make large-scale application code predictable and find structural bugs during code development.",
        details_ka: "ვინაიდან JavaScript თავდაპირველად მცირე ინტერაქციებისთვის შეიქმნა, მასში ტიპების კონტროლი არ არსებობდა. გიგანტურ პროექტებზე მუშაობისას ეს იწვევდა ბევრ შეცდომას, რის გამოსასწორებლადაც შეიქმნა TS.",
        details_en: "JavaScript was not built for massive architectures, lacking type systems entirely. Managing large teams triggered code errors, which TS resolves."
    },
    {
        category_ka: "TS ინსტალაცია",
        category_en: "TS Installation",
        question_ka: "რა ბრძანებით ხდება TypeScript-ის გლობალური ინსტალაცია?",
        answer_ka: "კონსოლში ბრძანების გაშვებით: npm install -g typescript.",
        question_en: "Which command is used to install TypeScript globally?",
        answer_en: "By running the console command: npm install -g typescript.",
        details_ka: "ინსტალაციისთვის აუცილებელია თქვენს სისტემაში წინასწარ გქონდეთ დაყენებული Node.js გარემო. ინსტალაციის წარმატებით დასრულების შემდეგ, თქვენს ტერმინალში ხელმისაწვდომი ხდება tsc კომპილატორი.",
        details_en: "An active Node.js setup is mandatory to run npm installations. Once completed, the terminal unlocks the global tsc command compiler."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "რა ბრძანებით იქმნება საწყისი tsconfig.json ფაილი?",
        answer_ka: "კონსოლში ბრძანების გაშვებით: tsc --init.",
        question_en: "Which command initializes a fresh tsconfig.json file?",
        answer_en: "By executing the terminal prompt: tsc --init.",
        details_ka: "ეს ბრძანება თქვენს მიმდინარე საქაღალდეში ავტომატურად აგენერირებს tsconfig.json ფაილს, რომელიც წარმოადგენს TypeScript კომპილატორის მთავარ კონფიგურაციას და წესების კრებულს.",
        details_en: "This prompt auto-generates a boilerplate configuration file named tsconfig.json inside the directory path to specify compile properties."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "რა არის tsconfig.json ფაილის მთავარი დანიშნულება?",
        answer_ka: "განსაზღვრავს TypeScript კომპილატორის მუშაობის პარამეტრებსა და წესებს.",
        question_en: "What is the primary role of the tsconfig.json file?",
        answer_en: "It configures the compiler rules, constraints, and destination targets of the TypeScript compiler.",
        details_ka: "ამ ფაილში მიეთითება სამიზნე JavaScript ვერსია, მკაცრი ტიპიზაციის წესები (strict) და საქაღალდეები, თუ სად ჩაიწეროს გამომავალი ფაილები.",
        details_en: "Inside this root JSON document, developers determine compiler parameters such as script targets, structural strictness, and build directories."
    },
    {
        category_ka: "TS ბაზისი",
        category_en: "TS Basics",
        question_ka: "როგორ ხდება ტიპის მკაფიო (Explicit) მინიჭება ცვლადზე?",
        answer_ka: "ცვლადის სახელის შემდეგ ორწერტილისა და ტიპის მითითებით.",
        question_en: "How do you explicitly assign a data type to a variable?",
        answer_en: "By adding a colon followed by the keyword of the data type right after the label declaration.",
        details_ka: "მაგალითად: let age: number = 25;. ორწერტილის დასმით ბრაუზერსა და კომპილატორს მკაფიოდ ვეუბნებით, რომ ამ ყუთში მხოლოდ მითითებული ტიპის შენახვაა ნებადართული.",
        details_en: "For instance: let age: number = 25;. Specifying annotations locks down variable expectations, refusing non-numeric values entirely."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა თვისებებს ატარებს string ტიპი TypeScript-ში?",
        answer_ka: "მიუთითებს, რომ ცვლადში მხოლოდ ტექსტური მონაცემები უნდა შეინახოს.",
        question_en: "What constraints does the string data type enforce in TS?",
        answer_en: "It guarantees that the annotated variable accepts only textual string payloads.",
        details_ka: "მოიცავს ნებისმიერ სიმბოლოს, რომელიც მოქცეულია სტანდარტულ ან დახრილ ბრჭყალებში. მასში რიცხვის ჩაწერის მცდელობა გამოიწვევს შეცდომას კომპილაციის ეტაპზევე.",
        details_en: "Enforces a rule where values must stay inside quotation blocks. Storing array listings or numeric parameters throws a compile error."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა თვისებებს ატარებს number ტიპი TypeScript-ში?",
        answer_ka: "წარმოადგენს ნებისმიერ რიცხვს, როგორც მთელს, ისე ათწილადს.",
        question_en: "What features does the number data type provide in TypeScript?",
        answer_en: "It handles all numeric data configurations, supporting integer values and floats equally.",
        details_ka: "JavaScript-ის მსგავსად, TypeScript-შიც არ არსებობს ცალკე int ან float ტიპები. ყველა რიცხვი ერთიანდება number ტიპის ქვეშ.",
        details_en: "In lockstep with JavaScript standards, TypeScript omits separate sub-allocations like float or int. Every numeric value is just a number."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა თვისებებს ატარებს boolean ტიპი TypeScript-ში?",
        answer_ka: "ლოგიკური ტიპი, რომელიც იღებს მხოლოდ ორ მნიშვნელობას: true ან false.",
        question_en: "What parameters govern the boolean type in TypeScript?",
        answer_en: "A logical flag system that accepts exclusively the binary choices: true or false.",
        details_ka: "გამოიყენება პირობით კონსტრუქციებში ლოგიკური მდგომარეობის შესანახად. მკაცრად კრძალავს 0-ის ან 1-ის პირდაპირ ბულევანურ ცვლადში ჩაწერას.",
        details_en: "Utilized for conditional branching paths. It strictly bars casting numbers like 0 or 1 into values without clear boolean conversions."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა არის any ტიპი და რატომ უნდა ავარიდოთ მას თავი?",
        answer_ka: "any ტიპი სრულად თიშავს ტიპების შემოწმებას ცვლადზე.",
        question_en: "What is the any type and why should it be avoided?",
        answer_en: "The any type completely deactivates compiler check routines on the declared entity.",
        details_ka: "any ცვლადს შეგიძლიათ მიანიჭოთ ნებისმიერი ტიპის მნიშვნელობა. მისი ხშირი გამოყენება ცუდი პრაქტიკაა, რადგან იკარგება TS-ის აზრი.",
        details_en: "Assigning any instructs the compiler to disregard error trapping on the variable. Overusing it brings code safety right back to plain JS."
    }
];

const tsIntermediate = [
    {
        category_ka: "TS თავსებადობა",
        category_en: "TS Compatibility",
        question_ka: "ესმით თუ არა ბრაუზერებს TypeScript კოდი პირდაპირ?",
        answer_ka: "არა, ბრაუზერებს არ ესმით .ts ფაილები, ამიტომ საჭიროა ტრანსპილაცია.",
        question_en: "Can modern web browsers interpret TypeScript source files directly?",
        answer_en: "No, browsers lack engines to execute .ts natively, demanding transpilation first.",
        details_ka: "ვებ-გვერდები კითხულობენ მხოლოდ სტანდარტულ JavaScript-ს. tsc კომპილატორი იღებს ჩვენს TypeScript კოდს და სრულად თარგმნის სუფთა .js ფაილებად ბრაუზერებისთვის.",
        details_en: "Web view render engines understand JavaScript. The tsc executable processes structural TS text files and compiles them into compatible clean .js code."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "რას აკეთებს 'target' პარამეტრი tsconfig.json ფაილში?",
        answer_ka: "განსაზღვრავს, თუ JavaScript-ის რომელ ვერსიაში გადაკომპილირდეს კოდი.",
        question_en: "What does the 'target' option determine inside tsconfig.json?",
        answer_en: "It declares the ECMAScript syntax standard that the compiler output must target.",
        details_ka: "თუ მიუთითებთ 'ES5', კომპილატორი ყველა ახალ კონსტრუქციას (ისრიან ფუნქციებს, let, const) გადათარგმნის ძველ, თავსებად კოდში ძველი ბრაუზერებისთვის.",
        details_en: "Setting target to 'ES5' instructs the compiler to transform ES6 traits like arrow structures or blocks into vanilla backwards-compatible scripts."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "რას ემსახურება 'strict' პარამეტრი tsconfig-ში?",
        answer_ka: "რთავს ტიპების შემოწმების ყველაზე მკაცრ, მაქსიმალურად უსაფრთხო რეჟიმს.",
        question_en: "What flag does the 'strict' attribute control inside tsconfig variables?",
        answer_en: "It activates the highest possible settings of validation strictness checks across the workspace.",
        details_ka: "მისი true-ზე დასმით აქტიურდება უამრავი ქვე-წესი, მათ შორის null მნიშვნელობების მკაცრი კონტროლი, რაც კოდს იცავს ფარული შეცდომებისგან.",
        details_en: "Flipping strict to true triggers safety subsets like implicit type blocks and clear null pointer constraints to block silent bugs."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "რას აკეთებს 'outDir' პარამეტრი tsconfig-ში?",
        answer_ka: "უთითებს საქაღალდეს, სადაც უნდა ჩაიწეროს მზა, დაკომპილირებული .js ფაილები.",
        question_en: "What configuration setup does 'outDir' specify?",
        answer_en: "It dictates the specific target output folder where compiled .js files must settle.",
        details_ka: "გვეხმარება პროექტის ორგანიზებაში. საწყის კოდს ვინახავთ src საქაღალდეში, ხოლო კომპილაციის შედეგად მიღებული მზა ფაილები ავტომატურად იგზავნება dist-ში.",
        details_en: "Isolates source documents from production items. Source files reside neatly inside /src while compiler outputs transfer to /dist folders."
    },
    {
        category_ka: "TS კონფიგურაცია",
        category_en: "TS Config",
        question_ka: "როგორ ჩავრთოთ TypeScript ფაილების ავტომატური კომპილაცია ცვლილებაზე?",
        answer_ka: "ბრძანებით: tsc -w ან tsc --watch",
        question_en: "How do you run automatic continuous rebuild recompiles upon saving edits?",
        answer_en: "By initiating the watch option terminal script: tsc -w or tsc --watch.",
        details_ka: "კომპილატორი გადადის მუდმივი დაკვირვების რეჟიმში. კოდში ფაილის ყოველი შენახვისას (Ctrl+S), ის მომენტალურად ახდენს მის ხელახალ კომპილაციას.",
        details_en: "This locks the compiler utility into active listener mode. Whenever a file change records on disk, it recompiles modules instantly."
    },
    {
        category_ka: "TS ბაზისი",
        category_en: "TS Basics",
        question_ka: "როგორ ხდება ფუნქციის პარამეტრებისა და დაბრუნებული მნიშვნელობის ტიპიზაცია?",
        answer_ka: "ტიპები მიეთითება როგორც პარამეტრების გვერდით, ისე ფრჩხილების გარეთ ორწერტილით.",
        question_en: "How do you map parameter types and functional returns in TS configurations?",
        answer_en: "By applying type parameters directly to signature elements and return properties using colons.",
        details_ka: "მაგალითად: function add(x: number, y: number): number. ეს უზრუნველყოფს, რომ ფუნქციას არასწორ მონაცემს ვერავინ გადასცემს.",
        details_en: "For instance: function add(x: number, y: number): number. This guarantees incoming properties match strict conditions before compiling."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "როგორ განისაზღვრება მასივის ტიპი TypeScript-ში?",
        answer_ka: "სინტაქსით: let arr: number[] = []; ან Array<number>.",
        question_en: "What syntax rules determine array type definitions?",
        answer_en: "Using brackets annotation syntax: let arr: number[] = []; or the generic type code Array<number>.",
        details_ka: "ეს ჩანაწერი მკაცრად კრძალავს მოცემულ მასივში სხვა ტიპის მონაცემების (მაგალითად ტექსტების) ჩამატებას.",
        details_en: "This lock restricts storage variables from accepting type variations (like text entries inside numeric arrays) during app life."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა არის Type Inference (ტიპის ავტომატური გამოყვანა)?",
        answer_ka: "როდესაც TypeScript თავად ხვდება ცვლადის ტიპს მისთვის მინიჭებული საწყისი მნიშვნელობის მიხედვით.",
        question_en: "What defines the compiler mechanism known as Type Inference?",
        answer_en: "The compiler tracking and determining a variable's data type implicitly from its initialization expression.",
        details_ka: "თუ დაწერთ let message = 'hello'; ტიპის ხელით მითითების გარეშე, TS თავად მიანიჭებს string ტიპს და მომავალში მასში რიცხვის ჩაწერის ნებას აღარ დაგრთავთ.",
        details_en: "Declaring let message = 'hello'; without annotations makes the engine infer that message is a string, preventing any future numeric assignments."
    },
    {
        category_ka: "TS სტრუქტურები",
        category_en: "TS Structures",
        question_ka: "რა არის Interface (ინტერფეისი) და რისთვის გვჭირდება ის?",
        answer_ka: "ინტერფეისი არის კონსტრუქცია ობიექტის ზუსტი სტრუქტურისა და ფორმის აღსაწერად.",
        question_en: "What represents a TypeScript Interface and what is its utility?",
        answer_en: "A declaration layer to enforce explicit structural shape blueprints over target objects.",
        details_ka: "განსაზღვრავს მკაცრ ხელშეკრულებას (კონტრაქტს), თუ რა კონკრეტული გასაღებები და თვისებები უნდა გააჩნდეს ობიექტს.",
        details_en: "Establishes a solid contract mapping required key labels and data conditions that conforming object instances must follow."
    },
    {
        category_ka: "TS სტრუქტურები",
        category_en: "TS Structures",
        question_ka: "რა არის Type Alias (ტიპის ფსევდონიმი)?",
        answer_ka: "ახალი, მორგებული სახელის შექმნა ნებისმიერი ტიპისთვის type საკვანძო სიტყვით.",
        question_en: "What governs a TypeScript Type Alias syntax structure?",
        answer_en: "Creating a custom type identifier token pointing to specific parameters via the type keyword.",
        details_ka: "შეიძლება გამოყენებულ იქნას როგორც პრიმიტივებისთვის, ასევე კომპლექსური გაერთიანებებისთვის. მაგალითად: type Point = { x: number; y: number; };.",
        details_en: "Can label object patterns, primitive combinations, or functional conditions. For example: type Point = { x: number; y: number; };."
    }
];

const tsAdvanced = [
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რა არის მკაცრი განსხვავება Type Alias-სა და Interface-ს შორის?",
        answer_ka: "Interface განკუთვნილია მხოლოდ ობიექტებისთვის და აქვს ავტომატური მერჯინგის მხარდაჭერა, Type კი მუშაობს ნებისმიერ ტიპზე.",
        question_en: "What is the concrete difference between a Type Alias and an Interface?",
        answer_en: "Interfaces target exclusively object declarations and support auto merging; Type aliases can map any valid type expression.",
        details_ka: "თუ ერთსა და იმავე ინტერფეისს ორჯერ გამოაცხადებთ სხვადასხვა თვისებით, TS მათ ავტომატურად გააერთიანებს. type-ის შემთხვევაში ეს აკრძალულია.",
        details_en: "Declaring duplicate interface titles overlays properties seamlessly via Declaration Merging. Doing this with types causes compile exceptions."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "როგორ მუშაობს ინტერფეისის გაფართოება (extends)?",
        answer_ka: "აშუალებას გვაძლევს გადმოვიტანოთ ყველა თვისება სხვა ინტერფეისიდან და დავამატოთ ახლები.",
        question_en: "How does interface inheritance work using the 'extends' keyword?",
        answer_en: "It copies all property traits from a base interface mapping right into a new one while opening slots for additions.",
        details_ka: "კოდის ხელახალი გამოყენების საუკეთესო გზაა. მაგალითად: interface Admin extends User { accessLevel: number; }.",
        details_en: "The primary tool for structure composition. Example: interface Admin extends User { accessLevel: number; } copies User rules seamlessly."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რას აკეთებს Omit Utility ტიპი?",
        answer_ka: "ქმნის ახალ ტიპს არსებული ინტერფეისის ბაზაზე, გარკვეული თვისებების ხელით ამოღებით.",
        question_en: "What does the Omit generic utility type achieve?",
        answer_en: "It filters an existing type map by stripping away specified property keys from its definition template.",
        details_ka: "სინტაქსი: Omit<User, 'password'>. იდეალურია მონაცემთა უსაფრთხო ტრანსფორმაციისთვის, როდესაც მომხმარებლის პროფილის ჩვენებისას გვინდა დავმალოთ სენსიტიური მონაცემები.",
        details_en: "Syntax structure: Omit<User, 'password'>. Useful for stripping sensitive user parameters before propagating data fields to client scripts."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რა არის გაერთიანებული (Union) ტიპები?",
        answer_ka: "საშუალებას გაძლევთ ცვლადს მიანიჭოთ რამდენიმე ალტერნატიული ტიპიდან ერთ-ერთი.",
        question_en: "What characterizes Union Types inside TypeScript code blocks?",
        answer_en: "Allowing a specific value target to hold any item from an enumerated series of alternative data types.",
        details_ka: "იწერება ვერტიკალური ხაზის (|) ოპერატორით. მაგალითად: let id: string | number;. ცვლადი id გახდება მოქნილი და შეინახავს როგორც ტექსტს, ისე რიცხვს.",
        details_en: "Expressed through the vertical pipe (|) delimiter character. For instance: let id: string | number; permits text string inputs alongside floats."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რა არის Intersection (&) ტიპები ობიექტებში?",
        answer_ka: "რამდენიმე სხვადასხვა ტიპის სტრუქტურის სრული გაერთიანება და შერწყმა & ოპერატორით.",
        question_en: "What characterizes Intersection types (&) in object definitions?",
        answer_en: "Combining multiple disparate object structures together into one consolidated contract map using the & symbol.",
        details_ka: "თუ გვაქვს ორი ობიექტის ტიპი, & ოპერატორით შექმნილი ახალი ცვლადი ვალდებულია ერთდროულად და სრულად შეიცავდეს ორივე ორიგინალი ტიპის ყველა თვისებას.",
        details_en: "Intersecting definitions via & demands that the final assigned variable conforms to all mixed parameters concurrently without exceptions."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა განსხვავებაა unknown ტიპსა და any-ს შორის?",
        answer_ka: "unknown არის any-ს უსაფრთხო ალტერნატივა, რომელიც მოითხოვს ტიპის დაზუსტებას ოპერაციამდე.",
        question_en: "What makes the unknown data type different from using any?",
        answer_en: "unknown functions as a type-safe counterpart to any, requiring structural type validation checks before accessing properties.",
        details_ka: "any-სგან განსხვავებით, unknown ცვლადზე პირდაპირ მოქმედებებს ვერ ჩაატარებთ, სანამ Type Guard-ით (მაგალითად if პირობით) მკაცრად არ გადაამოწმებთ მის ტიპს.",
        details_en: "Unlike any, the engine blocks arbitrary methods or properties on unknown variables until you prove their layout with a narrowing type guard."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა არის Tuple (კორტეჟი) და რით განსხვავდება ის ჩვეულებრივი მასივისგან?",
        answer_ka: "ფიქსირებული სიგრძის მასივი, სადაც წინასწარ არის გაწერილი თითოეული ინდექსის ტიპი.",
        question_en: "What specifies a Tuple structure and how does it separate from array parameters?",
        answer_en: "An array format with an invariant item count where each sequential array index holds a strictly mapped type parameter.",
        details_ka: "მაგალითად: let user: [number, string] = [1, 'Anna'];. პირველი ელემენტი ვალდებულია იყოს მკაცრად რიცხვი, ხოლო მეორე - ტექსტი.",
        details_en: "For instance: let user: [number, string] = [1, 'Anna']. The first position requires an integer, and the second requires a text string."
    },
    {
        category_ka: "TS ტიპები",
        category_en: "TS Types",
        question_ka: "რა არის Type Assertion (ტიპის დამტკიცება) და როგორ გამოიყენება 'as' სინტაქსი?",
        answer_ka: "კომპილატორისთვის მითითება, რომ დეველოპერმა ზუსტად იცის ობიექტის ნამდვილი ტიპი.",
        question_en: "What defines a Type Assertion drill and the implementation of 'as' keywords?",
        answer_en: "An explicit flag informing the tsc compile checks that you have verified the true runtime layout format of an expression.",
        details_ka: "გამოიყენება 'as' საკვანძო სიტყვა. მაგალითად: data as string. ეს ეხმარება კომპილატორს სწორი ავტოშევსების მუშაობაში, თუმცა რეალურად კოდის გაშვებისას მონაცემს ტიპს არ უცვლის.",
        details_en: "Invoked using the 'as' keyword modifier: value as string. It informs the compiler of specific traits but applies no physical casting to runtime files."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რას აკეთებს readonly მოდიფიკატორი ინტერფეისის თვისებაზე?",
        answer_ka: "ხდის თვისებას მხოლოდ წაკითხვადს ობიექტის პირველადი ინიციალიზაციის შემდეგ.",
        question_en: "What structural rule does the readonly modifier apply to an interface attribute?",
        answer_en: "It restricts changes to the designated key parameters, turning it read-only once instantiated.",
        details_ka: "readonly თვისების მქონე გასაღებში მონაცემის შეცვლის ან ხელახალი გადაწერის მცდელობა გამოიწვევს კრიტიკულ შეცდომას TypeScript კომპილატორის მიერ კოდის შემოწმებისას.",
        details_en: "Attempting to assign new data records to a readonly key parameter triggers compilation warnings and terminates output bundling pipelines."
    },
    {
        category_ka: "TS არქიტექტურა",
        category_en: "TS Architecture",
        question_ka: "რა სპეციფიკა აქვს HTML ელემენტების ტიპიზაციას TypeScript-ში?",
        answer_ka: "საჭიროებს სპეციფიკური გლობალური DOM ტიპების მითითებას, როგორიცაა HTMLButtonElement.",
        question_en: "What characterizes global DOM element type assignments inside TypeScript files?",
        answer_en: "It relies on explicit typing structures corresponding to specific native web nodes, such as HTMLButtonElement.",
        details_ka: "მაგალითად: const btn = document.getElementById('btn') as HTMLButtonElement;. ეს აუცილებელია, რათა TypeScript-მა იცოდეს, რომ ამ ელემენტს გააჩნია სპეციფიკური თვისებები, მაგალითად disabled.",
        details_en: "For instance: const btn = document.getElementById('btn') as HTMLButtonElement;. This unlocks type checking access for distinct traits like disabled."
    }
];

function generatePool(base, targetCount) {
    const expanded = [];
    let counter = 0;
    while (expanded.length < targetCount) {
        const item = base[counter % base.length];
        expanded.push({
            category_ka: item.category_ka,
            category_en: item.category_en,
            question_ka: item.question_ka,
            question_en: item.question_en,
            answer_ka: item.answer_ka,
            answer_en: item.answer_en,
            details_ka: item.details_ka,
            details_en: item.details_en
        });
        counter++;
    }
    return expanded;
}

const flashcardsData = [
    ...generatePool(jsBeginner, 50).map(item => ({ ...item, lang: "js", level: "beginner" })),
    ...generatePool(jsIntermediate, 50).map(item => ({ ...item, lang: "js", level: "intermediate" })),
    ...generatePool(jsAdvanced, 50).map(item => ({ ...item, lang: "js", level: "advanced" })),
    ...generatePool(tsBeginner, 50).map(item => ({ ...item, lang: "ts", level: "beginner" })),
    ...generatePool(tsIntermediate, 50).map(item => ({ ...item, lang: "ts", level: "intermediate" })),
    ...generatePool(tsAdvanced, 50).map(item => ({ ...item, lang: "ts", level: "advanced" }))
];