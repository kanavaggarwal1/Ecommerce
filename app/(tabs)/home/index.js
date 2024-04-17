import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useRouter } from "expo-router";

const index = async () => {
    const router = useRouter();
};

const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    router.replace("/(authenticate)/login");
};
const logout = () => {
    clearAuthToken();
};
const Index = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <View>
                <Image
                    style={{ width: 150, height: 200, resizeMode: "contain"}}
                    source={{
                        uri: "https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72",
                    }}
                />
            </View> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>E-Commerce App</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productContainer}>
            <TouchableOpacity style={styles.productItem}>
              <Image
                source={{ uri : "https://as2.ftcdn.net/v2/jpg/02/56/00/03/1000_F_256000308_jeYRaRHVHOpASWiUEp3Qht7LY8U8ZFw8.jpg"}}
                style={styles.productImage}
              />
              <Text style={styles.productName}>T-Shirts</Text>
              <Text style={styles.productPrice}>Starting at ₹299</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productItem}>
              <Image
                source={{uri: "https://t3.ftcdn.net/jpg/04/02/42/64/240_F_402426445_sE1ueZRMFZ8P3BarkeQf3pbcr2tgHYJz.jpg"}}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Shirts</Text>
              <Text style={styles.productPrice}> Starting at ₹799</Text>
            </TouchableOpacity>
            {/* Add more product items here */}
            {/* Comment wrapped in curly braces */}
            <TouchableOpacity style={styles.productItem}>
              <Image
                source={{uri: "https://t3.ftcdn.net/jpg/02/16/10/68/240_F_216106821_TxlfQFQWrCuOiRiCzrJjT3bK3ofgbDwu.jpg"}}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Jackets</Text>
              <Text style={styles.productPrice}>Starting at ₹1299</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t3.ftcdn.net/jpg/00/86/23/60/240_F_86236057_UVXfxQmPE4kk3vHZjLWENnPsU23VYd8t.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Jeans</Text>
            <Text style={styles.productPrice}>Starting at ₹999</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t3.ftcdn.net/jpg/04/24/35/16/240_F_424351618_2pCDsmpkENJf70VABumLMRlSHFfzs1Hk.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Hoodies</Text>
            <Text style={styles.productPrice}>Starting at ₹1199</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t3.ftcdn.net/jpg/04/39/72/38/240_F_439723894_VffQcT79v71NllE19kWt6doIFpF7UmTq.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Varsity Jackets</Text>
            <Text style={styles.productPrice}>Starting at ₹1299</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{ uri: "https://t4.ftcdn.net/jpg/06/36/14/41/240_F_636144148_nevv3hmzwkDST1xv1amgohjRI2XsoHgm.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Pants</Text>
            <Text style={styles.productPrice}>Starting at ₹999</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t3.ftcdn.net/jpg/02/34/04/48/240_F_234044859_cfrZeIZmzIvzwgyYxRzmvrr9SV92abL2.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Socks</Text>
            <Text style={styles.productPrice}>Starting at ₹99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t4.ftcdn.net/jpg/05/06/36/71/240_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Shoes</Text>
            <Text style={styles.productPrice}>Starting at ₹799</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productItem}>
            <Image
              source={{uri: "https://t4.ftcdn.net/jpg/02/20/54/85/240_F_220548574_yIBNzRpyuehKC7ncMfOABk0qg5chKzd9.jpg"}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Belts</Text>
            <Text style={styles.productPrice}>Starting at ₹399</Text>
          </TouchableOpacity>
          </View>
        </View>

        {/* <Pressable style={styles.logout} onPress={logout}>
            <Text>Logout</Text>
        </Pressable> */}

        <Pressable onPress={logout}
                        style={{ width: 200, backgroundColor: "#0072b1", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Logout</Text>
                    </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  productPrice: {
    fontSize: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
//   logout:{
//     backgroundColor: 'red',
//   }
});

export default Index;


