import { writable } from 'svelte/store';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const mockedTests = writable(
    [
        {
            name: "Geography knowledge test",
            creatorUsername: "HnědýBobr",
            points: parseInt(Math.random().toString().slice(2, 3)),
            category: "Geography",
            badge: "some badge to be implemented",
            completedUsers: [
                {
                    name: "František Oprcálek",
                    username: "Frantosakoz604",
                    num: 54,
                    needsReview: Math.random().toString().slice(2, 3) > 5,
                    banned: Math.random().toString().slice(2, 3) > 7.5,
                    founder: Math.random().toString().slice(2, 3) > 7,
                    joined: randomDate(new Date(2012, 0, 1), new Date()),
                    points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
                },
                {
                    name: "Jarmila Krásná",
                    username: "JarmilkaKarkulka20",
                    num: 21,
                    needsReview: Math.random().toString().slice(2, 3) > 5,
                    banned: Math.random().toString().slice(2, 3) > 7.5,
                    founder: Math.random().toString().slice(2, 3) > 7,
                    joined: randomDate(new Date(2012, 0, 1), new Date()),
                    points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
                }
            ],
            questions: [
                {
                    content: "What is the biggest continent on Earth?",
                    answers: [
                        {
                            content: "Asia",
                            correct: true
                        },
                        {
                            content: "Africa",
                            correct: false
                        },
                        {
                            content: "North America",
                            correct: false
                        },
                        {
                            content: "South America",
                            correct: false
                        },
                        {
                            content: "Antarctica",
                            correct: false
                        },
                        {
                            content: "Australia",
                            correct: false
                        },
                        {
                            content: "Europe",
                            correct: false
                        }
                    ]
                },
                {
                    content: "Which country has the most citizens?",
                    answers: [
                        {
                            content: "USA",
                            correct: false
                        },
                        {
                            content: "China",
                            correct: true
                        },
                        {
                            content: "India",
                            correct: false
                        }
                    ]
                }
            ]
        },
        {
            name: "Kurt Cobain knowledge test",
            creatorUsername: "NirvanaFan09",
            points: parseInt(Math.random().toString().slice(2, 3)),
            category: "Music",
            badge: "some badge to be implemented",
            completedUsers: [
                {
                    name: "Josef Drsný",
                    username: "Drsnak02",
                    num: 666,
                    needsReview: Math.random().toString().slice(2,3) > 5,
                    banned: Math.random().toString().slice(2,3) > 7.5,
                    founder: Math.random().toString().slice(2,3) > 7,
                    joined: randomDate(new Date(2012, 0, 1), new Date()),
                    points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
                },
                {
                    name: "Lucifer Hrozný",
                    username: "Luci4er",
                    num: 767,
                    needsReview: Math.random().toString().slice(2,3) > 5,
                    banned: Math.random().toString().slice(2,3) > 7.5,
                    founder: Math.random().toString().slice(2,3) > 7,
                    joined: randomDate(new Date(2012, 0, 1), new Date()),
                    points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
                }
            ],
            questions: [
                {
                    content: "What instrument has kurt cobain played the most?",
                    answers: [
                        {
                            content: "Electric guitar",
                            correct: true
                        },
                        {
                            content: "Bass guitar",
                            correct: false
                        },
                        {
                            content: "Drums",
                            correct: false
                        },
                        {
                            content: "Keyboard",
                            correct: false
                        }
                    ]
                },
                {
                    content: "What song did not Kurt Cobain write?",
                    answers: [
                        {
                            content: "Negative Creep",
                            correct: false
                        },
                        {
                            content: "Enter Sandman",
                            correct: true
                        },
                        {
                            content: "Smells Like Teen Spirit",
                            correct: false
                        }
                    ]
                }
            ]
        }
    ]
)