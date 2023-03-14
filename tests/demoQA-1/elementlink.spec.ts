import { chromium, Page, test } from '@playwright/test'
import elementslink_page from './pages/elemetlink_page';

let page: Page;
let browser, context: any;
let element : elementslink_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementslink_page(page);
});
test('Clicking on links and validate', async () => {
    await page.goto('/links')
    await element.clicklinks();
    await element.validatelinkstext();
    await element.validatelinkheaders();
    await element.clicksimplelink();
    await element.urlvalidation();
    await element.clickdynamiclink();
    await element.urlvalidation();
    await element.firstapicall();
    await element.secondapicall();
})

test.afterAll(async () => {
    await browser.close();
})