<script lang="ts">
    import {pushTo} from "../utils/redirectService"

    import Icon from "svelte-materialify/src/components/Icon"
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import List from "svelte-materialify/src/components/List/List.svelte"
    import ListGroup from "svelte-materialify/src/components/List/ListGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Divider from "svelte-materialify/src/components/Divider/Divider.svelte"
    import NavigationDrawer from "svelte-materialify/src/components/NavigationDrawer/NavigationDrawer.svelte"
    import {mdiHome, mdiAccountBoxOutline, mdiChartBox, mdiHumanQueue, mdiGoogleDownasaur} from "@mdi/js"

    let active : boolean;
</script>
<div class="d-inline-block" style="min-width: 100%;">
    <NavigationDrawer style="height: 120vh; min-width: 100%; background: #9e9e9e">
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
            <ListItem on:click={() => pushTo('/home/communities')}>
                        <span slot="prepend">
                          <Icon path="{mdiHumanQueue}" />
                        </span>
                Communities
            </ListItem>
            <ListItem on:click={() => pushTo('/home/tests')}>
                        <span slot="prepend">
                            <Icon path="{mdiGoogleDownasaur}" />
                        </span>
                Tests
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