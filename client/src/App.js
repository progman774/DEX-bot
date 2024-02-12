import './App.css';
import MainPage from './components/MainPage';
import useWebSocket from 'react-use-websocket';

function App() {
  useWebSocket(`ws://${process.env.REACT_APP_BASE_URL}:8007`, {
      onOpen: () => {
          console.log('WebSocket connection established')
      }
  })
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;