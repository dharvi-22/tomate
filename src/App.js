import Header from "./components/header";
import Footer from "./components/footer"
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <h1>
          Home :)
        </h1>
      </header>

      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;
