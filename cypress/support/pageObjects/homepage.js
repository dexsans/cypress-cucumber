import TestElement from "./TestElement";

class HomePage {


    getEmailOrPhone() {
        return new TestElement('emailOrPhone', '[data-testid=royal_email]');
    }

    getPassword() {
        return new TestElement('pwd', '[data-testid=royal_pass]');
    }

    getLoginBtn() {
        return new TestElement('', '#loginbutton');
    }
}

export default HomePage;