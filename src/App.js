import { GiftProvider } from './components/scriptFiles/UseContext';
import Body from './components/scriptFiles/Body';
import Footer from './components/scriptFiles/Footer';
import Header from './components/scriptFiles/Header';
import SectionBody from './components/scriptFiles/SectionBody';
import SectionMain from './components/scriptFiles/SectionMain';
function App() {
  
  return (
    <div className="App">
      <GiftProvider>
      <Header />
      <Body />
      <SectionMain />
      <SectionBody />
      <Footer />
      </GiftProvider>
    </div>
  );
}

export default App;
