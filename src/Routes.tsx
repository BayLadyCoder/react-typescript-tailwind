import { Route, Switch } from "react-router-dom";
import FrontLayout from "./components/layouts/FrontLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Teams from "./pages/teams/Teams";
import Projects from "./pages/projects/Projects";

const AppRoute = ({ component: Component, layout: Layout, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  />
);

const Routes = () => {
  return (
    <Switch>
      <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
      <AppRoute
        path="/about"
        exact={true}
        layout={FrontLayout}
        component={About}
      />
      <AppRoute
        path="/teams"
        exact={true}
        layout={FrontLayout}
        component={Teams}
      />
      <AppRoute
        path="/projects"
        exact={true}
        layout={FrontLayout}
        component={Projects}
      />
    </Switch>
  );
};

export default Routes;
