
import { test, expect } from '@playwright/test';

test('Verify the WebTable element data', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    let rowData;
    
    while (true) {
        rowData = page.locator('[data-testid="employees-tbody"] tr').filter({ hasText: 'Mia Hoffmann' });

        //for  total rows with pagination

        if (await rowData.count()) {
            break;
        }

        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found");
        await next.click();
    }
    const email = await rowData.locator('td[data-col="email"]').innerText();
    console.log(`Email of Mia hoffman is ${email}`);



});
