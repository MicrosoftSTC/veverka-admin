import type {TestReportCause} from "../enums/TestReportCause";
import type User from "./User";
import type Test from "./Test";


export default class TestReport{
    private _id:number;
    private _issuedAt:Date;
    private _comment:string;
    private _testReportCauses:TestReportCause[];
    private _reporter: User;
    private _reportedTest:Test;

    constructor(id: number, issuedAt: Date, comment: string, testReportCauses: TestReportCause[], reporter: User, reportedTest: Test) {
        this._id = id;
        this._issuedAt = issuedAt;
        this._comment = comment;
        this._testReportCauses = testReportCauses;
        this._reporter = reporter;
        this._reportedTest = reportedTest;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get issuedAt(): Date {
        return this._issuedAt;
    }

    set issuedAt(value: Date) {
        this._issuedAt = value;
    }

    get comment(): string {
        return this._comment;
    }

    set comment(value: string) {
        this._comment = value;
    }

    get testReportCauses(): TestReportCause[] {
        return this._testReportCauses;
    }

    set testReportCauses(value: TestReportCause[]) {
        this._testReportCauses = value;
    }

    get reporter(): User {
        return this._reporter;
    }

    set reporter(value: User) {
        this._reporter = value;
    }

    get reportedTest(): Test {
        return this._reportedTest;
    }

    set reportedTest(value: Test) {
        this._reportedTest = value;
    }
}