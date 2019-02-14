## [Newsletter Sign Up](https://rafgarciaa.github.io/React-Newsletter-SignUp/)

A coding exercise with the goal of creating a basic UI component using React to simulate a Newsletter Sign Up with multiple states.

### Requirements
1. Must use either React JS  to complete the project
2. Must build and run in either a web browser
3. Must include a Readme file for instructions for running the application
4. May use third party libraries to complete this task
5. Organize your component in a way that shows you have a good understanding of react architectural principles and reuse.
6. The component will have 4 responsive breakpoints as shown in figma file:
    - Mobile
    - Tablet Portrait
    - Tablet Landscape
    - Desktop
7. The component will have 5 states:
    - Email Address collection
    - Email Address collection with Error Message
    - Full Name collection
    - Full Name collection with Error Message
    - Congratulations!
8. Form validation will be as follows:
    - Email Address field: Required and must be valid email 
    - First Name field: Required
    - Last Name field: Required
9. Component will not change states while invalid fields exist
10. Form will not actually POST anywhere. Just console log the object that holds {email,
first, last } values and toggle to ‘congratulations’ state.

### Instructions
+ Navigate to project directory
+ Run command in terminal: `npm run webpack`
+ In separate terminal, run the command: `open index.html`