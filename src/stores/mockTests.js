// import { writable } from 'svelte/store';
//
// let id = 0;
//
// function getId(){
//     return ++id;
// }
//
// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
//
// export const mockedTests = writable(
//     [
//         {
//             name: "Geography knowledge test",
//             id: getId(),
//             creatorUsername: "HnědýBobr",
//             points: parseInt(Math.random().toString().slice(2, 3)),
//             created: randomDate(new Date(2012, 0, 1), new Date()),
//             category: "Geography",
//             badge: "some badge to be implemented",
//             needsReview: Math.random().toString().slice(2,3) > 5,
//             banned: Math.random().toString().slice(2,3) > 7.5,
//             reports: [],
//             completedUsers: [
//                 {
//                     name: "František Oprcálek",
//                     username: "Frantosakoz604",
//                     num: 54,
//                     needsReview: Math.random().toString().slice(2, 3) > 5,
//                     banned: Math.random().toString().slice(2, 3) > 7.5,
//                     founder: Math.random().toString().slice(2, 3) > 7,
//                     joined: randomDate(new Date(2012, 0, 1), new Date()),
//                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                 },
//                 {
//                     name: "Jarmila Krásná",
//                     username: "JarmilkaKarkulka20",
//                     num: 21,
//                     needsReview: Math.random().toString().slice(2, 3) > 5,
//                     banned: Math.random().toString().slice(2, 3) > 7.5,
//                     founder: Math.random().toString().slice(2, 3) > 7,
//                     joined: randomDate(new Date(2012, 0, 1), new Date()),
//                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                 },
//                 {
//                     name: "Bořek Mořelepil",
//                     username: "See_Gluer32",
//                     num: 9934,
//                     needsReview: Math.random().toString().slice(2, 3) > 5,
//                     banned: Math.random().toString().slice(2, 3) > 7.5,
//                     founder: Math.random().toString().slice(2, 3) > 7,
//                     joined: randomDate(new Date(2012, 0, 1), new Date()),
//                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                 }
//             ],
//             questions: [
//                 {
//                     id: getId(),
//                     content: "What is the biggest continent on Earth?",
//                     answers: [
//                         {
//                             content: "Asia",
//                             correct: true
//                         },
//                         {
//                             content: "Africa",
//                             correct: false
//                         },
//                         {
//                             content: "North America",
//                             correct: false
//                         },
//                         {
//                             content: "South America",
//                             correct: false
//                         },
//                         {
//                             content: "Antarctica",
//                             correct: false
//                         },
//                         {
//                             content: "Australia",
//                             correct: false
//                         },
//                         {
//                             content: "Europe",
//                             correct: false
//                         }
//                     ]
//                 },
//                 {
//                     id: getId(),
//                     content: "Which country has the most citizens?",
//                     answers: [
//                         {
//                             content: "USA",
//                             correct: false
//                         },
//                         {
//                             content: "China",
//                             correct: true
//                         },
//                         {
//                             content: "India",
//                             correct: false
//                         }
//                     ]
//                 },
//                 {
//                     id: getId(),
//                     content: "Who is the name of the biggest desert on planet Earth",
//                     answers: [
//                         {
//                             content: "Antarctic desert",
//                             correct: true
//                         },
//                         {
//                             content: "Sahara",
//                             correct: false
//                         },
//                         {
//                             content: "Gobi",
//                             correct: false
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: "Kurt Cobain knowledge test",
//             id: getId(),
//             creatorUsername: "NirvanaFan09",
//             points: parseInt(Math.random().toString().slice(2, 3)),
//             created: randomDate(new Date(2012, 0, 1), new Date()),
//             category: "Music",
//             badge: "some badge to be implemented",
//             needsReview: Math.random().toString().slice(2,3) > 5,
//             banned: Math.random().toString().slice(2,3) > 7.5,
//             reports: [
//                 {
//                     id: getId(),
//                     type: "test",
//                     reporter: {
//                         name: "Pavel Křídlo",
//                         username: "Wingman90",
//                         num: 1,
//                         needsReview: Math.random().toString().slice(2,3) > 5,
//                         banned: Math.random().toString().slice(2,3) > 7.5,
//                         founder: Math.random().toString().slice(2,3) > 7,
//                         joined: randomDate(new Date(2012, 0, 1), new Date()),
//                         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                     },
//                     reports: [
//                         {
//                             id: getId(),
//                             content: "Wrong answers",
//                         },
//                         {
//                             id: getId(),
//                             content: "trolling",
//                         }
//                     ],
//                     comment: "This test is not a very good one, I don't like it, the question 3 is offensive agains helicopters"
//                 },
//                 {
//                     id: getId(),
//                     type: "test",
//                     reporter: {
//                         name: "Friend Chicked",
//                         username: "KFC54",
//                         num: 876,
//                         needsReview: Math.random().toString().slice(2,3) > 5,
//                         banned: Math.random().toString().slice(2,3) > 7.5,
//                         founder: Math.random().toString().slice(2,3) > 7,
//                         joined: randomDate(new Date(2012, 0, 1), new Date()),
//                         points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                     },
//                     reports: [
//                         {
//                             id: getId(),
//                             content: "sexual harrasment",
//                         },
//                         {
//                             id: getId(),
//                             content: "insulting others",
//                         }
//                     ],
//                     comment: "This test offends me, it shows naked letters, and has wrong answers"
//                 }
//             ],
//             completedUsers: [
//                 {
//                     name: "Josef Drsný",
//                     username: "Drsnak02",
//                     num: 666,
//                     needsReview: Math.random().toString().slice(2,3) > 5,
//                     banned: Math.random().toString().slice(2,3) > 7.5,
//                     founder: Math.random().toString().slice(2,3) > 7,
//                     joined: randomDate(new Date(2012, 0, 1), new Date()),
//                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                 },
//                 {
//                     name: "Lucifer Hrozný",
//                     username: "Luci4er",
//                     num: 767,
//                     needsReview: Math.random().toString().slice(2,3) > 5,
//                     banned: Math.random().toString().slice(2,3) > 7.5,
//                     founder: Math.random().toString().slice(2,3) > 7,
//                     joined: randomDate(new Date(2012, 0, 1), new Date()),
//                     points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
//                 }
//             ],
//             questions: [
//                 {
//                     id: getId(),
//                     content: "What instrument has Kurt Cobain played the most?",
//                     answers: [
//                         {
//                             content: "Electric guitar",
//                             correct: true
//                         },
//                         {
//                             content: "Bass guitar",
//                             correct: false
//                         },
//                         {
//                             content: "Drums",
//                             correct: false
//                         },
//                         {
//                             content: "Keyboard",
//                             correct: false
//                         }
//                     ]
//                 },
//                 {
//                     id: getId(),
//                     content: "What song did not Kurt Cobain write?",
//                     answers: [
//                         {
//                             content: "Negative Creep",
//                             correct: false
//                         },
//                         {
//                             content: "Enter Sandman",
//                             correct: true
//                         },
//                         {
//                             content: "Smells Like Teen Spirit",
//                             correct: false
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// )