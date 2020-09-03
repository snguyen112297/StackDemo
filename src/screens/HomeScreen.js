import React from "react";
import { View , Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.logo}>Flight List</Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            onChangeText={text=>this.setState({email:text})}/>
        </View>
        <View style={styles.inputView}>
          <TextInput 
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              onChangeText={text=>this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={
          ()=> props.navigation.navigate('FlightList')}>

          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight:"bold",
    fontSize:50,
    color:"red",
    marginBottom:40
  },
  inputView:{
    width:"70%",
    backgroundColor:"blue",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    color:"white"
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"blue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20,
    padding: 20
  },
});

export default HomeScreen;
