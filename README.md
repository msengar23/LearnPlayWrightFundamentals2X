# LearnPlayWrightFundamentals2X

This repository contains a Playwright test automation project built to demonstrate and practice Playwright fundamentals.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/msengar23/LearnPlayWrightFundamentals2X.git
   cd LearnPlayWrightFundamentals2X
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Run tests in a specific browser:
  ```bash
  npx playwright test --project=chromium
  ```

- Show the HTML report:
  ```bash
  npx playwright show-report
  ```

## Project Structure

- `tests/` - Test files (specs)
  - `example.spec.ts` - Sample Playwright tests
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts
- `.gitignore` - Files and folders ignored by Git (includes `node_modules/`)

## Configuration

The project is configured to run tests across three browsers:
- Chromium
- Firefox
- WebKit

You can modify browser settings, timeouts, and other options in `playwright.config.ts`.

## Notes

- `node_modules/` is excluded from version control via `.gitignore`.
- Test results and Playwright reports are also ignored.

## License

ISC
