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
test("Verification of Browser Windows in DemoQA", async () => {
    await homePage.baseURL();
    await homePage.clickFormBtn();
    await expect(page).toHaveURL(support.formsurl);
    await page.locator(homePage.alrtbtn).click();
    await page.locator(homePage.browserbtn).click();

    //new tab
    await page.locator(homePage.newTabbtn).click();
    await expect(page).toHaveURL(/.*demoqa.com/);

    // new window
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click(homePage.newWindowbtn),
        await expect(page).toHaveURL(/.*demoqa.com/)
    ]); 
    await page.waitForTimeout(5000);
    console.log(newWindow.url());

     // new window handling message
    const [newWindowMessage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click(homePage.newWindowMessagebtn),
    ]); 
    const pageText= await newWindowMessage.locator(homePage.pageTitle).textContent();
    expect(pageText).toEqual(support.pagetext);

})

test.afterAll(async () => {
    await browser.close();
})