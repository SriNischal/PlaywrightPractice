import { expect, Locator, Page } from "@playwright/test";
export default class resizable_page {
    readonly page: Page;
    readonly resizable: Locator;
    readonly resizabletext: Locator;
    readonly firstresize: Locator;
    readonly secondresize: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resizable = page.locator("//span[text()='Resizable']");
        this.resizabletext = page.locator("//div[@class='pattern-backgound playgound-header']/div[text()='Resizable']");
        this.firstresize = page.locator("(//span[@class='react-resizable-handle react-resizable-handle-se'])[1]");
        this.secondresize = page.locator("//div[@id='resizable']/div[text()='Resizable']");

    }

    async resizablesclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
        });
        await this.resizable.click();
        await this.resizable.click();
    }
    async resizabletextvalidation() {
        expect(this.resizable).toHaveText("Resizable");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
        });
        expect(this.resizabletext).toHaveText("Resizable");
    }
    async firstboxresize() {
        await this.firstresize.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500, 414);
        await this.page.mouse.up();
    }
    async secondboxresize(){
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
        });
        await this.secondresize.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,500);
        await this.page.mouse.up();
    }
}