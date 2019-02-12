## Allergan UI Team Coding Assessment

This assessment is for a role on our UI Engineering team. The assessment will likely be completed in 4 hours, but is not timed. Use your judgement on how much time you’d like to spend completing it and submit your solution in any state of completion you wish as long as you feel the underlying gist of your architecture and coding capabilities are fairly represented.

### Introduction

Build a responsive UI component using either React JS. This UI component will be a basic newsletter sign-up component with multiple states. Create a basic React application for the purpose of presenting this single component in a way that we can test it.
Bonus points  if you provide a Storybook ( https://storybook.js.org/ ) to view the component in. How to submit

1. Send us a Zip file with your source code. ( Do NOT  include node_modules folder)
2. Include a Readme file that explains how to execute your project 

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
