import { expect, Locator, Page } from "@playwright/test";
export default class widgettoolbar_page {
    readonly page: Page;
    readonly tooltipbtn: Locator;
    readonly tooltipheader: Locator;
    readonly tooltipfirstheader: Locator;
    readonly hovermetosee: Locator;
    readonly hovertoseemetooltip: Locator;
    readonly hovertoseemesearchtooltip: Locator;
    readonly hovertoseemesearch: Locator;
    readonly contrarytext: Locator;
    readonly contrary : Locator;
    readonly datetext : Locator;
    readonly datetooltip : Locator;

    constructor(page: Page) {
        this.page = page;
        this.tooltipbtn = page.locator("//span[text()='Tool Tips']");
        this.tooltipheader = page.locator("//div[text()='Tool Tips']");
        this.tooltipfirstheader = page.locator("//p[text()='Practice Tool Tips']");
        this.hovermetosee = page.locator("//button[@id='toolTipButton']");
        this.hovertoseemetooltip = page.locator("//div[text()='You hovered over the Button']");
        this.hovertoseemesearchtooltip = page.locator("//div[text()='You hovered over the text field']");
        this.hovertoseemesearch = page.locator("//input[@placeholder='Hover me to see']");
        this.contrarytext = page.locator("(//div[text()='You hovered over the Contrary']");
        this.contrary = page.locator("//a[text()='Contrary']");
        this.datetext = page.locator("//a[text()='1.10.32']");
        this.datetooltip = page.locator("//div[text()='You hovered over the 1.10.32']");
    }
    async clicktooltips() {
        await this.tooltipbtn.click();
    }
    async tooltipstextvalidation(){
        expect(this.tooltipbtn).toHaveText("Tool Tips");
        expect(this.tooltipheader).toHaveText("Tool Tips");
    }
    async headervaldiation(){
        expect(this.tooltipfirstheader).toHaveText("Practice Tool Tips");
    }
    async hovermetoseetooltip(){
        await this.hovermetosee.hover();
        expect(this.hovertoseemetooltip).toHaveText("You hovered over the Button");
    }
    async hovertomesearchtooltip(){
        await this.hovertoseemesearch.hover();
        expect(this.hovertoseemesearchtooltip).toHaveText("You hovered over the text field");
    }
    async contrarytooltip(){
        await this.contrary.hover();
        expect(this.contrary).toHaveText("You hovered over the Contrary");
    }
    async datetooltipvalidation(){
        await this.datetext.hover();
        expect(this.datetooltip).toHaveText("You hovered over the 1.10.32");
    }
}