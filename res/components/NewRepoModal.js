import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TextInput,
  TouchableOpacity
} from 'react-native';

// underlineColorAndroid="rgba(0,0,0,0)"

export default class NewRepoModal extends Component {

  state = {
      newRepoText: '',
  }

  render(){
    return (
      <Modal visible={this.props.visible}  transparent={true} animationType="fade" onRequestClose={()=>{}}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Adicionar Repositório</Text>
            <TextInput
              autoFocus
              autoCapitalize="none"
              underlineColorAndroid="rgba(0,0,0,0)"
              style={styles.boxInput}
              placeholder="organização/repositório"
              value={this.state.newRepoText}
              onChangeText={newRepoText => this.setState({ newRepoText })}
            />
              <View style={styles.buttomContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={this.props.onCancel}
                >
                  <Text style={styles.buttomText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.submitButton]}
                  onPress={()=> this.props.onAdd(this.state.newRepoText)}
                >
                  <Text style={styles.buttomText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems:'center'
  },
  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 290,
  },
  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },
  buttomContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5
  },
  submitButton: {
    backgroundColor: '#70BD85',
    marginLeft: 5
  },
  buttomText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12
  }

});
