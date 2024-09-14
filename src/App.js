import { TextProvider } from './context/Textcontext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (

    <TextProvider>
      <Header />
      <Main /> 
      
      <Footer />
    </TextProvider>

  );
};

export default App;
