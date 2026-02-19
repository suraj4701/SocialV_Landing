import { beforeEach, describe, expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVVerify, TrustpilotVerify, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

describe('Home Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto Link Verify", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//img[@class='attachment-full size-full wp-image-1205']");
        await EnvantoSocialVVerify(page, buyNowLinkLocator);
    });

    test("User Website link verify", async ({ page }) => {
        const userWebsiteLinkLocator = page.locator("//div[@class='elementor-element elementor-element-26dfdb9 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
        await UserWebsiteVerify(page, userWebsiteLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Explore SocialV Web", async ({ page }) => {
        const exploreSocialVWebLinkLocator = page.locator("//span[contains(text(),'Explore SocialV Web')]");
        await exploreSocialVWebLinkLocator.scrollIntoViewIfNeeded();
        await exploreSocialVWebLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/product-web/");
    });

    test("Explore SocialV App", async ({ page }) => {
        const exploreSocialVAppLinkLocator = page.locator("//span[contains(text(),'Explore SocialV App')]");
        await exploreSocialVAppLinkLocator.scrollIntoViewIfNeeded();
        await exploreSocialVAppLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/product-app/");
    });

    test("Book a Demo call", async ({ page }) => {
        const bookDemoCallLinkLocator = page.locator("//span[contains(text(),'Talk to a Product Expert')]");
        await bookDemoCallLinkLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, bookDemoCallLinkLocator);
    });

    test("Learn More (Community)", async ({ page }) => {
        const learnMoreCommunityLinkLocator = page.locator("//a[@href='https://socialv.iqonic.design/use-cases-communities/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Learn More']");
        await learnMoreCommunityLinkLocator.scrollIntoViewIfNeeded();
        await learnMoreCommunityLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/use-cases-communities/");
    });

    test("Learn More (Courses)", async ({ page }) => {
        const learnMoreCoursesLinkLocator = page.locator("//a[@href='https://socialv.iqonic.design/use-cases-online-courses/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Learn More']");
        await learnMoreCoursesLinkLocator.scrollIntoViewIfNeeded();
        await learnMoreCoursesLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/use-cases-online-courses/");
    });

    test("Book a Demo call 2", async ({ page }) => {
        const bookDemoCall2LinkLocator = page.locator("//span[contains(text(),'Not sure if SocialV fits your business?')]");
        await bookDemoCall2LinkLocator.scrollIntoViewIfNeeded();
        await BookcallVerify(page, bookDemoCall2LinkLocator);
    });

    test("View Live Demo", async ({ page }) => {
        const viewLiveDemoLinkLocator = page.locator("//div[@class='elementor-element elementor-element-2167102 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
        await viewLiveDemoLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewLiveDemoLinkLocator);
    });

    test("View Pricing", async ({ page }) => {
        const viewPricingLinkLocator = page.locator("//span[contains(text(),'View Pricing')]");
        await viewPricingLinkLocator.scrollIntoViewIfNeeded();
        await viewPricingLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/pricing/");
    });

    test("View Live Demo 2", async ({ page }) => {
        const viewLiveDemo2LinkLocator = page.locator("//div[@class='elementor-element elementor-element-cb585e3 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button']//span[@class='elementor-button-text'][normalize-space()='View Live Demo']");
        await viewLiveDemo2LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewLiveDemo2LinkLocator);
    });

    test("View Live Demo 3", async ({ page }) => {
        const viewLiveDemo3LinkLocator = page.locator("//div[@class='elementor-element elementor-element-dd6a8c5 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button']//span[@class='elementor-button-text'][normalize-space()='View Live Demo']");
        await viewLiveDemo3LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewLiveDemo3LinkLocator);
    });

    test("Trustpilot link verify 2", async ({ page }) => {
        const trustpilotLinkLocator2 = page.locator("//img[@class='attachment-full size-full wp-image-7924']");
        await trustpilotLinkLocator2.scrollIntoViewIfNeeded();
        await TrustpilotVerify(page, trustpilotLinkLocator2);
    });

    test("Buy Now", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//div[@class='elementor-element elementor-element-ced8ebc elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@class='elementor-button elementor-button-link elementor-size-sm']");
        await buyNowLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoSocialVVerify(page, buyNowLinkLocator);
    });

    test("View Demo", async ({ page }) => {
        const viewDemoLinkLocator = page.locator("//span[contains(text(),'View Demo')]");
        await viewDemoLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewDemoLinkLocator);
    });

    test("Facebook link verify", async ({ page }) => {
        const facebookLinkLocator = page.locator("//i[@class='fab fa-facebook']");
        await facebookLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://www.facebook.com/iqonicdesign";
        await CommonLinkVerify(page, facebookLinkLocator, link);
    });

    test("Instagram link verify", async ({ page }) => {
        const instagramLinkLocator = page.locator("//i[@class='fab fa-instagram']");
        await instagramLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://www.instagram.com/iqonicdesign/";
        await CommonLinkVerify(page, instagramLinkLocator, link);
    });

    test("YouTube link verify", async ({ page }) => {
        const youtubeLinkLocator = page.locator("//a[@class='elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-b2b13b2']");
        await youtubeLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://www.youtube.com/c/IqonicDesign";
        await CommonLinkVerify(page, youtubeLinkLocator, link);
    });

    test("LinkedIn link verify", async ({ page }) => {
        const linkedInLinkLocator = page.locator("//i[@class='fab fa-linkedin']");
        await linkedInLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://in.linkedin.com/company/iqonicdesign";
        await CommonLinkVerify(page, linkedInLinkLocator, link);
    });

    test("Footer Why We're Different", async ({ page }) => {
        const whyDifferentLinkLocator = page.locator("//a[@href='https://socialv.iqonic.design/why-we-are-different/']//span[@class='elementor-icon-list-text']");
        await whyDifferentLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/why-we-are-different/";
        await CommonLinkVerify(page, whyDifferentLinkLocator, link);
    });

    test("Footer Community", async ({ page }) => {
        const communityLinkLocator = page.locator("//a[@href='https://socialv.iqonic.design/use-cases-communities/']//span[@class='elementor-icon-list-text'][normalize-space()='Community']");
        await communityLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/use-cases-communities/";
        await CommonLinkVerify(page, communityLinkLocator, link);
    });

    test("Footer Courses", async ({ page }) => {
        const coursesLinkLocator = page.locator("//span[normalize-space()='Courses']");
        await coursesLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/use-cases-online-courses/";
        await CommonLinkVerify(page, coursesLinkLocator, link);
    });

    test("Footer SocialV / Buddyboss", async ({ page }) => {
        const socialVBuddybossLinkLocator = page.locator("//span[normalize-space()='SocialV / Buddyboss']");
        await socialVBuddybossLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/socialv-vs-buddyboss/";
        await CommonLinkVerify(page, socialVBuddybossLinkLocator, link);
    });

    test("Footer SocialV / Kajabi", async ({ page }) => {
        const socialVKajabiLinkLocator = page.locator("//span[normalize-space()='SocialV / Kajabi']");
        await socialVKajabiLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/socialv-vs-kajabi/";
        await CommonLinkVerify(page, socialVKajabiLinkLocator, link);
    });

    test("Footer WordPress Web", async ({ page }) => {
        const wordpressWebLinkLocator = page.locator("//span[normalize-space()='WordPress Web']");
        await wordpressWebLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/product-web/";
        await CommonLinkVerify(page, wordpressWebLinkLocator, link);
    });

    test("Footer Mobile App", async ({ page }) => {
        const mobileAppLinkLocator = page.locator("//span[normalize-space()='Mobile App']");
        await mobileAppLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/product-app/";
        await CommonLinkVerify(page, mobileAppLinkLocator, link);
    });

    test("Footer Admin Template", async ({ page }) => {
        const adminTemplateLinkLocator = page.locator("//span[normalize-space()='Admin Template']");
        await adminTemplateLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://templates.iqonic.design/socialv-dist/intro/index.html";
        await CommonLinkVerify(page, adminTemplateLinkLocator, link);
    });

    test("Footer Pricing", async ({ page }) => {
        const pricingLinkLocator = page.locator("//a[@href='https://socialv.iqonic.design/pricing/']//span[@class='elementor-icon-list-text'][normalize-space()='Pricing']");
        await pricingLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/pricing/";
        await CommonLinkVerify(page, pricingLinkLocator, link);
    });

    test("Footer Blog", async ({ page }) => {
        const blogLinkLocator = page.locator("//span[normalize-space()='Blog']");
        await blogLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.design/blog-category/socialv/";
        await CommonLinkVerify(page, blogLinkLocator, expectedLink);
    });

    test("Footer Docs", async ({ page }) => {
        const docsLinkLocator = page.locator("//span[normalize-space()='Docs']");
        await docsLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://assets.iqonic.design/documentation/wordpress/socialv-doc/index.html";
        await CommonLinkVerify(page, docsLinkLocator, link);
    });

    test("Footer Video Tutorial", async ({ page }) => {
        const videoTutorialLinkLocator = page.locator("//span[normalize-space()='Video Tutorial']");
        await videoTutorialLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://socialv.iqonic.design/socialv-tutorial/";
        await CommonLinkVerify(page, videoTutorialLinkLocator, link);
    });

    test("Footer Get a Quote", async ({ page }) => {
        const getQuoteLinkLocator = page.locator("//span[normalize-space()='Get a Qoute']");
        await getQuoteLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://iqonic.tech/software-development-cost-calculator/";
        await CommonLinkVerify(page, getQuoteLinkLocator, link);
    });

    test("Footer Hire Us", async ({ page }) => {
        const hireUsLinkLocator = page.locator("//span[normalize-space()='Hire Us']");
        await hireUsLinkLocator.scrollIntoViewIfNeeded();
        const link = "https://iqonic.tech/";
        await CommonLinkVerify(page, hireUsLinkLocator, link);
    });
});