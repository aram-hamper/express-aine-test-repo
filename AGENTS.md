# AGENTS.md

Rules for coding agents working in this repository.

## Commands

- Install: `npm install`
- Test: `npm test` (mocha; tests live in `test/` and `test/acceptance/`)
- Lint: `npm run lint` (ESLint). Fix lint errors before opening a pull request.

## Conventions

- CI tests every Node version from 16 to 26, so don't use syntax or APIs that Node 16 lacks.
- Every behavior change or bug fix comes with a test in `test/`, using mocha and supertest like the existing tests.
- Keep pull requests small and focused on one change. Don't reformat files you aren't changing.
- Pull request descriptions say what changed, why, and which commands you ran to verify it.

## Never

- Never add a dependency without saying why in the pull request.
- Never edit `History.md` or the `version` in `package.json`; maintainers do that at release time.

This branch's wiki rebuilds on Fjorge's daily schedule when it has new commits.
