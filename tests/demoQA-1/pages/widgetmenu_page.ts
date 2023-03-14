import { expect, Locator, Page } from "@playwright/test";
export default class widgetmenu_page {
    readonly page: Page;
    readonly menubtn: Locator;
    readonly menuheader: Locator;
    readonly mainmenu1: Locator;
    readonly mainmenu2: Locator;
    readonly mainmenu3: Locator;
    readonly subsublist: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.menubtn = page.locator("//span[text()='Menu']");
        this.menuheader = page.locator("//div[text()='Menu']");
        this.mainmenu1 = page.locator("//a[text()='Main Item 1']");
        this.mainmenu2 = page.locator("//a[text()='Main Item 2']");
        this.mainmenu3 = page.locator("//a[text()='Main Item 3']");
        this.subsublist = page.locator("//a[text()='SUB SUB LIST »']");
    }
    async clickmenu() {
        await this.menubtn.click();
    }
    async menutextvalidation(){
        expect(this.menubtn).toHaveText("Menu");
    }
    async menuheadervalidation(){
        expect(this.menuheader).toHaveText("Menu");
    }
    async mainitemsvalidation(){
        expect(this.mainmenu1).toHaveText("Main Item 1");
        expect(this.mainmenu2).toHaveText("Main Item 2");
        expect(this.mainmenu3).toHaveText("Main Item 3");
    }
    async sublistvalidation(){
        await this.mainmenu2.hover();
        expect(this.subsublist).toHaveText("SUB SUB LIST »");
        await this.subsublist.hover();
    }
}