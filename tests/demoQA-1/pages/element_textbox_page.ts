import { expect, Locator, Page } from "@playwright/test";
export default class elementstextbox_page {
    readonly page: Page;
    readonly actualtextbox: Locator;
    readonly textboxfullname: Locator;
    readonly textboxemail: Locator;
    readonly textboxaddress: Locator;
    readonly textboxpermanentaddress: Locator;
    readonly submitbtn: Locator;
    readonly actualname: Locator;
    readonly actualemail: Locator;
    readonly actualcurrentaddress: Locator;
    readonly actualpermanentaddress: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.actualtextbox = page.locator("//span[text()='Text Box']");
        this.textboxfullname = page.locator("//input[@placeholder='Full Name']");
        this.textboxemail = page.locator("//input[@placeholder='name@example.com']");
        this.textboxaddress = page.locator("//textarea[@placeholder='Current Address']");
        this.textboxpermanentaddress = page.locator("//label[text()='Permanent Address']/following::textarea");
        this.submitbtn = page.locator("//button[@class='btn btn-primary']");
        this.actualname = page.locator("//p[text()='Name:']");
        this.actualemail = page.locator("//p[text()='Email:']");
        this.actualcurrentaddress = page.locator("//p[text()='Current Address :']");
        this.actualpermanentaddress = page.locator("//p[text()='Permananet Address :']");
    }

    async textboxclicking() {
        await this.actualtextbox.click();
    }
    async textboxmessagevalidation() {
        expect(this.actualtextbox).toHaveText("Text Box")
    }
    async enterfullname() {
        await this.textboxfullname.fill("Sri Nischal");
    }
    async enteremail() {
        await this.textboxemail.fill("sri@gmail.com");
    }
    async enteraddress() {
        await this.textboxaddress.fill("Hyderabad, Telangana");
    }
    async enterpermanentaddress() {
        await this.textboxpermanentaddress.fill("Hyderabad, Telangana");
    }
    async submitbuttonclicking() {
        await this.submitbtn.click();
    }
    async fullnamevalidation() {
        expect(this.actualname).toHaveText("Sri Nischal");
    }
    async emailvalidation() {
        expect(this.actualemail).toHaveText("sri@gmail.com");
    }
    async currentaddressvalidation() {
        expect(this.actualcurrentaddress).toHaveText("Hyderabad, Telangana");
    }
    async permananetaddressvalidation() {
        expect(this.actualpermanentaddress).toHaveText("Hyderabad, Telangana");
    }
}