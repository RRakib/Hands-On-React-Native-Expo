import React from 'react';
import { LinearGradient } from "expo";
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient 
        colors = {["aqua" , "palegreen"]}
      >
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("./image/X0HtuAku_400x400.png")} />
          </View>
          <Text style={styles.bold}>Name: </Text> 
            <Text>Rakib Uddin</Text>  
          <Text style={styles.bold}>Email: </Text> 
            <Text>16103030@iubat.edu</Text>  
          <Text style={styles.bold}>Contact: </Text> 
            <Text>01534618623</Text>  
          <Text style={styles.bold}>GitHub Accoutn: </Text> 
            <Text>Github.com/RRakib</Text>  
          <Text style={styles.bold}>Twitter Account: </Text> 
            <Text>https://twitter.com/RakibUd20101281</Text>  

          <Text style={styles.footer}>&copy; Developed By Rakib Uddin</Text>
      </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    height: "100%",
    paddingTop: "30%",
  },
  bold : {
    fontWeight : "bold",
    paddingBottom: 5,
    paddingTop: 5 
  },
  imageContainer : {
    display : "flex",
    alignItems : "center",
  },
  image : {
    width: "50%",
    height: 180,
    marginBottom: 25,
    borderRadius: 600
  },
  footer : {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    padding: 15
  }
});
