// import NotFound from './views/NotFound.svelte';
import Home from './views/Home/Home.svelte';
import Login from "./views/Login/Login.svelte";

export default {
    // '/': wrap({
    //     component: Home,
    //     conditions : [
    //         (detail) => {
    //             // Pre-condition succeeds only 50% of times
    //             return true;
    //         },
    //     ]
    // }),
    "/home": Home,
    "/home/*": Home,
    "/login": Login,
    // '*': NotFound,

};