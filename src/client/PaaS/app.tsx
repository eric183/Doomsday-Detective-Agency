import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LazyComp from './pages/sample';
import TermComp from './pages/terminal';

// const SOCKET_INSTANCE = socketHelper('http://192.168.2.12:4001');

// create(set => ({
//   bears: SOCKET_INSTANCE,
//   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 })
// }))
// export const SOCKET_INSTANCE = socketHelper('http://192.168.2.12:4001');
// useSocket()
const App = () => {
  // useSocket((state) => state.setSocket(SOCKET_INSTANCE));
  // useSocket(
  //   useCallback((state) => state.setSocket(SOCKET_INSTANCE), [SOCKET_INSTANCE]),
  // );
  // useEffect(() => {}, []);
  // {
  //   // url: 'http://192.168.2.12:4001',
  // }
  return (
    <Router>
      <Switch>
        <Route path="/terminal" component={TermComp} />
        <Route path="/" component={LazyComp} />
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('main'));
