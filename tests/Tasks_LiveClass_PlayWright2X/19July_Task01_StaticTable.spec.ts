import { test, expect } from '@playwright/test';

test('find the country of the person', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    let name: string = "Yoshi Tannamuri";

    let country = await page
        .locator('[data-testid="companies-table"] tr')
        .filter({ hasText: name })
        .locator('[data-col="country"]')
        .innerText();

    console.log(`Country of Yoshi is ${country}`);
    //await page.pause()
})


