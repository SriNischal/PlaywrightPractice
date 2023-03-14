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
test("Verification of frames in DemoQA", async () => {
    await homePage.baseURL();
    await homePage.clickFormBtn();
    await expect(page).toHaveURL(support.formsurl);
    await page.locator(homePage.alrtbtn).click();
    await page.locator(homePage.framebtn).click()
    const frameone = await homePage.getFirstFrame();
    const frametwo = await homePage.getsecondFrame();
    const fristFrame = page.frameLocator(frameone);
    const frameText = await fristFrame.locator(homePage.frameText).textContent();
    expect(frameText).toEqual(support.frametext); 
    const secondFrame = page.frameLocator(frametwo);
    const frameText2= await secondFrame.locator(homePage.frameText).textContent();
    expect(frameText2).toEqual(support.frametext);
    console.log(frameText);
    console.log(frameText2);

     });

    test.afterAll(async () => {
        await browser.close();
    })