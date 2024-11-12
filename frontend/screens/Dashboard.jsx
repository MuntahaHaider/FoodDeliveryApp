import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Cards from './Cards';
const Dashboard = () => {
    const [query, setQuery] = useState('');
   
  return (
   <ScrollView style={{backgroundColor:'black'}}>
    <View >
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Order..................................................................🔎"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </View>
    </View>
       {/* ================================ */}
  <View>
  <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center' 
    }}>
      <Text style={{
        color: 'white', 
        fontSize: 30, 
        marginBottom:20,
        textAlign:'left'
      }}>
        Category
      </Text>
    </View>
  </View>

  {/* ======================= */}

      {/* Categories Section (Image Example) */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg' }} />
          <Text style={styles.categoryText}>Burgers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg' }} />
          <Text style={styles.categoryText}>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?resize=768,574' }} />
          <Text style={styles.categoryText}>Mexican</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://i.ytimg.com/vi/OWVjync6peU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmeV_FMIbMjuPW4r8YCaPKjoZwQA' }} />
          <Text style={styles.categoryText}>Sushi</Text>
        </TouchableOpacity>
        </View>

{/* =============================== */}
    <View>
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?semt=ais_hybrid' }} 
      style={styles.backgroundImage}
    >
      <ScrollView horizontal contentContainerStyle={styles.cardContainer}>
        {Array(4).fill().map((_, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.discountText}>30% OFF</Text>
            <Text style={styles.cardText}>Enjoy delicious food with a 30% discount. Order now and indulge in our special offer! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloribus mollitia assumenda molestias. Laudantium ea exercitationem ex quidem, expedita reiciendis!</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.buttonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
    </View>
{/* ================================== */}
<View>
  <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Text style={{
        color: 'white', 
        fontSize: 30, 
        marginBottom:20,
        textAlign:'left'
      }}>
        Fastest near you
      </Text>
    </View>
  </View>

{/* ============ */}
<Cards />
    </View>
   </ScrollView>
  )
}

export default Dashboard

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
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#f9f9f9',
      },
      input: {
        flex: 1,
        paddingVertical: 12,
        paddingLeft: 10,
        fontSize: 16,
      },

      header: {
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 30,
      },
      headerText: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
      },
      subtitle: {
        fontSize: 18,
        color: '#fff',
        marginTop: 5,
      },
      categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
      },
      category: {
        alignItems: 'center',
        width: '22%',
      },
      categoryImage: {
        width: 80,
        height: 90,
        borderRadius: 10,
        marginBottom: 10,
      },
      categoryText: {
        color: '#fff',
        fontSize: 14,
      },


    // =====================


    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      card: {
        width: 300,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
      },
      discountText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
      },
      cardText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginVertical: 5,
      },
      orderButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 15,
        marginTop: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },

    //   ========================


    
})
