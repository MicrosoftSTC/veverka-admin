<script>
    import {createEventDispatcher} from 'svelte';

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import ListItemGroup from "svelte-materialify/src/components/List/ListItemGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Chip from 'svelte-materialify/src/components/Chip';

    export let gridType;
    export let data = [];
    export let selectedEntities = [];

    const dispatch = createEventDispatcher();

    function selectEntity(entity) {
        let name = entity.name;
        let entityIsNew = selectedEntities.findIndex(en => en.name === name);
        if (entityIsNew > -1) {
            selectedEntities = selectedEntities.filter(en => en.name !== name);
        } else {
            selectedEntities = [...selectedEntities, entity]
        }
        entitySelected();
    }

    function entitySelected() {
        dispatch("entity-selected", selectedEntities);
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
                        <ListItem on:click={() => selectEntity(user)} value="{user.username}">
                        <span slot="prepend" class="mt-n2">
                            <Avatar size={40}><img src="{`//picsum.photos/${user.num}`}" alt="profile"/></Avatar>
                        </span>
                            {user.username},
                            <Chip size="x-small" class="grey white-text">{user.points} Points</Chip>
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
                        <ListItem on:click={() => selectEntity(community.name)} value="{community.name}">
                        <span slot="prepend" class="mt-n2">
                            <Avatar size={40}><img src="{`//picsum.photos/${community.members}`}" alt="profile"/></Avatar>
                        </span>
                            {community.name},
                            <Chip size="x-small" class="grey white-text">{community.members} Members</Chip>
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