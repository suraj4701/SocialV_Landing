const { expect } = require('@playwright/test');

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/h1[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('IQONIC DESIGN');
    return newPage;
}

const UserWebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://socialv-wordpress.iqonic.design/login/");
    return newPage;
}

const BookcallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/socialv-demo");
    return newPage;
}

const EnvantoSocialVVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/collections/11255693-socialv-products");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'SocialV Products')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('SocialV Products');
    return newPage;
}

const EnvantoSocialVLinkVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('SocialV - Social Network and Community BuddyPress Theme');
    return newPage;
}

const EnvantoSocialVAppLinkVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('SocialV - Social Network Flutter App with BuddyPress (WordPress) Backend');
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe(link);
    return newPage;
}

const SocialVAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iconic.socialv");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'SocialV App')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('SocialV App');
    return newPage;
}

const SocialVAppAppStore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/socialv/id1641646237");
    const trustpilotLocator = newPage.locator("//header/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('SocialV');
    return newPage;
}

module.exports = { TrustpilotVerify, UserWebsiteVerify, BookcallVerify, EnvantoSocialVVerify, EnvantoSocialVLinkVerify, EnvantoSocialVAppLinkVerify, CommonLinkVerify, SocialVAppPlaystore, SocialVAppAppStore };