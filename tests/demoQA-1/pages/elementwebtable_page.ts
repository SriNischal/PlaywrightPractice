import { expect, Locator, Page } from "@playwright/test";
export default class elementswebtable_page {
    readonly page: Page;
    readonly webtablesbtn: Locator;
    readonly webtablestitle: Locator;
    readonly add: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly registeremail: Locator;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;
    readonly submit: Locator;
    readonly editusers: Locator;
    readonly searchbox: Locator;
    readonly searchiconvalue: Locator;
    readonly deleteuser: Locator;
    readonly addeduser: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.webtablesbtn = page.locator("//span[text()='Web Tables']");
        this.webtablestitle = page.locator("//div[text()='Web Tables']");
        this.add = page.locator("//button[text()='Add']");
        this.addeduser = page.locator("(//div[@class='rt-tr -even'])[2]");
        this.firstname = page.locator("//input[@id='firstName']");
        this.lastname = page.locator("//input[@id='lastName']");
        this.registeremail = page.locator("//input[@id='userEmail']");
        this.age = page.locator("//input[@id='age']");
        this.salary = page.locator("//input[@id='salary']");
        this.department = page.locator("//input[@id='department']");
        this.submit = page.locator("//button[@id='submit']");
        this.editusers = page.locator("//span[@id='edit-record-4']");
        this.searchbox = page.locator("//input[@id='searchBox']");
        this.searchiconvalue = page.locator("//span[@id='basic-addon2']");
        this.deleteuser = page.locator("//span[@id='delete-record-4']");
    }
    async clickdynamictable() {
        await this.webtablesbtn.click();
    }
    async dynamictabletextvalidation() {
        expect(this.webtablesbtn).toHaveText("Web Tables");
        expect(this.webtablestitle).toHaveText("Web Tables");
    }
    async adduser() {
        await this.add.click();
        await this.firstname.fill("Sri");
        await this.lastname.fill("Nischal");
        await this.registeremail.fill("sri@example.com");
        await this.age.fill("25");
        await this.salary.fill("20000");
        await this.department.fill("IT");
        await this.submit.click();
        expect(this.addeduser).toHaveText("SriNischal25sri@example.com20000IT ");
    }
    async edituser() {
        await this.editusers.click();
        await this.age.fill("26");
        await this.submit.click();
        expect(this.addeduser).toHaveText("SriNischal26sri@example.com20000IT ");
    }
    async searchicon() {
        await this.searchbox.fill("Sri");
        await this.searchiconvalue.click();
        expect(this.addeduser).toHaveText("SriNischal26sri@example.com20000IT ");
        
    }
    async deleteusers() {
        await this.deleteuser.click();
        console.log("deleted record");
    }
}