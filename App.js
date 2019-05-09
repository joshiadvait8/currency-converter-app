import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  PND: 0.01,
  AUS: 0.02,
  YEN: 1.57,
  DIN: 0.004351
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    } else {
      if (!isNaN(this.state.inputValue)) {
        var result =
          parseFloat(this.state.inputValue) * currencyPerRupee[currency];
        this.setState({ resultValue: result.toFixed(2) });
      } else {
        Alert.alert("Enter Numeric value");
      }
    }
  };

  render() {
    return (
      //handling keyboard dismiss on on screen touch specially for iOS
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.heading}>
              <Text style={styles.heading}>Currency Converter from INR</Text>
            </View>
            <View style={styles.resultcontainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Value"
                textAlign="center"
                value={this.state.inputValue}
                onChangeText={inputValue =>
                  this.setState({
                    inputValue
                  })
                }
              />
            </View>
            <View style={styles.converterbuttoncontainer}>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("EURO")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("PND")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("YEN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("AUS")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Aus Dollar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DIN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Dinar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE0E2"
    //marginTop: 20 handling notch corectly in iOs and android
  },
  screenview: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 100 //handling notches,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  resultcontainer: {
    height: 70,
    marginTop: 50,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    borderRadius: 10
  },
  input: {
    color: "#FFF",
    fontSize: 30

    //justifyContent: "center",
    // alignItems: "center"
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1"
    //borderWidth: 2
  },
  converterbutton: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DE",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
    borderRadius: 15
  },
  converterbuttontext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
