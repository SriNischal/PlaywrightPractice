import { expect, Locator, Page } from "@playwright/test";
export default class widgettabs_page {
    readonly page: Page;
    readonly tabsbtn: Locator;
    readonly tabsheader: Locator;
    readonly tabsfirstheader: Locator;
    readonly origin: Locator;
    readonly use: Locator;
    readonly firsttabcontent: Locator;
    readonly secondtabcontent: Locator;
    readonly thirdtabcontent: Locator;
    readonly more : Locator;

    constructor(page: Page,) {
        this.page = page;
        this.tabsbtn = page.locator("//span[text()='Tabs']");
        this.tabsheader = page.locator("//div[text()='Tabs']");
        this.tabsfirstheader = page.locator("//div[text()='Details about Lorem Ipsum']");
        this.origin = page.locator("//a[@id='demo-tab-origin']");
        this.use = page.locator("//a[@id='demo-tab-use']");
        this.firsttabcontent = page.locator("(//p[@class='mt-3'])[1]");
        this.secondtabcontent = page.locator("(//p[@class='mt-3'])[2]");
        this.thirdtabcontent = page.locator("(//p[@class='mt-3'])[3]");
        this.more = page.locator("//a[@id='demo-tab-more']");
    }
    async clicktabs() {
        await this.tabsbtn.click();
    }
    async tabstextvalidation(){
        expect(this.tabsbtn).toHaveText("Tabs");
        expect(this.tabsheader).toHaveText("Tabs");
    }
    async headervalidation(){
        expect(this.tabsfirstheader).toHaveText("Details about Lorem Ipsum");
    }
    async whatsubheader(){
        const what = await this.firsttabcontent.isVisible();
        console.log(what);
    }
    async originsubheader(){
        await this.origin.click();
        const origin = await this.secondtabcontent.isVisible();
        console.log(origin);
    }
    async usesubheader(){
        await this.use.click();
        const use = await this.thirdtabcontent.isVisible();
        console.log(use);
    }
    async moresubheader(){
        await this.more.isDisabled();
    }
}