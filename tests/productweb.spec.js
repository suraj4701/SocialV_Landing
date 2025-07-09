import { beforeEach, describe, expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoSocialVLinkVerify, TrustpilotVerify, UserWebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

describe('Products Web Page Link Verifications', () => {
    beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-971']").hover();
        await page.locator("//li[@id='menu-item-829']").click();
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto SocialV Link Verify", async ({ page }) => {
        const envantoSocialVLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/a[1]");
        await EnvantoSocialVLinkVerify(page, envantoSocialVLinkLocator);
    });

    test("Buy Now link verify", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoSocialVLinkVerify(page, buyNowLinkLocator);
    });

    test("View Demo link verify", async ({ page }) => {
        const viewDemoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[6]/div[2]/div[1]/div[1]/a[1]");
        await UserWebsiteVerify(page, viewDemoLinkLocator);
    });

    test("Book a Quick call link verify", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Check Demo link verify", async ({ page }) => {
        const checkDemoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[3]/div[1]/div[1]/a[1]");
        await checkDemoLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, checkDemoLinkLocator);
    });

    test("Home link verify", async ({ page }) => {
        const homeLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await homeLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, homeLinkLocator);
    });

    test("Newsfeed link verify", async ({ page }) => {
        const newsfeedLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await newsfeedLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, newsfeedLinkLocator);
    });

    test("Groups link verify", async ({ page }) => {
        const groupsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await groupsLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, groupsLinkLocator);
    });

    test("Members link verify", async ({ page }) => {
        const membersLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await membersLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, membersLinkLocator);
    });

    test("Badges link verify", async ({ page }) => {
        const badgesLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await badgesLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, badgesLinkLocator);
    });

    test("Forums link verify", async ({ page }) => {
        const forumsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await forumsLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, forumsLinkLocator);
    });

    test("Forums Single link verify", async ({ page }) => {
        const forumsSingleLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await forumsSingleLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, forumsSingleLinkLocator);
    });

    test("Topic Single link verify", async ({ page }) => {
        const topicSingleLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await topicSingleLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, topicSingleLinkLocator);
    });

    test("Profile Timeline link verify", async ({ page }) => {
        const profileTimelineLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileTimelineLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, profileTimelineLinkLocator);
    });

    test("About User link verify", async ({ page }) => {
        const aboutUserLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await aboutUserLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/profile/";
        await CommonLinkVerify(page, aboutUserLinkLocator, expectedLink);
    });

    test("Profile Friends link verify", async ({ page }) => {
        const profileFriendsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileFriendsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/friends/";
        await CommonLinkVerify(page, profileFriendsLinkLocator, expectedLink);
    });

    test("Profile Groups link verify", async ({ page }) => {
        const profileGroupsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileGroupsLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, profileGroupsLinkLocator);
    });

    test("Profile Badges link verify", async ({ page }) => {
        const profileBadgesLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileBadgesLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/badges/";
        await CommonLinkVerify(page, profileBadgesLinkLocator, expectedLink);
    });

    test("Profile Forums link verify", async ({ page }) => {
        const profileForumsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileForumsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/forums/";
        await CommonLinkVerify(page, profileForumsLinkLocator, expectedLink);
    });

    test("Profile Media link verify", async ({ page }) => {
        const profileMediaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await profileMediaLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/media/";
        await CommonLinkVerify(page, profileMediaLinkLocator, expectedLink);
    });

    test("Notifications link verify", async ({ page }) => {
        const notificationsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await notificationsLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, notificationsLinkLocator);
    });

    test("Rank link verify", async ({ page }) => {
        const rankLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await rankLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/ranks/";
        await CommonLinkVerify(page, rankLinkLocator, expectedLink);
    });

    test("Points link verify", async ({ page }) => {
        const pointsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await pointsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/members/marvin/points/";
        await CommonLinkVerify(page, pointsLinkLocator, expectedLink);
    });

    test("Settings link verify", async ({ page }) => {
        const settingsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await settingsLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, settingsLinkLocator);
    });

    test("Messages link verify", async ({ page }) => {
        const messagesLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[2]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await messagesLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, messagesLinkLocator);
    });

    test("Block User List link verify", async ({ page }) => {
        const blockUserListLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[3]/div[1]/div[1]/div[1]/figure[1]/a[1]");
        await blockUserListLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, blockUserListLinkLocator);
    });

    test("Explore Community link verify", async ({ page }) => {
        const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
        await learnbtnLinkLocator.scrollIntoViewIfNeeded();
        await learnbtnLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/use-cases-communities/");
    });

    test("Explore Courses link verify", async ({ page }) => {
        const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/a[1]");
        await learnbtnLinkLocator.scrollIntoViewIfNeeded();
        await learnbtnLinkLocator.click();
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://socialv.iqonic.design/use-cases-online-courses/");
    });

    test("Talk to a Product Expert link verify", async ({ page }) => {
        const talkToExpertLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await BookcallVerify(page, talkToExpertLinkLocator);
    });

    test("View Live Demo link verify", async ({ page }) => {
        const viewLiveDemoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await viewLiveDemoLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewLiveDemoLinkLocator);
    });

    test("Explore SocialV Web link verify", async ({ page }) => {
        const exploreSocialVWebLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialVWebLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialVWebLinkLocator);
    });

    test("Explore SocialV link verify", async ({ page }) => {
        const exploreSocialVLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialVLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialVLinkLocator);
    });

    test("Explore SocialV 2 link verify", async ({ page }) => {
        const exploreSocialV2LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV2LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV2LinkLocator);
    });

    test("Explore SocialV 3 link verify", async ({ page }) => {
        const exploreSocialV3LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV3LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV3LinkLocator);
    });

    test("Explore SocialV 4 link verify", async ({ page }) => {
        const exploreSocialV4LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[8]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV4LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV4LinkLocator);
    });

    test("Explore SocialV 5 link verify", async ({ page }) => {
        const exploreSocialV5LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[9]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV5LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV5LinkLocator);
    });

    test("Explore SocialV 6 link verify", async ({ page }) => {
        const exploreSocialV6LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[10]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV6LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV6LinkLocator);
    });

    test("View Tutorials link verify", async ({ page }) => {
        const viewTutorialsLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[11]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await viewTutorialsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://www.youtube.com/playlist?list=PLSPY71mRbPj_SExAh4HzdLp8up_lwkvbX";
        await CommonLinkVerify(page, viewTutorialsLinkLocator, expectedLink);
    });

    test("Visit Store link verify", async ({ page }) => {
        const visitStoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[12]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await visitStoreLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, visitStoreLinkLocator);
    });

    test("Explore More link verify", async ({ page }) => {
        const exploreMoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[13]/div[1]/div[6]/div[1]/div[1]/a[1]");
        await exploreMoreLinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreMoreLinkLocator);
    });

    test("Explore SocialV 7 link verify", async ({ page }) => {
        const exploreSocialV7LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[14]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV7LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV7LinkLocator);
    });

    test("Explore SocialV Web 2 link verify", async ({ page }) => {
        const exploreSocialVWeb2LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[15]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialVWeb2LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialVWeb2LinkLocator);
    });

    test("Explore SocialV 8 link verify", async ({ page }) => {
        const exploreSocialV8LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[16]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await exploreSocialV8LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, exploreSocialV8LinkLocator);
    });

    test("View Demo 2 link verify", async ({ page }) => {
        const viewDemo2LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[18]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await viewDemo2LinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://socialv-wordpress.iqonic.design/pricing-plan/";
        await CommonLinkVerify(page, viewDemo2LinkLocator, expectedLink);
    });

    test("View Demo 3 link verify", async ({ page }) => {
        const viewDemo3LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[18]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/a[1]");
        await viewDemo3LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewDemo3LinkLocator);
    });

    test("View Live Demo 2 link verify", async ({ page }) => {
        const viewLiveDemo2LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[20]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
        await viewLiveDemo2LinkLocator.scrollIntoViewIfNeeded();
        await UserWebsiteVerify(page, viewLiveDemo2LinkLocator);
    });
});