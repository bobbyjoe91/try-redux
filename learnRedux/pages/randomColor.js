import React, { useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { loadColors, executeTakeWorker } from '../redux/actions';

const pageStyle = StyleSheet.create({
  colorCard: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginBottom: 10,
  },
  color: (hex) => ({
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: hex ?? 'black',
    height: 100,
  }),
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  }
});

const RandomColor = ({ navigation }) => {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadColors(5));
    dispatch(executeTakeWorker());
  }, []);

  return (
    <View>
      <Button
        title='Reload Colors'
        onPress={() => {
          dispatch(loadColors(5));
          dispatch(executeTakeWorker());
        }}
      />
      <ScrollView style={{ padding: 16 }}>
        {
          colors.map((color) => (
            <View key={color.uid} style={pageStyle.colorCard}>
              <View style={pageStyle.color(color.hex_value)}/>
              <View style={pageStyle.description}>
                <Text>{color.color_name}</Text>
                <Text>{color.hex_value}</Text>
              </View>
            </View>
          ))
        }
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
    
  );
};

export default RandomColor;