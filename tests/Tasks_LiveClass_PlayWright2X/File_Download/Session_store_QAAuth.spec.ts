import {chromium} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
async function saveQaSession() 
{
const browser = await chromium.launch({headless: false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://qajobfit.com/auth');


await page.waitForTimeout(1500);
    await page.getByPlaceholder("your.email@example.com").fill(process.env.QA_EMAIL!);
    await page.locator("//input[@name='password']").fill(process.env.QA_PASSWORD!);
    await page.getByRole("button", { name: "Sign in" }).click();

    await page.waitForTimeout(1500);

    await context.storageState({ path: "./userQA-session.json" });
    //await page.pause()
     console.log("Session Saved");
    await browser.close();
};

saveQaSession();