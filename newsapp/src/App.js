import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import News from "./components/News";
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={6}
                country={"in"}
                category="General"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={6}
                country={"in"}
                category="Business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={6}
                country={"in"}
                category="Entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={6}
                country={"in"}
                category="Health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={6}
                country={"in"}
                category="Science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={6}
                country={"in"}
                category="Sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={6}
                country={"in"}
                category="Technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
