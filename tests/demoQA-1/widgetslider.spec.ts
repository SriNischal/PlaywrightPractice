import { chromium, Page, test } from '@playwright/test'
import widgetslider_page from './pages/widgetslider_page';

let page: Page;
let browser, context: any;
let widgets : widgetslider_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetslider_page(page);
});

test("Click slider and validate", async()=>{
    await page.goto('/slider');
    await widgets.clickslider();
    await widgets.slidertextvalidation();
    await widgets.slidertooltipvalidation();
    await widgets.slidervaluevalidation();
    await widgets.moveslider();
})

test.afterAll(async () => {
    await browser.close();
})