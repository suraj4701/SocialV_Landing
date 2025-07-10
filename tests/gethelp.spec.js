import { beforeEach, describe, expect, test } from '@playwright/test';
import { CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

describe('Get Help Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-974']").hover();
    });

    test("Documentation", async ({ page }) => {
        const ondemandLocator = page.locator("//li[@id='menu-item-1031']")
        const expectedLink = "https://assets.iqonic.design/documentation/wordpress/socialv-doc/index.html";
        await CommonLinkVerify(page, ondemandLocator, expectedLink);
    })

    test("Video Tutorial", async ({ page }) => {
        const ondemandLocator = page.locator("//li[@id='menu-item-1398']")
        const expectedLink = "https://socialv.iqonic.design/socialv-tutorial/";
        await CommonLinkVerify(page, ondemandLocator, expectedLink);
    });

    test("Support", async ({ page }) => {
        const ondemandLocator = page.locator("//li[@id='menu-item-976']")
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, ondemandLocator, expectedLink);
    });

    test("Blog", async ({ page }) => {
        const blogLinkLocator = page.locator("//li[@id='menu-item-977']");
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            blogLinkLocator.click()
        ]);
        const newPageUrl = newPage.url();
        const urlObject = new URL(newPageUrl);
        const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
        expect(urlWithoutQueryParams).toBe("https://iqonic.design/blog-category/socialv/");
    });
});