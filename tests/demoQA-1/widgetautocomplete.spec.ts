import { chromium, Page, test } from '@playwright/test'
import widgetautocomplete_page from './pages/widgetautocomplete_page';

let page: Page;
let browser, context: any;
let widgets : widgetautocomplete_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetautocomplete_page(page);
});

test("Click on autocomplete and valdiate", async() =>{
    await page.goto('/auto-complete');
    await widgets.autocomplete();
    await widgets.autocompleteheaders();
    await widgets.singlecolorvalidation();
    await widgets.multicolorvalidation();
})

test.afterAll(async () => {
    await browser.close();
})