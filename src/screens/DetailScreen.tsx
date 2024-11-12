import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
};

interface PostDetail {
  id: number;
  title: string;
  body: string;
}

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { itemId } = route.params;
  const [data, setData] = useState<PostDetail | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [itemId]);

  if (!data) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
      <Text style={{ marginTop: 10 }}>{data.body}</Text>
    </View>
  );
};

export default DetailScreen;
