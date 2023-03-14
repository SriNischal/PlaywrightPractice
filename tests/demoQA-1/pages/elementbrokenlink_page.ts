import { expect, Locator, Page } from "@playwright/test";
export default class elementsbrokenlink_page {
    readonly page: Page;
    readonly brokenlinksbtn: Locator;
    readonly brokenlinkstitle: Locator;
    readonly validimagetext: Locator;
    readonly validimage: Locator;
    readonly actualvalidimagepath: object;
    readonly brokenimagetext: Locator;
    readonly brokenimage: Locator;
    readonly actualbrokenimagepath: object;
    readonly validlinktext: Locator;
    readonly validlink : Locator
    readonly brokenlinktext : Locator;
    readonly brokenlink : Locator;
    readonly validimagecreated : Locator;

    constructor(page: Page,) {
        this.page = page;
        this.brokenlinksbtn = page.locator("//span[text()='Broken Links - Images']");
        this.brokenlinkstitle = page.locator("//div[text()='Broken Links - Images']");
        this.validimagetext = page.locator("//p[text()='Valid image']");
        this.validimage = page.locator("//div[contains(@class,'col-12 mt-4')]//img[1]");
        this.actualvalidimagepath = {path: "validimage.png"};
        this.validimagecreated = page.locator("//a[contains(text(),'Created')]");
        this.brokenimagetext = page.locator("//p[text()='Broken image']");
        this.brokenimage = page.locator("//img[@src='/images/Toolsqa_1.jpg']");
        this.actualbrokenimagepath = {path: "brokenimage.png"};
        this.validlinktext = page.locator("//p[text()='Valid Link']");
        this.validlink = page.locator("//a[contains(text(),'Click Here for Valid Link')]");
        this.brokenlinktext = page.locator("//p[text()='Broken Link']");
        this.brokenlink = page.locator("//a[contains(text(),'Click Here for Broken Link')]");
    }
    async clickbrokenlinkasimages() {
        await this.brokenlinksbtn.click();
    }
    async brokenlinkstext(){
        expect(this.brokenlinksbtn).toHaveText("Broken Links - Images");
        expect(this.brokenlinkstitle).toHaveText("Broken Links - Images");
    }
    async normalimagevalidation(){
        expect(this.validimagetext).toHaveText("Valid image");
        await this.page.waitForTimeout(5000);
        let actualimage = await this.validimage.screenshot(this.actualvalidimagepath);
        expect(actualimage).toMatchSnapshot('/elementbrokenlink.ts-snapshots/validimage.png');
        console.log("imagevalidated");
    }
    async brokenimgaevalidation(){
        expect(this.brokenimagetext).toHaveText("Broken image");
        let actualimage = await this.brokenimage.screenshot(this.actualbrokenimagepath);
        expect(actualimage).toMatchSnapshot('/elementbroken.spec.ts-snapshots/brokenimage.png');
        console.log("imagevalidated");
    }
    async validlinkvalidation(){
        expect(this.validlinktext).toHaveText("Valid Link");
        await this.validlink.click();
        expect(this.page).toHaveURL("https://demoqa.com/");
        console.log("URL validated")
        await this.page.goBack();
    }
    async brokenlinkvalidation(){
        expect(this.brokenlinktext).toHaveText("Broken Link");
        await this.brokenlink.click();
        expect(this.page).toHaveURL("http://the-internet.herokuapp.com/status_codes/500");
        console.log("URL validated");
    }
}