<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';

    import { MaterialApp } from 'svelte-materialify';
</script>

<MaterialApp theme="light">
    <Router {routes} />
</MaterialApp>

<style>
    body {
        width: 100vw;
        padding: 0 !important;
    }
</style>