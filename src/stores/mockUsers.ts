import User from "../utils/entities/User";
import EmailStatus from "../utils/enums/EmailStatus";
import Subjects from "../utils/enums/Subject";
import Country from "../utils/enums/Country";
import Community from "../utils/entities/Community";
import CommunityPrivacyPolicy from "../utils/enums/CommunityPrivacyPolicy";
import CommunityType from "../utils/enums/CommunityType";
import Role from "../utils/enums/Role";
import CommunityMembershipStatus from "../utils/enums/CommunityMembershipStatus";
import CommunityMembership from "../utils/entities/CommunityMembership";

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
let user0 = new User(getId(), "Pavlosak12", "pavel@afdl.cfafd", EmailStatus.NOT_VERIFIED, "pavel", "pijkola", ranDat(getId(), getId()), ranDat(getId(), getId()), "If you have nothing, are you a nillionaire?", Subjects.ARTS, Country.AUSTRIA, "Vienna", gen(Generator.CASUAL), gen(Generator.RARE));
let user1 = new User(getId(), "Jacob__", "jacob@afdl.cfafd", EmailStatus.NOT_VERIFIED, "jakub", "sober", ranDat(getId(), getId()), ranDat(getId(), getId()), "Gas smells awful, You might as well live.", Subjects.CHEMISTRY, Country.CZECH_REPUBLIC, "Brno", gen(Generator.CASUAL), gen(Generator.RARE));
let user2 = new User(getId(), "Pavlosak12", "filip@afdl.cfafd", EmailStatus.NOT_VERIFIED, "filip", "trůníček", ranDat(getId(), getId()), ranDat(getId(), getId()), "Let your day be neither manic nor volcanic.", Subjects.PHYSICS, Country.POLAND, "Varšava", gen(Generator.CASUAL), gen(Generator.RARE));
let user3 = new User(getId(), "Pavlosak12", "klarinet@afdl.cfafd", EmailStatus.NOT_VERIFIED, "klarinet", "skočdopolová", ranDat(getId(), getId()), ranDat(getId(), getId()), "Out of my mind. Back in five minutes.", Subjects.CZECH, Country.USA, "Ohio", gen(Generator.CASUAL), gen(Generator.RARE));
let user4 = new User(getId(), "Pavlosak12", "barbra@afdl.cfafd", EmailStatus.NOT_VERIFIED, "barbora", "flašinetová", ranDat(getId(), getId()), ranDat(getId(), getId()), "A hangover is the wrath of grapes.", Subjects.MATHS, Country.HUNGARY, "Debrecen", gen(Generator.CASUAL), gen(Generator.RARE));
let user5 = new User(getId(), "Pavlosak12", "johnysmrdijakdvazvony@afdl.cfafd", EmailStatus.NOT_VERIFIED, "jan", "cihlík", ranDat(getId(), getId()), ranDat(getId(), getId()), "Death and Taxes", Subjects.HISTORY, Country.LITHUANIA, "Kaunas", gen(Generator.CASUAL), gen(Generator.RARE));
let user6 = new User(getId(), "Pavlosak12", "filip@afdl.cfafd", EmailStatus.VERIFIED, "františek", "štítek", ranDat(getId(), getId()), ranDat(getId(), getId()), "Two wrongs don’t make a right, but three lefts do.", Subjects.ENGLISH, Country.CZECH_REPUBLIC, "Pardubice", gen(Generator.CASUAL), gen(Generator.RARE));
let user7 = new User(getId(), "Pavlosak12", "kohout43@afdl.cfafd", EmailStatus.VERIFIED, "josef", "kahount", ranDat(getId(), getId()), ranDat(getId(), getId()), "OK, so what’s the speed of dark?", Subjects.PE, Country.SLOVAKIA, "Poprad", gen(Generator.CASUAL), gen(Generator.RARE));
let user8 = new User(getId(), "Pavlosak12", "ejdam@afdl.cfafd", EmailStatus.VERIFIED, "adam", "kůltulič", ranDat(getId(), getId()), ranDat(getId(), getId()), "It’s a thinking universe.", Subjects.SPANISH, Country.CZECH_REPUBLIC, "Hradec Hrálové", gen(Generator.CASUAL), gen(Generator.RARE));

// mocking communities
let community0 = new Community(getId(), "chemičtíNadšenci", "Máme rádi chemii a založili jsme si na to skupinu", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.CHEMISTRY, ranDat(getId(), getId()));
let community1 = new Community(getId(), "fyzikálníĎáblové", "Fyzika, fyzika, Newton honí skrblíka", CommunityPrivacyPolicy.PRIBLIC, CommunityType.EDUCATION, Subjects.PHYSICS, ranDat(getId(), getId()));
let community2 = new Community(getId(), "Společenskovědátoři", "Společnost je ideální pouze tehdy, když nedávají zprávy na nově", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.HISTORY, ranDat(getId(), getId()));
let community3 = new Community(getId(), "Matematická skupinka", "Jak říká Mirko Rokyta, ideální je pouze matika", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.MATHS, ranDat(getId(), getId()));
let community4 = new Community(getId(), "Rybáři zlín", "Lovíme ryby a jíme olivy", CommunityPrivacyPolicy.PRIVATE, CommunityType.FREE_TIME, Subjects.NO_SUBJECT, ranDat(getId(), getId()));

// mocking community memberships
let membership0 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user0, community0);
let membership1 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_ADMIN, CommunityMembershipStatus.OK, user1, community0);
let membership2 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_MODERATOR, CommunityMembershipStatus.OK, user2, community0);
let membership3 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_USER, CommunityMembershipStatus.OK, user3, community0);
let membership4 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user4, community1);
let membership5 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_ADMIN, CommunityMembershipStatus.OK, user5, community1);
let membership6 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user6, community2);
let membership7 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user7, community3);
let membership8 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_MODERATOR, CommunityMembershipStatus.OK, user8, community3);
let membership9 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user3, community4);
let membership10 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_USER, CommunityMembershipStatus.OK, user4, community4);

//


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