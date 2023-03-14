import { expect, Locator, Page } from "@playwright/test";
export default class widgetslider_page {
    readonly page: Page;
    readonly sliderbtn: Locator;
    readonly sliderheader: Locator;
    readonly sliders: Locator;
    readonly slidernumber: Locator;
    readonly slidervalue: Locator;
    actualvalue: any;
    actual: any;

    constructor(page: Page,) {
        this.page = page;
        this.sliderbtn = page.locator("//span[text()='Slider']");
        this.sliderheader = page.locator("//div[text()='Slider']");
        this.sliders = page.locator("//input[@class='range-slider range-slider--primary']");
        this.slidernumber = page.locator("//div[@class='range-slider__tooltip__label']");
        this.slidervalue = page.locator("//input[@id='sliderValue']");
    }

    async clickslider() {
        await this.sliderbtn.click();
    }
    async slidertextvalidation(){
        expect(this.sliderbtn).toHaveText("Slider");
        expect(this.sliderheader,"Slider");
    }
    async slidertooltipvalidation(){
        const slider = this.sliders;
        slider.hover();
        expect(this.slidernumber).toHaveText("25");
    }
    async slidervaluevalidation(){
        expect(this.slidervalue).toHaveText("25");
    }
    async moveslider(){
        const slider = this.sliders;
        const element = this.sliders;
        await this.sliders.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(600, 300);
        await this.page.mouse.up();
        const value = await element.inputValue();
        console.log(value);
        slider.hover();
        expect(this.slidernumber).toHaveText("52");
        expect(this.slidervalue).toHaveText("52");
    }
}
