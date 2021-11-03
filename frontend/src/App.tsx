import DataTable from 'Components/DataTable';
import Footer from 'Components/Footer';
import NavBar from 'Components/NavBar';
import React from 'react';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
