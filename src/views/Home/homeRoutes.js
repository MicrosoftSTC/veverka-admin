import Users from "./Users.svelte"
import Communities from "./Communities.svelte"
import Tests from "./Tests.svelte"
import TestDetail from "./TestDetail.svelte"
import UsersStatistics from "./UsersStatistics.svelte"

export let routes = {
    "/users": Users,
    "/communities": Communities,
    "/tests":Tests,
    "/tests/:id": TestDetail,
    "/statistics/*": UsersStatistics,
    "/statistics/users": UsersStatistics
};

export let prefix = "/home";