const b = () => console.log(myVar);
const a = () => {
    const myVar = 2;
    b();
};

const myVar = 1;
a();

// precedence and associativity
    let a1 = 2, b1 = 3, c1 = 4;

    a1 = b1 = c1;
    console.log(a1); // 4
    console.log(b1); // 4
    console.log(c1); // 4

// coercion
    const a2 = 1, b2 = '2';
    const result = a2 + b2;
    console.log(result); // type -> a2 coerced to string

    console.log(1 < 2 < 3); // true 
    console.log(3 < 2 < 1); // true -> left to right associativity 
    // 3 < 2 -> false
    // false < 1 --> (0 < 1) -> true // false coerced to 0

// Default value
    const greet = (name) => console.log(`my name is ${name}`);
    greet(); //my name is undefined

        //ES6
    const greet1 = (name = 'Tashi') => console.log(`my name is ${name}`);
    greet1(); //my name is Tashi

    const greet2 = (name) => {
        name = name || "Tashi";
        console.log(`my name is ${name}`)
    };
    greet2(); //my name is Tashi
    greet2("Nyima");

// Object and Functions
        // Computed Member Access []
    const person = new Object();
    person['firstName'] = 'Tashi';
    person['lastName'] = 'Nyima';

    const firstNameProperty = 'firstName';
    console.log(person);
    console.log(person[firstNameProperty]);

        // Dot - Member access
        console.log(person.firstName);
        console.log(person.lastName);

        person.address = new Object();
        person.address.street = "Haha Road";
        person.address.city = "london";

        console.log(person.address.city);
        console.log(person.address.street);

// Object Literals
    const person1 = {
        firstName: "Tashi",
        lastName: "Nyima",
        address: {
            street: "koko road",
            city: "London"
        }
    };

    console.log(person1);
    console.log(person1.address.city);

// faking namespaces
    const english = {
        greeting: {}
    };
    const spanish = {};

    english.greeting.greet = "Hello";
    spanish.greet = "Hola";

    console.log(english);

// Json vs Javascript Object literals
    const programmer = {
        name: "Tashi",
        experience: "javascript"
    };

        // Object literal to Json
    const objectToJson = JSON.stringify(programmer)
    console.log(objectToJson); // {"name":"Tashi","experience":"javascript"}
        // Json to Object Literal
    const jsonToObject = JSON.parse('{"name":"Tashi","experience":"javascript"}');
    console.log(jsonToObject); // {name: "Tashi", experience: "javascript"}

// Functions are Object in Javascript
    const cooking = () => {
        console.log("Cooking Beef Mince Pie 🥧")
    };

    cooking.dinner = "Chicken Momo";
    console.log(cooking.dinner);

// First Class function
    function foo(a) {
        a();
    }

    foo(() => console.log("Hi Foo!"));

// By Value vs By Reference
        // by value (primitive types)
    let val1 = 2, val2 = 3;
    val2 = val1;
    val1 = 4;

    console.log(val1); // 4
    console.log(val2) // 2

        // by reference - object including functions
    let obj1 = {greeting: "Tashi Delek"};
    let obj2 = obj1;
    console.log(obj2.greeting); // Tashi Delek

    obj2.greeting = "hola"; // mutated the property 
    console.log(obj1.greeting); // hola

        // by reference - even as parameters
        function changeGreeting(obj) {
            obj.greeting = 'Hello'; // mutated
        }

    changeGreeting(obj1);
    console.log(obj1.greeting); // Hello
    console.log(obj2.greeting); // Hello

// this keyword
    console.log(this); // Window -> Global Object

    function foo1() {
        console.log(this);
        this.newGreeting = "Hello"; // attached to global object
    };

    foo1() // Window
    console.log(newGreeting); // Hello 

    const foo2 = function() {
        console.log(this);
    };

    foo2(); // Window

    const foo3 = () => {
        console.log(this);
    };

    foo3(); // Window

    const foo4 = {
        name: "Function foo4",
        log: function() {
            this.name = "Inside Log function";
            console.log(this) // Object {name: "Inside Log function", log: ƒ}
        }
    }

    foo4.log();

    // ES6 arrow function
    const foo5 = {
        name: "Function foo5",
        log: () => {console.log(this)} // this still point to Window object
    }

    foo5.log() // Window

    // Dealing with inner this keyword
    const foo6 = {
        name: 'The foo6 object',
        log: function() {
            const self = this;
            self.name = "Updated foo6 object";
            console.log(self);

            const setName = function(newName) {
                self.name = newName;
            }

            setName("Updated foo6 again!");
            console.log(self);
        }
    }

    foo6.log(); // {name: "Updated foo6 again!", log: ƒ}

// Array holds anything
    const arr = [
        1,
        false,
        {
            name: "Tashi",
            city: "london"
        },
        function(name) {
            console.log(`name: ${name}`)
        },
        "hello"
    ];

    console.log(arr);
    arr[3](arr[2].name); // name: Tashi

// Arguments and spread 
    function numbers(one, two, three, language = 'English', ...others) {

        if(arguments.length === 0) {
            console.log("Missing Parameters!");
            console.log("-----------------");
            return;
        }
        console.log(one);
        console.log(two);
        console.log(three);
        console.log(language);
        console.log(arguments);
        console.log(others);
        console.log("-----------------");
    }

    numbers();
    numbers('One');
    numbers('One', 'two');
    numbers('One', 'two', 'three');
    numbers('One', 'two', '', 'Spanish');
    numbers('One', 'two', '', 'Spanish', "London");

 
// Immediately Invoked Function Expression (IIFE)
    const sayHello = function(name) {
        return `Hello ${name}`
    }('Tashi'); // immeditely invoked the function after creating the funcion expression

    console.log(sayHello);

    const myName = 'Tashi';

    (function(name) {
        const greeting = 'Hello'
        console.log(`Greeting ${greeting} ${name}`);
    }(myName))

// Closure
    function greetInTibet(saySomething) {
        return name => console.log(`${saySomething} ${name}`);
    }

    //const greetInTibet = saySomething => name => console.log(`${saySomething} ${name}`);

    greetInTibet("Tashi Delek")("John");

    function buildFunction() {
        const arr = [];

        for(var i = 0; i < 3; i++) {
            arr.push(() => {console.log(i)})
        }

        return arr;
    }

    const fs = buildFunction();
    fs[0](); // 3
    fs[1](); // 3
    fs[2](); // 3

    // ES5 solution
    function buildFunction1() {
        const arr = [];

        for(var i = 0; i < 3; i++) {
            arr.push(
                //IIFE
                (function(j){
                    return () => console.log(j);
                }(i))
            )
        }

        return arr;
    }

    const fs1 = buildFunction1();
    fs1[0](); // 0
    fs1[1](); // 1
    fs1[2](); // 2

      // ES6 solution
      function buildFunction2() {
        const arr = [];

        for(let i = 0; i < 3; i++) {
            arr.push(() => {console.log(i)})
        }

        return arr;
    }

    const fs2 = buildFunction2();
    fs2[0](); // 0
    fs2[1](); // 1
    fs2[2](); // 2

    // Example of closure usage -> Function Factory
    function makeGreeting(language) {
        return (firstName, lastName) => {
            if(language == 'en') {
                return console.log(`Hello ${firstName} ${lastName}`)
            }

            if(language == 'es') {
                return console.log(`Hola ${firstName} ${lastName}`)
            }
        }
    }

    const greetEnglish = makeGreeting('en');
    const greetSpanish = makeGreeting('es');    

    greetEnglish("Tashi", "Nyima");
    greetSpanish("Tashi", "Nyima");