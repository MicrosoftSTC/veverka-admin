<script>
    import Router from 'svelte-spa-router';
    import {prefix, routes} from "./homeRoutes";
    import {pushTo} from "../../utils/redirectService";

    import Navigation from "../../components/Navigation.svelte"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    function conditionsFailed() {
        pushTo("/home/notFound");
    }
</script>
<div class="mt-n3">
    <Row>
        <Col cols="{2}" style="height: 100vh">
            <Navigation/>
        </Col>
        <Col cols="{10}">
            <Router on:conditionsFailed={conditionsFailed} {routes} {prefix}/>
        </Col>
    </Row>
</div>