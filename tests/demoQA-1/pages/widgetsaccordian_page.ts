import { expect, Locator, Page } from "@playwright/test";
export default class widgetaccordian_page {
    readonly page: Page;
    readonly accordians: Locator;
    readonly accourdiantext: Locator;
    readonly firstheading: Locator;
    readonly firstheadingcontent: Locator;
    readonly secondheading: Locator;
    readonly secondheadingcontent: Locator;
    readonly thirdheading: Locator;
    readonly thirdheadingcontent: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.accordians = page.locator("//span[text()='Accordian']");
        this.accourdiantext = page.locator("//div[text()='Accordian']");
        this.firstheading = page.locator("//div[@id='section1Heading']");
        this.firstheadingcontent = page.locator("//div[@id='section1Content']");
        this.secondheading = page.locator("//div[@id='section2Heading']");
        this.secondheadingcontent = page.locator("//div[@id='section2Content']");
        this.thirdheading = page.locator("//div[@id='section3Heading']");
        this.thirdheadingcontent = page.locator("//div[@id='section3Content']");


    }
    async clickaccordian() {
        await this.accordians.click();
    }
    async accordiantextvalidation(){
        expect(this.accordians).toHaveText("Accordian");
        expect(this.accourdiantext).toHaveText("Accordian");
    }
    async clickfirstheading() {
        await this.firstheading.click();
    }
    async firstheadingtextvalidation(){
        expect(this.firstheading).toHaveText("What is Lorem Ipsum?");
        const firstcontent = await this.firstheadingcontent.isVisible();
        console.log(firstcontent);
    }
    async clicksecondgheading(){
        await this.secondheading.click();
    }
    async secondheadingtextvalidation(){
        expect(this.secondheading).toHaveText("Where does it come from?");
        const secondcontent = await this.secondheadingcontent.isVisible();
        console.log(secondcontent);
    }
    async clickthirdheading(){
        await this.thirdheading.click();
    }
    async thirdheadingtextvalidation(){
        expect(this.thirdheading).toHaveText("Why do we use it?");
        const thirdcontent = await this.thirdheadingcontent.isVisible();
        console.log(thirdcontent);
    }
}