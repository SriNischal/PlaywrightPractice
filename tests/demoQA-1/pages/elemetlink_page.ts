import { expect, Locator, Page } from "@playwright/test";
export default class elementslink_page {
    readonly page: Page;
    readonly linkbtn: Locator;
    readonly linktitle: Locator;
    readonly actualfirstheader: Locator;
    readonly actualsecondheader: Locator;
    readonly simplelink: Locator;
    readonly dynamiclink: Locator;
    readonly createdapicall: Locator;
    readonly actualapicallmessage: Locator;
    readonly nocontentapicall: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.linkbtn = page.locator("//span[text()='Links']");
        this.linktitle = page.locator("//div[text()='Links']");
        this.actualfirstheader = page.locator("//strong[text()='Following links will open new tab']");
        this.actualsecondheader = page.locator("//strong[text()='Following links will send an api call']");
        this.simplelink = page.locator("//a[@id='simpleLink']");
        this.dynamiclink = page.locator("//a[@id='dynamicLink']");
        this.createdapicall = page.locator("//a[contains(text(),'Created')]");
        this.actualapicallmessage = page.locator("//a[contains(text(),'No Content')]");
        this.nocontentapicall = page.locator("//p[@id='linkResponse']");

    }

    async clicklinks() {
        await this.linkbtn.click();
    }
    async validatelinkstext() {
        expect(this.linkbtn).toHaveText("Links");
        expect(this.linktitle).toHaveText("Links");

    }
    async validatelinkheaders() {
        expect(this.actualfirstheader).toHaveText("Following links will open new tab");
        expect(this.actualsecondheader).toHaveText("Following links will send an api call");
    }
    async clicksimplelink() {
        await this.simplelink.click();
    }
    async urlvalidation() {
        expect(this.page).toHaveURL("https://demoqa.com/");
        console.log("URL validated");
    }
    async clickdynamiclink() {
        await this.dynamiclink.click();
    }
    async firstapicall() {
        await this.createdapicall.click();
        expect(this.actualapicallmessage).toHaveText("Link has responded with staus 201 and status text Created");
        console.log("API call validated");
    }
    async secondapicall() {
        await this.nocontentapicall.click();
        expect(this.actualapicallmessage).toHaveText("Link has responded with staus 204 and status text No Content");
        console.log("API call validated");
    }
}