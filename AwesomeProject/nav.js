import React from 'react';
import {View,Image,Text} from 'react-native';
import css from "./css";

function Nav() {
    return (
<>  
              <View style={css.banneritem2} >
                <Image
                    style={css.nflogo}
                    // source={{
                    // uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
                    // }}
                    source={{
                      uri: 'https://tse1.mm.bing.net/th?id=OIP.x8JNNxnTgNb9kH1dYroYdAHaE8&pid=Api&P=0&w=276&h=185',
                      }}
             />
             <Image
                    style={css.menulogo}
                    source={{
                    uri: 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg',
                    }}  
              />
    </View>
  
    </>
    );
 
}

export default Nav;