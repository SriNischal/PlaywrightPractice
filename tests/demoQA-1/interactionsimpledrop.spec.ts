import { chromium, Page, test } from '@playwright/test'
import droppable_page from './pages/interactionsdropable_page';

let page: Page;
let browser, context: any;
let interaction : droppable_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    interaction = new droppable_page(page);
});

test("Click on accordians and validate", async() =>{
    await page.goto('/droppable');
    await interaction.droppableclicking();
    await interaction.droppabletextvalidation();
    await interaction.simpledrag();
    await interaction.acceptdrag();
    await interaction.preventdrag();
    await interaction.revertdrag();
})

// test.afterAll(async () => {
//     await browser.close();
// })
