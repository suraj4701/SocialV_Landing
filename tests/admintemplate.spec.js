import { expect, test } from '@playwright/test';
const home_url = process.env.HOME_URL;

test("Admin Template", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-971']").hover();
    const hireus = page.locator("//li[@id='menu-item-6924']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        hireus.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://templates.iqonic.design/socialv-dist/intro/index.html");
})
