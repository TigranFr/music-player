# Music Player App

This project is a responsive and feature-rich music player application built with React and TypeScript, leveraging the capabilities of Create React App. It adheres to best practices for code quality and structure, utilizing TypeScript, ESLint, and Prettier to ensure clean and maintainable code.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install the necessary dependencies.
4. Execute `yarn start` to launch the app in development mode.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

In the project directory, you can run the following commands:

- `yarn start`: Runs the app in development mode.
- `yarn test`: Launches the test runner in interactive watch mode.
- `yarn build`: Builds the app for production, optimizing the build for performance.

## Features

- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **Styling**: Implements CSS for styling, ensuring a visually appealing and responsive design.
- **Folder Structure**: Follows a well-organized folder structure, separating components, hooks, utilities, and layouts for maintainability.
- **Third-Party Packages**: Integrates packages such as classnames, react-dropzone, and react-toastify for enhanced functionality.
- **Search Functionality**: Implements search functionality by filtering songs based on artist name and song name.
- **Animations and Hover Effects**: Adds beautiful animations and hover effects for an engaging user experience.
- **Upload Feature**: Utilizes react-dropzone for seamless song uploads, complete with a loading simulation and disabled upload button until a song is selected.
- **Console Feedback**: Provides feedback in the console for actions like pressing the "Play All" and "Add All" buttons.
- **Testing**: Includes basic unit tests using Jest and React Testing Library.
- **Redux Persist**: Uses Redux Persist for saving added songs during a page refresh.

## Usage

- Press the "Play All" and "Add All" buttons to see console feedback and toast notifications.
- Utilize the search input for filtering songs based on artist name and song name.
- Explore the song list, featuring icons, song name, artist name, track number, and additional icons.
- Upload songs using the "Upload" button, with a loading simulation and automatic addition to the list.

## Responsive Design

The app is designed to be fully responsive, ensuring a seamless experience across various devices.

## Acknowledgments

This project was bootstrapped with Create React App and follows the principles of React and Redux Toolkit.
