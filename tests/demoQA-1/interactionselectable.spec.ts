import { chromium, Page, test } from '@playwright/test'
import selectable_page from './pages/interactionsselectable_page';

let page: Page;
let browser, context: any;
let selectable : selectable_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    selectable = new selectable_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/selectable');
    await selectable.selectableclicking();
    await selectable.selectabletextvalidation();
    await selectable.selectlist();
    await selectable.selectgrid();
    await selectable.deselectlist();
    await selectable.deselectgrid();
})

// test.afterAll(async () => {
//     await browser.close();
// })
