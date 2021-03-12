import logo from './logo.svg';
import './App.css';

import Header from './componentes/header/index'
import Footer from './componentes/footer/index'
import HomePage from './componentes/homepage/index'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
