import { writable } from 'svelte/store';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let id = 0;

function getId(){
    return ++id;
}

export const mockedUsers = writable(
    [
        {
            id: getId(),
            name: "František Oprcálek",
            username: "Frantosakoz604",
            num: 54,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Jarmila Krásná",
            username: "JarmilkaKarkulka20",
            num: 21,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
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
            id: getId(),
            name: "Lucifer Hrozný",
            username: "Luci4er",
            num: 767,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Marek Přeskočpole",
            username: "MarkosTukan",
            num: 90,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Jiří Oberfrajer",
            username: "JsemFrajerTadyATed",
            num: 4334,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Barbora Jablková",
            username: "Fry89",
            num: 11,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Jakub Kohák",
            username: "Jacob03",
            num: 3424,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
        {
            id: getId(),
            name: "Kateřina Peake",
            username: "NejlepsiMinistr102",
            num: 76,
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            founder: Math.random().toString().slice(2,3) > 7,
            joined: randomDate(new Date(2012, 0, 1), new Date()),
            points: Math.round(Math.pow(parseInt(Math.random().toString().slice(2, 3)), parseInt(Math.random().toString().slice(2, 3)) / 2))
        },
    ]
);