import logo from './assets/Resolve_Barbell_Logo_transparent_notext.png';
import bird from './assets/Bird_Transparent.jpg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Logo-text'>Resolve Barbell</h1>
        <img src={bird} className="bird" alt="logo" />
        <p className='statment'>
        Annapolis, Maryland is about to welcome a brand new gym called Resolve Barbell to its fitness scene. This state-of-the-art gym is set to offer the latest fitness equipment and facilities to its members, ranging from weightlifting and powerlifting equipment to cardio machines and group fitness classes.

        The gym's owner is passionate about fitness and aim to create a welcoming and supportive environment for gym-goers of all levels, from beginners to experienced athletes. In addition to the top-notch equipment, Resolve Barbell will also offer personalized training and coaching services to help members achieve their fitness goals.

        The gym's location in Annapolis is ideal for those looking to get fit in a convenient and accessible location. With its grand opening just around the corner, residents of Annapolis and the surrounding areas can look forward to a new and exciting addition to their fitness options.
        </p>
      
    </div>
  );
}

export default App;
