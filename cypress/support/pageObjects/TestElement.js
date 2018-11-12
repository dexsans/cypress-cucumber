class TestElement {
    get xpath() {
        return this._xpath;
    }

    set xpath(value) {
        this._xpath = value;
    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    constructor(id, xpath) {

        this._id = id;
        this._xpath = xpath;
    }
}

export default TestElement;