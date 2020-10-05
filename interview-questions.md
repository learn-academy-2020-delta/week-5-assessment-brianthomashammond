# ASSESSMENT 5: Interview Practice Questions - Brian Thomas Hammond
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Rails allows developers to program and interact with the Model (the data sttructure behind the app) the Controller (that oversees the logic of the app) and the View (that displays the app to the user).

  Researched answer: MVC divides programming logic into three interconnected elements. This compartmentalization allows for easier updates and modifications to the system.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD is the benchmark for a fully functional app. It consists of the ability to create, read, update and delete data.

  Researched answer: It means the application can interact with persistently stored data.


3. What is a migration? Why would you use one?

  Your answer: A migration is a change to an app's schema. You would use one if you wanted to edit the data structure due to changed benchmarks or to correct errors in setup.

  Researched answer: Some common migrations include add_column, remove_column, change_column and rename_column. Migrations can also be made explicitly reversible through the use of the built in methods up and down.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: Oops. I wasn't paying attention and just researched a little bit about rails associations. I remembered has_one, has_many and belongs_to but didn't remember the other three.
  
  This really depends on the point of view and I feel like I could spend all weekend answering it and not finish.
  
  In short, a person can own (have) one or many computers. In those cases the computer should have the foreign key.
  
  A personal computer might belong to one person or many people. In the case of one owner, foreign key is with the computer. But for many users, it's less clear. For example, if you're interested in the set of people that have used a certain computer. Or a work computer that has many operators. Or facebook's servers that have millions of people's data on them. (I would bet that facebook puts foreign keys on the people.) In all of those cases I could see both the people and the computers having each other's foreign key.

  Researched answer: It seems that the solution in the many to many world is the creation of a third table that contains both person's and computer's primary key.


5. What is object-relational mapping?

  Your answer: Object-relational mapping allows data to be stored, retrieved, and manipulated through the use of programmatic objects that can interact with each other.

  Researched answer: Object-relational mapping is the process of storing data in objects or using the object-oriented syntax of your preferred scripting language to write database queries.


6. What is a gem?

  Your answer: A gem is a Ruby library that can be imported to a developer's program and allow them to use that gem's built in methods.

  Researched answer: Gems include code, documentation and gemspec (information about the gem).


7. Why is it important to have validations in your application?

  Your answer: It's is important to have validations to catch user errors, prevent unusable input from being accepted, and protect systems from malicious actors.

  Researched answer: Validations cannot be bypassed by end users, can be used on any database, and are easy to test and maintain.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: are a conventional structure for interacting with the server when HTTP requests are made by the client. They separate the client from the server. They do not hold state between requests. They use HTTP AND HTTP methods (verbs). They are reliable.
- JSON: is JavaScript Object Notation. It is a way to store and transport data in an object through key/value pairs. It is easily parseable and is supported by most browsers. A drawback is that it has no display capabilities.
- API: stands for application programming interface. It is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application or other service. In short, it lets apps talk to each other.
- Endpoints: are the locations targeted by HTTP verbs through Rails routes.
- Strong params: define what attributes must (require) or can (permit) be present when creating or updating records.
