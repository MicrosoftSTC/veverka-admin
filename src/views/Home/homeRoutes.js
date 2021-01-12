import Users from "./Users.svelte"
import UserDetails from "./UserDetail.svelte"
import Communities from "./Communities.svelte"
import Tests from "./Tests.svelte"
import TestDetail from "./TestDetail.svelte"
import UsersStatistics from "./UsersStatistics.svelte"
// error pages
import NotFound from "./NotFound.svelte"
// utils
import {wrap} from 'svelte-spa-router/wrap'

export let routes = {
    "/users": Users,
    "/users/:id": wrap({
        component: UserDetails,
        conditions: [
            detail => {
                let param = detail.location.charAt(detail.location.length - 1);
                if(Number.isNaN(parseInt(param))){
                    return false;
                }
                return true;
            }
        ]
    }),
    "/communities": Communities,
    "/tests":Tests,
    "/tests/:id": TestDetail,
    "/statistics/*": UsersStatistics,
    "/statistics/users": UsersStatistics,
    "/notFound": NotFound
};

// route prefix
export let prefix = "/home";

// router constants
export const Routes = Object.freeze({
    users:  prefix + "/users",
    userDetail: prefix + "/users/",
    communities: prefix + "/communities",
    tests: prefix + "/tests",
    testDetail: prefix + "/tests/"
});