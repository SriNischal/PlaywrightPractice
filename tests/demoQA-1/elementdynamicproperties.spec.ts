import { chromium, Page, test } from '@playwright/test'
import elementsdynamicproperties_page from './pages/elementdynamicproperties_page';

let page: Page;
let browser, context: any;
let element : elementsdynamicproperties_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementsdynamicproperties_page(page);
});

test('Clicking on dynaic properties and validate', async () => {
    await page.goto('/dynamic-properties');
    await element.clickdynamicproperties();
    await element.dynamicpropertiestextvalidation();
    await element.waitforvisiblecolorchange();
    await element.visibletextvalidation();
})

test.afterAll(async () => {
    await browser.close();
})