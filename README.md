# LearnPlayWrightFundamentals2X

This repository contains a Playwright test automation project built to demonstrate and practice Playwright fundamentals — covering locators, session storage, Allure reporting, web tables, frames, keyboard/mouse actions, alerts, SVG, Shadow DOM, file upload/download, assertions, hooks, data-driven testing, POM, fixtures, and more.

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

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode** (visible browser):
  ```bash
  npx playwright test --headed
  ```

- **Run Chromium only:**
  ```bash
  npx playwright test --project=chromium
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/01_Basics/229_Basic_Test.spec.ts
  ```

- **Show the HTML report:**
  ```bash
  npx playwright show-report
  ```

## Project Structure

```
LearnPlayWrightFundamentals2X/
├── Utils/
│   ├── .env.example              # Environment variable template (VWO_USER, VWO_PASS)
│   ├── CustomReporter.ts         # Custom TTA HTML reporter (The Testing Academy)
│   └── tsconfig.json             # TypeScript configuration (template)
├── tests/
│   ├── 01_Basics/                  # Basic Playwright tests & annotations
│   │   ├── 229_Basic_Test.spec.ts
│   │   └── 230_Test_Annotations.spec.ts
│   ├── 02_first_tests/             # Browser context, pages, & test options
│   │   ├── 231_First_Running_Verify.spec.ts
│   │   ├── 232_BCP.spec.ts
│   │   ├── 233_BCP_MultipleContext.spec.ts
│   │   ├── 234_BCP_MultiplePages.spec.ts
│   │   ├── 236_BCP_TEST_PW.spec.ts
│   │   └── 237_BCP_Test_Options.spec.ts
│   ├── 03_Locators_Commands/       # Locators, commands, & VWO projects
│   │   ├── 238_LS.spec.ts
│   │   ├── 239_Project_VWO_Login.spec.ts
│   │   ├── 241_Project_3_Singup_VWO.spec.ts
│   │   ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts
│   │   ├── 243_PW_Command.spec.ts
│   │   ├── 244_Refere_PW.spec.ts
│   │   ├── 245_GetByRole_PW.spec.ts
│   │   ├── 246_PressSeq.spec.ts
│   │   └── XPath_TTA.pdf
│   ├── 04_Session_Storage/         # Session & local storage handling
│   │   ├── 247_SessionStorage.spec.ts
│   │   ├── 248_Session_Storage.spec.ts
│   │   └── 249_TestVWODashboard_NoCustomReport.spec.ts
│   ├── 05_Allure_Reporting/        # Allure reporting integration
│   │   └── 248_TestVWODashboard.spec.ts
│   ├── 06_Multiple_Element_/       # (reserved)
│   ├── 07_WebTables/               # (reserved)
│   ├── 08_Web_Select_Frames_Iframe/ # (reserved)
│   ├── 09_Frame_Iframe/            # (reserved)
│   ├── 10_Keyboard_Hover_Drag_Drop/ # (reserved)
│   ├── 11_JS_Alerts/               # (reserved)
│   ├── 12_Handle_SVG/              # (reserved)
│   ├── 13_Shadow_DOM/              # (reserved)
│   ├── 14_FileUpload/              # (reserved)
│   ├── 15_File_Download/           # (reserved)
│   ├── 16_Scroll_toElement/        # (reserved)
│   ├── 17_Expect_Assertions/       # (reserved)
│   ├── 18_Test_hooks/              # (reserved)
│   ├── 19_Data_Driven_Testing/     # (reserved)
│   ├── 20_Page_Object_Model/       # (reserved)
│   ├── 21_Fixture/                 # (reserved)
│   ├── 22_Misc_Concepts/           # (reserved)
│   ├── 23_Advance_Framework/       # (reserved)
│   ├── Projects/                   # Capstone / project tests (reserved)
│   ├── Tasks_LiveClass_PlayWright2X/  # Live class task files
│   │   ├── Task_01_10July_Xpath.spec.ts
│   │   ├── 17July_Task01_Project_StudentLogin_Automate.spec.ts
│   │   ├── 17July_Task02_Project_OrangeHRM_Login_Finddata_Table.spec.ts
│   │   ├── 19July_Task01_StaticTable.spec.ts
│   │   ├── 19July_Task02_DynamicTable.spec.ts
│   │   └── 20July_Task_01_SpiceJet_DropDown_ByType.spec.ts
│   ├── example.spec.ts             # Sample Playwright tests
│   └── Template.spec.ts            # Test template
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies & scripts
└── .gitignore                      # Git ignore rules
```

## Implemented Topics

| Topic | Status | Files |
|-------|--------|-------|
| 01 - Basics | ✅ Implemented | 229, 230 |
| 02 - First Tests | ✅ Implemented | 231–237 |
| 03 - Locators & Commands | ✅ Implemented | 238–246 + XPath PDF |
| 04 - Session Storage | ✅ Implemented | 247–249 |
| 05 - Allure Reporting | ✅ Implemented | 248 |
| 06–23 (advanced topics) | 📋 Reserved | `.gitkeep` only |

## Configuration (`playwright.config.ts`)

| Setting | Value |
|---------|-------|
| **Browser** | Chromium (only) |
| **Headless** | `false` |
| **Trace** | `on` |
| **Screenshots** | `on` |
| **Video** | `on` |
| **Viewport** | 1920 × 1080 |
| **Reporters** | `line`, `CustomReporter` (TTA HTML), `allure-playwright` |
| **Parallel** | Fully parallel |
| **Retries** | 2 on CI, 0 locally |

## Utilities

- **Custom TTA Reporter** (`Utils/CustomReporter.ts`): Real-time HTML reporter that generates styled test reports with steps, screenshots, videos, traces, and console logs in the `tta-report/` directory.
- **Allure Reporting**: Integrated via `allure-playwright` — run `allure generate allure-results --clean && allure open` to view Allure reports.
- **Environment Variables**: Copy `.env.example` to `.env` and fill in VWO credentials for VWO-based test projects.

## Reports

After running tests, the following report artifacts are generated:

- **Playwright HTML Report**: `npx playwright show-report`
- **TTA Custom Report**: `tta-report/index.html` (opens the latest run)
- **Allure Report**: `allure-results/` (view with `allure generate allure-results --clean && allure open`)

## Notes

- `node_modules/`, test reports (`tta-report/`, `playwright-report/`, `allure-results/`), and user session data (`user-session.json`) are excluded from version control via `.gitignore`.
- The project is configured to run with **Chromium only** — Firefox, WebKit, and mobile browsers are commented out but can be enabled.

## License

ISC
