import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Repo from './res/components/Repo';
import NewRepoModal from './res/components/NewRepoModal';

export default class App extends Component<{}> {
  state = {
    modalVisible: false,
    repos: [],
  };

  async componentDidMount(){
    const repos = JSON.parse(await AsyncStorage.getItem('@minicurso:repositories')) || [];

    this.setState({ repos });
  }

  _addRepository = async (newRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });

    await AsyncStorage.setItem('@minicurso:repositories', JSON.stringify(this.state.repos));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            My Favorite Repositories
          </Text>
          <TouchableOpacity onPress={()=>{this.setState({modalVisible: true})}}>
            <Text style={styles.headerIcon}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repos => <Repo key={repos.id} data={repos}/> )}
        </ScrollView>

        <NewRepoModal
        onCancel={()=>{this.setState({modalVisible: false})}}
        onAdd={this._addRepository}
        visible={this.state.modalVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70: 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  headerText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },
  headerIcon: {
    fontSize: 27,
    fontWeight: 'bold'
  },
  repoList: {
    padding: 20
  }
});
