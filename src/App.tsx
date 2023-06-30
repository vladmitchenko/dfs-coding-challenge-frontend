import { Fragment } from 'react';
import { ChatWrapper } from './components/ChatWrapper';
import { ReactLogo } from './components/ReactLogo';
import { ChatWithAgent } from './containers/ChatWithAgent';

function App() {
  return (
    <Fragment>
      <ReactLogo />
      <ChatWrapper
        buttonText='Chat Now'
        render={(onClose) => (<ChatWithAgent onClose={onClose}/>)}
      />
    </Fragment>
  );
}

export default App;
