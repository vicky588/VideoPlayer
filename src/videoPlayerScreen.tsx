import React, { useRef, useState } from "react";
import { View,Text, TouchableOpacity, Image, FlatList } from "react-native";
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'

import SectionListInFocus from '@reactly/react-native-autoplay-scroll-video'


const Videos=[
    {
        heading:"Cartoon video",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        heading:"Cartoon video",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        heading:"Cartoon video",
    video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        heading:"Cartoon video",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    
    },
    {
        heading:"Cartoon video",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      
    }

]



const renderItem = ({ item }) => {
  console.log('item###',item)
    return (

      <View style={{ 
        height:250,
      justifyContent:'center',
      alignItems:"center",
   
     // backgroundColor:'red'
      }}>
       
        <Video
         source={{ uri: item.video }}
         controls={true}
         volume={100}
         //`q                                                                                                                               q                                                                                                                                                                                           `````````````````````````qqqpaused={true}
       autoPlay={false}
         style={{ 
            width:"100%",
           height:200,
        borderRadius:6,
         
             
            }}
        />
         <View style={{//backgroundColor:'red',
         width:'100%',
         height:80,
         margin:10,
         marginLeft:20}}>
        { <Text style={{
            color:'black',
        
            
        }}>{item.heading}</Text>}
      
      </View>
       
      </View>
      
    );
  };

const VideoPlayerScreen=()=>{

const [clicked,setClicked]=useState(false)
const [paused,setPaused]=useState(false)
const [progress,setProgress]=useState(null)

//const ref=useRef()

// const format =(second)=>{
//     let minute=parseInt(second /60)
//     .toString.padStart(2,'0');

//     let secs = (Math.trunc(second)% 60).toString().padStart(2,'0');
//     return '${minute}:${secs}'
    
//}





return(
    <View style={{
       // backgroundColor:'red',
        height:"100%"
        
        }}>
   
        <View style={{alignItems:'center',
        justifyContent:'center',
        marginTop:'20',
        width:'100%',
        height:80,}}>
            <Text style={{fontSize:20,
            fontStyle:'italic',
            fontWeight:'900',
            shadowColor:'red',
            shadowOpacity:3,
            textShadowRadius:5}}>VideosPlayer App</Text>
        </View>
  

            <FlatList
            data={Videos}
            renderItem={renderItem}
             
            >


            </FlatList>
            

{/*            
             <Video
             paused={paused}
       source={{uri:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}}
       style={{width:'100%',height:300}}
       resizeMode='contain'
         ref={ref}
        onProgress={(n)=>{
            setProgress(n)
        }}
       /> */}
       

      
      
       
       

       
    </View>
)

}
export default VideoPlayerScreen
