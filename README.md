Below you will find some information on how to perform common tasks.


## Introduction


I'll take you through this project, It's a simple web application where you can ```Create, Read, Update, and Delete ``` contacts. However, when you refresh the web browser all data will be lost. Its a front-end application where I introduced Redux. I also included how to install the whole project and dependencies.

## Folder Structure 

``` 
public\
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
src\
    action\
        contactAction.js
    components\
        contact\
            Contact.css
            Contact.jsx
        header\
            Header.css
            Header.jsx
    constant\
        constantReducer.js
    pages\
        create\
            Create.css
            Create.jsx
        edit\
            Edit.css
            edit.jsx
        home\
            Home.css
            Home.jsx
    reducers\
        contactReducer.js
    store\
        store.js
    utils\
        validation\
            validation.js
    App.js
    index.css
    index.js
.gitignore
package.json
package-lock.json
README.md
```

## Installing the project

Make sure you have nodejs installed in your machine. Run this command `npx create-next-app <project-name>` in your terminal.

## Installing a Dependency

The generated project includes React, React-Dom and React-scripts as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies with `npm` or `yarn`:

You can run the following command to install all the dependencies

`npm install` or if you chose yarn then delete the package-lock.json file and run `yarn install`

or 

run the following commands to install each package

```

For react-redux run:

```sh
npm install --save react-redux
```

Alternatively you may use `yarn`:

```sh
yarn add react-redux
```

For react-icons run:

```sh
npm install --save react-icons
```

Alternatively you may use `yarn`:

```sh
yarn add react-icons
```

For react-toastify run:

```sh
npm install --save react-toastify
```

Alternatively you may use `yarn`:

```sh
yarn add react-toastify
```

For redux run:

```sh
npm install --save redux
```

Alternatively you may use `yarn`:

```sh
yarn add redux
```

For redux-devtools-extension run:

```sh
npm install --save redux-devtools-extension
```

Alternatively you may use `yarn`:

```sh
yarn add redux-devtools-extension
```

For redux-thunk run:

```sh
npm install --save redux-thunk
```

Alternatively you may use `yarn`:

```sh
yarn add redux-thunk
```