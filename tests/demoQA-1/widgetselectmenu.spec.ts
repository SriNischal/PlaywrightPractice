import { chromium, Page, test } from '@playwright/test'
import widgetselectmenu_page from './pages/widgetselectmenu_page';

let page: Page;
let browser, context: any;
let widgets : widgetselectmenu_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgetselectmenu_page(page);
});

test("Click selectmenu and validate", async()=>{
    await page.goto('/select-menu');
    await widgets.clickselectmenu();
    await widgets.menutextvalidation();
    await widgets.selectvalue();
    await widgets.selectone();
    await widgets.oldstyleselectmenudropdown();
    await widgets.multiselect();
    await widgets.standardselect();

})

test.afterAll(async () => {
    await browser.close();
})
