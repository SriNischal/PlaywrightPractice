import { chromium, Page, test } from '@playwright/test'
import widget_page from './pages/widget_page';

let page: Page;
let browser, context: any;
let widgets : widget_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widget_page(page);
});

test("Navigate to demoQA and click on widgets", async () => {
    await page.goto('/widgets');
    widgets.clickwidgets();
    widgets.validatewidgettext;
})

// test.afterAll(async () => {
//     await browser.close();
// })