import { expect, Locator, Page } from "@playwright/test";
export default class elementsradiobtn_page {
    readonly page: Page;
    readonly radiobuttonbtn: Locator;
    readonly radiobuttontitle: Locator;
    readonly radiobuttonheading: Locator;
    readonly yesradiobtn: Locator;
    readonly radibtnmessage: Locator;
    readonly impressiveradiobtn: Locator;
    readonly noraddiobtn: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.radiobuttonbtn = page.locator("//span[text()='Radio Button']");
        this.radiobuttontitle = page.locator("//div[text()='Radio Button']");
        this.radiobuttonheading = page.locator("//div[text()='Do you like the site?']");
        this.yesradiobtn = page.locator("//label[text()='Yes']");
        this.radibtnmessage = page.locator("//p[@class='mt-3']");
        this.impressiveradiobtn = page.locator("//label[text()='Impressive']");
        this.noraddiobtn = page.locator("//label[text()='No']");

    }

    async clickingradiobtn() {
        await this.radiobuttonbtn.click();
    }
    async radiobtnvalidation() {
        expect(this.radiobuttonbtn).toHaveText("Radio Button");
        expect(this.radiobuttontitle).toHaveText("Radio Button");
        expect(this.radiobuttonheading).toHaveText("Do you like the site?");
    }
    async yesradiobutton() {
        await this.yesradiobtn.click();
        expect(this.radibtnmessage).toHaveText("You have selected Yes");
        await this.impressiveradiobtn.click();
        expect(this.radibtnmessage).toHaveText("You have selected Impressive");
    }
    async noradiobutton() {
        const no = await this.noraddiobtn.isDisabled();
        console.log(no);
    }
}