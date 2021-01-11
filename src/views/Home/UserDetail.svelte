<script>
    import {mockedUsers} from "../../stores/mockUsers";

    export let params = {};
    let selectedUser;

    mockedUsers.subscribe(u => {
        selectedUser = u.filter(user => user.id == params.id)[0]
    })
</script>
<p>users details page</p>