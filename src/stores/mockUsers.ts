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
import Channel from "../utils/entities/Channel";
import ChannelMembership from "../utils/entities/ChannelMembership";
import ChannelMembershipStatus from "../utils/enums/ChannelMembershipStatus";
import PostType from "../utils/enums/PostType";
import Post from "../utils/entities/Post";
import Comment from "../utils/entities/Comment";
import Star from "../utils/entities/Star";
import Vote from "../utils/entities/Vote";
import VoteValue from "../utils/enums/VoteValue";
import SocialSiteMembership from "../utils/entities/SocialSiteMembership";
import SocialSite from "../utils/entities/SocialSite";
import Test from "../utils/entities/Test";
import TestType from "../utils/enums/TestType";
import TestStatus from "../utils/enums/TestStatus";
import Question from "../utils/entities/Question";
import Option from "../utils/entities/Option";
import TestReport from "../utils/entities/TestReport";
import {TestReportCause} from "../utils/enums/TestReportCause";

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

let users = [user0,user1,user2,user3,user4,user5,user6,user7];

// mocking communities
let community0 = new Community(getId(), "chemičtíNadšenci", "Máme rádi chemii a založili jsme si na to skupinu", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.CHEMISTRY, ranDat(getId(), getId()), user0);
let community1 = new Community(getId(), "fyzikálníĎáblové", "Fyzika, fyzika, Newton honí skrblíka", CommunityPrivacyPolicy.PRIBLIC, CommunityType.EDUCATION, Subjects.PHYSICS, ranDat(getId(), getId()), user4);
let community2 = new Community(getId(), "Společenskovědátoři", "Společnost je ideální pouze tehdy, když nedávají zprávy na nově", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.HISTORY, ranDat(getId(), getId()), user6);
let community3 = new Community(getId(), "Matematická skupinka", "Jak říká Mirko Rokyta, ideální je pouze matika", CommunityPrivacyPolicy.PUBLIC, CommunityType.EDUCATION, Subjects.MATHS, ranDat(getId(), getId()), user7);
let community4 = new Community(getId(), "Rybáři zlín", "Lovíme ryby a jíme olivy", CommunityPrivacyPolicy.PRIVATE, CommunityType.FREE_TIME, Subjects.NO_SUBJECT, ranDat(getId(), getId()), user3);

let communities = [community0, community1, community2, community3, community4];


/*
    mocking community memberships, pair of user and community is
    based on the previous line in the mocking communities section,
    founder always has Role.COMMUNITY_SUPERADMIN by default
 */
let membership0 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user0, community0);
let membership1 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_ADMIN, CommunityMembershipStatus.REVIEW, user1, community0);
let membership2 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_MODERATOR, CommunityMembershipStatus.OK, user2, community0);
let membership3 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_USER, CommunityMembershipStatus.REVIEW, user3, community0);
let membership4 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user4, community1);
let membership5 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_ADMIN, CommunityMembershipStatus.REVIEW, user5, community1);
let membership6 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user6, community2);
let membership7 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user7, community3);
let membership8 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_MODERATOR, CommunityMembershipStatus.BANNED, user8, community3);
let membership9 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_SUPERADMIN, CommunityMembershipStatus.OK, user3, community4);
let membership10 = new CommunityMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), Role.COMMUNITY_USER, CommunityMembershipStatus.BANNED, user4, community4);

let memberships = [membership0, membership1, membership2, membership3, membership4,membership5, membership6, membership7, membership8, membership9, membership10];

// assigning memberships to communities
communities.forEach(community => {
    memberships.forEach(membership => {
        if(community === membership.community) {
            community.memberships.push(membership);
        }
    })
})

// assigning memberships and founded communities to users
users.forEach(user => {
    memberships.forEach(membership => {
        if(user === membership.member){
            if(membership.role === Role.COMMUNITY_SUPERADMIN){
                user.foundedCommunities.push(membership.community);
            }
            user.activeCommunityMemberships.push(membership);
        }
    })
})

/*
    mocking community channels
 */

// admin or mod creates request for creating channel
let channel0 = new Channel(getId(), "Kanál přístav", community0, user2, user1);
let channel1 = new Channel(getId(), "Kanál frinds", community0, user2, user0);
// superadmin and moderator duo here
let channel2 = new Channel(getId(), "Kanál csgo", community3, user8, user7);
let channel3 = new Channel(getId(), "Among us", community3, user8, user7);
let channel4 = new Channel(getId(), "LOL", community3, user8, user7);
// superadmin created channels alone
let channel5 = new Channel(getId(), "DOTA2", community4, user3, user3);
let channel6 = new Channel(getId(), "Raketový přebor", community4, user3, user3);
let channel7 = new Channel(getId(), "Raft", community4, user3, user3);

let channels = [channel0,channel1,channel2,channel3,channel4,channel5,channel6,channel7];

/*
    channelMemberships are based on who found the channel, only founders are members for this moment
 */
let channelMembership0 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user2, channel0);
let channelMembership1 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user2, channel1);
let channelMembership2 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user8, channel2);
let channelMembership3 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user8, channel3);
let channelMembership4 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user8, channel4);
let channelMembership5 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user3, channel5);
let channelMembership6 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user3, channel6);
let channelMembership7 = new ChannelMembership(getId(), ranDat(getId(), getId()), ranDat(getId(), getId()), ChannelMembershipStatus.OK, user3, channel7);

let channelMemberships = [channelMembership0,channelMembership2,channelMembership3,channelMembership4,channelMembership5,channelMembership6,channelMembership7];

// assigning channels to communities
communities.forEach(community => {
    channels.forEach(channel => {
        if(channel.community === community){
            community.channels.push(channel);
        }
    })
})

// assigning user founded channels
users.forEach(user => {
    channels.forEach(channel => {
        if(channel.founder === user){
            user.foundedChannels.push(channel);
        }
    })
})

// assigning user channel memberships
users.forEach(user => {
    channelMemberships.forEach(channelMembership => {
        if(channelMembership.member === user){
            user.activeChannelMemberships.push(channelMembership);
        }
    })
})

// assigning memberships to channels
channels.forEach(channel => {
    channelMemberships.forEach(channelMembership => {
        if(channel === channelMembership.channel){
            channel.memberships.push(channelMembership);
        }
    })
})

/*
    posts are assigned to the channel that user is member in
 */
let post0 = new Post(getId(), "Jak si postavit skleník", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user2, channel0);
let post1 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user2, channel0);
let post2 = new Post(getId(), "Jak hacknout bakaláře", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user2, channel0);
let post3 = new Post(getId(), "Jak opravit převodovku", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user2, channel0);
let post4 = new Post(getId(), "Upečme dort ve 3 krocích", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user2, channel0);
let post5 = new Post(getId(), "Krocan jako pochutina", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user2, channel1);
let post6 = new Post(getId(), "Opravujeme plechvou střechu", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user8, channel2);
let post7 = new Post(getId(), "Připravit pochutinu zvládne každý", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user8, channel3);
let post8 = new Post(getId(), "Matematika, logaritmická funkce", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user8, channel4);
let post9 = new Post(getId(), "Matematika, inverzní funkce", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user3, channel6);
let post10 = new Post(getId(), "Fyzika, Brownův pohyb", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user3, channel7);
let post11 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user8, channel3);
let post12 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user8, channel3);
let post13 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user8, channel4);
let post14 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.INFORMATIVE, ranDat(getId(), getId()), user2, channel1);
let post15 = new Post(getId(), null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", PostType.CASUAL, ranDat(getId(), getId()), user2, channel0);

let posts = [post0,post1,post2,post3,post4,post5,post6,post7,post8,post9,post10,post11,post12,post13,post14,post15]

// assigning posts to users
users.forEach(user => {
    posts.forEach(post => {
        if(post.author === user){
            user.posts.push(post);
        }
    })
})

// assigning posts to channels
channels.forEach(channel => {
    posts.forEach(post => {
        if(channel === post.channel){
            channel.posts.push(post);
        }
    })
})

// @ts-ignore
let comment0 = new Comment(getId(), "Tohle je fakt dobrý příspěvek", ranDat(getId(), getId()), user2, post0, null);

let comments : Comment[] = [comment0];

// assigning comments to post
posts.forEach(post => {
    comments.forEach(comment => {
        if(comment.post === post){
            post.comments.push(comment);
        }
    })
})

let star0 = new Star(getId(), user2, ranDat(getId(), getId()), comment0);

let stars = [star0]

// assigning stars to comments
comments.forEach(comment => {
    stars.forEach(star => {
        if (star.comment === comment) {
            comment.stars.push(star);
        }
    })
})

let vote = new Vote(getId(), VoteValue.POSITIVE, user2, post0);

let votes = [vote];

// assigning votes to posts
posts.forEach(post => {
    votes.forEach(vote => {
        if(vote.post === post){
            post.votes.push(vote);
        }
    })
})

/*
    mocking social sites
 */

let socialSite0 = new SocialSite(getId(), "facebook", "http://facebook.com");
let socialSite1 = new SocialSite(getId(), "instagram", "http://instagram.com");

let socialSites = [socialSite0, socialSite1];

/*
    social sites memberships
 */

let socialSiteMembership0 = new SocialSiteMembership(getId(), user0, socialSite0, "parek v rohliku");
let socialSiteMembership1 = new SocialSiteMembership(getId(), user0, socialSite1, "parek v rohliku");

let socialSiteMemberships = [socialSiteMembership0, socialSiteMembership1]

// assigning social site memberships to user
users.forEach(user => {
    socialSiteMemberships.forEach(membership => {
        if(membership.member === user){
            user.socialSiteMemberships.push(membership);
        }
    })
})

// assigning social site memberships to social site
socialSites.forEach(site => {
    socialSiteMemberships.forEach(membership => {
        if(membership.site === site){
            site.memberships.push(membership);
        }
    })
})

/*
    mocking tests
 */
let test0 = new Test(getId(), 342, user0, Subjects.MATHS, TestType.COMMUNITY, TestStatus.APPROVED);

let tests =[test0];

// assigning created test to user
users.forEach(user => {
    tests.forEach(test => {
        if(test.creator === user){
            user.createdTest.push(test);
        }
    })
})

/*
    mocking questions
 */

let question0 = new Question(getId(),test0,"What is the biggest continent on Earth?")

let questions = [question0];

// assign questions to tests
tests.forEach(test => {
    questions.forEach(question => {
        if(question.test === test){
            test.questions.push(question);
        }
    })
})

/*
    mocking options
 */

let option0 = new Option(getId(),true,"Asia", question0);

let options = [option0];

// assigning options to question
questions.forEach(question => {
    options.forEach(option => {
        if(option.question === question){
            question.options.push(option);
        }
    })
})

let testReport0 = new TestReport(getId(), ranDat(getId(), getId()), "Tehnle test se mi nelíní", [TestReportCause.SEXUAL_HARASSMENT, TestReportCause.MANIPULATION], user0, test0);

let testReports = [testReport0];

tests.forEach(test => {
    testReports.forEach(testReport => {
        if(testReport.reportedTest === test){
            test.testReports.push(testReport);
        }
    })
})

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