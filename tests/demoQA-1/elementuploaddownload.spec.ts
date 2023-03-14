import { chromium, Page, test } from '@playwright/test'
import elementsuploaddownload_page from './pages/elementfileuploaddownload_page';

let page: Page;
let browser, context: any;
let element : elementsuploaddownload_page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    element = new elementsuploaddownload_page(page);
});
test('Clicking on upload and download and images and validate', async () => {
    await page.goto('/upload-download')
    await element.clickuploadanddownload();
    await element.validateuploaddownloadtext();
    await element.choosefile();
    await element.filevalidation();
    await element.filedownload();
})

test.afterAll(async () => {
    await browser.close();
})
