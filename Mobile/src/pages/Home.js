import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image source={require('./assets/nao-grita.gif')} style={styles.avatar} />
            <View>
              <Text style={styles.username}>M.G.G.P🔵</Text>
              <Text style={styles.status}>Fiéis as beaaach 🥰</Text>
            </View>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Icon name="bell" size={20} color="#000" style={{ marginRight: 15 }} />
            </TouchableOpacity>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
          </View>
        </View>

        {/* Placar e imagem */}
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/image.png')} 
            style={styles.image}
          />
          <Text style={styles.score}>6-1</Text>
        </View>

        {/* Duplas */}
        <View style={styles.card}>
          <Text style={styles.duplaTitle}>1ª Dupla:</Text>
          <Text style={styles.duplaName}>Paulo Ricardo</Text>
          <Text style={styles.duplaName}>Ricardo Martins</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.duplaTitle}>2ª Dupla:</Text>
          <Text style={styles.duplaName}>Cauã Matheus</Text>
          <Text style={styles.duplaName}>Pablo Cafeo</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={22} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="list" size={22} />
          <Text style={styles.navText}>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="trophy" size={22} />
          <Text style={styles.navText}>Competições</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card" size={22} />
          <Text style={styles.navText}>Pagamentos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 100,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontSize: 13,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginVertical: 16,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  score: {
    position: 'absolute',
    top: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  duplaTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  duplaName: {
    fontSize: 14,
    paddingLeft: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
  },
});
