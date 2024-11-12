
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);


// AXIOS NETWORK ERROR But
// The data is being successfully stored in MongoDB through Postman.

  // Fetch orders from the API
  useEffect(() => {
    axios.get('http://192.168.0.7:4000/getorder')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  // Delete an order
  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/orders/${orderId}`);
      alert(response.data.message); 
    } catch (error) {
      alert('Error deleting order');
    }
  };

  // locally item show
  const [order, setOrder] = useState([
    {
      id: 1,
      name: 'Burger',
      price: '$5',
      imageUrl: 'https://www.southernliving.com/thmb/J02EQeOhOKHfmALt-jE_61idUck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oven-baked-baby-back-ribs-beauty-332-7deda00b7b4f4820a9c79f13ed09cfb9.jpg',
    },
    {
      id: 2,
      name: 'Pizza',
      price: '$8',
      imageUrl: 'https://www.lurch.de/media/52/7c/ee/1697019002/Burger%20Pulled%20Pork.jpg?ts=1697019002',
    },
    {
      id: 3,
      name: 'Pasta',
      price: '$7',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27SvkSSsO7OQbyw4FYAmT4iAMr7EGFItEdQ&s',
    },
  ]);


  return (
    <>
    {/* <ScrollView>
    <FlatList
      data={orders}
      keyExtractor={item => item._id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.foodName}>{item.foodName}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteOrder(item._id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    /> */}

{/* ============= */}
<ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../images/backgroudimage.jpg')}
        style={styles.backgroundImage}
      >
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: 'white' }}>Order History</Text>
        </View>

        {order.map((e) => (
          <View key={e.id} style={styles.card}>
            <Image source={{ uri: e.imageUrl }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{e.name}</Text>
              <Text style={styles.price}>{e.price}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteOrder(e.id)}>
              <Text style={styles.deleteButtonText}>Cancel Order</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ImageBackground>
    </ScrollView>

    </>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  // container: {
  //   padding: 16,
  //   backgroundColor: '#000',
  // },
  // card: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#333',
  //   padding: 16,
  //   marginBottom: 16,
  //   borderRadius: 8,
  // },
  // image: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 8,
  //   marginRight: 16,
  // },
  // content: {
  //   flex: 1,
  // },
  // foodName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
  // price: {
  //   fontSize: 16,
  //   color: '#fff',
  //   marginTop: 4,
  // },
  // deleteButton: {
  //   backgroundColor: '#FF3B30',
  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  //   borderRadius: 5,
  // },
  // deleteButtonText: {
  //   color: '#fff',
  //   fontSize: 14,
  //   fontWeight: 'bold',
  // },





  // 
 

  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// })


