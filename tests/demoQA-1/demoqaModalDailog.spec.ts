import { chromium, expect, test, Page, Browser } from "@playwright/test";
import { Support } from "../../Utils/demoqaconstants";
import { HomePage } from "../../pageObjects/demoqaPage";

let page: Page;
let browser, context: any;
let homePage: HomePage;
let support: Support;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({ width: 1500, height: 1000 });
    homePage = new HomePage(page);
    support = new Support();
    await homePage.baseURL();  
});

test("Verification of ModalDailog in DemoQA", async () => {
    await homePage.clickAlertBtn();
    await homePage.clickModalBtn();
    expect(await page.locator(homePage.modalpage).textContent()).toEqual(support.modalText);
    await homePage.openModal('small');
    await homePage.openModal();
    await page.waitForTimeout(5000);
});