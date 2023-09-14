import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton ,Box,Grid,Text,useToast,Image,Input} from '@chakra-ui/react'
//import {Box,Button,Grid,Text,Image,useToast} from '@chakra-ui/react'

import { saveAs } from 'file-saver';
import {Link} from "react-router-dom"
export const CopyFile = () => {

  const axiosInstance=axios.create({baseURL:process.env.REACT_APP_BACKEND_URL})

  const toast =useToast()
  const [images, setImages] =useState('')
    useEffect(() => {
        const fetchImages = async() => {
          try {
<<<<<<< HEAD
            const { data } = await axiosInstance.get(`/api/v1/get`);
=======
            const { data } = await axios.get(`http://62.72.31.201:4000/api/v1/get`);
>>>>>>> fab6c5054a23addc4cfd1320611a8e7df0ecaab5
//console.log('data',data)
            setImages(data);

toast({
title:'data fetched success!',
status:'success',
position:'top',
isClosable:'true'

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
      const imageUrl =url;
      const link = document.createElement('a');
      link.href = imageUrl;
      link.setAttribute('download', 'image.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };






  return (
    <div>
<Link to='/'>
<Text ml={'-85%'} color={'green'} mt={'10'}>Back</Text>
</Link>
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
<Link to={`${item.url}`}>
{/*<Image src={item.url}/>*/}
<Text color={'green'} onClick={()=>handleDownloadClick(item.url)}>Download</Text>

</Link>

<Box bg={'red'} mt={'10'}>


</Box>


</Box>


              </Box>;
            })}
        </Grid>
      
    </Box>


    </div>
  )
}
