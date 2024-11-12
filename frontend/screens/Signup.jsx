import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet ,ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate('Login'); // Navigates to the 'Signup' screen
  };

  const HandleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.0.7:4000/signup', { name, email, password });
      if (response.data.status) {
        Alert.alert("Success", response.data.message);
        navigation.navigate('Login'); // navigate to the Login screen
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      Alert.alert("Error", "An error occurred during signup. Please try again.");
    }
  };
  return (
<ScrollView style={{ backgroundColor: 'black' }}>
<ImageBackground source={require("../images/backgroudimage.jpg")} style={styles.backgroundmage}>
<View  style={{ marginVertical: "100",  }}>
<View>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20, color: 'white' }}>◉⁠‿⁠◉</Text>
          </View>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20, color: 'white' }}>Signup</Text>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, }}>
<TextInput
 style={{
  width: '100%',
  padding: 15, 
  borderWidth: 1, 
  borderColor: '#ccc', 
  borderRadius: 10, 
  backgroundColor: '#f9f9f9', 
  marginBottom: 20
}}        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        
      />

      <TextInput
 style={{
  width: '100%', 
  padding: 15, 
  borderWidth: 1, 
  borderColor: '#ccc', 
  borderRadius: 10, 
  backgroundColor: '#f9f9f9',
  marginBottom: 20
}}        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
 style={{
  width: '100%', 
  padding: 15, 
  borderWidth: 1, 
  borderColor: '#ccc', 
  borderRadius: 10, 
  backgroundColor: '#f9f9f9', 
  marginBottom: 20
}}        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
</View >
<View style={styles.container}>
<TouchableOpacity style={styles.loginButton} onPress={HandleSubmit}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>
        Already have an account?{' '}
        <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }} onPress={goLogin}>
          Login
        </Text>
      </Text>
</View>
    </View>
    </ImageBackground>
</ScrollView>
  );
};

export default Signup;

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
    color:"white"
  },
});
