# Miro front end challenge
This is the submission for the frontend test assessment for Miro. This project has been built using ReactJS and TypesScript and bundled with webpack.

It is designed to be framework agnostic, so that all the user needs to do is inlcude the generated bundle in their HTML file and start working from there.

### Set up
To get this project set up, you will need the following:
- A recent version of [NodeJS](https://nodejs.org/en/). I recommend the LTS version, which is currently 14.15.0
- A recent version of the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
- MacOS, Linux or [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and each of these will give you access to a command line tool.

#### To run this project on your local environment, ensure you have what you need to get set up, then do the following:
- Clone this repository: `$ git clonegit@github.com:matfin/miro-frontend-challenge.git`.
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

#### Alongside these, here is what I was able to get working from the spec in the assessment:
- The emails input component can be used independently on any page as long as the bundles JS is included in a `<script>` tag. The developer does not need to include React as a depencency, as this is all contained in the bundled JS.
- An email block is created when the user presses enter or enters a comma in the input field.
- The container for adding emails is fluid, and the email address blocks flow according to the width of the container.
- Styling is self contained and does not conflict with anything outside this application.
- When many emails are added, the user can scroll through the list of email blocks.
- A long list of comma separated emails are added as email blocks as soon as they are pasted into the input. The content of the input is then deleted.
- Clicking on 'Add email' adds a random email to the list and clicking on the 'Get emails count' button alerts the number of emails in the list.
- Emails in the list cannot be edited, but they can be deleted.
- The code has full test coverage, which was made easier with 

#### Here is what I didn't get done, but would have worked on if I had more time:
- Only one email editor can be used on the page at the same time. While each instance of the compponent could be self contained, calling to add an email externally would have required more work when clicking on the buttons, to prevent an email from one editor block from being added to the test. I would need to isolate the events called and identify which block should receive the email.
- I didn't get this working in IE11. Doing this would have taken more time than was suitable for a coding challenge, especially with setting up webpack and polyfills.
 

