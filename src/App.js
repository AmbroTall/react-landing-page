import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Labels from './components/labels/Labels'
import Card from './components/card/Card'
import Information from './components/information/Information'
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='header-bg'>
        <Navbar /> 
        <Hero />
      </div>
      <Labels />
      <Card />
      <Information />
      <About />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
