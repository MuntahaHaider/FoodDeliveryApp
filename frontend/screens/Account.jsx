import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';

const AccountScreen = ({ navigation }) => {
  const handleLogout = async (id) => {
    navigation.navigate('login'); 

    try {
      const userId = id; 
      await axios.delete(`http://192.168.0.7:5000/users/${userId}`);
      alert('Logged out successfully');
      navigation.navigate('login'); 
    } catch (error) {
      alert('Error logging out');
    }
  };

  return (
    <ImageBackground source={require('../images/backgroudimage.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>

        {/* Profile Icon */}
        <Image source={{ uri: 'https://www.shutterstock.com/image-vector/person-icon-logo-design-vector-260nw-2236324633.jpg' }}  style={styles.profileIcon} />

        {/* Account Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: John Doe</Text>
          <Text style={styles.infoText}>Email: johndoe@example.com</Text>
          <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('orderhistory')}>
          <Text style={styles.actionButtonText}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.actionButtonText}>Settings</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '90%',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 3,
  },
  actionButton: {
    // backgroundColor: '#4CAF50',
    backgroundColor:'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#0E155E',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
