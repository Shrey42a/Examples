import React from 'react';
import Navbar from './Navbar';
import Page from './Page';

function App() {
  return (
    <>
      <div oncontextmenu="return false;" className=' bg-zinc-200 w-full'>
        <Navbar />
        <Page />
      </div>
    </>
  );
}

export default App;