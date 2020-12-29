import {push, pop, replace} from 'svelte-spa-router'

export function pushTo(path) {
    push(path);
}