import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';


export default class RegisterView extends Component {
constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''

      }
  }



_handleAdd = () => {


      const data = {
        email: this.state.email,
        password: this.state.password,
      }
    const json = JSON.stringify(data);
      fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then((response) => response.json())
      .then(() => {
        alert('Success! You may now log in.');
        // Redirect to home screen
        this.props.navigator.pop();
      })
      .catch((error) => {
        alert('There was an error creating your account.');
      })
      .done()
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
        placeholder="E-mail"
        style={styles.textInput}
        onChangeText={(text) => this.setState({email:text})}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={(event) => {
           const{email}=this.state.email;
           const{onSubmitEditing}=this.props;
            if(!email) return
            onSubmitEditing(email)
            this.refs.SecondInput.focus();
          }}


    />

    <TextInput
        placeholder="Password"
        ref='SecondInput'
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password:text})}
        style={styles.textInput}

    />
</Container>

             <Container>
                 <Button
                     label="Create Account"
                     styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                     onPress={this._handleAdd}
                      />
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
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
textInput: {
    fontSize: 20,
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});




