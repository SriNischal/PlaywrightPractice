import { chromium, Page, test } from '@playwright/test'
import elements_page from './pages/element_page';

let page: Page;
let browser, context: any;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test('Navigate to demoQA and click on elements', async () => {
    const element = new elements_page(page);
    await page.goto('/elements');
    await element.elementheadervalidation();
    await element.clickelements();
    await element.elementtitlevalidation();
    await element.elementheadervalidation();
})



test('Clicking on checkbox and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/checkbox');
    await element.checkboxmessagevalidation();
    await element.clickingcheckboxbtn();
    await element.checkboxtitlevalidation();
    await element.mainfoldercheckboxchecking();
    await element.mainfoldercheckboxvalidation();
    await element.mainfoldercheckboxmessagevalidation();
    await element.clickingexpandallbtn();
    await element.clickingcollapseallbtn();
})

test('Clicking on radio button and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/radio-button')
    await element.clickingradiobtn();
    await element.radiobtnvalidation();
    await element.yesradiobutton();
})

test('Clicking on buttons and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/buttons')
    await element.clickbuttons();
    await element.validatebuttonstext();
    await element.validatebuttonheader();
    await element.doubleclick();
    await element.doubleclickmessage();
    await element.rightclick();
    await element.rightclickmessage();
    await element.click();
    await element.clickmessage();
})



test('Clicking on broken links and images and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/broken')
    await element.clickbrokenlinkasimages();
    await element.brokenlinkstext();
    await element.normalimagevalidation();
    await element.brokenimgaevalidation();
    await element.validlinkvalidation();
    await element.brokenlinkvalidation();
})

test('Clicking on upload and download and images and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/upload-download')
    await element.clickuploadanddownload();
    await element.validateuploaddownloadtext();
    await element.choosefile();
    await element.filevalidation();
    await element.filedownload();
})
test('Clicking on dynaic properties and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/dynamic-properties');
    await element.clickdynamicproperties();
    await element.dynamicpropertiestextvalidation();
    await element.waitforvisiblecolorchange();
    await element.visibletextvalidation();
})

test.only('Clicking on webtables and validate', async () => {
    const element = new elements_page(page);
    await page.goto('/webtables');
    await element.clickdynamictable();
    await element.dynamictabletextvalidation();
    await element.adduser();
    await element.edituser();
    await element.searchicon();
    await element.deleteuser();
})

test.afterAll(async () => {
    await browser.close();
})