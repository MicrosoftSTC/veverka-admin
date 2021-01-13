<script>
    import {createEventDispatcher} from 'svelte';
    import {link} from 'svelte-spa-router'
    import {Routes} from "../views/Home/homeRoutes"

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import ListItemGroup from "svelte-materialify/src/components/List/ListItemGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Chip from 'svelte-materialify/src/components/Chip';

    export let gridType;
    export let data = [];
    export let reportType = "received";
    export let label = "board";
    export let disabled = false;
    let selectedEntities = [];
    let selectedEntity = null;
    let entitySelectedInGrid = false;

    const dispatch = createEventDispatcher();

    function selectEntity(entity) {
        if(gridType === "users"){
            let name = entity.name;
            let entityIsNew = selectedEntities.findIndex(en => en.name === name);
            if (entityIsNew > -1) {
                selectedEntities = selectedEntities.filter(en => en.name !== name);
            } else {
                selectedEntities = [...selectedEntities, entity]
            }
            entitySelected(selectedEntities);
        }else{
            if(entitySelectedInGrid && selectedEntity.id === entity.id){
                // unselect currently selected entity
                selectedEntity = null;
                entitySelectedInGrid = false;
            }else{
                selectedEntity = entity;
                entitySelectedInGrid = true;
            }
            entitySelected(selectedEntity);
        }
    }

    function entitySelected(selected) {
        dispatch("entity-selected", selected);
    }
</script>
<Card class="mt-3" outlined style="min-width: 100%">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            {label}
        </span>
    </div>
    <CardText>
        <div class="ml-auto mr-auto elevation-2" style="width:100%">
            {#if gridType === "users"}
                <ListItemGroup multiple>
                {#each data as user}
                    <ListItem bind:disabled on:click={() => selectEntity(user)} value="{user.username}">
                    <span slot="prepend" class="mt-n2">
                        <Avatar size={40}><img src="{`//picsum.photos/${user.num}`}" alt="profile"/></Avatar>
                    </span>
                        <a use:link={Routes.userDetail + user.id}>{user.username}</a>
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
                </ListItemGroup>
            {:else if gridType === "communities"}
                <ListItemGroup>
                {#each data as community}
                    <ListItem on:click={() => selectEntity(community)} value="{community.name}">
                    <span slot="prepend" class="mt-n2">
                        <Avatar size={40}><img src="{`//picsum.photos/${community.members}`}" alt="profile"/></Avatar>
                    </span>
                        {community.name}
                        <Chip size="x-small" class="grey white-text">{community.members} Members</Chip>
                        {#if community.banned}
                            <Chip class="ma-2 red white-text">Banned</Chip>
                        {:else if community.needsReview}
                            <Chip label class="ma-2 orange accent-3 white-text">Needs Review</Chip>
                        {/if}
                        {#if community.founder}
                            <Chip label class="ma-2 light-blue accent-3 white-text">
                                <a use:link={Routes.userDetail + Math.random().toString().slice(2,3)}>{community.founder}</a>
                            </Chip>
                        {/if}
                        <span slot="subtitle">
                        <p>{community.since}</p>
                    </span>
                    </ListItem>
                {/each}
                </ListItemGroup>
            {:else if gridType === "tests"}
                <ListItemGroup>
                    {#each data as test}
                        <ListItem on:click={() => selectEntity(test)} value="{test.name}">
                        <span slot="prepend" class="mt-n2">
                            <Avatar size={40}><img src="{`//picsum.photos/${test.points}`}" alt="profile"/></Avatar>
                        </span>
                            {test.name}
                            <Chip size="x-small" class="grey white-text">{test.points} Points</Chip>
                            <Chip size="x-small" class="green white-text">{test.completedUsers.length} Users Completed</Chip>
                            <Chip size="x-small" class="purple white-text">{test.questions.length} Questions</Chip>
                            {#if test.banned}
                                <Chip class="ma-2 red white-text">Banned</Chip>
                            {:else if test.needsReview}
                                <Chip label class="ma-2 orange accent-3 white-text">Needs Review</Chip>
                            {/if}
                            <Chip label class="ma-2 light-blue accent-3 white-text">
                                <a use:link={Routes.userDetail + Math.random().toString().slice(2,3)}>
                                    {test.creatorUsername}
                                </a>
                            </Chip>
                            <span slot="subtitle">
                                <p>{test.created}</p>
                            </span>
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if gridType === "questions"}
                <ListItemGroup>
                        {#each data as question}
                            <ListItem on:click={() => selectEntity(question)} value="{question.content}">
                                {question.content}
                                <Chip size="x-small" class="grey white-text">{question.answers.length} Answers</Chip>
                            </ListItem>
                        {/each}
                </ListItemGroup>
            {:else if gridType === "reports"}
                <ListItemGroup>
                    {#each data as report}
                        <ListItem on:click={() => selectEntity(report)} value="{report.reporter.username}">
                            {report.reporter.username}
                            {#if reportType === "given"}
                                <Chip label class="grey white-text ml-1">Receiver: {report.receiver.username}</Chip>
                            {/if}
                            <Chip label class="deep-purple white-text ml-1">{report.type.toUpperCase()}</Chip>
                            {#each report.reports as charge}
                                <Chip size="x-small" class="red white-text ml-1">{charge.content.charAt(0).toUpperCase() + charge.content.slice(1)}</Chip>
                            {/each}
                            {#if report.comment}
                                <Chip size="x-small" class="blue white-text">Comment</Chip>
                            {/if}
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if gridType === "posts"}
                <ListItemGroup>
                    {#each data as post}
                        <ListItem on:click={() => selectEntity(post)}>
                            {post.headline}
                            <Chip label class="ma-2 green accent-2 white-text">{post.content.split(" ").length} words</Chip>
                            {#if post.reports.length > 0}
                                <Chip label class="ma-2 pink accent-1 white-text">{post.reports.length} {post.reports.length > 1 ? "reports" : "report"}</Chip>
                            {/if}
                            {#if post.banned}
                                <Chip class="ma-2 red white-text">Banned</Chip>
                            {:else if post.needsReview}
                                <Chip label class="ma-2 orange accent-3 white-text">Needs Review</Chip>
                            {/if}
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if gridType === "stars"}
                <ListItemGroup>
                    {#each data as star}
                        <ListItem on:click={() => selectEntity(star)}>
                            <Chip label class="ma-2 green accent-2 white-text">{star.given.toString().slice(0, 15)}</Chip>
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else}
                <p>Nothing</p>
            {/if}
        </div>
    </CardText>
</Card>