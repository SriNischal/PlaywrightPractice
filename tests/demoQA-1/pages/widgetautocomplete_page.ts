import { expect, Locator, Page } from "@playwright/test";
let colors = ["blue", "yellow", "black", "violet"];
export default class widgetautocomplete_page {
    readonly page: Page;
    readonly autocompletes: Locator;
    readonly autocompleteheader: Locator;
    readonly autocompletefirstheading: Locator;
    readonly autocompletesecondheading: Locator;
    readonly singlecolor: Locator;
    readonly multiplecolors: Locator;
    readonly singlecolorvalue : Locator;
    readonly multicolorvalues : Locator;

    constructor(page: Page,) {
        this.page = page;
        this.autocompletes = page.locator("//span[text()='Auto Complete']");
        this.autocompleteheader = page.locator("//div[text()='Auto Complete']");
        this.autocompletefirstheading = page.locator("//span[text()='Type multiple color names']");
        this.autocompletesecondheading = page.locator("//span[text()='Type single color name']");
        this.singlecolor = page.locator("//div[@class='auto-complete__value-container css-1hwfws3']");
        this.multiplecolors = page.locator("//input[@id='autoCompleteMultipleInput']");
        this.singlecolorvalue = page.locator("//div[@class='auto-complete__single-value css-1uccc91-singleValue']");
        this.multicolorvalues = page.locator("//div[@class='css-1rhbuit-multiValue auto-complete__multi-value']");
    }
    async autocomplete() {
        await this.autocompletes.click();
        expect(this.autocompletes).toHaveText("Auto Complete");
        expect(this.autocompleteheader).toHaveText("Auto Complete")
    }
    async autocompleteheaders() {
        expect(this.autocompletefirstheading).toHaveText("Type multiple color names");
        expect(this.autocompletesecondheading).toHaveText("Type single color name");
    }
    async singlecolorvalidation(){
        const singlecolor = this.singlecolor;
        await singlecolor.click();
        await singlecolor.type("blue");
        await singlecolor.press("Enter");
        expect(this.singlecolorvalue).toHaveText("blue");
    }
    async multicolorvalidation(){
        const multicolor = this.multiplecolors;
        await multicolor.click();
        for (const color of colors) {
            await multicolor.type(color);
            await multicolor.press("Enter");
            expect(this.multicolorvalues.filter({hasText : color})).toHaveText(color);
        }
    }
}