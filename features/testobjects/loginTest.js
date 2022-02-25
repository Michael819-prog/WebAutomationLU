import { pages } from "../support/pages";

export class LoginTest {
    async fillEmailField(email) {
        await pages.basePage.getEmailInputField().setValue(email);
    }

    async fillPasswordField(password) {
        await pages.basePage.getPasswordInputField().setValue(password);
    }

    async assertInvalidCredentialsMsg() {
        await pages.basePage.getInvalidCredentialMsg().waitForDisplayed({ timeout: 5000 });

        //this approach behaves equaly 
        await (expect(await pages.basePage.getInvalidCredentialMsg()).toHaveText("Invalid username and/or password."));

        //version with wrong check text
        //await (expect(await pages.basePage.getInvalidCredentialMsg()).toHaveText("dfdfdf"));

        //second approach
        //await (expect(await pages.basePage.getInvalidCredentialMsg().getText()).toEqual("Invalid username and/or password."));

        // const score = await browser.getPerformanceScore();
        // console.log(`THE SCORE IS ${score}`);
    }
}
