import { chromium, Page, test } from '@playwright/test'
import resizable_page from './pages/interactionresizable_page';

let page: Page;
let browser, context: any;
let interaction : resizable_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    interaction = new resizable_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/resizable');
    await interaction.resizablesclicking();
    await interaction.resizabletextvalidation();
    await interaction.firstboxresize();
    await interaction.secondboxresize();
})

// test.afterAll(async () => {
//     await browser.close();
// })
