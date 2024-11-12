import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

type Props = {
  navigation: ListScreenNavigationProp;
};

interface Post {
  id: number;
  title: string;
}

const ListScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { itemId: item.id })}>
      <Text style={{ padding: 20, borderBottomWidth: 1 }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default ListScreen;
