<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {link} from 'svelte-spa-router'
    import {Routes} from "../views/Home/homeRoutes"

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import ListItemGroup from "svelte-materialify/src/components/List/ListItemGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Chip from 'svelte-materialify/src/components/Chip';
    import GridType from "../utils/enums/GridType";
    import User from "../utils/entities/User";
    import Community from "../utils/entities/Community";
    import Test from "../utils/entities/Test";
    import Post from "../utils/entities/Post";

    export interface Props {
        gridType: GridType;
        data: User[] | Community[] | Test[] | Post[];
        username?:string;
        reportType?:string;
        label:string;
        disabled:boolean;
    }

    export let props:Props;

    // register selectedEntity and selectedEntities variable globally
    if(props.data instanceof User){
        var selectedEntity : User;
        var selectedEntities : User[];
    }else if(props.data instanceof Community){
        var selectedEntity : Community;
        var selectedEntities : Community[];
    }else if(props.data instanceof Test){
        var selectedEntity : Test;
        var selectedEntities : Test[];
    }else if(props.data instanceof Post){
        var selectedEntity : Post;
        var selectedEntities : Post[];
    }
    let entitySelectedInGrid = false;

    // replace these lines of code, props are placed into interface
    // export let gridType;
    // export let data = [];
    // export let username; // used in deciding whether to put link on grid or not
    // export let reportType = "received";
    // export let label = "board";
    // export let disabled = false;


    const dispatch = createEventDispatcher();

    function selectEntity(entity : User | Community | Test | Post) : void{
        if(entity instanceof User && selectedEntities[0] instanceof User){
            let name = entity.username;
            let entityIsNew = selectedEntities.findIndex(user => user.username === name);
            if (entityIsNew > -1) {
                selectedEntities = selectedEntities.filter(en => en.username !== name);
            } else {
                selectedEntities = [...selectedEntities, entity]
            }
        }else{
            if(entitySelectedInGrid && selectedEntity.id === entity.id) {
                // unselect currently selected entity
                selectedEntity = null;
                entitySelectedInGrid = false;
            }else{
                if(entity instanceof Community){
                    selectedEntity = entity;
                }else if(entity instanceof Test){
                    selectedEntity = entity;
                }else if(entity instanceof Post){
                    selectedEntity = entity;
                }
                entitySelectedInGrid = true;
            }
        }
    }

    function entitySelected(selected) {
        dispatch("entity-selected", selected);
    }
</script>
<Card class="mt-3" outlined style="min-width: 100%">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            {props.label}
        </span>
    </div>
    <CardText>
        <div class="ml-auto mr-auto elevation-2" style="width:100%">
            {#if props.gridType === GridType.USERS}
                <ListItemGroup multiple>
                {#each props.data as user}
                    <ListItem bind:disabled={props.disabled} on:click={() => selectEntity(user)} value="{user.username}">
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
            {:else if props.gridType === GridType.COMMUNITIES}
                <ListItemGroup>
                {#each props.data as community}
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
            {:else if props.gridType === GridType.TESTS}
                <ListItemGroup>
                    {#each props.data as test}
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
            {:else if props.gridType === GridType.QUESTIONS}
                <ListItemGroup>
                        {#each props.data as question}
                            <ListItem on:click={() => selectEntity(question)} value="{question.content}">
                                {question.content}
                                <Chip size="x-small" class="grey white-text">{question.answers.length} Answers</Chip>
                            </ListItem>
                        {/each}
                </ListItemGroup>
            {:else if props.gridType === GridType.REPORTS}
                <ListItemGroup>
                    {#each props.data as report}
                        <ListItem on:click={() => selectEntity(report)} value="{report.reporter.username}">
                            {#if report.reporter.username !== username}
                                <!-- [HARDCODED LINK :)] -->
                                <a use:link={Routes.userDetail + 1}>
                                    {report.reporter.username}
                                </a>
                                {:else}
                                {report.reporter.username}
                            {/if}
                            {#if report.receiver}
                                <Chip label class="ma-2 light-blue accent-3 white-text">
                                    <!-- [HARDCODED LINK :)] -->
                                    <a use:link={Routes.userDetail + Math.random().toString().slice(2,3)}>
                                        {report.receiver.username}
                                    </a>
                                </Chip>
                            {/if}
                            {#if report.type}
                                <Chip label class="deep-purple white-text ml-1">{report.type.toUpperCase()}</Chip>
                            {/if}
                            {#each report.reports as charge}
                                {#if charge.type}
                                    <Chip label class="deep-purple white-text ml-1">{charge.type.toUpperCase()}</Chip>
                                {/if}
                                <Chip size="x-small" class="red white-text ml-1">{charge.content.charAt(0).toUpperCase() + charge.content.slice(1)}</Chip>
                            {/each}
                            {#if report.comment}
                                <Chip size="x-small" class="blue white-text">Comment</Chip>
                            {/if}
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if props.gridType === GridType.POSTS}
                <ListItemGroup>
                    {#each props.data as post}
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
                            <Chip label class="ma-2 light-blue accent-3 white-text">
                                <a use:link={Routes.userDetail + Math.random().toString().slice(2,3)}>
                                    {username}
                                </a>
                            </Chip>
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if props.gridType === GridType.STARS}
                <ListItemGroup>
                    {#each props.data as star}
                        <ListItem on:click={() => selectEntity(star)}>
                            <Chip label class="ma-2 deep purple white-text">{star.type.toUpperCase()}</Chip>
                            <Chip label class="ma-2 light-blue accent-3 white-text">
                                <a use:link={Routes.userDetail + Math.random().toString().slice(2,3)}>
                                    {username}
                                </a>
                            </Chip>
                        </ListItem>
                    {/each}
                </ListItemGroup>
            {:else if props.gridType === GridType.ACTIVITY}
                <p>Graph should be here</p>
            {:else}
                <p>Error</p>
            {/if}
        </div>
    </CardText>
</Card>