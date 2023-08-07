import React,{useState,useEffect} from 'react'
import './File.css'


import {Box,Button} from '@chakra-ui/react'
import axios from 'axios'
 const File = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    console.log("selectedImage", selectedImage);
  }, [selectedImage]);
  
const FileChangeHander=(e)=>{
const file =e.target.files[0];
console.log("file",file)
console.log("e",e)
console.log("etargetfiles",e.target.files)
setSelectedImage(file)
console.log("selectedImage",selectedImage)
if(file){

}
}
const SaveImage=async()=>{
if(selectedImage){

    
      const formData = new FormData();
      formData.append('excelFile', selectedImage);

      console.log("data",formData)
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
   };
try {
const data=  await axios.post('/upload',
formData,
 config
  )
  console.log('data',data)
} catch (error) {
  console.log(error)
}

}

}

  return (
    <div className='div'>

<Box>


<input type='file'  accept="image/*" onChange={FileChangeHander}/>
<Button onClick={SaveImage}>upload</Button>
</Box>


    </div>
  )
}


export default File;