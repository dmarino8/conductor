export const initalState = [
    {
        "section": "Object Oriented Programming",
        "visible": true,
        "prompts":
            [
                {
                    "prompt": "What is the difference between an overload and an override?",
                    "details": "Overloading is when you give a method muiltiple unique parameters\nOverriding is when you give new functionality to a method inherited from a parent class\n"
                },
                {
                    "prompt": "What is encapsulation?",
                    "details": "Encapsulation is the restrictiton of a class, access to properties only possible through getters and setters"
                },
                {
                    "prompt": "What is an interface?",
                    "details": "An interface is a blueprint that can be implemented by a class. That class must have the methods or variables defined in the interface."
                },
                {
                    "prompt": "What is the difference between an Interface vs an Abstract Class?"
                },
                {
                    "prompt": "Describe a use case for inheritance"
                },
                {
                    "prompt": "What are pros and cons of inheritance?"
                },
                {
                    "prompt": "Describe some aspects of the SOLID principles",
                    "details": "Single Responsbility principle\nOpen-closed principle\nLiskov substitution principle (multiple-contracts)\nInterface segregation principle\nDependency inversion principle\n"
                },
                {
                    "prompt": "What role does mutability play in object oriented design?"
                },
                {
                    "prompt": "What are the pros and cons of Object Oriented abstraction?"
                }
            ]
    },
    {
        "section": "Java",
        "visible": true,
        "prompts":
            [
                {
                    "prompt": "What is the \"Final\" keyword used for in Java?"
                },
                {
                    "prompt": "What is a Java Stream?"
                },
                {
                    "prompt": "What are Generics in Java?"
                },
                {
                    "prompt": "What is a hashmap and why is it useful?"
                },
                {
                    "prompt": "Describe A Hashmap in Java. How does it compare with a Tree Map?",
                    "details": "Hashmap - Quick random Access, Hashed values,\nTreemap - Ordered Access, It maintains ascending order based on the Keys.\n"
                },
                {
                    "prompt": "ArrayList, LinkedList, Vector, Stack all implement the List interface; what are the major differences?"
                },
                {
                    "prompt": "What are Exceptions in Java?"
                },
                {
                    "prompt": "How do you make use of Exceptions in Java?"
                },
                {
                    "prompt": "What is an enum and when would you use one?"
                },
                {
                    "prompt": "Compare and contrast synchronous and asynchronous programming?"
                },
                {
                    "prompt": "What are Futures in Java?"
                },
                {
                    "prompt": "What is multi-threading?",
                    "details": "Multi-threading lets the program run on the muiltiple different threads of a CPU. This allows for muiltiple processes to happen at once and not procedurally"
                },
                {
                    "prompt": "How can you allow multiple threads to work on the same object, Like a list?"
                },
                {
                    "prompt": "What are some of the pitfalls of multi-threading What if you failed to make your program thread-safe?",
                    "details": "Race conditions, Deadlocks, unpredicatable consequences."
                },
                {
                    "prompt": "What are the lifecycle states of a Thread in Java?",
                    "details": "New, Runnable, Blocked, Waiting, Terminated",
                    "weight": 0
                },
                {
                    "prompt": "How is Memory managed in Java?"
                },
                {
                    "prompt": "What does the Closeable or AutoClosable interface do?"
                },
                {
                    "prompt": "What is 'try with resources' in Java?"
                },
                {
                    "prompt": "What is an ORM (Hibernate, Spring JPA)?"
                },
                {
                    "prompt": "What are the pros and cons of using the `JdbcTemplate` vs an ORM like Spring Data or Hibernate?"
                },
                {
                    "prompt": "What is 'Transactional'?"
                }
            ]
    },
    {
        "section": "Spring",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What are the benefits of using Spring?"
                },
                {
                    "prompt": "What makes Spring Boot easier to use than Spring?"
                },
                {
                    "prompt": "What is a spring bean?"
                },
                {
                    "prompt": "Describe the Service Container in Spring"
                },
                {
                    "prompt": "What is the use of profiles in spring boot?"
                },
                {
                    "prompt": "What is a spring acuator?"
                },
                {
                    "prompt": "List some common spring annotations and tell me what they do."
                }
            ]
    },
    {
        "section": ".NET/C#",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What is boxing and unboxing in C#?"
                },
                {
                    "prompt": "What is the difference between a 'break' statement and a 'continue' statement?"
                },
                {
                    "prompt": "What is the difference between 'readonly' and 'const'?"
                },
                {
                    "prompt": "What is thie difference between 'ref' and 'out' keywords?"
                },
                {
                    "prompt": "What is the differences between a Class and a Struct?"
                },
                {
                    "prompt": "What are Delegates in C# and what are they used for?"
                },
                {
                    "prompt": "What is a sealed Class?"
                },
                {
                    "prompt": "What is an object pool in .Net and why would you want to use one?"
                },
                {
                    "prompt": "What are Generics in C#?"
                },
                {
                    "prompt": "What is a Dictionary and why is is useful?"
                },
                {
                    "prompt": "What are the common LINQ methods and what do they do?"
                },
                {
                    "prompt": "If I have a where-select does that produce the result right away?",
                    "details": "No, Lazy evaluation"
                },
                {
                    "prompt": "What does the async and await keywords do?"
                },
                {
                    "prompt": "What does an async function have to return?"
                },
                {
                    "prompt": "What is <Task T>?"
                },
                {
                    "prompt": "What is an extension method and how do you use one?"
                },
                {
                    "prompt": "What is IDisposable or the Dispose/finalize method used for in C#?"
                }
            ]
    },
    {
        "section": "JavaScript/NodeJS",
        "visible": true,
        "prompts":
            [
                {
                    "prompt": "How are `==` and `===` equality operators different?"
                },
                {
                    "prompt": "What is the relationship of JavaScript to TypeScript?"
                },
                {
                    "prompt": "What is a callback?"
                },
                {
                    "prompt": "What is a promise?"
                },
                {
                    "prompt": "What are the three states of a promise?"
                },
                {
                    "prompt": "What is a prototype?"
                },
                {
                    "prompt": "What is NPM?"
                },
                {
                    "prompt": "What is the difference between Array.slice and Array.splice?"
                },
                {
                    "prompt": "What is the difference between an ES6 arrow function and a regular function?"
                },
                {
                    "prompt": "What is an aynonomous function? How is it used?"
                },
                {
                    "prompt": "What are pros and cons of a JavaScript transpiler like Babel?"
                },
                {
                    "prompt": "What is the broad difference in the JavaScript runtime environments, across Node, browser, others?"
                },
                {
                    "prompt": "What is the event loop in JavaScript?"
                },
                {
                    "prompt": "What are the purposes of well known ecosystem tools, like Eslint and Prettier?"
                },
                {
                    "prompt": "Explain the `this` keyword in JavaScript, and common issues encountered with it."
                },
                {
                    "prompt": "What is the purpose of the `bind` function?"
                },
                {
                    "prompt": "How is the single threaded nature of JavaScript different compared to other solutions?"
                },
                {
                    "prompt": "Describe examples of blocking and non-blocking Node APIs"
                },
                {
                    "prompt": "How do you access environment variables in Node?"
                },
                {
                    "prompt": "How are streams used in Node?"
                },
                {
                    "prompt": "Describe the purpose of `module.exports`"
                },
                {
                    "prompt": "What are some common Node packages or Libraries and what do they do?"
                },
                {
                    "prompt": "Describe the purposes of well known ecosystem packages, like express, axios, lodash"
                }
            ]
    },
    {
        "section": "React",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What is the data binding model in React?"
                },
                {
                    "prompt": "What are the major differences between controlled and uncontrolled components?"
                },
                {
                    "prompt": "Why is the key property used?"
                },
                {
                    "prompt": "Why are props effectively immutable?"
                },
                {
                    "prompt": "Why does a component re-render?"
                },
                {
                    "prompt": "How can re-rendering be controlled?"
                },
                {
                    "prompt": "What is Redux?",
                    "details": "A state management library for React"
                },
                {
                    "prompt": "What are the three different parts of Redux?",
                    "details": "Store, Reducer, and Actions"
                },
                {
                    "prompt": "Describe a use case for a higher order component",
                    "details": "A component that wraps another component and provides additional functionality"
                },
                {
                    "prompt": "What are React hooks?",
                    "details": "A set of new features in React 16.8 that let you use state and other React features without writing a class"
                },
                {
                    "prompt": "What are some examples of React hooks?",
                    "details": "useState, useEffect, useContext, useCallback, useMemo, useRef"
                },
                {
                    "prompt": "What is a React context?",
                    "details": "A React feature that allows you to pass data through the component tree without having to pass props down manually at every level"
                },
                {
                    "prompt": "How are render props used?"
                },
                {
                    "prompt": "When should you use the `componentWillMount` lifecycle method?"
                },
                {
                    "prompt": "Describe `Suspence` and its relationship to data loading and presentation"
                },
                {
                    "prompt": "Describe the difference between class-based React and hooks-based React code"
                },
                {
                    "prompt": "How useful is Context as a Redux-replacement?"
                },
                {
                    "prompt": "What is the purpose of a library like Immer with React/Redux?",
                    "details": "To make data changes in React/Redux easier"
                },
                {
                    "prompt": "Describe an organizational strategy for Redux related code"
                },
                {
                    "prompt": "Describe how React can be used in web and native situations"
                },
                {
                    "prompt": "What are the pros and cons of component level tests?"
                }
            ]
    },
    {
        "section": "Angular",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What makes Angular different from AngularJS?"
                },
                {
                    "prompt": "How does the Ahead of Time compiler improve performance?"
                },
                {
                    "prompt": "What role do modules play?"
                },
                {
                    "prompt": "What is the major differences between components and directives?"
                },
                {
                    "prompt": "How does Angular's integration with TypeScript improve the Developer Experience?"
                },
                {
                    "prompt": "What is the data binding model in AngularJS?"
                },
                {
                    "prompt": "How is dependency injection used?"
                },
                {
                    "prompt": "What are major differences between a component and a controller?"
                },
                {
                    "prompt": "What is an observable?",
                    "details": "An Observable is a unique Object similar to a Promise that can help manage async code.\nObservables are not part of the JavaScript language so we need to rely on a popular Observable library called RxJS.\nThe observables are created using new keyword."
                },
                {
                    "prompt": "Difference between promise and observable?"
                },
                {
                    "prompt": "What are angular Hooks? Can you name a few and their purpose?",
                    "details": "NgOnInit, NgOnChanges, NgDoCheck, NgOnDestroy, \nNgAfterViewInit, NgAfterViewChecked, NgAfterContentInit, NgAfterContentChecked"
                },
                {
                    "prompt": "What runs first ngOnInit or the Constructor?",
                    "details": "Constructor : Called first time before ngOnInit\nNgOnInit : called after constructor and after first ngOnChanges()"
                }
            ]
    },
    {
        "section": "Vue",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What is the data binding model in Vue?"
                },
                {
                    "prompt": "What are the challenges of updating values of an array in a components state?"
                },
                {
                    "prompt": "Describe a use case for a watcher"
                },
                {
                    "prompt": "Describe a user case for handling two-way state changes directly, without `v-model`"
                },
                {
                    "prompt": "Describe a user case for using slots"
                },
                {
                    "prompt": "How do you structure your Vuex code?"
                },
                {
                    "prompt": "Describe pros and cons of the Vue Router"
                },
                {
                    "prompt": "Describe how the Vue CLI helps get a project started"
                },
                {
                    "prompt": "Why is the SFC concept important in Vue?"
                },
                {
                    "prompt": "Describe the use case for a render function"
                }
            ]
    },
    {
        "section": "Databases",
        "visible": true,
        "prompts":
            [
                {
                    "prompt": "What are the use cases for Relational and Document based databases?"
                },
                {
                    "prompt": "Whats the difference between a Primary Key and a Foreign Key?"
                },
                {
                    "prompt": "What is the difference between and inner and outer join?"
                },
                {
                    "prompt": "How do you troubleshoot the performance of a slow SQL query?"
                },
                {
                    "prompt": "What is an Index?"
                },
                {
                    "prompt": "What is the cost of adding Indices? Explain the tradeoffs."
                },
                {
                    "prompt": "What is a Trigger?"
                },
                {
                    "prompt": "What is denormalization?"
                },
                {
                    "prompt": "What is normalization?"
                },
                {
                    "prompt": "Describe eager and lazy loading"
                },
                {
                    "prompt": "Why are database transactions useful?"
                },
                {
                    "prompt": "Why is referential integrity important?"
                },
                {
                    "prompt": "What are pros and cons of free/open source and paid/proprietary databases? (MySQL vs Oracle)"
                }
            ]
    },
    {
        "section": "Testing",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "How do you test your code so you feel confident in it?"
                },
                {
                    "prompt": "What is the purpose of unit testing? Integration testing? Functional testing? End-to-end testing?"
                },
                {
                    "prompt": "Suppose a client could only afford to do one of these; unit or integration testing, which would you suggest?"
                },
                {
                    "prompt": "When would you intentionally not write test code?"
                },
                {
                    "prompt": "Which do you like better, TDD or BDD?"
                }
            ]
    },
    {
        "section": "Practice",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What is your approach to refactoring?"
                },
                {
                    "prompt": "How do you keep code DRY?"
                },
                {
                    "prompt": "Describe a situation that needed more than print-based debugging"
                }
            ]
    },
    {
        "section": "Design Patterns",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "Describe the singleton pattern"
                },
                {
                    "prompt": "Describe the factory pattern"
                },
                {
                    "prompt": "Describe the vistor pattern"
                },
                {
                    "prompt": "Describe the observer pattern"
                },
                {
                    "prompt": "Describe MVC"
                },
                {
                    "prompt": "Describe Inversion of Control"
                },
                {
                    "prompt": "Describe Dependency Injection"
                },
                {
                    "prompt": "Why are declarative code solutions often better than imperative solutions?"
                }
            ]
    },
    {
        "section": "WebServices",
        "visible": true,
        "prompts":
            [
                {
                    "prompt": "What are The different HTTP Request methods used in REST?",
                    "details": "GET, PUT, POST, PATCH, DELETE, OPTIONS, HEAD"
                },
                {
                    "prompt": "What are the differences between PUT, POST and GET in REST?",
                    "details": "GET retrieves data and does not modify state\nPUT is for updating an entire entity and is idempotent\nPOST is for creating a new entity"
                },
                {
                    "prompt": "What does it mean to be restful?"
                },
                {
                    "prompt": "What are pros and cons of REST vs SOAP?"
                },
                {
                    "prompt": "In SOAP what is a WSDL?"
                },
                {
                    "prompt": "What is RPC?"
                },
                {
                    "prompt": "What do you consider when communicating between systems?"
                },
                {
                    "prompt": "What are your criteria for choosing a protocol for over the wire? (XML, JSON, Protobuf)"
                }
            ]
    },
    {
        "section": "Architecture",
        "todo": "this needs a proper name",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What are differences between monoliths and microservices?"
                },
                {
                    "prompt": "How do you separate systems into domains?"
                },
                {
                    "prompt": "What is an event streaming architecture and why would you use one?"
                },
                {
                    "prompt": "When evaluating interfaces between systems, how do you decide on synchronous versus asynchronous interfaces?"
                },
                {
                    "prompt": "When evaluating interfaces between systems, how do you agree on those interfaces and communicate them between systems?"
                },
                {
                    "prompt": "How do you think differently about systems continuous integration, continuous delivery, and continuous deployment is or is not implemented?"
                },
                {
                    "prompt": "Why are the 12 factor app principles a useful guide?"
                },
                {
                    "prompt": "How do you decide if eventual consistency is acceptable in a system?"
                },
                {
                    "prompt": "What are your criteria for scaling a solution?"
                }
            ]
    },
    {
        "section": "Supervision",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What kind of supervision have you provided?"
                },
                {
                    "prompt": "What kind of supervision have you received?"
                },
                {
                    "prompt": "How do you break down tasks for more junior team members?"
                },
                {
                    "prompt": "How do you suummarize progress to more senior team members?"
                }
            ]
    },
    {
        "section": "Mentoring",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What kind of mentorship have you provided?"
                },
                {
                    "prompt": "What kind of mentorship have you received?"
                },
                {
                    "prompt": "How do you review code?"
                },
                {
                    "prompt": "How do you pair-program?"
                }
            ]
    },
    {
        "section": "Leadership",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "What kind of leadership helps you thrive?"
                },
                {
                    "prompt": "How have you lead technical excellence?"
                },
                {
                    "prompt": "How do you keep up on new techniques?"
                },
                {
                    "prompt": "How do you know when its acceptable to delegate decisions?"
                }
            ]
    },
    {
        "section": "Python",
        "visible": false,
        "prompts":
            [
                {
                    "prompt": "Is python strongly or weakly typed - and what does it mean ",
                    "details": "Strongly typed"
                },
                {
                    "prompt": "What is scope in python",
                    "details": "A local scope refers to the local objects available in the current function. \nA global scope refers to the objects available throughout the code execution since their inception.\nA module-level scope refers to the global objects of the current module accessible in the program.\nAn outermost scope refers to all the built-in names callable in the program. The objects in this scope are searched last to find the name referenced"
                },
                {
                    "prompt": "Difference between tuple and list",
                    "details": "Tuples are immutable"
                },
                {
                    "prompt": "Break, continue, pass, what are they used for in python"
                },
                {
                    "prompt": "What is a tree?"
                },
                {
                    "prompt": "What is slicing in python?",
                    "details": "Splitting a list"
                },
                {
                    "prompt": "How is memory managed in python?",
                    "details": "Memory management in Python is handled by the Python Memory Manager. The memory allocated by the manager is in form of a private heap space dedicated to Python. All Python objects are stored in this heap and being private, it is inaccessible to the programmer. Though, python does provide some core API functions to work upon the private heap space.\nAdditionally, Python has an in-built garbage collection to recycle the unused memory for the private heap space."
                },
                {
                    "prompt": "What are decorators in python",
                    "details": "Decorators in Python are essentially functions that add functionality to an existing function in Python without changing the structure of the function itself. They are represented the @decorator_name in Python and are called in a bottom-up fashion."
                },
                {
                    "prompt": "What does pass by reference and pass by value mean?",
                    "details": "Pass by value: Copy of the actual object is passed. Changing the value of the copy of the object will not change the value of the original object.\nPass by reference: Reference to the actual object is passed. Changing the value of the new object will change the value of the original object."
                },
                {
                    "prompt": "Explain inheritance in python"
                },
                {
                    "prompt": " What is Pandas?",
                    "details": "Pandas is an open-source python library which has a very rich set of data structures for data-based operations. Pandas with its cool features fits in every role of data operation, whether it be academics or solving complex business problems. Pandas can deal with a large variety of files and is one of the most important tools to have a grip on."
                },
                {
                    "prompt": "What are dataFrames?",
                    "details": "A pandas dataframe is a data structure in pandas which is mutable. Pandas has support for heterogeneous data which is arranged across two axes. (rows and columns)."
                },
                {
                    "prompt": "What does the get() method on an object do? "
                }
            ]
    }
];