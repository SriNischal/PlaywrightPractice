import { chromium, Page, test } from '@playwright/test'
import elementsbrokenlink_page from './pages/elementbrokenlink_page';

let page: Page;
let browser, context: any;
let element : elementsbrokenlink_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementsbrokenlink_page(page);
});

test('Clicking on broken links and images and validate', async () => {
    await page.goto('/broken')
    //await element.clickbrokenlinkasimages();
    await element.brokenlinkstext();
    await element.normalimagevalidation();
    await element.brokenimgaevalidation();
    await element.validlinkvalidation();
    await element.brokenlinkvalidation();
})

test.afterAll(async () => {
    await browser.close();
})