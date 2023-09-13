import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { span,Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton ,Box,Grid,Text,useToast,Image,Input} from '@chakra-ui/react'
//import {Box,Button,Grid,Text,Image,useToast} from '@chakra-ui/react'
import { saveAs } from 'file-saver';
import {Link} from "react-router-dom"
export const Uidata = () => {


  const toast =useToast()
  const [images, setImages] =useState('')
  const [name,setName]=useState('')

  const [isOpen,setIsOpen]=useState(false);
  //const [filename,setfilename]=useState('');
  const [compname,setcompname]=useState('');
  const [logo,setLogo]=useState(null);
  const [url,setUrl]=useState('');

    useEffect(() => {
        const fetchImages = async() => {
          try {
            const { data } = await axios.get(`http://62.72.31.201:4000/api/v1/getorg`);

            setImages(data);

toast({
title:'data fetched success!',
status:'success',
position:'top',
isClosable:'true',
duration:800
})

          } catch (error) {
            toast({
              title:'please try again!',
              status:'error',
              position:'top',
      isClosable:'true'

              })
            console.log(error);
          }
        };
    
        fetchImages();
      }, [])
    
    
    console.log('images',images)
    










    const handleDownloadClick = (url) => {
      const imageUrl = 'http://154.41.254.44:4000/'+url;
      const link = document.createElement('a');
      link.href = imageUrl;
      link.setAttribute('download', 'image.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };




const FileChangeHander=(e)=>{
  const file =e.target.files[0];
  console.log("file",file)
  console.log("e",e)
  setLogo(file)
  

}
const openModal = (link) => {
  setUrl(link)
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};





const SaveImage=async()=>{
console.log('logourl',url)
  if(!logo){
    toast({
      title:"Please Choose Logo",
      position:'top',
      status:'info',
      isClosable:'true'
    })
  }

else if(name==''){

  toast({
    title:"File Name Can't be Empty",
    position:'top',
    status:'info',
    isClosable:'true'
  })

}
else if(compname==''){

  toast({
    title:"Company Name Can't be Empty",
    position:'top',
    status:'info',
    isClosable:'true'
  })

}
else if (logo){

    
      const formData = new FormData();
      formData.append('logo', logo);

      console.log("data",formData)

var jsonData={

  name:name,
  url:url,
  compname:compname,
}

  const config = {
    headers: { "Content-Type": "multipart/form-data" ,
    'x-json-data': JSON.stringify(jsonData)},
   };
try {
const data=  await axios.post('/api/v1/edit',
formData,

config


)
console.log(data)
  toast({
    title:'Success!',
    status:'success',
    position:'top',
    isClosable:'true'

    })

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
    <div>
      <Box  bg={'red.100'} width={'50%'} ml={'22%'}>
{isOpen && (
        <div className="modal">
          <div className="modal-content">
            <Text className="close-btn" onClick={closeModal} cursor={'Pointer'}>&times;Close</Text>
            <Input
            type='text'
            Co
            //textAlign={'center'}
          placeholder="Enter File Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


<Input
            type='text'
         
          placeholder="Enter Company Name"
          value={compname}
          onChange={(e)=>setcompname(e.target.value)}
        />

<input type='file'  accept="image/*" onChange={FileChangeHander}/>Logo <span style={{ fontSize: '10px' }}></span>


<Button ml={'5'} onClick={SaveImage}>Create File</Button>
          </div>
        </div>
      )}

</Box>
<Box p={'50'}>
<Grid
          width={"100%"}
          mr='10'
          //margin={"auto"}
          paddingInline={"50"}
          //bg={'blue'}
          justifyContent="center"
          alignItems={'center'}
          alignContent={"center"}
          gridTemplateColumns={{
           base:"repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          columnGap="20px"
        >
          {images.length > 0 &&
            images.map((item,index) => {
              return <Box key={index} w={200}  h={150}   >

<Box  bg={'blue.100'} w={'100'} minH={20} borderRadius={'10'} shadow={'5 black'} >
<Text>{item.name}</Text>
{/*<Link to={`${item.url}`}>*/}
{/*<Image src={item.url}/>*/}
<Text color={'green'} onClick={()=>handleDownloadClick(item.url)} cursor={'pointer'}>Download</Text>

{/*</Link>*/}

<Box bg={'pink.200'} mt={'10'}>

<Text onClick={()=>openModal(item.url)} cursor={'pointer'}  >Edit</Text>





</Box>


</Box>


              </Box>;
            })}
        </Grid>
      
    </Box>


    </div>
  )
}
