import { expect, Locator, Page } from "@playwright/test";
export default class sortable_page {
    readonly page: Page;
    readonly sortable: Locator;
    readonly sortabletext: Locator;
    readonly list: Locator;
    readonly grid: Locator;
    readonly listone: Locator;
    readonly target: Locator;
    readonly listvalues : Locator;
    readonly gridvalues : Locator;
    readonly gridone : Locator;
    readonly targetvalue : Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortable = page.locator("//span[text()='Sortable']");
        this.sortabletext = page.locator("//div[text()='Sortable']");
        this.list = page.locator("//a[text()='List']");
        this.grid = page.locator("//a[text()='Grid']");
        this.listone = page.locator("//div[@class='vertical-list-container mt-4']/div[text()='One']");
        this.target = page.locator("//div[@class='vertical-list-container mt-4']/div[text()='Six']");
        this.listvalues= page.locator("//div[@class='vertical-list-container mt-4']");
        this.gridvalues = page.locator("//div[@class='create-grid']");
        this.gridone = page.locator("//div[@class='create-grid']/div[text()='One']");
        this.targetvalue = page.locator("//div[@class='vertical-list-container mt-4']/div[text()='Six']");
    }

    async sortableclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.sortable.click();
    }
    async sortabletextvalidation(){
        expect(this.sortable).toHaveText("Sortable");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
          });
        expect(this.sortabletext).toHaveText("Sortable");
        
    }
    async listsorting(){
        const beforesorting = this.listvalues;
        console.log(await beforesorting.textContent());
        const one = this.listone;
        await one.hover();
        const boundingBox = await one.boundingBox();
        if (boundingBox) {
            const x = boundingBox.x;
            const y = boundingBox.y;
            const height = boundingBox.height;
            const width = boundingBox.width;
            console.log('The element is located at position:', "height" + height, "width" + width, "x" + x, "y" + y);
        } else {
            console.log('Unable to get the position of the element');
        }
        await this.page.mouse.down();
        await this.page.mouse.move(500, 414);
        await this.page.mouse.up();
        const aftersorting = this.listvalues;
        console.log(await aftersorting.textContent());
        await expect(aftersorting).toHaveText("TwoThreeOneFourFiveSix");
    }
    async gridclicking(){
        await this.grid.click();
        const beforesorting = this.gridvalues;
        console.log(await beforesorting.textContent());
    }
    async gridsorting(){
        const onevalue = this.gridone;
        await onevalue.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500, 414);
        await this.page.mouse.up();
        const aftersorting = this.gridvalues;
        console.log(await aftersorting.textContent());
    }
}