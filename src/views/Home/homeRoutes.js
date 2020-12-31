import Users from "./Users.svelte"
import UsersStatistics from "./UsersStatistics.svelte"

export let routes = {
    "/users": Users,
    "/statistics/*": UsersStatistics,
    "/statistics/users": UsersStatistics
};

export let prefix = "/home";