# Angular Resolvers

How to use Resolvers in Angular!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Commits

Structure for commits:

> _`Subject is sentence-case`_ 

- `feat: Subject`
- `fix: Subject`
- `styles: Subject`
- `docs: Subject`
- `test: Subject`
- `refactor: Subject`

## Husky & Lint Staged

Install & configure Husky (Git Hooks), Lint Staged (Commits Staged Linter), Commit Lint (Conventional Commits) and Prettier (Code Rules)

- `npm i -D husky lint-staged @commitlint/types @commitlint/cli @commitlint/config-conventional prettier`
- Script and Exec (Once) -> `"prepare": "husky install"` (That will create _`.husky`_ folder in the root)
- Exec -> `npx eslint --init` (See file _`.eslintrc.json`_ & _`.lintstagedrc`_)
- (Optional) Script -> `"lint": "eslint ."` (Exec linter)
- (Optional) Script -> `"lint:fix": "eslint --fix ."` (Fix errors by linter)
- (Optional) Script -> `"lint:commit": "npx lint-staged"` (Exec linter but only files in staged)
- (Optional) Script -> `"pretier": "prettier . --write"` (Exec prettier for all files)
- Create _`commitlint.config.js`_ and configure.
- Create a git hook to make a commit-msg and thus run a regular expression validator before each commit
  - `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'`
- Create a git hook to do a pre-commit and this run the lint-staged (prettier and eslint) and test before each commit
  - Script -> `"test:staged": "git diff --cached --name-only -- '*.spec.ts' | xargs -I {} ng test --include={} --browsers=ChromeHeadless --watch=false"`
    - `git diff` Show changes in files
    - `--cached` Only files in staged
    - `--name-only` Only names of files
    - `'*.spec.ts'` Only files spec.ts
    - `|` Redirect before command to after command
    - `xargs` Take a list of elements and pass like arguments to another command
    - `-I {}` Save list of elements in {}
    - `ng test` Exec test
    - `--include={}` Include save list of elements to testing each
    - `--browsers=ChromeHeadless` Tests must be proved in browser chrome headless (Exec chrome without GUI)
    - `--watch=false` Don't open browser window
  - `npx husky add .husky/pre-commit "npx lint-staged && git diff --cached --name-only -- '*.spec.ts' | xargs -I {} ng test --include={} --browsers=ChromeHeadless --watch=false"`
- Create a git hook to do a pre-push and this run HERE ANYTHING COMMAND each push
  - `npx husky add .husky/pre-push "#HERE ANYTHING COMMAND"`

> If Husky doesn't work on MacOS, run the command (Within the project): _`chmod ug+x .husky/*`_


> Developed By: __`Diego Villa`__. - Website: [https://www.cabuweb.com](https://www.cabuweb.com)