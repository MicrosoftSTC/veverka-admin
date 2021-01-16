import type Question from "./Question";

export default class Option{
    private _id:number;
    private _isCorrect:boolean;
    private _content:string;
    private _question:Question;

    constructor(id: number, isCorrect: boolean, content: string, question: Question) {
        this._id = id;
        this._isCorrect = isCorrect;
        this._content = content;
        this._question = question;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get isCorrect(): boolean {
        return this._isCorrect;
    }

    set isCorrect(value: boolean) {
        this._isCorrect = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get question(): Question {
        return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }
}