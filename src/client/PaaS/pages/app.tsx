import { useEffect } from 'react';
import { happything } from '~/components/test';

type myType = unknown;

const m: myType = 23;
const App = () => {
  console.log(m);
  useEffect(() => {
    console.log(happything);
  }, []);
};

export default App;
