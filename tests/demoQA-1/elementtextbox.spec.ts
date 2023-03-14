import { chromium, Page, test } from '@playwright/test'
import elementstextbox_page from './pages/element_textbox_page';

let page: Page;
let browser, context: any;
let element : elementstextbox_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementstextbox_page(page);
});

test('Clicking on textbox and validate', async () => {
    await page.goto('/text-box');
    await element.textboxmessagevalidation();
    await element.textboxclicking();
    await element.enterfullname();
    await element.enteremail();
    await element.enteraddress();
    await element.enterpermanentaddress();
    await element.submitbuttonclicking();
    await element.fullnamevalidation();
    await element.emailvalidation();
    await element.currentaddressvalidation();
    await element.permananetaddressvalidation();
})

test.afterAll(async () => {
    await browser.close();
})
