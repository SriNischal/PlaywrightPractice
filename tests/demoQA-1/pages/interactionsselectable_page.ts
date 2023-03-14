import { expect, Locator, Page } from "@playwright/test";
export default class selectable_page {
    readonly page: Page;
    readonly selectable: Locator;
    readonly selectabletext: Locator;
    readonly list: Locator;
    readonly cras : Locator;
    readonly dapibus : Locator;
    readonly morbi : Locator;
    readonly grid : Locator;
    readonly one : Locator;
    readonly two : Locator;
    readonly eight : Locator;
    readonly nine : Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectable = page.locator("//span[text()='Selectable']");
        this.selectabletext = page.locator("//div[text()='Selectable']");
        this.list = page.locator("//a[text()='List']");
        this.cras = page.locator("//li[text()='Cras justo odio']");
        this.dapibus = page.locator("//li[text()='Dapibus ac facilisis in']");
        this.morbi = page.locator("//li[text()='Morbi leo risus']");
        this.grid = page.locator("//a[text()='Grid']");
        this.one = page.locator("//li[text()='One']");
        this.two = page.locator("//li[text()='Two']");
        this.eight = page.locator("//li[text()='Eight']");
        this.nine = page.locator("//li[text()='Nine']");
    }

    async selectableclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.selectable.click();
        await this.selectable.click();
    }
    async selectabletextvalidation(){
        expect(this.selectable).toHaveText("Selectable");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
          });
        expect(this.selectabletext).toHaveText("Selectable");
    }
    async selectlist(){
        await this.cras.click();
        await this.dapibus.click();
        await this.morbi.click();
        expect(this.cras).toHaveText("Cras justo odio");
        expect(this.dapibus).toHaveText("Dapibus ac facilisis in");
        expect(this.morbi).toHaveText("Morbi leo risus");
        const carscolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(carscolor);
        const dapibuscolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(dapibuscolor);
        const morbicolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(morbicolor);
        expect(carscolor).toBe("rgb(33, 37, 41)");
        expect(dapibuscolor).toBe("rgb(33, 37, 41)");
        expect(morbicolor).toBe("rgb(33, 37, 41)");
        }
    async selectgrid(){
        await this.grid.click();
        await this.one.click();
        await this.two.click();
        await this.eight.click();
        await this.nine.click();
        expect(this.one).toHaveText("One");
        expect(this.eight).toHaveText("Eight");
        expect(this.nine).toHaveText("Nine");
        const onecolor = await this.one.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(onecolor);
        const eightcolor = await this.eight.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(eightcolor);
        const ninecolor = await this.nine.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(ninecolor);
        expect(onecolor).toBe("rgb(33, 37, 41)");
        expect(eightcolor).toBe("rgb(33, 37, 41)");
        expect(ninecolor).toBe("rgb(33, 37, 41)");
        }
    async deselectlist(){
        await this.cras.click();
        await this.dapibus.click();
        await this.morbi.click();
        expect(this.cras).toHaveText("Cras justo odio");
        expect(this.dapibus).toHaveText("Dapibus ac facilisis in");
        expect(this.morbi).toHaveText("Morbi leo risus");
        const carscolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(carscolor);
        const dapibuscolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(dapibuscolor);
        const morbicolor = await this.cras.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(morbicolor);
        expect(carscolor).toBe("rgb(33, 37, 41)");
        expect(dapibuscolor).toBe("rgb(33, 37, 41)");
        expect(morbicolor).toBe("rgb(33, 37, 41)");
    }
    async deselectgrid(){
        await this.grid.click();
        await this.one.click();
        await this.two.click();
        await this.eight.click();
        await this.nine.click();
        expect(this.one).toHaveText("One");
        expect(this.eight).toHaveText("Eight");
        expect(this.nine).toHaveText("Nine");
        const onecolor = await this.one.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(onecolor);
        const eightcolor = await this.eight.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(eightcolor);
        const ninecolor = await this.nine.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(ninecolor);
        expect(onecolor).toBe("rgb(33, 37, 41)");
        expect(eightcolor).toBe("rgb(33, 37, 41)");
        expect(ninecolor).toBe("rgb(33, 37, 41)");
    }
}