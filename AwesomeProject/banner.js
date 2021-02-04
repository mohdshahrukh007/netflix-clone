 import React ,{useState,useEffect} from 'react';
 import { StyleSheet,Alert,Button,Text,Input,Image, View } from "react-native";
import css from "./css" ; 
import axios from "./axios" ; 
import requests from "./requests";
  
export default function Banner() {
  const [movie, setMovie] = useState(['']);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  const addlist=(id) =>{ 
    Alert.alert(id='added to the List');
  }
  return (
      <>
         <Image
        style={css.logo}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        }}
      />
            <View style={css.bannertext}> 
                <Text style={css.fontonBanner}>
                {movie?.title || movie?.name || movie?.original_name}
                </Text>  
                <Text style={css.bannerOverview} numberOfLines= {3} style={css.movieoverview}>
                {movie?.overview}
              </Text>        
           </View>
           <View style={css.Bannerbtn}>
               <Button   
                 onPress={() => Alert.alert(movie?.original_name +' added to the List')}
                    title="Add To List"
                    color="red"
                  /> 
               <Button  
              // onPress={play}
                  title="Play"
                  color="yellow"
              />  
            </View>
     
    </>
  );
}

