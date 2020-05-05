import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
