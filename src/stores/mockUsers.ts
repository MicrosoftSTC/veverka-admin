import {writable} from 'svelte/store';
import User from "../utils/entities/User";
import EmailStatus from "../utils/enums/EmailStatus";
import Subjects from "../utils/enums/Subject";
import Country from "../utils/enums/Country";

enum Generator{
    CASUAL= 5,
    RARE,
    SUPER_RARE=7.5
}
let id = 0;

function ranDat(start, end) : Date{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function getId():number{
    return ++id;
}
function gen(type:Generator):boolean{
    return parseInt(Math.random().toString().slice(2,3)) > 5;
}

// mocking users
let pavel = new User(getId(), "Pavlosak12", "pavel@afdl.cfafd", EmailStatus.NOT_VERIFIED, "pavel", "pijkola", ranDat(getId(), getId()), ranDat(getId(), getId()), "If you have nothing, are you a nillionaire?", Subjects.ARTS, Country.AUSTRIA, "Vienna", gen(Generator.CASUAL), gen(Generator.RARE));
let jakub = new User(getId(), "Jacob__", "jacob@afdl.cfafd", EmailStatus.NOT_VERIFIED, "jakub", "sober", ranDat(getId(), getId()), ranDat(getId(), getId()), "Gas smells awful, You might as well live.", Subjects.CHEMISTRY, Country.CZECH_REPUBLIC, "Brno", gen(Generator.CASUAL), gen(Generator.RARE));
let filip = new User(getId(), "Pavlosak12", "filip@afdl.cfafd", EmailStatus.NOT_VERIFIED, "filip", "trůníček", ranDat(getId(), getId()), ranDat(getId(), getId()), "Let your day be neither manic nor volcanic.", Subjects.PHYSICS, Country.POLAND, "Varšava", gen(Generator.CASUAL), gen(Generator.RARE));
let klára = new User(getId(), "Pavlosak12", "klarinet@afdl.cfafd", EmailStatus.NOT_VERIFIED, "klarinet", "skočdopolová", ranDat(getId(), getId()), ranDat(getId(), getId()), "Out of my mind. Back in five minutes.", Subjects.CZECH, Country.USA, "Ohio", gen(Generator.CASUAL), gen(Generator.RARE));
let brabora = new User(getId(), "Pavlosak12", "barbra@afdl.cfafd", EmailStatus.NOT_VERIFIED, "barbora", "flašinetová", ranDat(getId(), getId()), ranDat(getId(), getId()), "A hangover is the wrath of grapes.", Subjects.MATHS, Country.HUNGARY, "Debrecen", gen(Generator.CASUAL), gen(Generator.RARE));
let jan = new User(getId(), "Pavlosak12", "johnysmrdijakdvazvony@afdl.cfafd", EmailStatus.NOT_VERIFIED, "jan", "cihlík", ranDat(getId(), getId()), ranDat(getId(), getId()), "Death and Taxes", Subjects.HISTORY, Country.LITHUANIA, "Kaunas", gen(Generator.CASUAL), gen(Generator.RARE));
let františek = new User(getId(), "Pavlosak12", "filip@afdl.cfafd", EmailStatus.VERIFIED, "františek", "štítek", ranDat(getId(), getId()), ranDat(getId(), getId()), "Two wrongs don’t make a right, but three lefts do.", Subjects.ENGLISH, Country.CZECH_REPUBLIC, "Pardubice", gen(Generator.CASUAL), gen(Generator.RARE));
let josef = new User(getId(), "Pavlosak12", "kohout43@afdl.cfafd", EmailStatus.VERIFIED, "josef", "kahount", ranDat(getId(), getId()), ranDat(getId(), getId()), "OK, so what’s the speed of dark?", Subjects.PE, Country.SLOVAKIA, "Poprad", gen(Generator.CASUAL), gen(Generator.RARE));
let adam = new User(getId(), "Pavlosak12", "ejdam@afdl.cfafd", EmailStatus.VERIFIED, "adam", "kůltulič", ranDat(getId(), getId()), ranDat(getId(), getId()), "It’s a thinking universe.", Subjects.SPANISH, Country.CZECH_REPUBLIC, "Hradec Hrálové", gen(Generator.CASUAL), gen(Generator.RARE));

// mocking communities

// export const mockedUsers = writable(
    // [
    //     {
    //         id: getId(),
    //         name: "František Oprcálek",
    //         username: "Frantosakoz604",
    //         num: 54,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2)),
    //         posts: [
    //             {
    //                 headline: "Majkraft",
    //                 content: "Jak dostat skiny v kántrstrajku zadáčo, fčetně dana landy",
    //                 posted: randomDate(new Date(2012, 0, 1), new Date()),
    //                 needsReview: Math.random().toString().slice(2,3) > 5,
    //                 banned: Math.random().toString().slice(2,3) > 7.5,
    //                 reports: [
    //                     {
    //                         id: getId(),
    //                         reporter: {
    //                             name: "Igor vykřičník",
    //                             username: "Attention12",
    //                             needsReview: Math.random().toString().slice(2,3) > 5,
    //                             banned: Math.random().toString().slice(2,3) > 7.5,
    //                             founder: Math.random().toString().slice(2,3) > 7,
    //                             joined: randomDate(new Date(2012, 0, 1), new Date()),
    //                             points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //                         },
    //                         reports: [
    //                             {
    //                                 id: getId(),
    //                                 content: "Sexual harrasment",
    //                                 type: "community"
    //                             },
    //                             {
    //                                 id: getId(),
    //                                 content: "trolling",
    //                                 type: "community"
    //                             }
    //                         ],
    //                         comment: "This user is unbelievable evil"
    //                     },
    //                     {
    //                         id: getId(),
    //                         reporter: {
    //                             name: "Igor vykřičník",
    //                             username: "Attention12",
    //                             needsReview: Math.random().toString().slice(2,3) > 5,
    //                             banned: Math.random().toString().slice(2,3) > 7.5,
    //                             founder: Math.random().toString().slice(2,3) > 7,
    //                             joined: randomDate(new Date(2012, 0, 1), new Date()),
    //                             points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //                         },
    //                         reports: [
    //                             {
    //                                 id: getId(),
    //                                 content: "Sexual harrasment",
    //                                 type: "community"
    //                             },
    //                             {
    //                                 id: getId(),
    //                                 content: "trolling",
    //                                 type: "community"
    //                             }
    //                         ],
    //                         comment: "This user is unbelievable evil again"
    //                     }
    //                 ]
    //             }
    //         ],
    //         stars: [
    //             {
    //                 id: getId(),
    //                 given: randomDate(new Date(2012, 0, 1), new Date()),
    //                 type: "comment"
    //             },
    //             {
    //                 id: getId(),
    //                 given: randomDate(new Date(2012, 0, 1), new Date()),
    //                 type: "comment"
    //             },
    //             {
    //                 id: getId(),
    //                 given: randomDate(new Date(2012, 0, 1), new Date()),
    //                 type: "comment"
    //             },
    //             {
    //                 id: getId(),
    //                 given: randomDate(new Date(2012, 0, 1), new Date()),
    //                 type: "comment"
    //             },
    //             {
    //                 id: getId(),
    //                 given: randomDate(new Date(2012, 0, 1), new Date()),
    //                 type: "comment"
    //             }
    //         ],
    //         reportsGiven: [
    //             {
    //                 id: getId(),
    //                 type: "user",
    //                 reporter: {
    //                     name: "František Oprcálek",
    //                     username: "Frantosakoz604",
    //                     num: 1,
    //                     needsReview: Math.random().toString().slice(2,3) > 5,
    //                     banned: Math.random().toString().slice(2,3) > 7.5,
    //                     founder: Math.random().toString().slice(2,3) > 7,
    //                     joined: randomDate(new Date(2012, 0, 1), new Date()),
    //                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //                 },
    //                 receiver: {
    //                     name: "Igor vykřičník",
    //                     username: "Attention12",
    //                     needsReview: Math.random().toString().slice(2,3) > 5,
    //                     banned: Math.random().toString().slice(2,3) > 7.5,
    //                     founder: Math.random().toString().slice(2,3) > 7,
    //                     joined: randomDate(new Date(2012, 0, 1), new Date()),
    //                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //                 },
    //                 reports: [
    //                     {
    //                         id: getId(),
    //                         content: "Obsession with anime",
    //                     },
    //                     {
    //                         id: getId(),
    //                         content: "Propagates products, may be paid marketing",
    //                     }
    //                 ],
    //                 comment: "Já jsem franta, a tohle se mi nelíbilo"
    //             },
    //         ],
    //         reportsReceived: [
    //             {
    //                 id: getId(),
    //                 type: "post",
    //                 reporter: {
    //                     name: "Pavel Křídlo",
    //                     username: "Wingman90",
    //                     num: 1,
    //                     needsReview: Math.random().toString().slice(2,3) > 5,
    //                     banned: Math.random().toString().slice(2,3) > 7.5,
    //                     founder: Math.random().toString().slice(2,3) > 7,
    //                     joined: randomDate(new Date(2012, 0, 1), new Date()),
    //                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //                 },
    //                 reports: [
    //                     {
    //                         id: getId(),
    //                         content: "Something",
    //                     },
    //                     {
    //                         id: getId(),
    //                         content: "trolling",
    //                     }
    //                 ],
    //                 comment: "This user does not like Minecraft, should be banned"
    //             },
    //         ],
    //         communities: [
    //             {
    //                 name: "Dějepiss středověk",
    //                 id: getId(),
    //                 founder: `Ariel_Pereggini${Math.random().toString().slice(2, 4)}`,
    //                 members: parseInt(Math.random().toString().slice(2,4)),
    //                 needsReview: Math.random().toString().slice(2,3) > 5,
    //                 banned: Math.random().toString().slice(2,3) > 7.5,
    //                 since: randomDate(new Date(2012, 0, 1), new Date()),
    //             },
    //             {
    //                 name: "Geography best subject community",
    //                 id: getId(),
    //                 founder: `Burak Arašíd${Math.random().toString().slice(2, 4)}`,
    //                 members: parseInt(Math.random().toString().slice(2,4)),
    //                 needsReview: Math.random().toString().slice(2,3) > 5,
    //                 banned: Math.random().toString().slice(2,3) > 7.5,
    //                 since: randomDate(new Date(2012, 0, 1), new Date()),
    //             },
    //         ]
    //     },
    //     {
    //         id: getId(),
    //         name: "Jarmila Krásná",
    //         username: "JarmilkaKarkulka20",
    //         num: 21,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Josef Drsný",
    //         username: "Drsnak02",
    //         num: 666,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Lucifer Hrozný",
    //         username: "Luci4er",
    //         num: 767,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Marek Přeskočpole",
    //         username: "MarkosTukan",
    //         num: 90,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Jiří Oberfrajer",
    //         username: "JsemFrajerTadyATed",
    //         num: 4334,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Barbora Jablková",
    //         username: "Fry89",
    //         num: 11,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Jakub Kohák",
    //         username: "Jacob03",
    //         num: 3424,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    //     {
    //         id: getId(),
    //         name: "Kateřina Peake",
    //         username: "NejlepsiMinistr102",
    //         num: 76,
    //         needsReview: Math.random().toString().slice(2,3) > 5,
    //         banned: Math.random().toString().slice(2,3) > 7.5,
    //         founder: Math.random().toString().slice(2,3) > 7,
    //         joined: randomDate(new Date(2012, 0, 1), new Date()),
    //         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
    //     },
    // ]
// );