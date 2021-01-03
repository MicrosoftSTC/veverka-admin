import Users from "./Users.svelte"
import Communities from "./Communities.svelte"
import Tests from "./Tests.svelte"
import UsersStatistics from "./UsersStatistics.svelte"

export let routes = {
    "/users": Users,
    "/communities": Communities,
    "/tests":Tests,
    "/statistics/*": UsersStatistics,
    "/statistics/users": UsersStatistics
};

export let prefix = "/home";