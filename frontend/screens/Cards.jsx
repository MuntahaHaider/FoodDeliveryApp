
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { foodItems } from './FoodData'
import { useNavigation } from '@react-navigation/native';

const Cards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categories}>
      {foodItems.map((e) => (
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
  )
}

export default Cards

const styles = StyleSheet.create({
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
    borderColor:'rgba(255,255,255,0.2)',
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