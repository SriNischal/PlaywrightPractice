import { chromium, expect, test, Page, Browser } from "@playwright/test";
import { Support } from "./utils/demoqaconstants";
import { HomePage } from "./pages/demoQAPage";


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
test("Verification of frames in DemoQA", async () => {
    await homePage.clickFormBtn();
    await expect(page).toHaveURL(support.formsurl);
    await homePage.alrtbtn.click();
    await page.locator(homePage.Nframebtn).click();
    await page.waitForTimeout(4000)
    //parent
    const parentframeEle = await homePage.getParentFrame();
    const parentFrame = page.frameLocator(parentframeEle);
    const nframetext= await parentFrame.locator(homePage.pframe).textContent();
    expect (nframetext).toEqual(support.ptext);
    console.log(nframetext);
    //child
    const childFrameEle = await homePage.getChildFrame();
    const childFrame = parentFrame.frameLocator(childFrameEle);
    const nframechildtext=await childFrame.locator(homePage.cframe).textContent();
    console.log(nframechildtext);
    expect (nframechildtext).toEqual(support.ctext);
  
});
test.afterAll(async () => {
    await browser.close();
})