import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Repos extends Component {
  render(){
    return(
      <View style={styles.repo}>
        <Image
          style={styles.repoImage}
          source={{ uri: this.props.data.thumbnail }}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>{this.props.data.title}</Text>
          <Text style={styles.repoAuthor}>{this.props.data.author}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  repo: {
    padding: 20,
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  repoImage: {
    width: 60,
    height: 60,
    borderRadius: 5
  },

  repoInfo: {
    marginLeft: 10,
  },
  repoTitle: {
    color: '#333'
  },

  repoAuthor: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000'
  }
});
