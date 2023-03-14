import { chromium, Page, test } from '@playwright/test'
import widgetmenu_page from './pages/widgetmenu_page';

let page: Page;
let browser, context: any;
let widgets : widgetmenu_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetmenu_page(page);
});

test("Click menu and validate", async()=>{
    await page.goto('/menu');
    await widgets.clickmenu();
    await widgets.menuheadervalidation();
    await widgets.mainitemsvalidation();
    await widgets.sublistvalidation();
})

test.afterAll(async () => {
    await browser.close();
})