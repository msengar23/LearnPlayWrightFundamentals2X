import {test, expect} from "@playwright/test";
import path from "path";

test.describe("File Dowload test",()=>
{
test.use({
    storageState: "./userQA-session.json"
});

test.beforeEach(async ({page})=>
{
await page.goto("https://qajobfit.com/dashboard?tab=builder");
//await expect(page.getByText("Dashboard")).toBeVisible();
await expect(page.locator("//h1[text()='Dashboard']"))
//await page.pause();
});

 test("File download test", async ({ page }) => {

        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.locator("//button[contains(text(),'PDF')]").click()
        ]);

        const filepath = path.join("out", staticDownload.suggestedFilename());
        await staticDownload.saveAs(filepath);

        //await page.pause();
    })

});

