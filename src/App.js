import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Component/ChatFeed';
import LoginForm from './Component/LoginForm';
import './App.css';

const projectID = '9a110e38-77f2-4599-9bdf-eb8248e8acc9';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
