<script>
    import {pushTo} from "../utils/redirectService"

    import Icon from "svelte-materialify/src/components/Icon"
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import List from "svelte-materialify/src/components/List/List.svelte"
    import ListGroup from "svelte-materialify/src/components/List/ListGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Divider from "svelte-materialify/src/components/Divider/Divider.svelte"
    import NavigationDrawer from "svelte-materialify/src/components/NavigationDrawer/NavigationDrawer.svelte"
    import {mdiHome, mdiAccountBoxOutline, mdiChartBox} from "@mdi/js"

    let active;
</script>
<div class="d-inline-block" style="min-width: 100%; height: 100vh; background: #00c853">
    <NavigationDrawer style="height: 100vh; min-width: 100%; background: #d0def5">
        <ListItem>
                    <span slot="prepend" class="ml-n2">
                        <Avatar size={40}><img src="//picsum.photos/200" alt="profile" /></Avatar>
                    </span>
            Admin 008
        </ListItem>
        <Divider />
        <List dense nav>
            <ListItem on:click={() => pushTo('/home')}>
                        <span slot="prepend">
                            <Icon path="{mdiHome}" />
                        </span>
                Home
            </ListItem>
            <ListItem on:click={() => pushTo('/home/users')}>
                        <span slot="prepend">
                          <Icon path="{mdiAccountBoxOutline}" />
                        </span>
                Users
            </ListItem>
            <ListGroup bind:active offset={72}>
                        <span slot="prepend">
                            <Icon path="{mdiChartBox}" />
                        </span>
                <span slot="activator"> Statistics </span>
                <span slot="append">
                            <Icon class="mdi mdi-chevron-up" rotate={active ? 0 : 180} />
                        </span>
                <ListItem  on:click={() => pushTo('/home/statistics/users')}>Users</ListItem>
                <ListItem>Groups</ListItem>
                <ListItem>Public Wall</ListItem>
                <ListItem>Metrics</ListItem>
            </ListGroup>
        </List>
    </NavigationDrawer>
</div>