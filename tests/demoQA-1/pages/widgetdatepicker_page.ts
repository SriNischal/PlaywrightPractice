import { expect, Locator, Page } from "@playwright/test";
export default class widgetdatepicker_page {
    readonly page: Page;
    readonly datepickers: Locator;
    readonly datepickerheader: Locator;
    readonly monthyears: Locator;
    readonly monthdropdown: Locator;
    readonly yeardropdown: Locator;
    readonly date: Locator;
    readonly monthyeartime: Locator;
    readonly yearselect: Locator;
    readonly yearoption: Locator;
    readonly timeoption: Locator;
    readonly monthselect: Locator;
    readonly monthoption: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.datepickers = page.locator("//span[text()='Date Picker']");
        this.datepickerheader = page.locator("//div[text()='Date Picker']");
        this.monthyears = page.locator("//input[@id='datePickerMonthYearInput']");
        this.monthdropdown = page.locator("//select[@class='react-datepicker__month-select']");
        this.yeardropdown = page.locator("//select[@class='react-datepicker__year-select']");
        this.date = page.locator("//div[text()='23']");
        this.monthyeartime = page.locator("//input[@id='dateAndTimePickerInput']");
        this.yearselect = page.locator("//span[@class='react-datepicker__year-read-view--selected-year']");
        this.yearoption = page.locator("(//div[@class='react-datepicker__year-option'])[11]");
        this.timeoption = page.locator("(//li[@class='react-datepicker__time-list-item '])[69]");
        this.monthselect = page.locator("//span[@class='react-datepicker__month-read-view--selected-month']");
        this.monthoption = page.locator("(//div[@class='react-datepicker__month-option'])[9]");
    }
    async datepicker() {
        await this.datepickers.click();
        expect(this.datepickers).toHaveText("Date Picker");
        expect(this.datepickerheader).toHaveText("Date Picker");
    }
    async monthyear() {
        await this.monthyears.click();
        await this.monthdropdown, {
            label: "July"
        }
        await this.yeardropdown, {
            label: "1997"
        }
        await this.date.click();
    }
    async monthyeardate() {
        await this.monthyeartime.click();
        const month = this.monthselect;
        month.click();
        await this.monthoption.click();
        const year = this.yearselect;
        year.click();
        await this.yearoption.click();
        const time = this.date;
        time.click();
        await this.timeoption.click();
    }
}