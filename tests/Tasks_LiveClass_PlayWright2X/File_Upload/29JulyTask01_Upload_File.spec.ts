import { test, expect } from '@playwright/test';
import * as path from 'path';


test.describe("File Upload Handling", () => {
    test.use({
        storageState: "./user1-session.json"
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/student/settings");
        await page.waitForTimeout(2000);
    });
    
    test("Testing profile file upload", async ({ page }) => {
        const filepath = path.resolve(__dirname, 'Mamta_Singh.jpeg'); //tests\Tasks_LiveClass_PlayWright2X\File_Upload\Mamta_Singh.jpeg
        console.log("File Path", filepath);

        await page.getByRole('button', { name: 'Dismiss' }).click();
        await expect(page.locator("//h1")).toHaveText('Profile & Settings');
        await page.waitForTimeout(1500);
        await page.locator("input[type='file']").setInputFiles(filepath);
        await page.pause();

    });
  
});
