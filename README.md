# Simple To-Do App + Jenkins CI/CD

A lightweight static To-Do application created to demonstrate GitHub and Jenkins CI/CD.

## Features

- Add tasks
- Mark tasks as completed
- Delete tasks
- Clear all tasks
- Saves tasks in browser `localStorage`
- No database
- No backend

## Project structure

```text
simple-todo-cicd/
├── index.html
├── src/
│   ├── app.js
│   └── style.css
├── tests/
│   └── test.js
├── package.json
├── Jenkinsfile
└── .gitignore
```

## Run locally

You can open `index.html` directly in a browser.

For the same environment used by Jenkins:

```bash
npm install
npm run dev
npm run build
npm test
```

The production files are created in `dist/`.

## Jenkins pipeline

The `Jenkinsfile` has three stages:

1. **Dev** - installs dependencies and creates the production build.
2. **Test** - runs automated checks.
3. **Deploy** - copies the build to a `deploy/` directory and archives it as a Jenkins artifact.

### Jenkins setup

Create a **Pipeline** job in Jenkins.

Choose **Pipeline script from SCM** and select **Git**.

Enter your GitHub repository URL and the branch, normally `*/main`.

Jenkins will automatically read the `Jenkinsfile` from the repository.

### If Jenkins does not have Node.js

Install Node.js on the Jenkins machine first. On Linux, verify:

```bash
node --version
npm --version
```

Then run the job.

## Optional real server deployment

For a real web-server deployment, replace the commands in the Deploy stage with a copy to your web-server directory, for example:

```groovy
sh 'sudo rm -rf /var/www/html/todo-app/*'
sh 'sudo cp -r dist/. /var/www/html/todo-app/'
```

Only do this after configuring Jenkins permissions and your web server.
