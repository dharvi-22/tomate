Project Description

Tomate is a responsive React based recipes website, designed to help users easily discover and explore meal ideas. Aimed at people who struggle to cook for themselves but still enjoy a good home cooked meal. After having interviewed 6 people, I found two key factors that contributed to their struggle with cooking - convenience of finding recipes quickly and motivation to cook for one serving. Based on those findings, I implement my website to offer categorised recipe searches, customisable serving options, and visually engaging layouts to enhance user interaction. 

As a recipes website, Tomate includes the following functionalities:
- Search bar and categorical search filter, located on explore page, for easy access to popular recipe categories.
- Detailed recipe page with static serving portion toggle and a dynamic scrollable carousel, for convenience in exploring similar options.
- A Meal Match feature that lets the user efficiently browse through the recipes catalogue and view them in more detail.
- And a feature that allows the user to request a particular recipe to be added to Tomate’s catalogue, located on the Request a Recipe form page with option to select meal category from a dropdown menu. Including input validation for recipe name and category. 

Additionally, Tomate is a mobile-first fully responsive website, and includes accessibility features such as semantic tags and ARIA labels to support screen readers and improve usability for all users.

In terms of the website’s development process and technical stack, I began by creating my hi-fidelity wireframes that helped me narrow down components and its reusability. For my framework I used React app and for styling SASS, where each page and component is styled using its own .scss file, all of which are imported into a main.scss file to maintain consistent and organised styling across the app. As for my API, I used Spoonacular - which provided the necessary recipe data (image, title, category). I have fetched this data inside the React components through storing and managing them globally using React Context API. My context file fetches 20 random recipes on initial load and provides the required results based on the requested component functionality through dynamic API calls. For testing purposes, I had stored the API results in the local storage to reduce the number of API requests. However, for the final submission, I’ll be removing the storage to ensure real-time data fetching and optimal performance. 

In terms of security, my website is deployed through Vercel, which automatically uses HTTPS (Hypertext Transfer Protocol Secure), securing my app by encrypting data transfer and protecting it from being tampered with. Also, my API key is stored in an environment variable .env which means it is secured from being exposed through the client side code. Moreover, I am not collecting any personal data or using any cookies or tracking tools, therefore I believe I am already in compliance with GDPR. But to be transparent, I have included a simple Privacy Notice in the website’s footer, stating that the website does not store or collect personal information. 

To conclude, it was my first time using React, SASS and an external API, therefore it was challenging to understand how to combine everything seamlessly, specially React Context API, however with research, help from AI, trial and error, I was able to integrate everything smoothly. 

Citations
Context Page:
OpenAI. (2025). ChatGPT response to a query about calling and storing from api. Retrieved from https://chat.openai.com

Recipe Page:
OpenAI. (2025). ChatGPT response to a query about toggle buttons and scrollable carousel. Retrieved from https://chat.openai.com

Recipe List Page:
OpenAI. (2025). ChatGPT response to a query about loading recipe cards in consisted rows. Retrieved from https://chat.openai.com









