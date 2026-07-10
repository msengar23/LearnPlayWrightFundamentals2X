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
  - `01_Basics/` - Basic Playwright test examples and annotations
  - `02_first_tests/` - First running tests, browser context, pages, and options
  - `03_Locators_Commands/` - Locators and commands (reserved)
  - `04_Session_Storage/` - Session storage handling (reserved)
  - `05_Allure_Reporting/` - Allure reporting (reserved)
  - `06_Multiple_Element_/` - Multiple element handling (reserved)
  - `07_WebTables/` - Web tables handling (reserved)
  - `08_Web_Select_Frames_Iframe/` - Web selects, frames, and iframes (reserved)
  - `09_Frame_Iframe/` - Frame and iframe handling (reserved)
  - `10_Keyboard_Hover_Drag_Drop/` - Keyboard, hover, drag and drop actions (reserved)
  - `11_JS_Alerts/` - JavaScript alerts handling (reserved)
  - `12_Handle_SVG/` - SVG element handling (reserved)
  - `13_Shadow_DOM/` - Shadow DOM handling (reserved)
  - `14_FileUpload/` - File upload handling (reserved)
  - `15_File_Download/` - File download handling (reserved)
  - `16_Scroll_toElement/` - Scroll to element (reserved)
  - `17_Expect_Assertions/` - Expect assertions (reserved)
  - `18_Test_hooks/` - Test hooks (reserved)
  - `19_Data_Driven_Testing/` - Data-driven testing (reserved)
  - `20_Page_Object_Model/` - Page Object Model (reserved)
  - `21_Fixture/` - Fixtures (reserved)
  - `22_Misc_Concepts/` - Miscellaneous concepts (reserved)
  - `23_Advance_Framework/` - Advanced framework topics (reserved)
  - `example.spec.ts` - Sample Playwright tests
  - `Template.spec.ts` - Test template
  - `Tasks_LiveClass_PlayWright2X/` - Live class task files
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts
- `.gitignore` - Files and folders ignored by Git (includes `node_modules/`)

## Configuration

The project is configured to run tests with the following settings:
- **Browser**: Chromium (only)
- **Trace**: Enabled (`on`)
- **Headless**: `false` (tests run in visible browser)
- **Screenshots**: Enabled (`on`)
- **Video**: Enabled (`on`)
- **Viewport**: 1920x1080

You can modify browser settings, timeouts, and other options in `playwright.config.ts`.

## Notes

- `node_modules/` is excluded from version control via `.gitignore`.
- Test results and Playwright reports are also ignored.

## License

ISC
