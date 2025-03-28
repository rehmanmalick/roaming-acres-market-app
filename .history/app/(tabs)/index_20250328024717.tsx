import Button from '@/components/button';
import ShopByCategory from '@/components/shop-by-category';
import Wrapper from '@/components/wrapper';
import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { View } from 'react-native';

export default function SelectYourAccount() {
  return (
    <>
    <Wrapper>
      <View className='flex'>
    <View  style={{flexDirection:"row", justifyContent: 'center', alignItems: 'center'}}>
    <Button state='primary' title='Hello'/>
    <Button state='secondary' title='Hello'/>
    <Button state='disable' title='Hello'/>
    </View>
    <ShopByCategory text={"abcd"}/>
    </View>
    </Wrapper>
    </>
  );
}


