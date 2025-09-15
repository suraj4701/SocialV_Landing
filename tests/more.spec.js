import { describe, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVVerify } from './common';
const home_url = process.env.HOME_URL;

describe('More Page Link Verifications', () => {
    test("Hire Us", async ({ page }) => {
        await page.goto(home_url);
        const ondemandLocator = page.locator("//li[@id='menu-item-981']")
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, ondemandLocator, expectedLink);
    })

    test("Book Demo Call", async ({ page }) => {
        await page.goto(home_url);
        const ondemandLocator = page.locator("//li[@id='menu-item-9335']")
        await BookcallVerify(page, ondemandLocator);
    });

    test("Live Demo", async ({ page }) => {
        await page.goto(home_url);
        const ondemandLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]")
        const expectedLink = "https://socialv-wordpress.iqonic.design/login/";
        await CommonLinkVerify(page, ondemandLocator, expectedLink);
    });

    test("Buy Now", async ({ page }) => {
        await page.goto(home_url);
        const blogLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await EnvantoSocialVVerify(page, blogLinkLocator);
    });
});