<script>
    import Router from 'svelte-spa-router';
    import {prefix, routes} from "./homeRoutes";

    import Navigation from "../../components/Navigation.svelte"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

</script>
<Row style="height: 100vh">
    <Col cols="{2}" style="background: red; padding: 0px">
        <Navigation/>
    </Col>
    <Col cols="{10}" style="background: lightgrey">
        <Router {routes} {prefix}/>
    </Col>
</Row>