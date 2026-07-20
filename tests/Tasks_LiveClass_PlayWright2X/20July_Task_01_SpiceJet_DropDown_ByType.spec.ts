

import { test, expect } from '@playwright/test';



test('Test Spice Jet input location from and to', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");
    //await page.pause();

    await page.getByTestId('to-testID-origin').getByRole('textbox').fill("De");
    await page.locator('div').filter({ hasText: /^Delhi$/ }).first().click();
   
     //await page.pause();

    await page.getByTestId('to-testID-destination').getByRole('textbox').fill("ban");
    await page.locator('div').filter({ hasText: /^Bengaluru$/ }).first().click();
   

    
     //await page.pause();
});



