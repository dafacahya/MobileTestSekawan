import React from 'react';
import { View, Text, Linking, Button, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.text}>Name: Dafa Cahya Adi Pratama</Text>
      <Text style={styles.text}>Email: dafa.scout.11@gmail.com</Text>
      <Text style={styles.text}>Github:</Text>
      <Button title="View My Github" onPress={() => Linking.openURL('https://github.com/dafacahya')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 5 }
});

export default ProfileScreen;
