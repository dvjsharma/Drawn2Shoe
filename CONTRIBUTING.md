# **Contributing Guidelines** 📄

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.
Thank you for helping out and remember, **no contribution is too small.**
<br>
Please note we have a [code of conduct](CODE_OF_CONDUCT.md)  please follow it in all your interactions with the project.



<br>

## **Need some help regarding the basics?🤔**


You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

## **Issue Report Process**

1. Go to the project's issues.
2. Give proper description for the issues.
3. Don't spam to get the assignment of the issue 😀.
4. Wait for till someone is looking into it !.
5. Start working on issue only after you got assigned that issue 🚀.

## Git Commit

The cardinal rule for creating good commits is to ensure there is only one
"logical change" per commit. Why is this an important rule?

- The smaller the amount of code being changed, the quicker & easier it is to
  review & identify potential flaws.

- If a change is found to be flawed later, it may be necessary to revert the
  broken commit. This is much easier to do if there are no other unrelated
  code changes entangled with the original commit.

- When troubleshooting problems using Git's bisect capability, small well
  -defined changes will aid in isolating exactly where the code problem was
  introduced.

- When browsing history using Git annotate/blame, small well-defined changes
  also aid in isolating exactly where & why a piece of code came from.

Things to avoid when creating commits

- Mixing whitespace changes with functional code changes.
- Mixing two unrelated functional changes.
- Sending large new features in a single giant commit.

## Git Commit Conventions

We use git commit as per [Conventional Changelog](https://github.com/ajoslin/conventional-changelog):

```none
<type>(<scope>): <subject>
```

Example:

```none
feat(api): added login endpoint
```

Allowed types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, newline, line endings, etc)
- **refactor**: A code change that neither fixes a bug or adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## **Pull Request Process**

Pull requests with patches, improvements, new features are a great help.
Please keep them clean from unwanted commits.

Follow the steps to get your work included in the project.

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and add the Drawn2Shoe remote:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/Drawn2Shoe.git
   # Navigate to the cloned directory
   cd Drawn2Shoe
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/dvjsharma/Drawn2Shoe.git
   ```

2. Get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new branch from the main master branch to contain your changes.
   Best way is to call is to follow the type described in **Git Commit Conventions**
   stated above: `<githubId>/#<issueNr>/<description/scope/topic>`

   ```bash
   git checkout -b <topic-branch-name>
   ```

   Example:

   ```bash
   git checkout -b john/138/buckets-undefined-index
   ```

   Or

   ```bash
   git checkout -b john/fix/138
   ```

4) It's coding time!

   Commit your changes in logical chunks. Please adhere to **Git Commit Conventions** or your code is unlikely to be merged into the main project.
   Use Git's [interactive rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
   feature to tidy up your commits before making them public.

5) Locally rebase the upstream master branch into your topic branch:

   ```bash
   git pull --rebase upstream master
   ```

6) Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7) [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description against the `master` branch.

### Alternatively contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the Drawn2Shoe repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the Drawn2Shoe repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
  - Go to the GitHub website and navigate to your fork of the Drawn2Shoe repository.
  - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the Drawn2Shoe repository.

⭐️ Support the Project
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.

# **Thank you for contributing💗** 
