<script>
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import Slider from "svelte-materialify/src/components/Slider"
    import Switch from "svelte-materialify/src/components/Switch"
    import TextField from "svelte-materialify/src/components/TextField"
    import Radio from 'svelte-materialify/src/components/Radio';
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import Select from "svelte-materialify/src/components/Select/Select.svelte"

    export let actionAble = false;

</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            User actions
        </span>
        {#if actionAble}
        <p>User actions</p>
            {:else}
            <p class="text-subtitle-2">User actions panel will show after user will be selected</p>
        {/if}
    </div>
</Card>