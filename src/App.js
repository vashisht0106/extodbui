import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Tableui from './Tableui';
import ExcelToJsonConverter from './ExcelToJsonConverter';
import File from './File'
import { Uidata } from './Uidata';
import { Route, Routes } from "react-router-dom";
import { CopyFile } from './CopyFile';

function App() {
  return (
    <div className="App">
    
<Box bg={'white'}>
<Routes>
      <Route path="/copyfile" element={<CopyFile/>}/>
      <Route path="/" element={<File/>} />
      {/*<Route path="/" element={<Uidata/>}/>*/}

      </Routes>
      {/*<Uidata/>*/}
</Box>



    </div>
  );
}

export default App;
