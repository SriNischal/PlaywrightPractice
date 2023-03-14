import { expect, Locator, Page } from "@playwright/test";
export default class elementsbutton_page {
    readonly page: Page;
    readonly buttonsbtn: Locator;
    readonly buttonstitle: Locator;
    readonly doubleclickbutton: Locator;
    readonly actualdoubleclickbtnmessage: Locator;
    readonly rightclickbutton: Locator;
    readonly actualrightclickbuttonmessage: Locator;
    readonly clickmebutton: Locator;
    readonly actualclickmebuttonmessage: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.buttonsbtn = page.locator("//span[text()='Buttons']");
        this.buttonstitle = page.locator("//div[text()='Buttons']");
        this.doubleclickbutton = page.locator("//button[text()='Double Click Me']");
        this.actualdoubleclickbtnmessage = page.locator("//p[text()='You have done a double click']");
        this.rightclickbutton = page.locator("//button[text()='Right Click Me']");
        this.actualrightclickbuttonmessage = page.locator("//p[text()='You have done a right click']");
        this.clickmebutton = page.locator("//button[text()='Click Me']");
        this.actualclickmebuttonmessage = page.locator("//p[text()='You have done a dynamic click']");

    }
    async clickbuttons() {
        await this.buttonsbtn.click();
    }
    async validatebuttonstext() {
        expect(this.buttonsbtn).toHaveText("Buttons");
    }
    async validatebuttonheader() {
        expect(this.buttonstitle).toHaveText("Buttons");
    }
    async doubleclick() {
        await this.doubleclickbutton.dblclick();
    }
    async doubleclickmessage() {
        expect(this.actualdoubleclickbtnmessage).toHaveText("You have done a double click");
    }
    async rightclick() {
        await this.rightclickbutton.click({ button: "right" });
    }
    async rightclickmessage() {
        expect(this.actualrightclickbuttonmessage).toHaveText("You have done a right click");
    }
    async click() {
        await this.clickmebutton.click();
    }
    async clickmessage() {
        expect(this.actualclickmebuttonmessage).toHaveText("You have done a dynamic click");
    }
}