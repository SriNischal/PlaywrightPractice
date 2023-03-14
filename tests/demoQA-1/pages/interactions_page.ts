import { expect, Locator, Page } from "@playwright/test";
export default class interactions_page {
    readonly page: Page;
    readonly interactions: Locator;
    readonly interactiontext: Locator;
    readonly interactonsheader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.interactions = page.locator("//span/div/div[text()='Interactions']");
        this.interactiontext = page.locator("//div/div/div[text()='Interactions']");
        this.interactonsheader = page.locator("//div[text()='Please select an item from left to start practice.']");
    }

    async interactionsclicking() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await this.interactions.click();
        await this.interactions.click();
    }
    async interactionstextvalidation(){
        expect(this.interactions).toHaveText("Interactions");
        await this.page.evaluate(() => {
            window.scrollTo(500, 0);
          });
        expect(this.interactiontext).toHaveText("Interactions");
        expect(this.interactonsheader).toHaveText('Please select an item from left to start practice.');
    }
}