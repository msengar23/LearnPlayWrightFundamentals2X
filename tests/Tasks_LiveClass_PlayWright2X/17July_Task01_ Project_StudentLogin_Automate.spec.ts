import { test, expect } from '@playwright/test';


test('To Validate URL for Student Login Success', async ({ page }) => {

    // navigate to the student Logi page

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    //login to the student portal

    let email_id: string = "abcdef@gmail.com";
    let pswd: string = "abcd@1234";

 await page.getByRole("textbox", {name:"email"}).fill(email_id);
 await page.getByRole("textbox",{name:"password"}).fill(pswd);
 await page.getByRole("checkbox",{name:"remember"}).check();
 await page.waitForTimeout(2000);
await page.getByTestId("login-button").click();
await page.waitForTimeout(3000);

// validate The URL after login success and decode the url to get actual URL and print it in console

let page_URL: string = decodeURIComponent(page.url());
console.log(page_URL);

expect(page_URL).toContain(email_id);
console.log("Email ID is present in the URL");

expect(page_URL).toContain(pswd);
console.log("Password is present in the URL");
await page.waitForTimeout(3000);


});