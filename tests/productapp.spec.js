import { beforeEach, describe, expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVAppLinkVerify, SocialVAppPlaystore, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

describe('ProductApp Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-971']").hover();
        await page.locator("//li[@id='menu-item-828']").click();
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto SocialV Link Verify", async ({ page }) => {
        const envantoSocialVLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/a[1]");
        await EnvantoSocialVAppLinkVerify(page, envantoSocialVLinkLocator);
    });

    test("Buy Now link verify", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoSocialVAppLinkVerify(page, buyNowLinkLocator);
    });

    test("View Demo", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("NetworkUA", async ({ page }) => {
        const profileFriendsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await profileFriendsLinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            profileFriendsLinkLocator.click()
        ])
        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.network.ua");
    });

    test("Cafetoday", async ({ page }) => {
        const profileFriendsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/a[1]");
        await profileFriendsLinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            profileFriendsLinkLocator.click()
        ])
        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.cafetoday.app&pli=1");
    });

    test("Explore SocialV App", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 2", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 3", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 4", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 5", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[5]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 6", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[6]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 7", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[7]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 8", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[8]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Explore SocialV App 9", async ({ page }) => {
        const playstoreLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[9]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await playstoreLocator.scrollIntoViewIfNeeded();
        await SocialVAppPlaystore(page, playstoreLocator);
    });

    test("Book a Quick call 2", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//div[@class='elementor-element elementor-element-00b1469 elementor-align-left elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
        await bookCallLinkLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Buy Now", async ({ page }) => {
        const envantoSocialVLinkLocator = page.locator("//a[contains(text(),'Buy Now')]");
        await envantoSocialVLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoSocialVAppLinkVerify(page, envantoSocialVLinkLocator);
    });

    test("Buy Service", async ({ page }) => {
        const profileFriendsLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
        await profileFriendsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://service.iqonic.design/services/socialv-flutter-app-with-wordpress-backend/";
        await CommonLinkVerify(page, profileFriendsLinkLocator, expectedLink);
    });
});