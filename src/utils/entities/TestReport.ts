import type {TestReportCause} from "../enums/TestReportCause";
import type User from "./User";
import type Test from "./Test";


export default class TestReport{
    id:number;
    issuedAt:Date;
    comment:string;
    testReportCauses:TestReportCause[];
    reporter: User;
    reportedTest:Test;
}