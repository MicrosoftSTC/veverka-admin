<script>
    import UsersGrid from "../../components/UsersGrid.svelte";
    import UsersFilter from "../../components/UsersFilter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    import {mockedUsers} from "../../stores/mockUsers"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    let actionAble = false;

    let allUsers = [];
    mockedUsers.subscribe(u => {
        allUsers = u;
    });

    let activeUsersInGrid = allUsers;

    function handleActionAble(event) {
        actionAble = event.detail;
    }

    function filterByUsername(event){
        let usernameStart = event.detail;
        if(usernameStart === "") activeUsersInGrid = allUsers;
        activeUsersInGrid = activeUsersInGrid.filter(user => user.username.startsWith(usernameStart));
    }

    function filterByReport(event){
        let reportPolicy = event.detail;
        if(reportPolicy === "only-reported"){
            activeUsersInGrid = allUsers.filter(user => user.needsReview === true);
        }else if(reportPolicy === "only-nonreported"){
            activeUsersInGrid = allUsers.filter(user => user.needsReview === false);
        }else if(reportPolicy === "all"){
            activeUsersInGrid = allUsers;
        }else if(reportPolicy === "only-banned"){
            activeUsersInGrid = allUsers.filter(user => user.banned === true);
        }
    }

    function filterByGroupFounders(event){
        console.log(event);
        let showOnlyGroupFounders = event.detail;
        if(showOnlyGroupFounders){
            activeUsersInGrid = activeUsersInGrid.filter(user => user.founder === true);
        }else{
            activeUsersInGrid = allUsers;
        }
    }
</script>
<h3 class="text-h4">Users administration</h3>
<UsersFilter on:filter-by-group-founders={filterByGroupFounders} on:filter-by-username={filterByUsername} on:filter-by-report={filterByReport}/>
<Row>
    <Col cols="{8}">
        <UsersGrid {actionAble} bind:users="{activeUsersInGrid}" on:user-selected={handleActionAble}/>
    </Col>
    <Col cols="{4}">
        <UserActions {actionAble}/>
    </Col>
</Row>