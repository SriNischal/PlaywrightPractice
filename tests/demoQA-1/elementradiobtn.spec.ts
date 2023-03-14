import { chromium, Page, test } from '@playwright/test'
import elementsradiobtn_page from './pages/elementradiobtn_page';

let page: Page;
let browser, context: any;
let element : elementsradiobtn_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementsradiobtn_page(page);
});

test('Clicking on radio button and validate', async () => {
    await page.goto('/radio-button')
    await element.clickingradiobtn();
    await element.radiobtnvalidation();
    await element.yesradiobutton();
    await element.noradiobutton();
})

test.afterAll(async () => {
    await browser.close();
})