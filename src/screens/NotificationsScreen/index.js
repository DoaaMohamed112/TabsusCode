import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import NotificationItem from './NotificationItem';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'

const NotificationsScreen = props => {
  const dummyTitle = 'There is a new update for the app';
  const dummyParagraph = 'Lorem IpSum is simply dummy textasad fdf fsd awad fdfsd sgggsd ';
  const dummyList = [1, 2, 4, 6];
  return (
    <View style={Style.container}>

      <Header style={{ height: 70 }} title='Notifications' leftIcon='back' rightIcon='general'
        HandleBack={() => props.navigation.pop()}
        onPressCart={() => props.navigation.navigate('CartScreen')}
      ></Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        data={dummyList}
        renderItem={({ item, index }) => (
          <NotificationItem title={dummyTitle} paragraph={dummyParagraph}></NotificationItem>

        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}


export default NotificationsScreen;



