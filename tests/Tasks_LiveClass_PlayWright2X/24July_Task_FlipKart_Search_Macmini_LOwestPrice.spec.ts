import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart Search via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    })

    test('TC#1 @smoke @regression', async ({ page }) => {

        await page.getByPlaceholder('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
         await svgElements.first().click();
        await page.waitForTimeout(2000);

        
        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

        console.log("Count:" + await titleResults.count());
        for (const title of await titleResults.all()) {
             console.log("Title:", await title.textContent());
        }

        //await page.pause();
        const prices_Macmini = page.locator("//div[contains(text(),'₹')]");
       console.log('Available_Count_Of_Price:' + await prices_Macmini.count());

    const allPrices = await prices_Macmini.allTextContents();
    let cheapest = Infinity;
    let cheapestText = '';

    for (const price of allPrices) {
        const numericPrice = parseInt(price.replace(/[₹,\s]/g, ''));
        console.log('Price:', price, '→', numericPrice);
        if (numericPrice < cheapest) {
            cheapest = numericPrice;
            cheapestText = price;
        }

        

    }

    const sortedPrices = allPrices
        .map(price => parseInt(price.replace(/[₹,\s]/g, '')))
        .sort((a, b) => a - b);  // ascending

     console.log('Sorted prices (ascending):', sortedPrices);

      // Cheapest is just the first after ascending sort:
     console.log(`Cheapest: ₹${sortedPrices[0].toLocaleString('en-IN')}`);

    });


});