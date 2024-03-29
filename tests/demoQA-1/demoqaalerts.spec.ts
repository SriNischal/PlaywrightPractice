import { chromium, expect, test, Page, Browser } from "@playwright/test";
import { Support } from "../../utils/demoqaconstants";
import { HomePage } from "../../PageObjects/demoqaPage";

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

test("Verification of Aletrs in DemoQA", async () => {
    await homePage.clickAlertWindowBtn();
    await homePage.clickAlertBtn();
    await homePage.clickToSeeAlert();
    await homePage.clickSeeAlrtbtn();   
    await page.waitForTimeout(4000);
});

test("Verification Timer Alert in DemoQA", async () => {
    await homePage.clickTimerAltbtn();
    await page.waitForTimeout(7000);
    await homePage.clickToSeeAlert();
});


test("Verification Confirm Alert in dimiss", async () => {
   
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
        const alerttitle = await page.locator(homePage.confirmtextcontent).textContent();
        expect(alerttitle).toEqual(support.confimText)
        console.log(alerttitle)
    });
    await page.locator(homePage.confirmbtn).click()
    await page.waitForTimeout(5000);

});
test("Verification Prompt Alert in DemoQA", async () => {
    await page.locator(homePage.promtbtn).click()
    await page.waitForTimeout(5000);
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept(support.promptmsg);
    });
    
});


test.afterAll(async () => {
    await browser.close();
})