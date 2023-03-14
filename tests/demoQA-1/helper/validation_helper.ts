import { expect, Locator, Page } from "@playwright/test";
import { elementlocators } from "../utils/elementslocators";
let locator: elementlocators;
export default class validationhelper {
    readonly widgets : Locator;
    constructor(public page: Page,) {
        this.page = page;
    }

    async validationhelper(actualmessage, expectedvalidatemessage) {
        const widgets = actualmessage;
        console.log(widgets);
        const expectedmessage = expectedvalidatemessage;
        console.log(expectedmessage);
        expect(widgets).toHaveText(expectedmessage);
        console.log("Validation message : " +expectedmessage);
    }
    async URLvalidation(expectedURL) {
        expect(this.page).toHaveURL(expectedURL);
        console.log('expectedURL : ' + expectedURL);
    }
    async imagevalidation(image, actualimagepath, expectedimagepath) {
        let actualimage = await this.page.locator(image).screenshot(actualimagepath);
        expect(actualimage).toMatchSnapshot(expectedimagepath);
        console.log("imagevalidated");
    }
    async filedownload(file) {
        const download = await Promise.all([
            this.page.waitForEvent("download"),
            await this.page.locator(file).click()
        ])
        const filename = download[0].suggestedFilename();
        console.log(filename);
        await download[0].saveAs(filename);
        console.log("file downloaded");
    }


//     let loadingPercent = 0;
// let sum = '';
// const progress = document.querySelector('.progress');
// const percent = document.querySelector('.percent');
// count();

// function count() {
//     loadingPercent++;
//     sum += '||';
//     progress.value = sum;
//     percent.value = loadingPercent + "%";
//     if (loadingPercent < 99) {
//         setTimeout(count, 30);
//     } else {
//         console.log('done');
//     }
}