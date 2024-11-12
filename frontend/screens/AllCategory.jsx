import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { BurgerCategory, dessertCategory, pizzaCategory, riceCategory } from './CategoryData';

const AllCategory = () => {
    const navigation = useNavigation();
  return (
    <>
    <ScrollView>
        <ImageBackground source={require('../images/backgroudimage.jpg')} style={styles.backgroundImage}>
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
        textAlign:'left',
        marginTop:50,

      }}>
        Burger Category
      </Text>
    </View>
  </View>

  <View style={styles.categories}>
      {BurgerCategory.map((e) => (
        <View key={e.id} style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: e.imageUrl }} />
          {/* <Text style={styles.categoryText}>{e.id}</Text> */}

          <Text style={styles.categoryText}>{e.name}</Text>
          <Text style={styles.categoryText}>{e.price}</Text>
          {/* onPress={() => OrderNow(card.id, card.foodName, card.description, card.price)} */}
          <TouchableOpacity onPress={() => navigation.navigate('orderform', { e })}
            style={styles.orderButton}
             // Pass the food id here
          >
            <Text style={styles.orderButtonText} >Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
        </ImageBackground>


        <ImageBackground source={require('../images/backgroudimage.jpg')} style={styles.backgroundImage}>
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
        marginTop:50,
        textAlign:'left'
      }}>
        Pizza Category
      </Text>
    </View>
  </View>

  <View style={styles.categories}>
      {pizzaCategory.map((e) => (
        <View key={e.id} style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: e.imageUrl }} />

          <Text style={styles.categoryText}>{e.name}</Text>
          <Text style={styles.categoryText}>{e.price}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('orderform', { e })}
            style={styles.orderButton}
             // Pass the food id here
          >
            <Text style={styles.orderButtonText} >Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
        </ImageBackground>




        <ImageBackground source={require('../images/backgroudimage.jpg')} style={styles.backgroundImage}>
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
        textAlign:'left',
        marginTop:50,

      }}>
        Rice Category
      </Text>
    </View>
  </View>

  <View style={styles.categories}>
      {riceCategory.map((e) => (
        <View key={e.id} style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: e.imageUrl }} />

          <Text style={styles.categoryText}>{e.name}</Text>
          <Text style={styles.categoryText}>{e.price}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('orderform', { e })}
            style={styles.orderButton}
             // Pass the food id here
          >
            <Text style={styles.orderButtonText} >Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
        </ImageBackground>




        <ImageBackground source={require('../images/backgroudimage.jpg')} style={styles.backgroundImage}>
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
        textAlign:'left',
        marginTop:50,

      }}>
        Dessert Category
      </Text>
    </View>
  </View>

  <View style={styles.categories}>
      {dessertCategory.map((e) => (
        <View key={e.id} style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: e.imageUrl }} />

          <Text style={styles.categoryText}>{e.name}</Text>
          <Text style={styles.categoryText}>{e.price}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('orderform', { e })}
            style={styles.orderButton}
             // Pass the food id here
          >
            <Text style={styles.orderButtonText} >Order Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
        </ImageBackground>
    </ScrollView>
    </>
  )
}

export default AllCategory

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      category: {
        alignItems: 'center',
        width: '48%', 
        marginBottom: 15,
        borderWidth:1,
      
        borderRadius:20,
        padding:10
      },
      categoryImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
      },
      categoryText: {
        color: '#fff',
        fontSize: 14,
      },
      orderButton: {
    
        backgroundColor: '#4CAF50',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width:100
      },
      orderButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
})