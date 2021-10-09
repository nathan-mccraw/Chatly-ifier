# Chatly-ifier - Nathan McCraw

Deployment of the project can be seen [here](https://nathan-mccraw.github.io/Chatly-ifier/). This project is currently deployed on github pages through my personal github repo.

The purpose of this document is to exhibit my technical writing and showcase the features of this application.

This small web application was built for Red Ventures utilizing html, CSS, and vanilla JavaScript (ES6+ syntax but no frameworks or libraries were used). This project was authored by Nathan McCraw.

## Deliverables

[chatly-ifier_project design image](/chatly-ifier_project.png)

Red Ventures provided a design image, depicted above, and an API endpoint. No functionality requirements were specified. Red Ventures provided the following design requirements:

1. Avoid using any libraries or frameworks.
   - This requirement was met as on frameworks or libraries were used in the completion of this project.
2. Ability to boot project without installing any dependencies.
   - There is no need to install any dependencies for this project, as no libraries or frameworks were used. Google fonts were used my expectation in production would be to use a provided font.
3. Project should function in the latest versions of Chrome, Safari and Firefox.
   - Project functions in Chrome, Firefox, and Safari with full functionality and responsive design.
4. A clean, semantic HTML structure.
5. Clear, well-organized CSS that matches project design.
6. Fast, light-weight JS. Preference in ES6+ syntax.
   - ES6+ syntax was used where applicable.
7. An asynchronous network request (method cannot use a library/framework/npm package) to retrieve the data from the API endpoint provided.
   - Fetch was used for the http get request in this project.
8. Modular, reusable code.
   - At the cost of a slightly larger code base, I decided to impliment smaller functions with the single responsibility principle in mind. I felt the larger code base was justified for the purposes of readable and maintainable code; these smaller functions allow for modular and reusable code.
9. SEO-friendly, accessible markup.
   - Project includes content relevant meta data description, relevant project title, relevant h1 tag, and alt attributes on images.
10. Code comments.
    - Comments were minimal in this project as I felt the code was clean and readable.

## Local Installation

1. From this github repository, download zip file and extract all files from the compressed folder into your desired location.
2. The three files: index.hmtl, script.js, and style.css must remain in the same folder for this project to load.
3. Open the index.html in Google Chrome, Firefox, or Safari to use application.

# Features

1. Responsive design - This project was built with a responsive design in mind. The application has a neat appearance at any view port width.
   At less than 500 pixels view width: - The title bar displaying the document title and the document date goes from display flex to block. - The user image display is set to none.
2. The provided design preview inferred an ability to change the focus to a different message with an onclick event. This feature was included in this project.
3. This project would allow for building a transcript from any endpoint that returns a JSON object with the same object keys.

![full screen view port](/AppScreenShots/Large_Viewport.jpg)
![iPad view port](/AppScreenShots/iPad_Viewport.jpg)
![iPhone 5 view port](/AppScreenShots/iPhone5_Viewport.jpg)
