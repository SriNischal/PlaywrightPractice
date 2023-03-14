import { chromium, Page, test } from '@playwright/test'
import elementsbutton_page from './pages/elementbutton_page';

let page: Page;
let browser, context: any;
let element : elementsbutton_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementsbutton_page(page);
});
test('Clicking on buttons and validate', async () => {
    await page.goto('/buttons')
    await element.clickbuttons();
    await element.validatebuttonstext();
    await element.validatebuttonheader();
    await element.doubleclick();
    await element.doubleclickmessage();
    await element.rightclick();
    await element.rightclickmessage();
    await element.click();
    await element.clickmessage();
})

test.afterAll(async () => {
    await browser.close();
})
