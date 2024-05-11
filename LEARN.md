## Introduction

This platform offers a comprehensive shoe shopping experience. Browse a wide selection or design your own custom footwear using our user-friendly tools.
<br>

## Table of Contents

- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**How to Contribute**](#how-to-contribute)
- [**Code Style**](#code-style)
  <br>

## Technologies

The project utilizes the following technologies:

- Backend:

  - NodeJS: A JavaScript runtime for building server-side applications.
  - ExpressJS: A lightweight framework for building web applications.
  - MySql : A SQL database.
    <br>

- Frontend:
  - React.js: A JavaScript library for building ui components.
  - daisyUI: A component library that adds component class names to Tailwind CSS.
<br>

## Application Setup

To setup the application locally, follow these steps:

1. Star and Fork this repo to create your own copy to work from.
2. Clone the repository you forked to your local machine using:

   ```bash
      git clone <your_forked_repo_url>
   ```

3. Install client Dependencies

  ```bash
     cd client
     npm install
  ```
4. Install server Dependencies

  ```bash
     cd server
     npm install
  ```
5. Create a file named config.env in data folder of server and add PORT=3000
 

We are almost done, Now just start the development server.

6. For Frontend

  ```bash
     cd client
     npm run dev
  ```

7. For Backend - Open another terminal in folder, Also make sure xampp is running in background.

  ```bash
     cd server
     node app.js
  ```

8. Open http://localhost:3000 in your browser to see the application.

<br>

## How to Contribute

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Clone and setup this application locally by following above application setup steps.

2. Create a new branch for the issue you assigned to work on, using below command:

   ```bash
      git checkout -b your_branch_name
   ```

3. Make your changes to the code.
4. Once you are satisfied with your changes, commit them with a descriptive commit message using below command:

   ```bash
      git add .
      git commit -m "feat: Add feature X"
   ```

5. Push your changes to your forked repository:

   ```bash
      git push origin your_branch_name
   ```

6. Create a pull request by clicking the "Pull request" button on the original repository page.
7. Wait for the project maintainer to review your pull request and provide feedback.
8. If your pull request is accepted, it will be merged into the main branch of the project. Congratulations, you've contributed to the project!

<br>

## Code Style

- Please make sure to follow the existing code style and formatting conventions when making contributions to the project.

<br>