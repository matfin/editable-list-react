## React Editable List
This is the ReactJS version of the [Editable List](https://github.com/matfin/editable-list) project I have been working on, which was written in TypeScript and uses [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

The purpose of this project is to act as a playground to explore certain concepts and tie everything together to create a performant and scalable solution, while solving a challenge a front end engineer is very likely to encounter.

It also serves as a performance demo, where we present to list components to the user. One is optimised under the hood and performs well with many items in the list, while the other is not and it becomes increasinly sluggish when more items are added.

If you want to see this in action, head over to [https://matfin.github.io/editable-list-react/](https://matfin.github.io/editable-list-react/).

### Set up
To get this project set up on your machine, you will need the following:
- A recent version of [NodeJS](https://nodejs.org/en/). I recommend the LTS version, which is currently 14.15.0
- A recent version of the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
- MacOS, Linux or [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and each of these will give you access to a command line tool.

#### To run this project on your local environment, ensure you have what you need to get set up, then do the following:
- Clone this repository: `$ git clone git@github.com:matfin/editable-list-react.git`.
- Install dependencies: `$ yarn`.
- To run in development mode: `$ yarn dev`.
- To build a production bundle: `$ yarn build`.

### Code checks and tests
- To run tests use `$ yarn test` and for coverage checks run `$ yarn coverage`.
- To run code lining use `$ yarn lint`.
- To run code lint and coverage checks, use `$ yarn checks`.

### Achievements
- Explored the use of the `useReducer` React hook to maintain application state, albiet an in-memory one.
- Leveraged custom hooks to detect key presses of enter and commas, to save an entered value as per requirements.
- Maintained good separation of concerns and achieved full test coverage.
- Maintained good performance by using [React Memo](https://reactjs.org/docs/react-api.html#reactmemo) and the React [useCallback hook](https://reactjs.org/docs/hooks-reference.html#usecallback).
- Created a bridge between vanilla Javascript and the `<EmailsInput />` container component, so internal actions can be executed without messy event listener calls.

#### Alongside these, here is what I was able to get working from the spec in the assessment:
- The emails input component can be used independently on any page as long as the bundles JS is included in a `<script>` tag. The developer does not need to include React as a depencency, as this is all contained in the bundled JS.
- An email block is created when the user presses enter or enters a comma in the input field.
- The container for adding emails is fluid, and the email address blocks flow according to the width of the container.
- Styling is self contained and does not conflict with anything outside this application.
- When many emails are added, the user can scroll through the list of email blocks.
- A long list of comma separated emails are added as email blocks as soon as they are pasted into the input. The content of the input is then deleted.
- The code has full test coverage, which was made easier with React Testing Library.
 

