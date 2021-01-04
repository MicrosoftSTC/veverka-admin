<script>
    import {location} from 'svelte-spa-router'
    export let params = {};
</script>
<p>
    Test Detail page, {params.id}
</p>
<p>The current page is: {$location}</p>