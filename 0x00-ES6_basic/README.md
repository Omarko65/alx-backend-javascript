Project: 0x00. ES6 Basics | Lagos Intranet          Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);  

Toggle navigation[

](/)

*   [
    
    My Planning
    
    ](/planning/me)
*   [
    
    Projects
    
    ](/projects/current)
*   [
    
    QA Reviews I can make
    
    ](/corrections/to_review)
*   [
    
    Evaluation quizzes
    
    ](/dashboards/my_current_evaluation_quizzes)

* * *

*   [
    
    Curriculums
    
    ](/dashboards/my_curriculums)
*   [
    
    Concepts
    
    ](/concepts)
*   [
    
    Conference rooms
    
    ](/dashboards/video_rooms)
*   [
    
    Servers
    
    ](/servers)
*   [
    
    Sandboxes
    
    ](/user_containers/current)
*   [
    
    Tools
    
    ](/dashboards/my_tools)
*   [
    
    Video on demand
    
    ](/dashboards/videos)

* * *

*   [
    
    Peers
    
    ](/users/peers)
*   [
    
    Captain's Logs
    
    ](/dashboards/my_captain_log)

* * *

*   [
    
    Slack
    
    ](https://alx-students.slack.com)
    
    [
    
    My Profile
    
    ](/users/my_profile)
    

[

](/)

*   [
    
    My Planning
    
    ](/planning/me)
*   [
    
    Projects
    
    ](/projects/current)
*   [
    
    QA Reviews I can make
    
    ](/corrections/to_review)
*   [
    
    Evaluation quizzes
    
    ](/dashboards/my_current_evaluation_quizzes)

* * *

*   [
    
    Curriculums
    
    ](/dashboards/my_curriculums)
*   [
    
    Concepts
    
    ](/concepts)
*   [
    
    Conference rooms
    
    ](/dashboards/video_rooms)
*   [
    
    Servers
    
    ](/servers)
*   [
    
    Sandboxes
    
    ](/user_containers/current)
*   [
    
    Tools
    
    ](/dashboards/my_tools)
*   [
    
    Video on demand
    
    ](/dashboards/videos)

* * *

*   [
    
    Peers
    
    ](/users/peers)
*   [
    
    Captain's Logs
    
    ](/dashboards/my_captain_log)

* * *

*   [
    
    Slack
    
    ](https://alx-students.slack.com)
    
    [
    
    My Profile
    
    ](/users/my_profile)
    

Curriculum

Short Specializations Average: 73.19%

*   [
    
    Foundations Average: 101.16%
    
    
    
    ](/curriculums/1/observe)
*   [
    
    Short Specializations Average: 73.19%
    
    
    
    ](/curriculums/17/observe)

[

You have a captain's log due before 2023-04-16 (in 1 day)! Log it now!

](/captain_logs/2805321/edit)

0x00. ES6 Basics
================

#### In a nutshell…

*   **Auto QA review:** 26.65/41 mandatory & 2.0/4 optional
*   **Altogether:**  **97.5%**
    *   Mandatory: 65.0%
    *   Optional: 50.0%
    *   Calculation:  65.0% + (65.0% \* 50.0%)  == **97.5%**

### Concepts

_For this project, we expect you to look at these concepts:_

*   [Modern Javascript](/concepts/541)
*   [Software Linter](/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230415%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230415T114613Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fdcf3b8ddd284d89c1cd384081882829146a8811a376ae2626a4d3fd0949a9e8)

Resources
---------

**Read or watch**:

*   [ECMAScript 6 - ECMAScript 2015](/rltoken/NW1dFLFExQ12_hD8yvkV3A "ECMAScript 6 - ECMAScript 2015")
*   [Statements and declarations](/rltoken/sroRUsUvOZV28V99MHDenw "Statements and declarations")
*   [Arrow functions](/rltoken/N2WLylppCtkkX3YFFtyUHw "Arrow functions")
*   [Default parameters](/rltoken/kbw9gMO6sdeOKAY23SYVgA "Default parameters")
*   [Rest parameter](/rltoken/erZfCvacuGVk9z1CQlJvYQ "Rest parameter")
*   [Javascript ES6 — Iterables and Iterators](/rltoken/8v1-YerKniZTmWCoy52lpA "Javascript ES6 — Iterables and Iterators")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/KDGvEqVWIsvOQfCcwDNHNg "explain to anyone"), **without the help of Google**:

*   What ES6 is
*   New features introduced in ES6
*   The difference between a constant and a variable
*   Block-scoped variables
*   Arrow functions and function parameters default to them
*   Rest and spread function parameters
*   String templating in ES6
*   Object creation and their properties in ES6
*   Iterators and for-of loops

Requirements
------------

### General

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using the [Jest Testing Framework](/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q "Jest Testing Framework")
*   Your code will be analyzed using the linter [ESLint](/rltoken/Ttd9w5jERwTErJW3DDbVoQ "ESLint") along with specific rules that we’ll provide
*   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
*   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

Click to show/hide file contents

    
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }

### `babel.config.js`

Click to show/hide file contents

    
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

### `.eslintrc.js`

Click to show/hide file contents

    
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };

### Finally…

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

Tasks
-----

### 0\. Const or let?

mandatory

Score: 65.0% (Checks completed: 100.0%)

Modify

*   function `taskFirst` to instantiate variables using `const`
*   function `taskNext` to instantiate variables using `let`

    export function taskFirst() {
      var task = 'I prefer const when I can.';
      return task;
    }
    
    export function getLast() {
      return ' is okay';
    }
    
    export function taskNext() {
      var combination = 'But sometimes let';
      combination += getLast();
    
      return combination;
    }
    

Execution example:

    bob@dylan:~$ cat 0-main.js
    import { taskFirst, taskNext } from './0-constants.js';
    
    console.log(`${taskFirst()} ${taskNext()}`);
    
    bob@dylan:~$ 
    bob@dylan:~$ npm run dev 0-main.js 
    I prefer const when I can. But sometimes let is okay
    bob@dylan:~$ 
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x00-ES6_basic`
*   File: `0-constants.js`

Done?! Help

×

#### Students who are done with "0. Const or let?"

Check your code

×

#### Correction of "0. Const or let?"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox QA Review

×

#### 0\. Const or let?

##### Commit used:

*   **User:** \---
*   **URL:** Click here
*   **ID:** `---`
*   **Author:** \---
*   **Subject:** _\---_
*   **Date:** \---

### 1\. Block Scope

mandatory

Score: 65.0% (Checks completed: 100.0%)

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

    export default function taskBlock(trueOrFalse) {
      var task = false;
      var task2 = true;
    
      if (trueOrFalse) {
        var task = true;
        var task2 = false;
      }
    
      return [task, task2];
    }
    

Execution:

    bob@dylan:~$ cat 1-main.js
    import taskBlock from './1-block-scoped.js';
    
    console.log(taskBlock(true));
    console.log(taskBlock(false));
    bob@dylan:~$
    bob@dylan:~$ npm run dev 1-main.js 
    [ false, true ]
    [ false, true ]
    bob@dylan:~$
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x00-ES6_basic`
*   File: `1-block-scoped.js`

Done?! Help

×

#### Students who are done with "1. Block Scope"

Check your code

×

#### Correction of "1. Block Scope"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox QA Review

×

#### 1\. Block Scope

##### Commit used:

*   **User:** \---
*   **URL:** Click here
*   **ID:** `---`
*   **Author:** \---
*   **Subject:** _\---_
*   **Date:** \---

### 2\. Arrow functions

mandatory

Score: 65.0% (Checks completed: 100.0%)

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

    export default function getNeighborhoodsList() {
      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    
      const self = this;
      this.addNeighborhood = function add(newNeighborhood) {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
      };
    }
    

Execution:

    bob@dylan:~$ cat 2-main.js
    import getNeighborhoodsList from './2-arrow.js';
    
    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
    bob@dylan:~$
    bob@dylan:~$ npm run dev 2-main.js 
    [ 'SOMA', 'Union Square', 'Noe Valley' ]
    bob@dylan:~$
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x00-ES6_basic`
*   File: `2-arrow.js`

Done?! Help

×

#### Students who are done with "2. Arrow functions"

Check your code

×

#### Correction of "2. Arrow functions"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox QA Review

×

#### 2\. Arrow functions

##### Commit used:

*   **User:** \---
*   **URL:** Click here
*   **ID:** `---`
*   **Author:** \---
*   **Subject:** _\---_
*   **Date:** \---

### 3\. Parameter defaults

mandatory

Score: 65.0% (Checks completed: 100.0%)

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

_Hint:_ The key here to define default parameter values for the function parameters.

    export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
      if (expansion1989 === undefined) {
        expansion1989 = 89;
      }
    
      if (expansion2019 === undefined) {
        expansion2019 = 19;
      }
      return initialNumber + expansion1989 + expansion2019;
    }
    

Execution:

    bob@dylan:~$ cat 3-main.js
    import getSumOfHoods from './3-default-parameter.js';
    
    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));
    bob@dylan:~$
    bob@dylan:~$ npm run dev 3-main.js 
    142
    56
    41
    bob@dylan:~$
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x00-ES6_basic`
*   File: `3-default-parameter.js`

Done?! Help

×

#### Students who are done with "3. Parameter defaults"

Check your code

×

#### Correction of "3. Parameter defaults"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox QA Review

×

#### 3\. Parameter defaults

##### Commit used:

*   **User:** \---
*   **URL:** Click here
*   **ID:** `---`
*   **Author:** \---
*   **Subject:** _\---_
*   **Date:** \---

### 4\. Rest parameter syntax for functions

mandatory

Score: 65.0% (Checks completed: 100.0%)

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

    export default function returnHowManyArguments() {
    
    }
    

Example:

    > returnHowManyArguments("Hello", "Holberton", 2020);
    3
    >
    

Execution:

    bob@dylan:~$ cat 4-main.js
    import returnHowManyArguments from './4-rest-parameter.js';
    
    console.log(returnHowManyArguments("one"));
    console.log(returnHowManyArguments("one", "two", 3, "4th"));
    bob@dylan:~$
    bob@dylan:~$ npm run dev 4-main.js 
    1
    4
    bob@dylan:~$
    

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x00-ES6_basic`
*   File: `4-rest-parameter.js`

Done?! Help

×

#### Students who are done with "4. Rest parameter syntax for functions"

Check your code

×

#### Correction of "4. Rest parameter syntax for functions"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox QA Review

×

#### 4\. Rest parameter syntax for functions

##### Commit used:

*   **User:** \---
*   **URL:** Click here
*   **ID:** `---`
*   **Author:** \---
*   **Subject:** _\---_
*   **Date:** \---

### 5\. The wonders of spread syntax

mandatory

Score: 65.0% (Checks completed: 100.0%)

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

    export default function concatArrays(array1, array2, string) {
    }
    

Execution:

    bob@dylan:~$ cat 5-main.js
    import concatArrays from './5-spread-operator.js';
    
    console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
    
    bob@dylan:~$
    bob@dylan:~$ npm run dev 5-main.js 
    [
      'a', 'b', 'c',
      'd', 'H', 'e',
      'l', 'l', 'o'
    ]
    bob@dylan:~$
