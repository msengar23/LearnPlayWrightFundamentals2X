import { test, expect } from '@playwright/test';


test('Verify hover on the menu AddOn and Select SubMenu', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

await page.getByTestId("nav-add-ons").hover();
await page.waitForTimeout(3000);
const allSubMenus = await page.locator("[data-testid='nav-add-ons'] .submenu .submenu-item").all();
console.log('Total no of SubMenus: ' + allSubMenus.length);

for (const SubMenuitem of allSubMenus) {
        const text = await SubMenuitem.innerText();
        console.log('Submenu item: '+ text);
}
       await page.getByTestId('test-id-Wifi').click();
       console.log("WiFi Page Clicked");

});