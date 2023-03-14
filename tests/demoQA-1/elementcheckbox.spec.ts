import { chromium, Page, test } from '@playwright/test'
import elementscheckbox_page from './pages/elementcheckbox_page';

let page: Page;
let browser, context: any;
let element : elementscheckbox_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementscheckbox_page(page);
});
test('Clicking on checkbox and validate', async () => {
    await page.goto('/checkbox');
    await element.checkboxmessagevalidation();
    await element.clickingcheckboxbtn();
    await element.checkboxtitlevalidation();
    await element.mainfoldercheckboxchecking();
    await element.mainfoldercheckboxvalidation();
    await element.mainfoldercheckboxmessagevalidation();
    await element.clickingexpandallbtn();
    await element.clickingcollapseallbtn();
})

test.afterAll(async () => {
    await browser.close();
})