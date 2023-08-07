import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Box,Button,Grid,Text,Image} from '@chakra-ui/react'
import { saveAs } from 'file-saver';
import {Link} from "react-router-dom"
export const Uidata = () => {

    const [images, setImages] =useState('')
    useEffect(() => {
        const fetchImages = async () => {
          try {
            const { data } = await axios.get('/upload');
            setImages(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchImages();
      }, [])
    
    
    console.log('images',images)
    
  return (
    <div>

<Box p={'50'}>
<Grid
          width={"100%"}
          mr='8'
          //margin={"auto"}
          //paddingInline={"50"}
          //bg={'blue'}
          //justifyContent="center"
          //alignItems={'center'}
          //alignContent={"center"}
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
              return <Box key={index} w={200}  h={100}  position={'relative'}  >

<Box  bg={'blue.500'} w={'100'} h={20} borderRadius={'10'} shadow={'5 black'} >
<Text>{item.name}</Text>
<Link to={`${item.url}`}>

<Text color={'green'}>Download</Text>

</Link>

</Box>


              </Box>;
            })}
        </Grid>
      
    </Box>


    </div>
  )
}
