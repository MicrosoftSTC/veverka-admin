<script>
    import Router from 'svelte-spa-router';
    import {prefix, routes} from "./homeRoutes";

    import Navigation from "../../components/Navigation.svelte"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import AppBar from 'svelte-materialify/src/components/AppBar';
    import Button from 'svelte-materialify/src/components/Button';
    import Icon from "svelte-materialify/src/components/Icon"
    import ListItem from "svelte-materialify/src/components/List/ListItem.svelte"
    import List from "svelte-materialify/src/components/List/List.svelte"
    import ListGroup from "svelte-materialify/src/components/List/ListGroup.svelte"
    import Avatar from "svelte-materialify/src/components/Avatar/Avatar.svelte"
    import Divider from "svelte-materialify/src/components/Divider/Divider.svelte"
    import NavigationDrawer from "svelte-materialify/src/components/NavigationDrawer/NavigationDrawer.svelte"
    import Overlay from "svelte-materialify/src/components/Overlay/Overlay.svelte"
    import {mdiMenu, mdiHome, mdiAccountBoxOutline, mdiChartBox} from "@mdi/js"

</script>
<Row style="height: 100vh">
    <Col cols="{2}" style="background: red; padding: 0px">
        <Navigation/>
    </Col>
    <Col cols="{10}" style="background: lightgrey">
        <Router {routes} {prefix}/>
    </Col>
</Row>