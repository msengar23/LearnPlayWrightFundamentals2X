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

2. (If re-cloning) Restore the `.env` file from `.env.example` for VWO credentials:
   ```bash
   cp Utils/.env.example .env
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install Playwright browsers:
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
│   ├── 01_Basics/                    # Basic Playwright tests & annotations
│   │   ├── 229_Basic_Test.spec.ts
│   │   └── 230_Test_Annotations.spec.ts
│   ├── 02_first_tests/               # Browser context, pages, & test options
│   │   ├── 231_First_Running_Verify.spec.ts
│   │   ├── 232_BCP.spec.ts
│   │   ├── 233_BCP_MultipleContext.spec.ts
│   │   ├── 234_BCP_MultiplePages.spec.ts
│   │   ├── 236_BCP_TEST_PW.spec.ts
│   │   └── 237_BCP_Test_Options.spec.ts
│   ├── 03_Locators_Commands/         # Locators, commands, & VWO projects
│   │   ├── 238_LS.spec.ts
│   │   ├── 239_Project_VWO_Login.spec.ts
│   │   ├── 241_Project_3_Singup_VWO.spec.ts
│   │   ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts
│   │   ├── 243_PW_Command.spec.ts
│   │   ├── 244_Refere_PW.spec.ts
│   │   ├── 245_GetByRole_PW.spec.ts
│   │   ├── 246_PressSeq.spec.ts
│   │   └── XPath_TTA.pdf
│   ├── 04_Session_Storage/           # Session & local storage handling
│   │   ├── 247_SessionStorage.spec.ts
│   │   ├── 248_Session_Storage.spec.ts
│   │   └── 249_TestVWODashboard_NoCustomReport.spec.ts
│   ├── 05_Allure_Reporting/          # Allure reporting integration
│   │   └── 248_TestVWODashboard.spec.ts
│   ├── 06_Multiple_Element_/         # Multi-element locator tests
│   │   ├── 250_Multi_Element.spec.ts
│   │   └── 251_Multi_Element_Direct.spec.ts
│   ├── 07_WebTables/                 # Web table & pagination tests
│   │   ├── 252_WebTables_Dynamic_Xpath.spec.ts
│   │   ├── 253_WebTable_Dynamic.spec.ts
│   │   ├── 254_Filter_PageLoc.spec.ts
│   │   ├── 255_WebTable_Xapth.spec.ts
│   │   ├── 256_WebTable_Xapth_Pagination.spec.ts
│   │   ├── 257_WebTable_Xapth_Pagination.spec.ts
│   │   └── 258_WebTable_Xapth_Pagination_Fn.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/  # Select dropdown & custom dropdown tests
│   │   ├── 259_Select.spec.ts
│   │   ├── 260_Custom_DD_Select.spec.ts
│   │   └── 261_Advance_Select_Pro.spec.ts
│   ├── 09_Frame_Iframe/              # Iframe & frame set tests
│   │   ├── 262_Iframe.spec.ts
│   │   ├── 263_frameSet.spec.ts
│   │   └── 264_Iframe_part2.spec.ts
│   ├── 10_Keyboard_Hover_Drag_Drop/  # Keyboard, hover, drag & drop, context menu tests
│   │   ├── 265_Keyboard.spec.ts
│   │   ├── 266_SpiceJet_Hover.spec.ts
│   │   ├── 267_Drag_Drop.spec.ts
│   │   ├── 268_Advance_Drag_Drop.spec.ts
│   │   └── 269_Context_Menu.spec.ts
│   ├── 11_JS_Alerts/                 # JavaScript alert handling tests
│   │   └── 270_JS.spec.ts
│   ├── 12_Handle_SVG/                # SVG element handling tests
│   │   ├── 271_SVG.spec.ts
│   │   ├── 272_SVG_Practice.spec.ts
│   │   └── 273_Advance_SVG.spec.ts
│   ├── 13_Shadow_DOM/                # Shadow DOM tests
│   │   └── 274_Shadow_DOM.spec.ts
│   ├── 14_FileUpload/                # File upload tests
│   │   ├── 275_File_Upload.spec.ts
│   │   ├── 276_Multiple_File_Upload.spec.ts
│   │   └── testdata.txt
│   ├── 15_File_Download/             # File download tests
│   │   └── 277_File_Download.spec.ts
│   ├── 16_Scroll_toElement/          # Scroll-to-element tests
│   │   └── 278_ScrollToView.spec.ts
│   ├── 17_Expect_Assertions/         # Expect assertions & custom matchers
│   │   ├── 279_Expect.spec.ts
│   │   ├── 280_Expect.spec.ts
│   │   ├── 281_Expect.spec.ts
│   │   ├── 282_Project.spec.ts
│   │   └── 283_Expect.cheatsheet.md
│   ├── 18_Test_hooks/                # Test hooks, groups, describe, priority
│   │   ├── 284_Test_Hook.spec.ts
│   │   ├── 285_Chrome_Arg_List.md
│   │   ├── 286_Test_Hook_Cheatsheet.md
│   │   ├── 287_Group.spec.ts
│   │   ├── 288_Before_After.spec.ts
│   │   ├── 289_TestDescribe.spec.ts
│   │   └── 290_TestPriority.spec.ts
│   ├── 19_Data_Driven_Testing/       # Data-driven tests (JSON, CSV, YAML, MySQL, XLSX)
│   │   ├── 291_DDT.spec.ts
│   │   ├── 292_TestData.json
│   │   ├── 293_Users.json
│   │   ├── 294_LoginTest.spec.ts
│   │   ├── 295_Read_Write_FileSystem.ts
│   │   ├── 296_DDT_Json_Array.spec.ts
│   │   ├── 297_DDT_CSV.spec.ts
│   │   ├── 298_JSON_DDT.spec.ts
│   │   ├── 299_DDT_YAML.spec.ts
│   │   ├── 300_DDT_MYSQL.spec.ts
│   │   ├── 301_DDT_XLSX.spec.ts
│   │   ├── Util/
│   │   │   ├── csvReader.ts
│   │   │   ├── dbReader.ts
│   │   │   ├── excelReader.ts
│   │   │   ├── generateExcel.ts
│   │   │   └── yamlReader.ts
│   │   └── test-data/
│   │       ├── login-data.csv
│   │       ├── login-data.sql
│   │       ├── login-data.xlsx
│   │       ├── login-data.yml
│   │       ├── login.json
│   │       └── registration-data.json
│   ├── 20_Page_Object_Model/         # (reserved)
│   ├── 21_Fixture/                   # (reserved)
│   ├── 22_Misc_Concepts/             # (reserved)
│   ├── 23_Advance_Framework/         # (reserved)
│   ├── Projects/                     # Capstone / project tests (reserved)
│   ├── Tasks_LiveClass_PlayWright2X/ # Live class task files
│   │   ├── Task_01_10July_Xpath.spec.ts
│   │   ├── 17July_Task01_Project_StudentLogin_Automate.spec.ts
│   │   ├── 17July_Task02_Project_OrangeHRM_Login_Finddata_Table.spec.ts
│   │   ├── 19July_Task01_StaticTable.spec.ts
│   │   ├── 19July_Task02_DynamicTable.spec.ts
│   │   ├── 20July_Task_01_SpiceJet_DropDown_ByType.spec.ts
│   │   ├── 22_July_Task_Hover_Menu_SelectSubMenu.spec.ts
│   │   ├── 24July_Task_FlipKart_Search_Macmini_LOwestPrice.spec.ts
│   │   ├── 27July_Task_Map_SVG.spec.ts
│   │   ├── File_Download/
│   │   │   ├── 29July_Task01_QAAuth_Resume_download.spec.ts
│   │   │   └── Session_store_QAAuth.spec.ts
│   │   └── File_Upload/
│   │       ├── 29JulyTask01_Upload_File.spec.ts
│   │       └── Session_Storage_TestingAcademy.spec.ts
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
| 06 - Multiple Elements | ✅ Implemented | 250, 251 |
| 07 - Web Tables | ✅ Implemented | 252–258 |
| 08 - Web Select & Dropdowns | ✅ Implemented | 259–261 |
| 09 - Frame / Iframe | ✅ Implemented | 262–264 |
| 10 - Keyboard, Hover, Drag & Drop | ✅ Implemented | 265–269 |
| 11 - JS Alerts | ✅ Implemented | 270 |
| 12 - Handle SVG | ✅ Implemented | 271–273 |
| 13 - Shadow DOM | ✅ Implemented | 274 |
| 14 - File Upload | ✅ Implemented | 275, 276 |
| 15 - File Download | ✅ Implemented | 277 |
| 16 - Scroll to Element | ✅ Implemented | 278 |
| 17 - Expect Assertions | ✅ Implemented | 279–283 |
| 18 - Test Hooks | ✅ Implemented | 284–290 |
| 19 - Data-Driven Testing | ✅ Implemented | 291–301 + Utils (CSV, YAML, Excel, MySQL readers) & test data |
| 20–23 (advanced topics) | 📋 Reserved | |
| Live Class Tasks | ✅ Implemented | XPath, Student Login, OrangeHRM, Static/Dynamic Tables, SpiceJet Dropdown, Hover Menu, Flipkart Search & Lowest Price, Map SVG, File Download (QA Auth), File Upload (TTA)

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

## Data-Driven Testing (Module 19)

The `tests/19_Data_Driven_Testing/` module demonstrates reading test data from multiple sources and generating parameterized Playwright tests:

| Source | Spec File | Reader/Util | Test Data File |
|--------|-----------|-------------|----------------|
| Inline JSON array | `296_DDT_Json_Array.spec.ts` | — | Inline in-spec array |
| JSON file | `298_JSON_DDT.spec.ts` | `import` / `require` | `registration-data.json` |
| Tab-delimited CSV | `297_DDT_CSV.spec.ts` | `Util/csvReader.ts` | `login-data.csv` |
| YAML | `299_DDT_YAML.spec.ts` | `Util/yamlReader.ts` (js-yaml) | `login-data.yml` |
| MySQL | `300_DDT_MYSQL.spec.ts` | `Util/dbReader.ts` (mysql2) | `login-data.sql` (seed) |
| Excel (.xlsx) | `301_DDT_XLSX.spec.ts` | `Util/excelReader.ts` (exceljs) | `login-data.xlsx` |

**Key patterns used:**
- **Synchronous readers** (CSV, YAML): data loads at test-collection time, so `for...of` generates one `test()` per row, each appearing as a separate test in reports.
- **Async readers** (MySQL, Excel): data arrives in `beforeAll`, so each row runs as a `test.step` inside a single `test()`. Alternative: dump to JSON in `globalSetup`.
- All readers share a common `LoginRow` interface (`Util/yamlReader.ts`) with `description`, `username`, `password`, `shouldPass`, and `expectedError` fields.

**Setup for MySQL tests:**
```bash
mysql -u root -p < tests/19_Data_Driven_Testing/test-data/login-data.sql
```
Then configure `.env` with `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`.

**Regenerate Excel test data:**
```bash
node tests/19_Data_Driven_Testing/Util/generateExcel.js
```

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
