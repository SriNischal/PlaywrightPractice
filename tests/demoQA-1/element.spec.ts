import { chromium, Page, test } from '@playwright/test'
import elements_page from './pages/elements_page';

let page: Page;
let browser, context: any;
let element : elements_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elements_page(page);
});

test('Navigate to demoQA and click on elements and validate', async () => {
    await page.goto('/elements');
    await element.clickelements();
    await element.elementsmessagevaldiation();
    await element.elementURLvalidation();
    await element.elementtitlevalidation();
    await element.elementheadervalidation();

})

test.afterAll(async () => {
    await browser.close();
})