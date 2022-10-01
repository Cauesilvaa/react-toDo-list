import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

import { useEffect, useState } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

function App() {  

  return (
    <div className="App">
      <HeaderComponent />
      <FormComponent />
    </div>
  );
}

export default App;
