import React from 'react';
import { StyleSheet, Button,Text,Input,Image, View } from "react-native";


function Footer() {
    return (
        // <div style={{display:'flex',justifyContent:'space-around' , margin:'1px'}} >
       <View>
            <Button  
      title="Submit"
       color="red"
        accessibilityLabel="this"/>
            <Button 
    title="Cancel"
        color="red"
       accessibilityLabel="this"/>
       </View> 
        
        // </div>
    );
}

export default Footer;