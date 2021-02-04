 
import {View,Image,Text,ScrollView,Player, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import css from "./css" ; 
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState(['']);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

//  function clicked(id) 
//  {Alert.alert(id+'it has clicked')    }
   
return (
        <View style={css.rowitem}>
        <Text style={css.movielabel}>{title}</Text>
       <ScrollView  horizontal={true}>
           {movies.map((movie) => (
        //  <View key={movie.id} style={css.rowitem2}>
            <Image
            // onclicked={clicked(movie.poster_path)}
                style={css.imageview}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
                  }}/>
        // </View>
        ))}
       {/* <Player ref={(player) => { this.player = player }}>
  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
</Player> */}
        </ScrollView>
        </View>
   );
}

export default Row;
