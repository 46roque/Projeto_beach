import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Esportes() {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Substitua pelo caminho correto da logo
        style={styles.logo}
      />

      {/* Cabeçalho laranja */}
      <View style={styles.header}>
        <Text style={styles.headerText}>selecione sua Categoria:</Text>
        <Image
          source={require('./assets/perfil.jpg')} // Substitua pela imagem de perfil
          style={styles.profileImage}
        />
      </View>

      {/* Lista de categorias */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.categoryBox}>
            <Image
              source={require(`./assets/cat${item}.jpg`)} // Substitua por suas imagens reais
              style={styles.categoryImage}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Selecionar</Text>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
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
  header: {
    backgroundColor: '#FFA500',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 30,
    paddingVertical: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  categoryBox: {
    marginBottom: 25,
    alignItems: 'center',
  },
  categoryImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFA500',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
