import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Cards from './cards';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="global-max-w">
        <Cards />
      </div>
      <Footer/>
    </div>
  //   <div className="App">
     
  // <div className="global-max-w">
   
  // </div>



  //   </div>
  );
}

export default App;
