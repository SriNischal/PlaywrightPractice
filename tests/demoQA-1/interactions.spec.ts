import { chromium, Page, test } from '@playwright/test'
import interactions_page from './pages/interactions_page';

let page: Page;
let browser, context: any;
let interaction : interactions_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    interaction = new interactions_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/interaction');
    await interaction.interactionsclicking();
    await interaction.interactionstextvalidation();
    // await widgets.clickfirstheading();
    // await widgets.firstheadingtextvalidation();
    // await widgets.clicksecondgheading();
    // await widgets.secondheadingtextvalidation();
    // await widgets.clickthirdheading();
    // await widgets.thirdheadingtextvalidation();
})

// test.afterAll(async () => {
//     await browser.close();
// })
