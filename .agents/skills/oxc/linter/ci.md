# Setup CI and other integrations ​
You can - and should - setup your CI pipeline to run Oxlint and fail the build on lint errors.
This page also covers other integrations you may want to include, like git pre-commit hooks.
## CI ​
These instructions assume you have already set up Oxlint in your project by adding oxlint to your devDependencies in your package.json , and already have an oxlint configuration file in the repo.
### GitHub Actions ​
First, add a lint script to your package.json if you don't have one already:
```
{
  "scripts": {
    "lint": "oxlint"
  }
}
```
Then create .github/workflows/oxlint.yml :
```
name: Lint

on:
  pull_request:
  push:
    branches: [main]

permissions: {}

jobs:
  oxlint:
    runs-on: ubuntu-latest
    steps:
      # NOTE: For security, it is strongly recommended to pin all
      # actions to a specific SHA hash instead of using a version
      # tag like this.
      - uses: actions/checkout@v6
        with:
          persist-credentials: false
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: pnpm

      # alternatively use npm install / yarn install here
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
```
By default, Oxlint will enable better warning/error annotations when it detects that it is running in a GitHub Actions environment. You can override this behavior by providing the --format flag with a different formatter option.
### GitLab CI ​
If you use GitLab CI, you can set up Oxlint with --format=gitlab and GitLab's Code Quality feature to get inline annotations for lint violations in merge requests.
To set this up, you can add a script to your package.json to output the gitlab format and save it to a file, like so:
```
{
  "scripts": {
    "lint:gitlab": "oxlint --format=gitlab > gitlab-oxlint-report.json"
  }
}
```
And then add a job to your .gitlab-ci.yml , to run the script and upload the report as a Code Quality artifact:
```
oxlint:
  image: node:lts
  stage: test
  before_script:
    # alternatively use pnpm install / yarn install here
    - npm install
  script:
    - npm run lint:gitlab
  artifacts:
    reports:
      codequality:
        # This is relative to your repository root, so adjust if your repo has a different structure or you put the report in a different location
        - gitlab-oxlint-report.json
```
If you do not want to use the Code Quality feature, you can simply run oxlint without --format=gitlab in the CI job instead.
You should ensure type-aware rules are enabled if you want to use them, and consider caching node_modules to speed up the installation of dependencies.
## Git hooks ​
### lint-staged ​
For JS/TS projects using lint-staged , you can set up oxlint to run as a pre-commit hook as follows:
```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "pnpm run lint"
  }
}
```
To automatically install the git hook when installing dependencies, considering also using husky .
### pre-commit ​
If you use pre-commit to manage git hooks, you can set up Oxlint as follows:
```
repos:
  - repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v0.0.0
    hooks:
      - id: oxlint
        verbose: true
```
Replace v0.0.0 with the latest version.
## Other integrations ​
### Unplugin ​
Unplugin is supported via a third-party package
### Vite plugin ​
A Vite plugin is supported via a third-party package