import React,{useState,useEffect} from 'react'
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
    Button, } from '@chakra-ui/react'
import axios from 'axios'
const Tableui = () => {
    const [emplist,setEmployeeList]=useState("")
  
console.log(emplist)

const  fetchdata= async()=>{

    try {
        const {data}=await axios.get(`/emp`)
        setEmployeeList(data)

        console.log(data)
       

    } catch (error) {
        console.log(error)
    }
}


useEffect(()=>{
  fetchdata()
})

//const intervalId = setInterval(setTimeout(()=>{
//fetchdata()
//},2000),2000)

  return (
    <div style={{

      
        width: 'auto',
        height: 'auto',
      

    }}>
<Button ml={"80%"} fontSize={'10'}
borderRadius={'0'}
height={'7'}
onClick={fetchdata}
>Refresh</Button>






    </div>
  )
}

export default Tableui