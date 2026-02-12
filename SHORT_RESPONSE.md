Short Response Questions
========================

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

Question 1: Asynchronous Code
-----------------------------

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

*   An **asynchronous** function is a function that will always return a **promise**. It lets the rest of the code run while the promise, the scheduled operation, is being fulfilled (pending, resolved, or rejected).
    
*   It is important to be able to execute code asynchronously because it prevents applications from freezing because too many tasks are running at the same time.
    

Question 2: GET vs. POST
------------------------

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

The difference between a `GET` request and `POST` request is:

*   A `GET` request is a request to perform a (CRUD) **Read** action. An example would be a user requesting to visit Instagram by typing the URL in the search bar.
    
*   A `POST` request is a request to perform a (CRUD) **Create** action. An example would be a user making a new story post on Instagram.
    

Question 3: What is Vite and Why Use It?
----------------------------------------

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

**Vite** is a live **development server** designed to speed up the development process for web applications. It helps you avoid CORS (Cross Origin Resource Sharing) errors which arise when you try to fetch data from third party APIs or import and export modules between files using the `file://` protocol (static) instead of the `https://` protocol (live). It lets you see your changes in real time (**hot reload**), gives you a starter template for projects and organizes them using ES modules, and has a build tool that packs all of your code up into one HTML, CSS, and JS file (respectively) to be easily delivered to users. Vite essentially lets you see how your project would look and function as if it were deployed and not a static page. There are many alternatives to Vite, such as Parcel, Rspack and Turbopack.