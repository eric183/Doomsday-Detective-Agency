import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles';

import LazyComp from './pages';
import TermComp from './pages/terminal';
import IDEComp from './pages/IDE';
// import { D42_FrontType } from './types';
// import lottieWeb from 'lottie-web';
// import from 'Daad';
// import { } from 'lottieWeb';
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
  // Lottie.loadAnimation({})
  // loadAni`

  return (
    <Router>
      <Switch>
        <Route path="/ide" component={IDEComp} />
        <Route path="/terminal" component={TermComp} />
        <Route path="/" component={LazyComp} />
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('main'));
