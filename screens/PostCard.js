import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
export default class PostCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
         
          <View style={styles.authorNameContainer}>
             <Image
            source={require('../assets/profile_img.png')}
            style={styles.authorImage}
          />

            <Text style={styles.postAuthorText}>
              {this.props.post.author}
            </Text>
            <Image source = {require("../assets/post.jpeg")} style = {styles.postImage} />
            <Text style={styles.captionText}>
              {this.props.post.caption}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  authorImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  authorNameContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  
  postAuthorText: {
    fontSize: RFValue(18),

    color: 'white',
  },
  captionText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
