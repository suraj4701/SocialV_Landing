import { beforeEach, describe, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVVerify, SocialVAppAppStore, SocialVAppPlaystore, TrustpilotVerify } from './common';

const home_url = process.env.HOME_URL;

describe('WeDifferent Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/a[1]").click();
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto SocialV Verify", async ({ page }) => {
        const envantoSocialVLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/a[1]");
        await EnvantoSocialVVerify(page, envantoSocialVLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("SocialV App Playstore", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("SocialV App Appstore", async ({ page }) => {
        const appstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]");
        await appstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppAppStore(page, appstoreLocator);
    });

    test("Custom development work link verify", async ({ page }) => {
        const customDevWorkLinkLocator = page.locator("//a[contains(text(),'custom development work')]");
        await customDevWorkLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://iqonic.tech/";
        await CommonLinkVerify(page, customDevWorkLinkLocator, link);
    });
});