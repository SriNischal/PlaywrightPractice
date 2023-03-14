import { expect, Locator, Page } from "@playwright/test";
export default class elementsuploaddownload_page {
    readonly page: Page;
    readonly uploaddownloadbtn: Locator;
    readonly uploaddownloadtitle: Locator;
    readonly selectinputfile: string;
    readonly choosefilebtn: Locator;
    readonly filepath: Locator;
    readonly downloadbtn: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.uploaddownloadbtn = page.locator("//span[text()='Upload and Download']");
        this.uploaddownloadtitle = page.locator("//div[text()='Upload and Download']");
        this.selectinputfile = "input[type='file']";
        this.choosefilebtn = page.locator("//input[@id='uploadFile']");
        this.filepath = page.locator("//p[text()='C:\fakepath\Free_Test_Data_500KB_DOCX.docx']");
        this.downloadbtn = page.locator("//a[text() = 'Download']");

    }
    async clickuploadanddownload() {
        await this.uploaddownloadbtn.click();
    }
    async validateuploaddownloadtext() {
        expect(this.uploaddownloadbtn).toHaveText("Upload and Download");
        expect(this.uploaddownloadtitle).toHaveText("Upload and Download");
    }
    async choosefile() {
        await this.choosefilebtn.click();
        await this.page.setInputFiles(this.selectinputfile, "./tests/fixtures/Free_Test_Data_500KB_DOCX.docx");
    }
    async filevalidation() {
        expect(this.choosefilebtn).toHaveText("Free_Test_Data_500KB_DOCX.docx");
        expect(this.filepath).toHaveText("C:\fakepath\Free_Test_Data_500KB_DOCX.docx");
    }
    async filedownload() {
        const download = await Promise.all([
            this.page.waitForEvent("download"),
            await this.downloadbtn.click()
        ])
        const filename = download[0].suggestedFilename();
        console.log(filename);
        await download[0].saveAs(filename);
        console.log("file downloaded");
    }
}