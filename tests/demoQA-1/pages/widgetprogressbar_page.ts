import { expect, Locator, Page } from "@playwright/test";
export default class widgetprogressbar_page {
    readonly page: Page;
    readonly progressbtn: Locator;
    readonly progressheader: Locator;
    readonly progressbartext: Locator;
    readonly progressbars: Locator;
    readonly startbtn: Locator;
    readonly resetbtn: string;
    readonly progressbarsuccess: Locator;
    constructor(page: Page,) {
        this.page = page;
        this.progressbtn = page.locator("//span[text()='Progress Bar']");
        this.progressheader = page.locator("//div[@class='main-header']");
        this.progressbartext = page.locator("//div[@class='mb-3']");
        this.progressbars = page.locator("//div[@class='progress-bar bg-info']");
        this.startbtn = page.locator("//button[@id='startStopButton']");
        this.resetbtn = "//button[@id='resetButton']";
        this.progressbarsuccess = page.locator("//div[@aria-valuenow='100']");
    }
    async clickprogressbar() {
        await this.progressbtn.click();
    }
    async progressbartextvalidation(){
        expect(this.progressbtn).toHaveText("Progress Bar");
        expect(this.progressheader).toHaveText("Progress Bar");
        expect(this.progressbartext).toHaveText("Progress Bar");
    }
    async startprogressbar(){
        let progressbar = this.progressbars;
        let value = await progressbar.getAttribute("aria-valuenow");
        console.log(value);
        const start = this.startbtn;
        await start.click();
        setTimeout(() => {
            this.startbtn.click();
        }, 1000);
        console.log("clicked on stop button");
        await start.click();
    }
    async resetprogressbar(){
        const reset = await this.page.waitForSelector(this.resetbtn);
        const progressbarsuccess = this.progressbarsuccess;
        const value1 = await progressbarsuccess.getAttribute("aria-valuenow");
        console.log(value1);
        reset.isVisible();
        reset.click();
    }
}