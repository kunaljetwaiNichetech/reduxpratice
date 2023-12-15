import logo from './logo.svg';
import './App.css';
import Disp from './components/disp/Disp';
import Buttons from './components/buttons/Buttons';

function App() {
  return (
    <div className="App">
      <div>
        <Disp/>
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
