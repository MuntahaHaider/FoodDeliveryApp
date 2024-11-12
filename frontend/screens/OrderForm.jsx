import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const OrderForm = ({ route }) => {
  const { item } = route.params;
  const data = route.params
  const [quantity, setQuantity] = useState(1);

  console.log(data)
  const foodid = String(data.e.id)

  const totalPrice = data.price * quantity;
 
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    streetAddress: '',
    city: '',
    paymentMethod: ''
  });
  const navigation = useNavigation()
  // const handleOrder =  ()=>{
  //   navigation.navigate('orderhistory')
  // }

  const handleOrdernow = async(e)=>{
    navigation.navigate('orderhistory')

    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.7:4000/orders', {
        foodId: foodid,
        name: data.e.name,
        imageUrl: data.e.imageUrl,
        price: data.e.price,
        quantity,
        totalPrice,
        ...formData
      });
      if (response.data.status) {
        console.log(response.data.message);
        Alert.alert("Success", "Order successful!🙂");
        navigation.navigate("/orderhistory");
      } else {
        Alert.alert("order Failed", response.data.message || "Invalid credentials.");
      }
      alert('Order placed successfully!');
      navigation.navigate('orderhistory')
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }    
  }
  return (
    <ScrollView>
        <View style={styles.container}>

        <Image source={{ uri: data.e.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{data.e.name}</Text>

        <View style={styles.priceQuantityRow}>
          <Text style={styles.price}>Price per item: {String(data.e.price)}</Text>
          <Text style={styles.totalPrice}>Total Price: {String(totalPrice)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input} value={`Food Id : ${foodid}`} editable={false} placeholderTextColor="#aaa" />
          <TextInput style={styles.input} value={data.e.name} editable={false} placeholderTextColor="#aaa" />
          <TextInput style={styles.input} value={data.e.imageUrl} editable={false} placeholderTextColor="#aaa" />
          <TextInput style={styles.input} value={String(data.e.price)} editable={false} placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Shipping Address" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Street Address" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="City" placeholderTextColor="#aaa" />
          <Text style={styles.dropdownLabel}>Payment Method</Text>
          <TextInput style={styles.input} placeholder="Select Payment Method (e.g., JazzCash, PayPal, EasyPaisa)" placeholderTextColor="#aaa" />
          <View style={styles.button}>
            <TouchableOpacity style={styles.loginButton} onPress={handleOrdernow} >
              <Text style={styles.buttonText} >Order Now</Text>
            </TouchableOpacity>
          </View>       
          </View>
        </View>
    </ScrollView>
  );
};

export default OrderForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 10,
  },
  priceQuantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 16,
    color: '#fff',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    color: '#fff',
  },
  form: {
    backgroundColor: '#222', 
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff', 
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    boxShadow:'5px solid white',
    padding: 10,
    marginBottom: 15,
    placeholderTextColor: '#aaa', 
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },

  button:{
     backgroundColor:"#4CAF50",
     height:40,
     borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor:"#4CAF50" 
  },
});
