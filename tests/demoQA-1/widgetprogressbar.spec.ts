import { chromium, Page, test } from '@playwright/test'
import widgetprogressbar_page from './pages/widgetprogressbar_page';

let page: Page;
let browser, context: any;
let widgets : widgetprogressbar_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetprogressbar_page(page);
});

test.only("Click progress bar and validate", async()=>{
    await page.goto('/progress-bar');
    await widgets.clickprogressbar();
    await widgets.progressbartextvalidation();
    await widgets.startprogressbar();
    await widgets.resetprogressbar();
})

test.afterAll(async () => {
    await browser.close();
})