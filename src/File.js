import React,{useState,useEffect} from 'react'
import './File.css'


import {Box,Button,useToast,Grid,Text} from '@chakra-ui/react'
import axios from 'axios'
import { Uidata } from './Uidata'
import { Link } from 'react-router-dom'
 const File = () => {
  const toast=useToast()
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    console.log("selectedImage", selectedImage);
  }, [selectedImage]);
  
const FileChangeHander=(e)=>{
const file =e.target.files[0];
console.log("file",file)
console.log("e",e)
//console.log("etargetfiles",e.target.files)
setSelectedImage(file)
//console.log("selectedImage",selectedImage)
if(file){

}
}
const SaveImage=async()=>{
  if(!selectedImage){
    toast({
      title:"Please Select File",
      position:'top',
      status:'info',
      isClosable:'true'
    })
  }
else if (selectedImage){

    
      const formData = new FormData();
      formData.append('excelfile', selectedImage);

      console.log("data",formData)
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
   };
try {
const data=  await axios.post('/api/v1/upload',
formData,
 config
  )
  toast({
    title:'Success!',
    status:'success',
    position:'top',
    isClosable:'true'

    })

  console.log('data',data)
} catch (error) {
  toast({
    title:'Please Try Again',
    status:'error',
    position:'top'
    })
  console.log(error)
}

}

}

  return (
    <div className='div'>
<Box p={'5'} bg={'blue.100'}  alignItems={'center'} justifyContent={'center'} display={'grid'}>
{/*<Box bg={'red'}  justifyContent={'space-between'} display={'flex'}  >*/}
<Grid

justifyContent={'center'}
gridTemplateColumns={{
  base:"repeat(1,1fr)",
   sm: "repeat(2,1fr)",
  
 }}

>
<Box>
  
<input type='file'  accept="image/*" onChange={FileChangeHander}/>
</Box>
<Box>

<Button mt={'1'} onClick={SaveImage}>upload</Button>
<Link to='/copyfile'>
<Button ml={'100'} fontSize={'15'} fontWeight={'600'} >view copy file</Button>
</Link>
</Box>
<Box >

</Box>

</Grid>
</Box>


<Uidata/>

{/*</Box>*/}
    </div>
  )
}


export default File;