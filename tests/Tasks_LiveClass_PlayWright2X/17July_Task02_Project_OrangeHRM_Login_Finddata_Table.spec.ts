import { test, expect } from '@playwright/test';


test('To Validate Login for Orange HRM as admin and found terminated Employee', async ({ page }) => {

    // navigate to the hrm login page

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    //login to the Orange HRM admin portal 

    let userName = "admin";
    let pswd = "Awesomeqa@4321";

      let userNameField = page.getByPlaceholder('username');
    let passwordField = page.getByPlaceholder('password');
    let loginButton = page.locator(".orangehrm-login-button");

    await userNameField.fill(userName);
    await passwordField.fill(pswd);
    await loginButton.click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");

    await expect(page.locator(".oxd-table-body")).toBeVisible();

    const rows = page.locator('.oxd-table-body .oxd-table-row');
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(0); // Ensure there are rows in the table
    console.log("Row Count:" , rowCount);

//await page.pause();

    // playwith nth index starting from 0 to rowCount - 1

    for (let i = 0; i < rowCount; i++) {
        const rowData = await rows.nth(i).locator('.oxd-table-cell').allInnerTexts();
        if (rowData.includes('Terminated')) 
            {
            console.log(`First Terminated Employee's Data found in Row ${i + 1}:`, rowData);

            await page.locator('//i[@class="oxd-icon bi-trash"]').nth(i).hover();
                   await page.locator('//i[@class="oxd-icon bi-trash"]').nth(i).click();
                   await page.waitForTimeout(5000);

                   page.getByRole("button",{name: " No, Cancel "} ).click();
                   
                   
            //await page.pause();
            break; 
            
          
           }
    
    }


    //await page.pause();
    

});



