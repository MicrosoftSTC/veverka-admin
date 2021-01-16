import type Test from "./Test";
import type Option from "./Option";

export default class Question{
    private _id:number;
    private _test:Test;
    private _content:string;
    private _options:Option[];


    constructor(id: number, test: Test, content: string) {
        this._id = id;
        this._test = test;
        this._content = content;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get test(): Test {
        return this._test;
    }

    set test(value: Test) {
        this._test = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get options(): Option[] {
        return this._options;
    }

    set options(value: Option[]) {
        this._options = value;
    }
}