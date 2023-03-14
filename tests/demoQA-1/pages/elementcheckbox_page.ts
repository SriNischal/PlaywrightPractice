import { expect, Locator, Page } from "@playwright/test";
export default class elementscheckbox_page {
    readonly page: Page;
    readonly checkboxbtn: Locator;
    readonly checkboxtitle: Locator;
    readonly mainfoldercheckbox: Locator;
    readonly mainfoldercheckboxmessage: Locator;
    readonly checkboxexpandallbtn: Locator;
    readonly checkboxcollapseallbtn: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.checkboxbtn = page.locator("//span[text()='Check Box']");
        this.checkboxtitle = page.locator("//div[text()='Check Box']");
        this.mainfoldercheckbox = page.locator("//span[@class='rct-checkbox']");
        this.mainfoldercheckboxmessage = page.locator("//div[@id='result']");
        this.checkboxexpandallbtn = page.locator("//button[@aria-label='Expand all']");
        this.checkboxcollapseallbtn = page.locator("//button[@aria-label='Collapse all']");

    }

    async clickingcheckboxbtn() {
        await this.checkboxbtn.click();
    }
    async checkboxmessagevalidation() {
        expect(this.checkboxbtn).toHaveText("Check Box");
    }
    async checkboxtitlevalidation() {
        expect(this.checkboxtitle).toHaveText("Check Box");
    }
    async mainfoldercheckboxchecking() {
        await this.mainfoldercheckbox.check();
    }
    async mainfoldercheckboxvalidation() {
        const check = await this.mainfoldercheckbox.isChecked();
        console.log(check);
    }
    async mainfoldercheckboxmessagevalidation() {
        expect(this.mainfoldercheckboxmessage).toHaveText("You have selected :home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile");
    }
    async clickingexpandallbtn() {
        await this.checkboxexpandallbtn.click();
    }
    async clickingcollapseallbtn() {
        await this.checkboxcollapseallbtn.click();
    }
}