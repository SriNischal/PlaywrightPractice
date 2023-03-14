import { expect, test, Page } from "@playwright/test";
import { HomePage } from "../../pageObjects/loginPage";
import Constants from "../../Utils/loginconstants.json";


let page: Page;
let browser, context: any;
let homePage: HomePage;
// let support: Support;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    homePage = new HomePage(page);
    homePage = new HomePage(page);
    await homePage.baseURL();
});

test("Verification of Login Functionality Form DemoQA", async () => {
    await homePage.clickBookStoreMenuBtn();
    await homePage.clickLoginModuleBtn();
    await page.waitForSelector(homePage.loginLocators.loginpagecontainer);
    await homePage.clickElement('button', 'New User',);
    await page.waitForSelector(homePage.regestrationPageLocator.registerpagecontainer);
    await homePage.fillFields();
    await homePage.clickElement('button', 'Register');
    await homePage.verifyAlertMsg();
    await homePage.clickElement('button', 'Back to Login');
    await page.waitForSelector(homePage.loginLocators.loginpagecontainer);
    await homePage.fillLoginFields();
    await page.waitForSelector(homePage.loginLocators.profilePageContainer);
    await homePage.clickElement('button', 'Go To Book Store');
    await page.waitForSelector(homePage.profilePageLocator.bookStoreContainer);
    await homePage.bookStoreFields();
    await page.waitForTimeout(2000);
    await page.waitForSelector(homePage.loginLocators.loginpagecontainer);
    await homePage.fillLoginFields();
    await page.waitForSelector(homePage.loginLocators.profilePageContainer);
    await homePage.deleteAllBooks();
    await page.waitForTimeout(3000);

    
});

test.afterAll(async () => {
    await page.close();
});



