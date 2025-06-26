import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.registerBox}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />

          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="nomeDeUsuario"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#888"
            secureTextEntry
          />

          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#888"
            secureTextEntry
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.link}>Já tem conta? Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9800',
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  registerBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    width: '90%',
    alignItems: 'center',
    elevation: 8,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    height: 40,
    marginBottom: 10,
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#0D1B4C',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 10,
    elevation: 4,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
