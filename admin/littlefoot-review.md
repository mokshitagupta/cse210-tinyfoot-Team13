# Littlefoot Review   
Team 13   
> Project Structure   

**Littlefoot uses Typescript which provides better type safety and modern JavaScript features, and the modular structure with separate files for different functionalities and good naming gives users a better understanding of their work. It also contains many features like bundling, testing, stronger compatibility for browsers, clear documentation, etc., allowing users to build more reliable projects.**   
> Code Organization and Quality   

The code is complete without any obvious bugs. The code is well-formatted and the variable names are understandable. It shows modularity, where each file has its own functionality. However, the code lacks inline comments, which could help other developers to understand the code quickly.   
The code supports easy implementation with CDN and a local npm installation, where users could customize the Littlefoot by themselves. The customization is located in the `user-case.ts` .   
> Src   

**The `src`  folder includes a well-structured dom subfolder, which contains TypeScript files designed to handle various aspects of DOM manipulation. These files offer modular functions that abstract away implementation details, allowing developers to focus on high-level logic. The key files include**:   
> dom folder    

**The `dom`  folder contains the following .ts files, which mainly focus on the DOM manipulation**.   
- `document.ts` : contains modularized functions for basic tasks like getByClassName, queryAll to more complex ones like findReference, recursiveUnmount leading to the setup function which finds the links, checks if its correct value is defined, preps template data, creates the elements, links footnotes actions, etc. , basically the implementation details can be abstracted away and we can focus on the logic by using these modularized functions.   
- `elements.ts` : Contains functions to add and remove className.   
- `events.ts` : Links the `use-cases.ts`  to listeners which determine which elements respond to which event (click, mouseover, etc.). The use-cases.ts file just deals with the functionality, while this file deals with the interaction of the correlated functionality based on interaction with the DOM.   
- `scroll.ts` : Defines the behavior on mouse scroll   
- `layout.ts` : Calculates the space available to display and has functions that can be called to reposition and resize the footnotes   
- `footnote.ts` : Handles the specific class-name, attribute adding and removing on activate, dismiss, etc. (this takes care of the correlated style changes), and also calls the reposition functions defined in layout js to manage the footnote and popover position.   
- `Littlefoot.css` : Classes with corresponding styles are defined here.   
- `littlefoot.ts` : The little foot function is like the main function where everything comes together, we use the createUseCases function to call the use-case.ts function according to the user interaction, and we also use addListeners function to attach listeners to the use-cases.   
- `settings.ts` : Contains the default settings to pass to the main function, including default contentTemplate and buttonTemplate.   
- `use-cases.ts` : Contains types and settings defined for UseCases and Footnotes, it also contains a createUseCase function which defines behavior according to custom actions defined like unhover, toggle, etc.   
   
> Repo Organization and Quality   

The littlefoot repository on Github adheres to a standard repository structure. Every commit is clearly commented. Beside the main branch, there are also many renovated branches. The old versions, starting from v1.0.0-alpha, could be accessed easily.    
The repository is well structured with important files (ts and css) located in ‘src’ and other aiding files, such as package library, change log, readme, located in the root directory. The repository provides a clear readme and changelog for developers to rapidly implement it into their projects, and a better understanding of how the littlefoot was built.   
- Change Log   
    It documents all notable changes to the littlefoot, which makes it really clear what’s available in the current version. What’s more, because it forked the Bigfoot, it provides the difference from the Bigfoot to notice people who want to migrate from it that which setting is changed and which is removed, e.g, `allowMultipleFN`  was renamed to `allowMultiple` , or `actionOriginalFND` was removed.   
- Readme   
    A good readme always gives users a better impression of the project. Littlefoot provides clear usage instructions for installation and usage, and API documentation, with examples to guide unfamiliar users, and suggestions for parts that should not be changed. It provides a simple demo using gif embedded in readme. However, it would be better if it could provide more extensive examples of code or a demo page.   
   
> Tooling quality   

Testing and bundling are important in web development to make sure everything works well and runs smoothly. Testing helps find problems early, ensuring that each part of the code does what it should. Bundling combines files and makes them smaller, which helps the website load faster. Together, they make websites more reliable and efficient.   
> Testing   

The Littlefoot uses three different testing tools, like Jest, Vitest, Cypress, and GitHub Actions, which makes it easy for them to develop their project. These tools are all popular testing frameworks for JavaScript applications, but they have different focuses and strengths, covering the situations the Littlefoot team might encounter during the development process, e.g. Jest for general unit test, Vitest for Vite-based projects, cypress for E2E testing and GitHub Actions for CICD.   
> Bundling   

The Littlefoot choose to use Rollup as their bundling tool, combining multiple files into a single, efficient bundle. Rollup focused on tree-shaking, which eliminates unused code from the final bundle, leading to smaller, faster applications.   
> Reasons for Using It   

It provides a useful and straightforward way to read the footnote, so that we don’t need to jump between the main text and footnotes and focus on what we are reading. The implementation is easy. It provides lots of customization options. The library is lightweight, so it wouldn’t affect the webpage’s performance.   
However, the popover of the footnote would block some main texts. It would be better if the popover could be shown in the sidebar. The accessibility would be an issue. For example, the screen reader won’t be able to read the footnote within the text.   
