import { expect, Locator, Page } from "@playwright/test";
export default class widget_page {
    readonly page: Page;
    readonly widgets: Locator;
    readonly widgetsheader: Locator;
    readonly actualwidgetheader: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.widgets = page.locator("//span/div/div[text()='Widgets']");
        this.widgetsheader = page.locator("//div/div/div[text()='Widgets']");
        this.actualwidgetheader = page.locator("//div[text()='Please select an item from left to start practice.']");


    }
    async clickwidgets() {
        await this.widgets.click();
        await this.widgets.click();
    }
    async validatewidgettext() {
        expect(this.widgets).toHaveText("Widgets");
        expect(this.widgetsheader).toHaveText("Widgets");
        expect(this.actualwidgetheader).toHaveText("Please select an item from left to start practice.")
    }

    
}
