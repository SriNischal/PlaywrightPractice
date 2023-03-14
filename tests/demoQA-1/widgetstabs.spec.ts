import { chromium, Page, test } from '@playwright/test'
import widgettabs_page from './pages/widgetstabs_page';

let page: Page;
let browser, context: any;
let widgets : widgettabs_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgettabs_page(page);
});

test("Click tabs and validate", async()=>{
    await page.goto('/tabs');
    await widgets.clicktabs();
    await widgets.tabstextvalidation();
    await widgets.headervalidation();
    await widgets.whatsubheader();
    await widgets.originsubheader();
    await widgets.usesubheader();
    await widgets.moresubheader();
})

test.afterAll(async () => {
    await browser.close();
})