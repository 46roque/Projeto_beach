import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo no topo */}
      <Image
        source={require('./assets/logo.png')} // Substitua pelo caminho correto
        style={styles.logo}
      />

      {/* Foto de perfil com botão de câmera */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/perfil.jpg')} // Substitua pela imagem de perfil
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Campos de texto */}
      <View style={styles.form}>
        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput style={styles.input} placeholder="Seu nome" />

        <Text style={styles.label}>Usuário:</Text>
        <TextInput style={styles.input} placeholder="seuusuario123" />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="********" secureTextEntry />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  logo: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  profileContainer: {
    marginTop: 30,
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 5,
  },
  form: {
    marginTop: 30,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 5,
    color: '#000',
  },
});
