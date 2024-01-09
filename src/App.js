
import './App.css';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
