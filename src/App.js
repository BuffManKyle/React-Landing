import logo from './assets/Resolve_Barbell_Logo_transparent_notext.png';
import bird from './assets/Bird_Transparent.jpg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Logo-text'>Resolve Barbell</h1>
        <img src={bird} className="bird" alt="logo" />
        <p className='statment'>
          Resolve Barbell apperal coming soon!
        </p>
      
    </div>
  );
}

export default App;
