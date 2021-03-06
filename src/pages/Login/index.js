import React from "react";
import { AppContext } from "contexts/Provider";
import Login from "./Login";

export default props => (
  <AppContext.Consumer>
    {({
      services: {
        authentication: { login }
      },
      state: { authenticated }
    }) => <Login {...props} login={login} authenticated={authenticated} />}
  </AppContext.Consumer>
);
