import { BrowserRouter as Router, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={<Home />} />

      <Route path="/*" component={<NotFound />} />
    </Router>
  );
}

export default App;
