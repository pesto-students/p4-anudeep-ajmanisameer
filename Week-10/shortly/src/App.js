import Navbar from './components/Navbar'
import Landing from './components/Landing';
import './App.css';
import { ShortlyContextProvider } from './_store/shortly-context';

function App() {
  return (

    <ShortlyContextProvider>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </ShortlyContextProvider>

  );
}

export default App;
