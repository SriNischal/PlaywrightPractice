import { chromium, Page, test } from '@playwright/test'
import widgetaccordian_page from './pages/widgetsaccordian_page';

let page: Page;
let browser, context: any;
let widgets : widgetaccordian_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetaccordian_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/accordian');
    await widgets.clickaccordian();
    await widgets.accordiantextvalidation();
    await widgets.clickfirstheading();
    await widgets.firstheadingtextvalidation();
    await widgets.clicksecondgheading();
    await widgets.secondheadingtextvalidation();
    await widgets.clickthirdheading();
    await widgets.thirdheadingtextvalidation();
})

test.afterAll(async () => {
    await browser.close();
})
