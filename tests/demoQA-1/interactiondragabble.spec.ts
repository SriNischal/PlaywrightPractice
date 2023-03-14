import { chromium, Page, test } from '@playwright/test'
import dragabble_page from './pages/interactionsdragable_page';

let page: Page;
let browser, context: any;
let interaction : dragabble_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    interaction = new dragabble_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/dragabble');
    await interaction.dragabbleclicking();
    await interaction.dragabbletextvalidation();
    await interaction.simpledrag();
    await interaction.axisdrag();
    await interaction.containderdrag();
    await interaction.cursordrag();
})

// test.afterAll(async () => {
//     await browser.close();
// })
