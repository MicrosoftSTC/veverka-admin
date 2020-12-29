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
        activeUsersInGrid = allUsers.filter(user => user.username.startsWith(usernameStart));
    }
</script>
<h3 class="text-h4">Users administration</h3>
<UsersFilter on:filter-by-username={filterByUsername}/>
<Row>
    <Col cols="{8}">
        <UsersGrid {actionAble} bind:users="{activeUsersInGrid}" on:user-selected={handleActionAble}/>
    </Col>
    <Col cols="{4}">
        <UserActions {actionAble}/>
    </Col>
</Row>