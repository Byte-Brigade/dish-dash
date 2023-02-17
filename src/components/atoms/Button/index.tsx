import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import BtnIconCart from './BtnIconCart';
import BtnIconText from './BtnIconText';
import { IconCheckout } from '../../../assets';
import BtnCheckout from './BtnCheckout';
import BtnPromoCode from './BtnPromoCode';

interface ButtonProps {
  type?: string;
  onPress: () => void;
  text?: string;
  qty?: number;
  icon?: string;
}

const Button = ({ type, onPress, text, qty, icon }: ButtonProps) => {
  if (type === 'btn-menu-cart') {
    return <BtnIconCart onPress={onPress} qty={qty} />;
  }
  if (type === 'btn-add-cart') {
    return <BtnIconText onPress={onPress} />;
  }
  if (type === 'btn-checkout') {
    return <BtnCheckout text={text} onPress={onPress} />;
  }
  if (type == 'btn-promo-code') {
    return <BtnPromoCode text={text} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8.5,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});
