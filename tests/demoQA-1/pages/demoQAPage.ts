import { expect, FrameLocator, Locator, Page } from '@playwright/test';
import { Support } from "../Utils/demoqaconstants";

let support: Support;
export class HomePage {
    readonly page: Page;
    readonly formLocators: any;

    readonly pageTitle: string;
    readonly alrtbtn: Locator;
    readonly browserbtn: string;
    readonly alertbtn: Locator;
    readonly framebtn: string;
    readonly newTabbtn: string;
    readonly newWindowbtn: string;
    readonly newWindowMessagebtn: string;
    readonly formcontent: string;
    readonly seeAlrtbtn: Locator;
    readonly timerAlrtbtn: Locator;
    readonly firstFrame: string;
    readonly secondFrame: string;
    readonly frameText: string;
    readonly Nframebtn: string;
    readonly parentframe: string;
    readonly childframe: string;
    readonly pframe: string;
    readonly cframe: string;
   
    readonly modalbtn: Locator;
    readonly modalpage: string;
    readonly smallmodelbtn: Locator;
    readonly smallmodalpage: string;
    readonly smallmodalclosebtn: Locator;
    readonly largemodelbtn: Locator;
    readonly largemodalpage: string;
    readonly largemodalclosebtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formLocators = {
            formbtn: `//h5[text()='Forms']`,
            practiceFormbtn: `//span[text()='Practice Form']`,
            firstname: `//input[@placeholder='First Name']`,
            lastname: `//input[@placeholder='Last Name']`,
            useremail: `input[id="userEmail"]`,
            genderHeader: `div[id="genterWrapper"]`,
            maleradiobtn: `input[id="gender-radio-1"]`,
            stateheadder: `//label[@id='stateCity-label']`,
            userNumber: `input[id="userNumber"]`,
            subjectText: `input[id="subjectsInput"]`,
            hobbiesCheckbox: `input[id="hobbies-checkbox-1"]`,
            uploadbtn: `input[id="uploadPicture"]`,
            currentaddress: `textarea[id="currentAddress"]`,
            dateOfBith: `id=dateOfBirthInput`,
            month: `//select[@class='react-datepicker__month-select']`,
            year: `//select[@class='react-datepicker__year-select']`,
            date: `//div[text()='16']`,
            dob: `input#dateOfBirthInput`,
            stateTextbox: `//div[text()='Select State']`,
            selectState: `//div[text()='NCR']`,
            cityTextbox: `//div[text()='Select City']`,
            selectcity: `//div[text()='Delhi']`,
            submitbtn: `button[id="submit"]`,
            userNameHeader: `label[id="userName-label"]`,
            userEmailHeader: `label[id="userEmail-label"]`,
            userPhoneHeader: `label[id="userNumber-label"]`,
            formcontent: ".modal-content",
        }

        this.pageTitle = "//body[text()='Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.']"
        this.alrtbtn = page.locator ("'Alerts, Frame & Windows'");
        this.browserbtn = ("'Browser Windows'");
        this.alertbtn =page.locator("'Alerts'");
        this.newTabbtn = ("'New Tab'");
        this.newWindowbtn = ("'New Window'");
        this.newWindowMessagebtn = ("'New Window Message'");
        this.seeAlrtbtn =page.locator('#alertButton');
        this.timerAlrtbtn =page.locator('#timerAlertButton');
        this.firstFrame = '#frame1';
        this.secondFrame = '#frame2';
        this.framebtn = "'Frames'"
        this.Nframebtn = "'Nested Frames'"
        this.frameText = '#sampleHeading';
        this.parentframe = '#frame1';
        this.childframe = "//iframe[@srcdoc='<p>Child Iframe</p>']"
        this.pframe = "//body[text()='Parent frame']"
        this.cframe = "//body/p[text()='Child Iframe']"
       
        this.modalbtn = page.locator("'Modal Dialogs'");
        this.modalpage = "//div[text()='Click on button to see modal']";
        this.smallmodelbtn = page.locator(`button[id="showSmallModal"]`);
        this.smallmodalpage = "//div[text()='This is a small modal. It has very less content']"
        this.smallmodalclosebtn = page.locator(`button[id="closeSmallModal"]`)
        this.largemodelbtn = page.locator(`button[id="showLargeModal"]`);
        this.largemodalpage = "//div[text()='Large Modal']"
        this.largemodalclosebtn = page.locator(`button[id="closeLargeModal"]`)

        
        support = new Support();
    }
    async baseURL() {
        await this.page.goto('/');
    }

    async clickFormBtn() {
        await (await this.page.waitForSelector(this.formLocators.formbtn)).waitForElementState("visible");
        await this.page.locator(this.formLocators.formbtn).click();
        await this.page.waitForLoadState();
        await this.page.locator(this.formLocators.practiceFormbtn).click();
        await this.page.waitForLoadState();
    }
    async clickModalBtn(){
        
        await this.modalbtn.click();
    }

    async clickAlertWindowBtn(){
        await this.alrtbtn.click();
    }
    async clickAlertBtn(){
        await this.alertbtn.click();
    }
    async clickSeeAlrtbtn(){
        await this.seeAlrtbtn.click();
    }
    async  clickTimerAltbtn(){
        await this.timerAlrtbtn.click();
    }

    async fillFields() {
        await this.page.locator(this.formLocators.firstname).fill(support.Fname);
        await this.page.locator(this.formLocators.lastname).fill(support.Lname);
        await this.page.locator(this.formLocators.useremail).fill(support.Email);
        await this.page.locator(this.formLocators.maleradiobtn).click({ force: true });
        await this.page.locator(this.formLocators.userNumber).fill(support.mobileNum);
        await this.getDateOfBirth();
        await this.enterSubject();
        await this.clickHobbies();
        await this.uploadFilesbtn();
        await this.page.locator(this.formLocators.currentaddress).fill(support.currentAddress);
        await this.page.locator(this.formLocators.stateTextbox).click();
        await this.page.locator(this.formLocators.selectState).click();
        await this.page.locator(this.formLocators.cityTextbox).click();
        await this.page.locator(this.formLocators.selectcity).click();
    }

    async getDateOfBirth() {
        await this.page.locator(this.formLocators.dateOfBith).click();
        await this.page.locator(this.formLocators.month).selectOption(support.month);
        await this.page.locator(this.formLocators.year).selectOption(support.year);
        await this.page.locator(this.formLocators.date).click();
    }

    async uploadFilesbtn() {
        await this.page.setInputFiles("input[type='file']", ["tests/suprithnarayana/uploadfiles/screenshot.png"]);
    }
    async clickHobbies() {
        await this.page.locator(this.formLocators.hobbiesCheckbox).click({ force: true });
        await this.page.locator(this.formLocators.hobbiesCheckbox).isChecked();
    }
    async enterSubject() {
        await this.page.locator(this.formLocators.subjectText).type(support.subjectText);
        await this.page.locator(this.formLocators.subjectText).press('Enter');
    }

    async elementClick(loc) {
        await this.page.locator(loc).click();
    }
    async clicksubmitbtn() {
        await this.page.locator(this.formLocators.submitbtn).click();
    }
    async getFirstFrame() {
        return this.firstFrame;
    }
    async getsecondFrame() {
        return this.secondFrame;
    }
    async getParentFrame() {
        return this.parentframe;
    }
    async getChildFrame() {
        return this.childframe;
    }

    async clickToSeeAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }
    async clickSmallModelBtn() {
        await this.smallmodelbtn.click();
    }
    async clickSmallModelCloseBtn() {
        await this.smallmodalclosebtn.click();
    }
    async clickLargeModelBtn() {
        await this.largemodelbtn.click();
    }
    async clickLargeModelCloseBtn() {
        await this.largemodalclosebtn.click();
    }

    async openModal(Modal?: any) {
        if (Modal == 'small') {
            await this.clickSmallModelBtn();
            expect(await this.page.locator(this.smallmodalpage).textContent()).toEqual(support.smallmodalText);
            await this.clickSmallModelCloseBtn();
        }
        else {
            await this.clickLargeModelBtn();
            expect(await this.page.locator(this.largemodalpage).textContent()).toEqual(support.largeModalText);
            await this.clickLargeModelCloseBtn();
        }
    }
}