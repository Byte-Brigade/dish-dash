import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCheckout, IconNext, IconPromoMenuActive } from '../../../assets';
import { colors } from '../../../utils';

interface BtnPromoCodeProps {
  onPress: () => void;
  text?: string;
}

const BtnPromoCode = ({ onPress, text }: BtnPromoCodeProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.label}>
        <IconPromoMenuActive />
        <Text style={styles.text}>{text}</Text>
      </View>
      <IconNext />
    </TouchableOpacity>
  );
};

export default BtnPromoCode;

const styles = StyleSheet.create({
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#CDFC02',
    borderRadius: 5,
    padding: 14.5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.black,
    textAlign: 'center',
    paddingEnd: 8,

    marginLeft: 8,
  },
});
