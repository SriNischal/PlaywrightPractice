import { expect, Page } from "@playwright/test";
import { elementlocators } from "../utils/elementslocators";
import validationhelper from "../helper/validation_helper"
let locator: elementlocators;
export default class elements_page {
    constructor(public page: Page,) {
        locator = new elementlocators();
    }
    async clickelements() {
        await this.page.locator(locator.elementbtn).click();
        await this.page.locator(locator.elementbtn).click();
    }
    async elementsmessagevaldiation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.elementbtn, locator.expectedelementtitle)
    }

    async elementURLvalidation() {
        const validation = new validationhelper(this.page);
        validation.URLvalidation(locator.elementURL);
    }
    async elementtitlevalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualelementtitle, locator.expectedelementtitle);
    }
    async elementheadervalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualelementheader, locator.expectedelementheader);
    }
    async textboxclicking() {
        await this.page.locator(locator.actualtextbox).click();
    }
    async textboxmessagevalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualtextbox, locator.expectedtextbox);
    }
    
    async clickingcheckboxbtn() {
        await this.page.locator(locator.checkboxbtn).click();
    }
    async checkboxmessagevalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.checkboxbtn, locator.expectedcheckbox);
    }
    async checkboxtitlevalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.checkboxtitle, locator.expectedcheckbox);
    }
    async mainfoldercheckboxchecking() {
        await this.page.locator(locator.mainfoldercheckbox).check();
    }
    async mainfoldercheckboxvalidation() {
        const check = await this.page.locator(locator.mainfoldercheckbox).isChecked();
        console.log(check);
    }
    async mainfoldercheckboxmessagevalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.mainfoldercheckboxmessage, locator.expectedmainfoldercheckboxmessage);
    }
    async clickingexpandallbtn() {
        await this.page.locator(locator.checkboxexpandallbtn).click();
    }
    async clickingcollapseallbtn() {
        await this.page.locator(locator.checkboxcollapseallbtn).click();
    }

    async clickingradiobtn() {
        await this.page.locator(locator.radiobuttonbtn).click();
    }
    async radiobtnvalidation() {
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.radiobuttonbtn, locator.expectedradiobuttonmessage);
        validation.validationhelper(locator.radiobuttontitle, locator.expectedradiobuttonmessage);
        validation.validationhelper(locator.radiobuttonheading, locator.expectedradiobuttonheading);
    }
    async yesradiobutton() {
        const validation = new validationhelper(this.page);
        await this.page.locator(locator.yesradiobtn).click();
        validation.validationhelper(locator.radibtnmessage, locator.expectedyesradiobtnmessage);
        await this.page.locator(locator.impressiveradiobtn).click();
        validation.validationhelper(locator.radibtnmessage, locator.expectedimpressiveradiobtnmessage);
    }

    async clickbuttons() {
        await this.page.locator(locator.buttonsbtn).click();
    }
    async validatebuttonstext(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.buttonsbtn, locator.expectedbuttonmessage);
    }
    async validatebuttonheader(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.buttonstitle, locator.expectedbuttonmessage);
    }
    async doubleclick(){
        await this.page.locator(locator.doubleclickbutton).dblclick();
    }
    async doubleclickmessage(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualdoubleclickbtnmessage, locator.expecteddoubleclickbtnmessage);
    }
    async rightclick(){
        await this.page.locator(locator.rightclickbutton).click({ button: "right" });
    }
    async rightclickmessage(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualrightclickbuttonmessage, locator.expectedrightclickbuttonmessage);
    }
    async click(){
        await this.page.locator(locator.clickmebutton).click();
    }
    async clickmessage(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.actualclickmebuttonmessage, locator.expectedclickmebuttonmessage);
    }
    
    async clickbrokenlinkasimages() {
        await this.page.locator(locator.brokenlinksbtn).click();
    }
    async brokenlinkstext(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.brokenlinksbtn, locator.expecetdbrokenlinkmessage);
        validation.validationhelper(locator.brokenlinkstitle, locator.expecetdbrokenlinkmessage);
    }
    async normalimagevalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.validimagetext,locator.expecetdvalidimagetext);
        await this.page.waitForTimeout(5000);
        validation.imagevalidation(locator.validimage,locator.actualvalidimagepath,locator.expectedvalidimagepath);
    }
    async brokenimgaevalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.brokenimagetext,locator.expectedbrokenimagetext);
        validation.imagevalidation(locator.brokenimage,locator.actualbrokenimagepath,locator.expectedbrokenimagepath);
    }
    async validlinkvalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.validlinktext,locator.expecetdvalidlinktext);
        await this.page.locator(locator.validlink).click();
        validation.URLvalidation(locator.actualurl);
        await this.page.goBack({timeout : 5000});
    }
    async brokenlinkvalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.brokenlinktext,locator.expectedbrokenlinktext);
        await this.page.locator(locator.brokenlink).click();
        validation.URLvalidation(locator.expectedurl);
    }
    async clickuploadanddownload(){
        this.page.locator(locator.uploaddownloadbtn);
    }
    async validateuploaddownloadtext(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.uploaddownloadbtn,locator.expecteduploaddownloadbtn);
        validation.validationhelper(locator.uploaddownloadtitle,locator.expecteduploaddownloadbtn);
    }
    async choosefile(){
        await this.page.locator(locator.choosefilebtn).click();
        await this.page.setInputFiles(locator.selectinputfile,locator.selectfile);
    }
    async filevalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.choosefilebtn,locator.expecetdfilename);
        validation.validationhelper(locator.filepath,locator.expectedfilepath);
    }
    async filedownload(){
        const validation = new validationhelper(this.page);
        validation.filedownload(locator.downloadbtn);
    }
    
    async clickdynamicproperties(){
        await this.page.locator(locator.dynamicpropertiesbtn).click();

    }
    async dynamicpropertiestextvalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.dynamicpropertiesbtn,locator.expecteddynamicmessage);
        validation.validationhelper(locator.dynamicpropertiesbtn,locator.expecteddynamicmessage);
    }
    async waitforvisiblecolorchange(){
        await this.page.waitForSelector(locator.visibleafter);
        const btn = this.page.locator(locator.colorchannge);
        const color = await btn.evaluate((ele) =>{
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        console.log(color);
        expect(color).toBe(locator.color);
    }
    async visibletextvalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.visibleafter,locator.expectedvisibleafter);
    }

    async clickdynamictable(){
        await this.page.locator(locator.webtablesbtn).click();
    }
    async dynamictabletextvalidation(){
        const validation = new validationhelper(this.page);
        validation.validationhelper(locator.webtablesbtn,locator.expectedwebtablestext);
        validation.validationhelper(locator.webtablestitle,locator.expectedwebtablestext);
    }
    async adduser(){
        const validation = new validationhelper(this.page);
        await this.page.locator(locator.add).click();
        await this.page.locator(locator.firstname).fill(locator.expectedfirstname);
        await this.page.locator(locator.lastname).fill(locator.expectedlastname);
        await this.page.locator(locator.registeremail).fill(locator.expectedemail);
        await this.page.locator(locator.age).fill(locator.actualage);
        await this.page.locator(locator.salary).fill(locator.expectedsalary);
        await this.page.locator(locator.department).fill(locator.expecteddepartment);
        await this.page.locator(locator.submit).click();
        validation.validationhelper(locator.addeduser, locator.addeduserbeforeediting);
    }
    async edituser(){
        const validation = new validationhelper(this.page);
        await this.page.locator(locator.edituser).click();
        await this.page.locator(locator.age).fill(locator.expectedage);
        await this.page.locator(locator.submit).click();
        validation.validationhelper(locator.addeduser, locator.addeduserafterediting);
    }
    async searchicon(){
        const validation = new validationhelper(this.page);
        await this.page.locator(locator.searchbox).fill(locator.expectedfirstname);
        await this.page.locator(locator.searchicon).click();
        validation.validationhelper(locator.addeduser, locator.addeduserafterediting);
    }
    async deleteuser(){
        await this.page.locator(locator.deleteuser).click();
        console.log("deleted record");
    }
}
