import { chromium, Page, test } from '@playwright/test'
import widgettoolbar_page from './pages/widgetstootips_page';

let page: Page;
let browser, context: any;
let widgets : widgettoolbar_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    widgets = new widgettoolbar_page(page);
});

test("Click tooltips and validate", async()=>{
    await page.goto('/tool-tips');
    await widgets.clicktooltips();
    await widgets.tooltipstextvalidation();
    await widgets.headervaldiation();
    await widgets.hovermetoseetooltip();
    await widgets.hovertomesearchtooltip();
    await widgets.contrarytooltip();
    await widgets.datetooltipvalidation();
})

test.afterAll(async () => {
    await browser.close();
})