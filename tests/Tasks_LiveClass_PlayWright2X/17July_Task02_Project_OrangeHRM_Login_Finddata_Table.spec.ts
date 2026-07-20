import { test, expect } from '@playwright/test';


test('To Validate Login fo Orange HRM as admin', async ({ page }) => {

    // navigate to the student Logi page

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    //login to the Orange HRM admin portal 

    let email_id: string = "admin";
    let pswd: string = "Awesomeqa@4321";

});

