import { writable } from 'svelte/store';

let id = 0;

function getId(){
    return ++id;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export const mockedCommunities = writable(
    [
        {
            name: "Dějepiss středověk",
            id: getId(),
            founder: `Ariel_Pereggini${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
        {
            name: "Geography best subject community",
            id: getId(),
            founder: `Burak Arašíd${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
        {
            name: "čeština pro pokročilé",
            id: getId(),
            founder: `Krum Páč${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
        {
            name: "Fotbal paramo Svítkov",
            id: getId(),
            founder: `Sou Čin${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
        {
            name: "španělština náchod",
            id: getId(),
            founder: `Steven_Spielber_Fan${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
        {
            name: "Metallica fans",
            id: getId(),
            founder: `Uwe_Filter_${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),

        },
        {
            name: "Biology memes",
            id: getId(),
            founder: `Jan_Koz${Math.random().toString().slice(2, 4)}`,
            members: parseInt(Math.random().toString().slice(2,4)),
            needsReview: Math.random().toString().slice(2,3) > 5,
            banned: Math.random().toString().slice(2,3) > 7.5,
            since: randomDate(new Date(2012, 0, 1), new Date()),
        },
    ]
)