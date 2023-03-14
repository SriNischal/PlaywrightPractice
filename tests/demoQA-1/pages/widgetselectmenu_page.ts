import { expect, Locator, Page } from "@playwright/test";
let dropdowncolors = ["Green", "Blue", "Black", "Red"];
export default class widgetselectmenu_page {
    readonly page: Page;
    readonly selectmenubtn: Locator;
    readonly selectmenuheader: Locator;
    readonly selectoption: Locator;
    readonly selecttitle: Locator;
    readonly oldstyleselectmenu: Locator;
    readonly multiselectdropdown: Locator;
    readonly standardmultiselect : Locator;

    constructor(page: Page,) {
        this.page = page;
        this.selectmenubtn = page.locator("//span[text()='Select Menu']");
        this.selectmenuheader = page.locator("//div[text()='Select Menu']");
        this.selectoption = page.locator("(//div[@class=' css-1hwfws3'])[1]");
        this.selecttitle = page.locator("(//div[@class=' css-1hwfws3'])[2]");
        this.oldstyleselectmenu = page.locator("//select[@id='oldSelectMenu']");
        this.multiselectdropdown = page.locator("(//div[@class=' css-1hwfws3'])[3]");
        this.standardmultiselect = page.locator("//select[@id='cars']");
    }
    async clickselectmenu() {
        await this.selectmenubtn.click();
    }
    async menutextvalidation(){
        expect(this.selectmenubtn).toHaveText("Menu");
        expect(this.selectmenuheader).toHaveText("Menu");
    }
    async selectvalue(){
        const value = this.selectoption;
        await value.click();
        await value.type("Group 1, option 1");
        await value.press("Enter");
        expect(this.page.locator('option[selected="selected"]')).toHaveText('Group 1, option 1');
    }
    async selectone(){
        const title = this.selecttitle;
        await title.click();
        await title.type("Mr.");
        await title.press("Enter");
        expect(this.page.locator('option[selected="selected"]')).toHaveText('Mr.');
    }
    async oldstyleselectmenudropdown(){
        const color = this.oldstyleselectmenu;
        await color.click();
        await color.selectOption({
            value: "10"
        });
        expect(this.page.locator('option[selected="selected"]')).toHaveText('Aqua');
    }
    async multiselect(){
        const colors = this.multiselectdropdown;
        await colors.click();
        for (const color of dropdowncolors) {
            await colors.type(color);
            await colors.press("Enter");
        }
        expect(this.multiselectdropdown).toHaveText(['GreenBlueBlackRed']);
    }
    async standardselect(){
        const car = this.standardmultiselect;
        await car.click();
        await this.page.keyboard.press("Control");
        await car.selectOption(['Volvo', 'Saab', 'Opel', 'Audi']);
        expect(this.standardmultiselect).toHaveText("VolvoSaabOpelAudi");
        
    }
}