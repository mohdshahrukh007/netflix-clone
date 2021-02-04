// import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {View,Image,StyleSheet,ScrollView,SafeAreaView, } from "react-native";
import requests from "./requests";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField'; 
import Banner from "./banner" ;
import Row from "./row"; 
import css from "./css";
import Nav from "./nav";
export default function App(props) {
   
    return ( 
        <>
        
          <View style={css.root} >
              <View style={css.nav}>
             <Nav/>
             </View>
             <ScrollView vertically={true}>

           <View style={css.banner}><Banner/></View>
             {/* <View style={css.rowitem}> */}
               {/* <Text style={css.font}>hgsjdsg f</Text> */}
               <Row title="Trending Now" fetchURL={requests.fetchTrending} />
                <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
                <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
                <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
            
            
            {/* <Row title="Trending Now" fetchURL={requests.fetchActionMovies} /> */}
            {/* </View> */}
           
            {/* </View> */}
                  {/* <Row title="Trending Now" fetchURL={requests.fetchTrending} /> */}
                {/* </ScrollView> */}
            {/* <Text style={css.font}>  </Text>
            <View style={css.slider}>
            <Row title="Trending Now" fetchURL={requests.fetchActionMovies} />
            </View>
            <View style={css.slider}>
            <Text style={css.font}>  </Text>
            <Row title="Trending Now" fetchURL={requests.fetchComedyMovies} />
            </View>
            <View style={css.slider}>
            <Text style={css.font}>  </Text>
            <Row title="Trending Now" fetchURL={requests.fetchHorrorMovies} />
            </View>
            <View style={css.slider}>
            <Text style={css.font}>  </Text>
            <Row title="Trending Now" fetchURL={requests.fetchHorrorMovies} />
            </View> */}
          </ScrollView>
           
          </View>

      
         </>
 )};
