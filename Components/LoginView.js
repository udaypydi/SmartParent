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
  ScrollView
} from 'react-native';
import moment from 'moment';

var _navigator;

import Profile from '../models/profile';
import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import {AsyncStorage} from 'react';
import RegisterView from './RegisterView';


export default class LoginView extends Component {
constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPass: '',
      error:null,
    };
  }


_navigate(){
  this.props.navigator.push({
    name: 'RegisterView', // Matches route.name
  })

}
_navigate2(){
  (req, res, next) => {
  // Find all movies and return json response
  Profile.find({'email': this.state.userName}).lean().exec((err, profiles) => res.json(
    // Iterate through each movie
    { profiles: profiles.map(profile => ({
      ...profile,
     }))}
  ));
}
this.props.navigator.push({
              name: 'CheckList',
              })
              }

  render() {
    return (
    <ScrollView style={styles.scroll}>


        <ImageContainer>

        <Image
                  style={{width:110,height: 110, justifyContent: 'center', alignItems: 'center'}}
                  source={require('./Logo.png')}>
                  </Image>
         </ImageContainer>

<Container>
    <TextInput
        placeholder="UserID"
        style={styles.textInput}
        onChangeText={(userName) => this.setState({userName})}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={(event) => {

           const{userName}=this.state.userName;
           const{onSubmitEditing}=this.props;
            if(!userName) return
            onSubmitEditing(userName)
            this.setState({userName:''})
            this.refs.SecondInput.focus();
          }}
        value={this.state.userName}

    />

    <TextInput
        placeholder="Password"
        ref='SecondInput'
        secureTextEntry={true}
        onChangeText={(userPass) => this.setState({userPass})}
        style={styles.textInput}
        value={this.state.userPass}
    />
</Container>

             <Container>
                 <Button
                     label="Sign In"
                     styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                     onPress={() => this._navigate2()}
                      />
             </Container>
             <Container>
             <TouchableHighlight onPress={ () => this._navigate()}
              underlayColor= 'transparent'>
                 <Text style ={styles.buttonBlackText}>New? Register </Text>
             </TouchableHighlight>
             </Container>

        </ScrollView>

    );

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
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});




