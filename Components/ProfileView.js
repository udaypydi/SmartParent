import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Navigator,
  TouchableHighlight,
  BackAndroid,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import profiles from '../data'


export default class ProfileView extends Component {
constructor(props) {
    super(props);
    
  this.state = {
    myData: '',
  }
    }

  async componentDidMount() {
  let response = await fetch('http://10.0.2.2:3001/v1/profiles.json');
  let rsponseJson = await response.json();
  this.setState({ myData: responseJson }); 
  }

render() {
    if(this.state.myData) {
    return (

    <ScrollView style={styles.scroll}>
  <ImageContainer>

        <Image
                  style={{width:110,height: 110, justifyContent: 'center', alignItems: 'center',
                  marginBottom:20}}
                  source={require('./profpic.png')}>
                  </Image>
         </ImageContainer>

<Container>
    <Text
     style={styles.textInput}> Name : {this.state.myData.profiles[0].name}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Admission No: {this.state.myData.profiles[0].admission_no}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> D.O.B : {this.state.myData.profiles[0].dob}
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Class : {this.state.myData.profiles[0].class}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Section : {this.state.myData.profiles[0].section}
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Address : {this.state.myData.profiles[0].address}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Contact : {this.state.myData.profiles[0].contact}
    </Text>
</Container>

        </ScrollView>

    );
    }
    else{
    return(
    <Container>
    </Container>
    );
    }

  }


}
const styles = StyleSheet.create({
scroll: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    flexDirection: 'column'
},

buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
},

buttonBlackText: {
    fontSize: 20,
    marginTop: 20,
    textAlign:'center',
    color: '#000000'
    },

textInput: {
    fontSize: 20,
    color: "#000000",
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});
