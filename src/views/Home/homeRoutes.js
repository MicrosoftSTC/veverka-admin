import Users from "./Users.svelte"
import Communities from "./Communities.svelte"
import UsersStatistics from "./UsersStatistics.svelte"

export let routes = {
    "/users": Users,
    "/communities": Communities,
    "/statistics/*": UsersStatistics,
    "/statistics/users": UsersStatistics
};

export let prefix = "/home";