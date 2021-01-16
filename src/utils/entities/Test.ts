import type User from "./User";
import type Subject from "../enums/Subject";
import type TestType from "../enums/TestType";
import type TestStatus from "../enums/TestStatus";
import type TestReport from "./TestReport";
import type Question from "./Question";

export default class Test{
    private _id:number;
    private _points:number;
    private _creator:User;
    private _subject:Subject;
    private _testType:TestType;
    private _testStatus:TestStatus;
    private _testReports:TestReport[] = [];
    private _questions:Question[] = [];

    constructor(id: number, points: number, creator: User, subject: Subject, testType: TestType, testStatus: TestStatus) {
        this._id = id;
        this._points = points;
        this._creator = creator;
        this._subject = subject;
        this._testType = testType;
        this._testStatus = testStatus;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }

    get creator(): User {
        return this._creator;
    }

    set creator(value: User) {
        this._creator = value;
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(value: Subject) {
        this._subject = value;
    }

    get testType(): TestType {
        return this._testType;
    }

    set testType(value: TestType) {
        this._testType = value;
    }

    get testStatus(): TestStatus {
        return this._testStatus;
    }

    set testStatus(value: TestStatus) {
        this._testStatus = value;
    }

    get testReports(): TestReport[] {
        return this._testReports;
    }

    set testReports(value: TestReport[]) {
        this._testReports = value;
    }

    get questions(): Question[] {
        return this._questions;
    }

    set questions(value: Question[]) {
        this._questions = value;
    }
}