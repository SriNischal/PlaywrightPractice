import { expect, Locator, Page } from "@playwright/test";
export default class droppable_page {
    readonly page: Page;
    readonly droppable: Locator;
    readonly droppabletext: Locator;
    readonly accept: Locator;
    readonly prevent : Locator;
    readonly revert : Locator;
    readonly simple : Locator;
    readonly  simpledragme : Locator;
    readonly simpledragto : Locator;
    readonly simpledropped : Locator;
    readonly acceptable : Locator;
    readonly notacceptable : Locator;
    readonly acceptdragto :Locator;
    readonly acceptdropped : Locator;
    readonly preventdragme : Locator;
    readonly preventouterdrag : Locator;
    readonly preventinnerdrag : Locator;
    readonly preventdropped : Locator;
    readonly willrevert : Locator;
    readonly notrevert : Locator;
    readonly reverdragto : Locator;
    readonly revertdropped : Locator;
    readonly preventdragto : Locator;

    constructor(page: Page) {
        this.page = page;
        this.droppable = page.locator("//span[text()='Droppable']");
        this.droppabletext = page.locator("//div[text()='Droppable']");
        this.accept = page.locator("//a[text()='Accept']");
        this.prevent = page.locator("//a[text()='Prevent Propogation']");
        this.revert = page.locator("//a[text()='Revert Draggable']");
        this.simple = page.locator("//a[text()='Simple']");
        this.simpledragme = page.locator("//div[text()='Drag me']");
        this.simpledragto = page.locator("//div[@id='simpleDropContainer']/div[@id='droppable']");
        this.simpledropped = page.locator("//p[text()='Dropped!']");
        this.acceptable = page.locator("//div[text()='Acceptable']");
        this.notacceptable = page.locator("//div[text()='Not  Acceptable']");
        this.acceptdragto = page.locator("//div[@id='acceptDropContainer']/div[@id='droppable']");
        this.acceptdropped = page.locator("//div[@id='acceptDropContainer']/div/p[text()='Dropped!']");
        this.preventdragme = page.locator("//div[text()='Drag Me']");
        this.preventouterdrag = page.locator("//div[@id='notGreedyDropBox']/p[text()='Outer droppable']");
        this.preventinnerdrag = page.locator("//p[text()='Inner droppable (not greedy)']");
        this.preventdropped = page.locator("//div[@id='notGreedyDropBox']/p[text()='Dropped!']");
        this.willrevert = page.locator("//div[text()='Will Revert']");
        this.notrevert = page.locator("//div[text()='Not Revert']");
        this.reverdragto = page.locator("//div[@id='revertableDropContainer']/div/p[text()='Drop here']");
        this.revertdropped = page.locator("//div[@id='revertableDropContainer']/div/p[text()='Dropped!']");
        this.preventdragto = page.locator("//div[@id='notGreedyDropBox']");
    }

    async droppableclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.droppable.click();
        await this.droppable.click();
    }
    async droppabletextvalidation(){
        expect(this.droppable).toHaveText("Droppable");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
          });
        expect(this.droppabletext).toHaveText("Droppable");
    }
    async simpledrag(){
        await this.simpledragme.hover();
        const target = this.simpledragto;
        await this.simpledragme.dragTo(target);
        await expect(this.simpledropped).toHaveText("Dropped!");
        const color = await target.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(color);
        expect(color).toBe("rgb(33, 37, 41)");
    }
    async acceptdrag(){
        await this.accept.click();
        await this.acceptable.hover();
        const target = this.acceptdragto;
        await this.acceptable.dragTo(target);
        await this.notacceptable.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(800,400);
        await this.page.mouse.up();
        await expect(this.acceptdropped).toHaveText("Dropped!");
        const color = await target.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(color);
        expect(color).toBe("rgb(33, 37, 41)");
    }
    async preventdrag(){
        await this.prevent.click();
        await this.preventdragme.hover();
        const outertarget = this.preventouterdrag;
        await this.preventdragme.dragTo(outertarget);
        await this.preventdragme.hover();
        const innertarget = this.preventinnerdrag;
        await this.preventdragme.dragTo(innertarget);
        const target = this.preventdragto;
        await expect(this.preventdropped).toHaveText("Dropped!");
         const color = await target.evaluate((ele) => {
             return window.getComputedStyle(ele).getPropertyValue("color")
         });
         console.log(color);
         expect(color).toBe("rgb(33, 37, 41)");
    }

    async revertdrag(){
        await this.revert.click();
        await this.willrevert.hover();
        const wiitarget = this.reverdragto;
        await this.willrevert.dragTo(wiitarget);
        await this.notrevert.hover();
        const nottarget = this.revertdropped;
        await this.notrevert.dragTo(nottarget);
        await expect(this.acceptdropped).toHaveText("Dropped!");
        const color = await nottarget.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(color);
        expect(color).toBe("rgb(33, 37, 41)");
    }
}