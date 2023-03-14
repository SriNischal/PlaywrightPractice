import { expect, Locator, Page } from "@playwright/test";
export default class dragabble_page {
    readonly page: Page;
    readonly dragabble: Locator;
    readonly dragabbletext: Locator;
    readonly simple : Locator;
    readonly axis : Locator;
    readonly container : Locator;
    readonly cursor : Locator;
    readonly dragme : Locator;
    readonly onlyx : Locator;
    readonly onlyy :Locator;
    readonly contained : Locator;
    readonly containedbox : Locator;
    readonly containedtext : Locator;
    readonly containedparent : Locator;
    readonly center : Locator;
    readonly left : Locator;
    readonly bottom : Locator;

    constructor(page: Page) {
        this.page = page;
        this.dragabble = page.locator("//span[text()='Dragabble']");
        this.dragabbletext = page.locator("//div[text()='Dragabble']");
        this.simple = page.locator("//a[text()='Simple']");
        this.axis = page.locator("//a[text()='Axis Restricted']");
        this.container = page.locator("//a[text()='Container Restricted']");
        this.cursor = page.locator("//a[text()='Cursor Style']");
        this.dragme = page.locator("//div[text()='Drag me']");
        this.onlyx = page.locator("//div[text()='Only X']");
        this.onlyy = page.locator("//div[text()='Only Y']");
        this.contained = page.locator("//div[@id='containmentWrapper']");
        this.containedbox = page.locator("//div[@class='draggable ui-widget-content ui-draggable ui-draggable-handle']");
        this.containedtext = page.locator("//div[@class='draggable ui-widget-content m-3']");
        this.containedparent = page.locator("//span[@class='ui-widget-header ui-draggable ui-draggable-handle']");
        this.center = page.locator("//div[text()='I will always stick to the center']");
        this.left = page.locator("//div[@id='notGreedyDropBox']/p[text()='Dropped!']");
        this.bottom = page.locator("//span[text()='My cursor is at bottom']");
    }

    async dragabbleclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.dragabble.click();
        await this.dragabble.click();
    }
    async dragabbletextvalidation(){
        expect(this.dragabble).toHaveText("Dragabble");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
          });
        expect(this.dragabbletext).toHaveText("Dragabble");
    }
    async simpledrag(){
        await this.dragme.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,414);
        await this.page.mouse.up();
    }
    async axisdrag(){
        await this.axis.click();
        await this.onlyx.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(800,0);
        await this.page.mouse.up();
        await this.onlyy.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(0,800);
        await this.page.mouse.up();
    }
    async containderdrag(){
        await this.container.click();
        await this.containedbox.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,400);
        await this.page.mouse.up();
        await this.containedparent.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,400);
        await this.page.mouse.up();
    }

    async cursordrag(){
        await this.cursor.click();
        await this.center.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,400);
        await this.page.mouse.up();
        await this.left.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,400);
        await this.page.mouse.up();
        await this.bottom.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(500,400);
        await this.page.mouse.up();
        
    }
}