import { chromium, Page, test } from '@playwright/test'
import sortable_page from './pages/interactionssortable_page';

let page: Page;
let browser, context: any;
let interaction : sortable_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    interaction = new sortable_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/sortable');
    await interaction.sortableclicking();
    await interaction.sortabletextvalidation();
    await interaction.listsorting();
    await interaction.gridclicking();
    await interaction.gridsorting();
})

// test.afterAll(async () => {
//     await browser.close();
// })
