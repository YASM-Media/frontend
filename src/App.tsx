import "./App.css";
import Home from "./pages/Home.tsx";
import Authenticated from "./pages/Authenticated.tsx";
import SignInCallback from "./pages/authentication/SignInCallback.tsx";
import SignoutCallback from "./pages/authentication/SignoutCallback.tsx";
import { Route, Router } from "@solidjs/router";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/auth/signin/callback" component={SignInCallback} />
      <Route path="/auth/signout/callback" component={SignoutCallback} />
      <Route path="/authenticated" component={Authenticated} />
    </Router>
  );
}

export default App;
