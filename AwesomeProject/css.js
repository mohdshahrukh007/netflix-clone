import zIndex from "@material-ui/core/styles/zIndex";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  root: {
    display: 'flex',
    height:'100%',
    width:'100%',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: 'black',
    // flex: 1
  },
  nav:{
    position:"absolute",
    marginTop:5,
    justifyContent:"space-around",
    display:'flex',
    flexDirection:"row",
    width:'auto',
    height:20,
    zIndex:1
  },
  nflogo:{
    marginLeft:20,
    marginTop:12,
    width:50,
    height:50
  },
  menulogo:{
    marginRight:20,
    marginTop:12,
    width:50,
    height:50
  },
  
banneritem2:{
  display:"flex",
  marginTop:32,
   height:'50%',
  width:'100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
},
banner:{
  zIndex:0,
  position:'relative',
  justifyContent:"space-between",
  top:10,
  display:'flex',
  height:500,
  width:'100%',
  resizeMode: 'cover'
},
bannertext:{
    top:250,
    width:500,
    position:"absolute",
  display:"flex",
    backgroundColor: "#000000a0",
  marginRight:4,
  height:400,
    color:'white',
    zIndex:10
},
  fontonBanner:{
    top:0,
    padding:10,
    fontSize:25,
    fontWeight:'bold',
    color:'white'
  },
  movieoverview: {
    fontSize: 20,
    marginLeft:10,
    fontWeight: "bold",
    color:'white',
    width:400,
    // zIndex:10
  },
  Bannerbtn:{
    top:400,
    // height:100,
    width:'100%',
    position:"absolute",
    // marginRight:40,
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-around',
    // position:"absolute",
    // display:'flex',
    // width:'100%',
    zIndex:10
  },
  bannerOverview:{
    // marginRight:20 
    fontWeight:'100'
  },
  sliderRow:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:"row",
    overflow:"hidden",
    zIndex:10

  },
  
  rowitem:{
    position:"relative",
    top:0,
    width:'auto',
    height:300
  },
  font:{
    color:'white',
    marginLeft:'1rem',
    // fontSize:20,
    fontWeight:'400'
  },
  bgblack:{
    display:'flex',
    backgroundColor:'black'
  },
  // slidermain:{
    // display:'block', 
    // flexDirection:"row"
  // },
  slidermain:{
    position:"relative",
    display:'flex', 
    flex:1,
    alignContent:"center",
    flexDirection:"row"
  },
  centeredView: {
    display:'flex',
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }, 
  logo:{
    zIndex:10,
    width:'auto',
    height:500,
    resizeMode: 'stretch'
    // borderRadius:22
  },

  imageview: {
    // zIndex:15,
    borderRadius:20,
    // display:"flex",
    // flex:1,
    resizeMode: 'stretch',
    margin:12,
      width: 250,
      height: 250
    },
  // // card
  // gridList: {
  //   flexWrap: 'nowrap',
  //   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  //   transform: 'translateZ(0)',
  // },
  // title: {
    // color: theme.palette.primary.light,
    movielabel:{
      marginLeft:10,
      marginTop:10,
      fontSize:25,
      fontWeight:'bold',
      color:'white'
    }
    
});

  // end card