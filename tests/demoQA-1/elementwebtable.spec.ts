import { chromium, Page, test } from '@playwright/test'
import elementswebtable_page from './pages/elementwebtable_page';

let page: Page;
let browser, context: any;
let element : elementswebtable_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementswebtable_page(page);
});
test.only('Clicking on webtables and validate', async () => {
    await page.goto('/webtables');
    await element.clickdynamictable();
    await element.dynamictabletextvalidation();
    await element.adduser();
    await element.edituser();
    await element.searchicon();
    await element.deleteusers();
})

test.afterAll(async () => {
    await browser.close();
})