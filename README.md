#MEAN Stack Starter Stack

##Motivation
This sample starter project was created with the motivation to easily modularize large-sized apps. In this project, the AngularJS app is structured in a way where there is one central mainApp. Each additional module will represent individual classes of objects that will be injected into the mainApp and additionally be created under a sibling folder of the mainApp folder. Each module has its own components, routes, and a main controller. The views are under the pages folder and are separated by modules, and can be additionally separated by components.

##Usage
Run `node server.js`

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads)

## Project Structure

    ├── config/
    │   ├── db                            - Configure MongoDB URL
    |
    ├── public/                           - AngularJS client code
    │   ├── mainApp/                      - The main module that links in all other modules
    │   │   ├── components/               - Components of the mainApp (directives, services, controllers)
    │   │   |   ├── sample-filter/        - Sample filter in mainApp
    │   │   |   ├── sample-controller/    - Sample controller in mainApp 
    │   │   |   ├── sample-service/       - Sample service in mainApp
    |   |   |
    │   │   ├── styles/                   - Styles for module mainApp
    │   │   ├── main-app.js               - Configure the main module mainApp (creating module, routing)
    │   │   ├── main-controller.js        - Main controller for mainApp module
    |   |
    │   ├── pages/                        - All the views for Angular
    │   │   ├── mainApp-templates/        - All views for the mainApp module
    │   │   |   ├── sample.html           - Arbitrary views
    |   |
    │   ├── index.html                    - index.html
    |
    ├── server.js                         - Express server
    │
    └── server/
        ├── router                        - Router defines all server-side routes
