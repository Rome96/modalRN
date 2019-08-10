import React from "react";
import {
  Text,
  View,
  Alert,
	Modal,
  StyleSheet,
  TouchableHighlight
} from "react-native";

class ModalExample extends React.Component {
  state = {
    modalVisible: false
  };

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={style.container}>
        <Modal
				style={style.modalStytle}
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("El modal se ha cerrado");
          }}
        >
          <View>
            <View style={style.container}>
              <Text>Nombre: Turiano Romero</Text>
							<Text>Edad: 23 Años</Text>
							<Text>Ciudad: Barranquilla</Text>
              <TouchableHighlight
                onPress={() => {
                  this._setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={style.textModal}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this._setModalVisible(true);
          }}
        >
          <Text>Turi detail</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 22,
		backgroundColor: "#5edfff",
		margin: 30,
		alignItems: 'center',
		justifyContent:'center',
		borderRadius: 5
	},
	textModal: {
		margin: 10,
		color: 'red'
	}
});
export default ModalExample;
