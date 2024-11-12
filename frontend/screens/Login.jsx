import { ImageBackground ,Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  const gosignup = () => {
    navigation.navigate('Signup'); 
  };

  const handleSubmit = async (e) => {
    navigation.navigate('home')
    e.preventDefault();  
    try {
      const response = await axios.post("http://192.168.0.7:4000/login", { email, password });
      if (response.data.status) {
        console.log(response.data.message);
        Alert.alert("Success", "Login successful!🙂");
        // navigate("/dashboard");
      } else {
        Alert.alert("Login Failed", response.data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: 'black', }} >
     <ImageBackground source={require("../images/backgroudimage.jpg")} style={styles.backgroundmage}>
     <View style={{ marginVertical: "100",  }}>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20, color: 'white' }}>◉⁠‿⁠◉</Text>
          </View>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20, color: 'white' }}>Foodie</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, }}>
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder="Enter Email"
              style={{
                width: '100%', 
                padding: 15, 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 10, 
                backgroundColor: '#f9f9f9',
                marginBottom: 20
              }}
            />
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              value={password}
              placeholder="Enter Password"
              style={{
                width: '100%', 
                padding: 15, 
                borderWidth: 1, 
                borderColor: '#ccc',
                borderRadius: 10, 
                backgroundColor: '#f9f9f9', 
              }}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>
              Dont have any account? <Text onPress={gosignup} style={{ color: '#bdc3c7', textDecorationLine: 'underline' }}>Signup</Text>
            </Text>
          </View>
        </View>
     </ImageBackground>
      </ScrollView>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  backgroundmage:{
   flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginButton: {
    width: '30%',
    paddingVertical: 12,
    backgroundColor: '#4CAF50', 
    borderRadius: 8, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
})