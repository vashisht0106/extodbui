import React, { useState } from 'react';
import *as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { Box,
  Table,
 Thead,
 Tbody,
 Tfoot,
 Tr,
 Th,
 Td,
 TableCaption,
 TableContainer,
 Button,useToast } from '@chakra-ui/react'
import Tableui from './Tableui';


const ExcelToJsonConverter = () => {
  const [jsonResult, setJsonResult] = useState([]);
const toast =useToast()
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {

        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setJsonResult(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  };
  
  const handleExportToJson = async() => {
    const jsonContent = JSON.stringify(jsonResult, null, 2);

    //const blob = new Blob([jsonContent], { type: 'application/json' });
    //saveAs(blob, 'data.json');
    
    
    
    try {
      
      const json2= JSON.parse(jsonContent)
      //console.log('jsonContent',jsonContent);
      console.log('json2',json2)

        if(json2 === null || typeof json2 !== "object" || json2.length==0){
          toast({
            title: "File Invalid or Not Found!",
            //description: "We're redirecting you to the admin page",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        }
         else {



           
           const config = {
             headers: { "Content-Type": "application/json" },
            };
            
            
            await axios.post(`/load`,
            
            jsonContent,
            config
            
            )
            
            toast({
              title: "data uploaded Successfully!",
              //description: "We're redirecting you to the admin page",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          } 
          
          
      
        
        
} catch (error) {
  console.log(error)
  toast({
    title: "Please Upload Valid Data!",
    //description: "We're redirecting you to the admin page",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "top",
  })
}
    
 
  };

  return (
    <div style={{
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    
    
    
  
  }}
    
    
    >
    <Box  bg={'blue.100'}>
    <Box bg={'blue.500'} pos={'sticky'} w={'100%'} top="0" opacity={'0.8'}>
      <input style={{borderRadius:'0',height:'40px'}} type="file" onChange={handleFileChange} required />
      <Button borderRadius={'0'} h={'8'} top={'0'} color={"black"} onClick={handleExportToJson}>Upload</Button>
      {/*<pre>{JSON.stringify(jsonResult, null, 2)}</pre>*/}







    </Box>

<Box>

<Tableui/>

</Box>


    </Box>
    </div>
  );
};

export default ExcelToJsonConverter;
