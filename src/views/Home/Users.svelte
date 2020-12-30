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
    let usersBeforeFounderFilter;

    function handleActionAble(event) {
        actionAble = event.detail;
    }

    function filterHandler(event){
        activeUsersInGrid = allUsers;
        if(event.detail.username != ""){
            activeUsersInGrid = activeUsersInGrid.filter(user => user.username.startsWith(event.detail.username));
        }
        if(event.detail.filterByFounders){
            activeUsersInGrid = activeUsersInGrid.filter(user => user.founder);
        }
        if(event.detail.filterByReports !== 3){
            switch (event.detail.filterByReports) {
                case 1:
                    activeUsersInGrid = activeUsersInGrid.filter(user => user.needsReview);
                    break;
                case 2:
                    activeUsersInGrid = activeUsersInGrid.filter(user => !user.needsReview);
                    break;
                case 4:
                    activeUsersInGrid = activeUsersInGrid.filter(user => user.banned);
            }
        }
    }
</script>
<h3 class="text-h4">Users administration</h3>
<UsersFilter on:filter-event={filterHandler}/>
<Row>
    <Col cols="{8}">
        <UsersGrid {actionAble} bind:users="{activeUsersInGrid}" on:user-selected={handleActionAble}/>
    </Col>
    <Col cols="{4}">
        <UserActions {actionAble}/>
    </Col>
</Row>