import { expect, Locator, Page } from "@playwright/test";
import Constants from "../Utils/loginconstants.json";

export class HomePage {
    readonly page: Page;
    readonly loginLocators: any;
    readonly regestrationPageLocator: any;
    readonly profilePageLocator:any;
    readonly deleteLocators:any;

    constructor(page: Page) {
        this.page = page;
        this.loginLocators = {
            bookstoremenubtn: `//div/h5[text()='Book Store Application']`,
            loginmodulebtn: '//span[text()="Login"]',
            loginpagecontainer: '.login-wrapper',
            userName: "#userName",
            password: "#password",
            loginBtn: "#login",
            profilePageContainer: '.profile-wrapper'
        }
        this.regestrationPageLocator = {
            firstName: "#firstname",
            lastName: "#lastname",
            userName: "#userName",
            password: "#password",
            captcha: '.recaptcha-checkbox-border',
            registerpagecontainer: "#userForm",
            backToLoginbtn: "#gotologin",
        }

        this.profilePageLocator = {
            bookStoreContainer: '.books-wrapper',
            bookStoreSearchBox :"#searchBox",
            bookName           : `//span[@id="see-book-Git Pocket Guide"]`,
            bookNameContainer : '.books-wrapper',
            addToYourCartbtn : `//button[text()='Add To Your Collection']`,
            logoutBtn  : "#submit",
            deleteAllBooks : `//div[@class='text-right button di']/button[text()='Delete All Books']`,
        }
        this.deleteLocators ={
                  deletePopupContainer :"#example-modal-sizes-title-sm",
                  deleteBtn : "#closeSmallModal-ok",
        }
     
    }
    async baseURL() {
        await this.page.goto('/');
    }
    async clickBookStoreMenuBtn() {

        await this.page.locator(this.loginLocators.bookstoremenubtn).click();

    }
    async clickLoginModuleBtn() {
        await (await this.page.waitForSelector(this.loginLocators.loginmodulebtn)).waitForElementState("visible");
        await this.page.locator(this.loginLocators.loginmodulebtn).click();
        await this.page.waitForLoadState();
    }
    async fillFields() {
        await this.page.locator(this.regestrationPageLocator.firstName).type(Constants.Fname);
        await this.page.locator(this.regestrationPageLocator.lastName).type(Constants.Lname);
        await this.page.locator(this.regestrationPageLocator.userName).type(Constants.UserName);
        await this.page.locator(this.regestrationPageLocator.password).type(Constants.Password);
        await this.verificationOfCaptcha();
    }
    async verificationOfCaptcha() {
        let frame = this.page.frameLocator('[title="reCAPTCHA"]');
        await frame.locator(this.regestrationPageLocator.captcha).click();
    }
    async clickElement(role, elemntValue) {
        await this.page.getByRole(role, { name: elemntValue }).click();
       
    }
    async verifyAlertMsg() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
    }
    async fillLoginFields() {
        await this.page.locator(this.regestrationPageLocator.userName).type(Constants.UserName);
        await this.page.locator(this.regestrationPageLocator.password).type(Constants.Password);
        await this.page.locator(this.loginLocators.loginBtn).click();
    }
    async bookStoreFields(){
        await this.page.locator(this.profilePageLocator.bookStoreSearchBox).type(Constants.BookName);
        await this.page.locator(this.profilePageLocator.bookName).click();
        await this.page.waitForSelector(this.profilePageLocator.bookNameContainer);
        await this.page.locator(this.profilePageLocator.addToYourCartbtn).click();
        await this.page.locator(this.profilePageLocator.logoutBtn).click();

    }
    async deleteAllBooks(){
        await this.page.locator(this.profilePageLocator.deleteAllBooks).click();
        await this.page.waitForSelector(this.deleteLocators.deletePopupContainer);
        await this.page.locator(this.deleteLocators.deleteBtn).click();
        


    }
  
}

