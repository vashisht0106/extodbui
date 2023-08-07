import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Tableui from './Tableui';
import ExcelToJsonConverter from './ExcelToJsonConverter';
import File from './File'
import { Uidata } from './Uidata';
function App() {
  return (
    <div className="App">
     
<Box bg={'white'}>
{/*<Tableui/>*/}
{/*<ExcelToJsonConverter/>*/}
<File/>
<Uidata/>
</Box>



    </div>
  );
}

export default App;
