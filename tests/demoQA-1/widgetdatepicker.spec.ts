import { chromium, Page, test } from '@playwright/test'
import widgetdatepicker_page from './pages/widgetdatepicker_page';

let page: Page;
let browser, context: any;
let widgets : widgetdatepicker_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetdatepicker_page(page);
});

test("Click on autocomplete and valdiate", async() =>{
    await page.goto('/date-picker');
    widgets.datepicker();
    widgets.monthyear();
    widgets.monthyeardate();
})

test.afterAll(async () => {
    await browser.close();
})
