import { chromium, expect, test, Page, Browser } from "@playwright/test";
import { Support } from "../../Utils/demoqaconstants";
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
});

test("Verification of Aletrs in DemoQA", async () => {
    await homePage.baseURL();
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


// test("Verification Confirm Alert in dimiss", async () => {
   
//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.dismiss();
//         const alerttitle = await page.locator('#confirmResult').textContent();
//         expect(alerttitle).toEqual("You selected Cancel")
//         console.log(alerttitle)
//     });
//     await page.locator("#confirmButton").click()
//     await page.waitForTimeout(5000);

// });
// test("Verification Prompt Alert in DemoQA", async () => {
//     await page.locator("#promtButton").click()
//     await page.waitForTimeout(5000);
//     page.on('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept('suprith');
//     });
    
// });


test.afterAll(async () => {
    await browser.close();
})