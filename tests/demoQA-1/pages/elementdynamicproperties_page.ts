import { expect, Locator, Page } from "@playwright/test";
export default class elementsdynamicproperties_page {
    readonly page: Page;
    readonly dynamicpropertiesbtn: Locator;
    readonly dynamicpropertiestitle: Locator;
    readonly visibleafter: string;
    readonly colorchannge: Locator;
    readonly enableafter: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.dynamicpropertiesbtn = page.locator("//span[text()='Dynamic Properties']");
        this.dynamicpropertiestitle = page.locator("//div[text()='Dynamic Properties']");
        this.visibleafter = "//button[text()='Visible After 5 Seconds']";
        this.colorchannge = page.locator("//button[text()='Color Change']");
        this.enableafter = page.locator("//button[text()='Will enable 5 seconds']");

    }
    async clickdynamicproperties() {
        await this.dynamicpropertiesbtn.click();

    }
    async dynamicpropertiestextvalidation() {
        expect(this.dynamicpropertiesbtn).toHaveText("Dynamic Properties");
        expect(this.dynamicpropertiestitle).toHaveText("Dynamic Properties");
    }
    async waitforvisiblecolorchange() {
        await this.page.waitForSelector(this.visibleafter);
        const btn = this.colorchannge;
        const color = await btn.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(color);
        expect(color).toBe("rgb(220, 53, 69)");
    }
    async visibletextvalidation() {
        expect(this.page.locator(this.visibleafter)).toHaveText("Visible After 5 Seconds");
    }

}