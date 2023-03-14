import { expect, Locator, Page } from "@playwright/test";
export default class elements_page {
    readonly page: Page;
    readonly elementbtn: Locator;
    readonly actualelementtitle: Locator;
    readonly actualelementheader: Locator;
    constructor(page: Page,) {
        this.page = page;
        this.elementbtn = page.locator("//span/div/div[text()='Elements']");
        this.actualelementtitle = page.locator("//div/div/div[text()='Elements']");
        this.actualelementheader = page.locator("//div[text()='Please select an item from left to start practice.']");

    }
    async clickelements() {
        await this.elementbtn.click();
        await this.elementbtn.click();
    }
    async elementsmessagevaldiation() {
        expect(this.elementbtn).toHaveText("Elements");
    }

    async elementURLvalidation() {
        expect(this.page).toHaveURL("https://demoqa.com/elements");
        console.log('expectedURL validated');
    }
    async elementtitlevalidation() {
        expect(this.actualelementtitle).toHaveText("Elements");
    }
    async elementheadervalidation() {
        expect(this.actualelementheader).toHaveText("Please select an item from left to start practice.");
    }
}
