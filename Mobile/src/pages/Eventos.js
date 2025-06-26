import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function EventosScreen() {
  const eventos = [
    {
      id: 1,
      imagem: require('./assets/evento1.jpg'), // Substitua pela imagem correta
    },
    {
      id: 2,
      imagem: require('./assets/evento2.jpg'), // Substitua pela imagem correta
    },
  ];

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Substitua pelo caminho correto
        style={styles.logo}
      />

      {/* Lista de eventos */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {eventos.map((evento) => (
          <View key={evento.id} style={styles.eventBox}>
            <Image source={evento.imagem} style={styles.eventImage} />
            <TouchableOpacity style={styles.enterButton}>
              <Text style={styles.enterText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  logo: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 60,
    height: 60,
    resizeMode: 'contain',
    zIndex: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 20,
  },
  eventBox: {
    marginBottom: 30,
    alignItems: 'center',
  },
  eventImage: {
    width: 320,
    height: 160,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  enterButton: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  enterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
