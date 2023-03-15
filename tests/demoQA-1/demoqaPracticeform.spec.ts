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
    await page.setViewportSize({ width: 1920, height: 1080 });
    homePage = new HomePage(page);
    support = new Support();
    await homePage.baseURL();
});

test("Verification of Practice Form DemoQA", async () => {
    await homePage.clickFormBtn();
    await expect(page).toHaveURL(support.practiceFormUrl)
    await homePage.fillFields();
    await homePage.clicksubmitbtn();
    expect(await page.locator(homePage.formLocators.formcontent).isVisible()).toBeTruthy();
})

test.afterAll(async () => {
    await browser.close();
})
