<script>
    import {createEventDispatcher} from 'svelte';

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import ListItemGroup from "svelte-materialify/src/components/List/ListItemGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Chip from 'svelte-materialify/src/components/Chip';

    export let gridType;
    export let actionAble;
    export let data = [];
    let selectedUsers = [];

    const dispatch = createEventDispatcher();

    function selectUser(username) {
        let usernameIsNew = selectedUsers.findIndex(i => i === username);
        if (usernameIsNew > -1) {
            selectedUsers = selectedUsers.filter(un => un !== username);
        } else {
            selectedUsers = [...selectedUsers, username]
        }
        if (!actionAble) actionAble = true;
        else if (selectedUsers.length === 0) actionAble = false;
        userSelected();
    }

    function userSelected() {
        if (actionAble) {
            dispatch("user-selected", true)
        } else {
            dispatch("user-selected", false)
        }
    }
</script>
<Card class="mt-3" outlined style="min-width: 100%">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Board
        </span>
    </div>
    <CardText>
        <div class="ml-auto mr-auto elevation-2" style="width:100%">
            <ListItemGroup multiple>
                {#if gridType === "users"}
                    {#each data as user}
                        <ListItem on:click={() => selectUser(user.username)} value="{user.username}">
                        <span slot="prepend" class="mt-n2">
                            <Avatar size={40}><img src="{`//picsum.photos/${user.num}`}" alt="profile"/></Avatar>
                        </span>
                            {user.username},
                            <Chip size="x-small" class="grey white-text">{user.points}</Chip>
                            {#if user.banned}
                                <Chip class="ma-2 red white-text">Banned</Chip>
                            {:else if user.needsReview}
                                <Chip label class="ma-2 orange accent-3 white-text">Needs Review</Chip>
                            {/if}
                            {#if user.founder}
                                <Chip label class="ma-2 light-blue accent-3 white-text">Founder</Chip>
                            {/if}
                            <span slot="subtitle">
                            <p>{user.name}, {user.joined}</p>
                        </span>
                        </ListItem>
                    {/each}
                {:else if gridType === "communities"}
                    {#each data as community}
                        <ListItem on:click={() => selectUser(community.name)} value="{community.name}">
                        <span slot="prepend" class="mt-n2">
                            <Avatar size={40}><img src="{`//picsum.photos/${community.members}`}" alt="profile"/></Avatar>
                        </span>
                            {community.name},
                            <Chip size="x-small" class="grey white-text">{community.members}</Chip>
                            {#if community.banned}
                                <Chip class="ma-2 red white-text">Banned</Chip>
                            {:else if community.needsReview}
                                <Chip label class="ma-2 orange accent-3 white-text">Needs Review</Chip>
                            {/if}
                            {#if community.founder}
                                <Chip label class="ma-2 light-blue accent-3 white-text">{community.founder}</Chip>
                            {/if}
                            <span slot="subtitle">
                            <p>{community.since}</p>
                        </span>
                        </ListItem>
                    {/each}
                {/if}
            </ListItemGroup>
        </div>
    </CardText>
</Card>