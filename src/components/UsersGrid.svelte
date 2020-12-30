<script>
    import { createEventDispatcher } from 'svelte';

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import ListItemGroup from "svelte-materialify/src/components/List/ListItemGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Chip from 'svelte-materialify/src/components/Chip';

    export let actionAble;
    export let users;
    let selectedUsers = [];
    let group;

    const dispatch = createEventDispatcher();

    function selectUser(username){
        let usernameIsNew = selectedUsers.findIndex(i => i === username);
        if(usernameIsNew > -1){
            selectedUsers = selectedUsers.filter(un => un !== username);
        }else{
            selectedUsers = [...selectedUsers, username]
        }
        if(!actionAble) actionAble = true;
        else if(selectedUsers.length === 0) actionAble = false;
        userSelected();
    }

    function userSelected(){
        if(actionAble){
            dispatch("user-selected", true)
        } else {
            dispatch("user-selected", false)
        }
    }
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Board
        </span>
    </div>
    <CardText>
        <div class="ml-auto mr-auto elevation-2" style="width:100%">
            <ListItemGroup multiple>
                {#each users as user}
                    <ListItem on:click={() => selectUser(user.username)} value="{user.username}">
                    <span slot="prepend" class="mt-n2">
                        <Avatar size={40}><img src="{`//picsum.photos/${user.num}`}" alt="profile" /></Avatar>
                    </span>
                        {user.username}, <Chip size="x-small" class="grey white-text">{user.points}</Chip>
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
            </ListItemGroup>
        </div>
    </CardText>
</Card>