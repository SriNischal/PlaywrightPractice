import { expect, Locator, Page } from "@playwright/test";
export default class widgets_page {
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
        const widgets = this.widgets;
        console.log(widgets);
        const expectedwidgetstitle = "Widgets";
        console.log(expectedwidgetstitle);
        expect(widgets).toHaveText(expectedwidgetstitle);
        const widgetsheader = this.widgetsheader;
        console.log(widgetsheader);
        expect(widgetsheader).toHaveText(expectedwidgetstitle);
        const actualwidgetheader = this.actualwidgetheader;
        console.log(actualwidgetheader);
        const expectedwidgetheader = "Please select an item from left to start practice.";
        console.log(expectedwidgetheader);
        expect(actualwidgetheader).toHaveText(expectedwidgetheader);
    }

    
}
