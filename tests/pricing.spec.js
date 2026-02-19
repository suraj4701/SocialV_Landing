import { beforeEach, describe, expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVAppLinkVerify, EnvantoSocialVLinkVerify } from './common';
const home_url = process.env.HOME_URL;

describe('Pricing Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[3]/a[1]").click();
    });

    test.only("Buy Now", async ({ page }) => {
        const ondemandLocator = page.locator("//div[@class='elementor-element elementor-element-87ba3b7 elementor-widget elementor-widget-ha-pricing-table happy-addon ha-pricing-table']//a[@class='ha-pricing-table-btn'][normalize-space()='Buy Now']");
        await ondemandLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            ondemandLocator.click()
        ])
        const iqonicDesignSpanLocator = newPage.locator("//h1[@class='t-heading -color-inherit -size-l h-m0 is-hidden-phone']");
        const verifytext = await iqonicDesignSpanLocator.textContent();
        const normalizedText = (verifytext ?? '').replace(/\s+/g, ' ').trim();
        expect(normalizedText).toContain('SocialV 5.0 - Social Network & Community Admin Template (HTML, Vue, React JS, Laravel)');
    })

    test("Buy Now 2", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[1]");
        await buyNowLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoSocialVLinkVerify(page, buyNowLinkLocator);
    });

    test("Buy Now 3", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/a[1]");
        await buyNowLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoSocialVAppLinkVerify(page, buyNowLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//div[@class='elementor-element elementor-element-00b1469 elementor-align-left elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
        await bookCallLinkLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Hire Us", async ({ page }) => {
        const profileFriendsLinkLocator = page.locator("//span[@class='elementor-button-text'][normalize-space()='Hire Us']");
        await profileFriendsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, profileFriendsLinkLocator, expectedLink);
    });
});