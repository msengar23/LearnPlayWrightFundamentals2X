
import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

        const bannerCloseBtn: Locator = page.locator('.pf-v6-c-banner, .pf-v5-c-banner, .pf-v6-c-alert, .pf-v5-c-alert').getByRole('button', { name: 'Close' });

        if (await bannerCloseBtn.isVisible()) {
            await bannerCloseBtn.click();
        }
    });


     test('scroll to view', async ({ page }) => {
        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you

        
        await page.locator("div.pf-v6-c-multiple-file-upload__upload").scrollIntoViewIfNeeded();
        //await page.waitForTimeout(40000);
         await page.locator("div.pf-v6-c-multiple-file-upload__upload").click();

await page.waitForTimeout(40000);
    test('locate FileUpload and upload', async ({ page }) => {

await page.waitForTimeout(40000);

        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is jpeg file')
            },
            {
                name: 'file2.png',
                mimeType: 'image/png',
                buffer: Buffer.from('this is png file')
            }

            ]);

        await page.locator(".pf-v6-c-button.pf-m-secondary").click();



        await page.waitForTimeout(15000);


    });
        });

});