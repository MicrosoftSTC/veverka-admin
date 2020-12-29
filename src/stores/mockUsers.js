import { writable } from 'svelte/store';

export const mockedUsers = writable(
    [
        {
            name: "František Oprcálek",
            username: "Frantosakoz604",
            num: 54,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Jarmila Krásná",
            username: "JarmilkaKarkulka20",
            num: 21,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Josef Drsný",
            username: "Drsnak02",
            num: 666,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Lucifer Hrozný",
            username: "Luci4er",
            num: 767,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Marek Přeskočpole",
            username: "MarkosTukan",
            num: 90,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Jiří Oberfrajer",
            username: "JsemFrajerTadyATed",
            num: 4334,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Barbora Jablková",
            username: "Fry89",
            num: 11,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Jakub Kohák",
            username: "Jacob03",
            num: 3424,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
        {
            name: "Kateřina Peake",
            username: "NejlepsiMinistr102",
            num: 76,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 8.5
        },
    ]
);