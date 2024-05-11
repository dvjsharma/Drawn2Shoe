```markdown
# Draw2Shoe

## Introduction

This platform offers a comprehensive shoe shopping experience. Whether you're browsing our wide selection or designing your own custom footwear using our user-friendly tools, Draw2Shoe is here to provide an unparalleled experience.

## Table of Contents

- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**How to Contribute**](#how-to-contribute)
- [**Code Style**](#code-style)

## Technologies

The project utilizes the following technologies:

### Backend:

- **NodeJS:** A JavaScript runtime for building server-side applications.
- **ExpressJS:** A lightweight framework for building web applications.
- **MySQL:** A SQL database.

### Frontend:

- **React.js:** A JavaScript library for building UI components.
- **daisyUI:** A component library that adds component class names to Tailwind CSS.

## Application Setup

To setup the application locally, follow these steps:

1. **Star and Fork this repo** to create your own copy to work from.
2. **Clone the repository** you forked to your local machine using:

   ```bash
   git clone <your_forked_repo_url>
   ```

3. **Install client Dependencies:**

   ```bash
   cd client
   npm install
   ```

4. **Install server Dependencies:**

   ```bash
   cd ../server
   npm install
   ```

5. **Create a file named config.env in the root folder of the server** and add `PORT=3000`.

6. **Start the development servers:**

   - For the Frontend:

     ```bash
     cd client
     npm run dev
     ```

   - For the Backend: Open another terminal in the folder, and make sure XAMPP is running in the background.

     ```bash
     cd ../server
     node app.js
     ```

7. Open `http://localhost:3000` in your browser to see the application.

## How to Contribute

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. **Clone and set up this application locally** by following the above application setup steps.

2. **Create a new branch** for the issue you are assigned to work on, using the following command:

   ```bash
   git checkout -b your_branch_name
   ```

3. **Make your changes to the code.**

4. **Once you are satisfied with your changes, commit them** with a descriptive commit message using the following commands:

   ```bash
   git add .
   git commit -m "feat: Add feature X"
   ```

5. **Push your changes to your forked repository:**

   ```bash
   git push origin your_branch_name
   ```

6. **Create a pull request** by clicking the "Pull request" button on the original repository page.

7. **Wait for the project maintainer to review your pull request** and provide feedback.

8. If your pull request is accepted, it will be merged into the main branch of the project. Congratulations, you've contributed to the project!

## Code Style

- Please make sure to **follow the existing code style and formatting conventions** when making contributions to the project.
```

