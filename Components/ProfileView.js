import React, { Component } from 'react';
import {connect} from 'react-redux';

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
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';

@connect(
  state => ({
    profiles: state.profiles,
  }),
  dispatch => ({
      refresh: () => dispatch({type: 'GET_PROFILE_DATA'}),
    }),
)

export default class ProfileView extends Component {

render() {
const { profiles} = this.props;
const {profile, profile:{name,admission_no,dob,classes,section,address,contact}}=this.props;
    return (
    <ScrollView style={styles.scroll}>
    {
     profiles.map((profile,index)=> <ProfileView
     profile={profile}
     key={index}
     />)
     }
        <ImageContainer>

        <Image
                  style={{width:110,height: 110, justifyContent: 'center', alignItems: 'center',
                  marginBottom:20}}
                  source={require('./profpic.png')}>
                  </Image>
         </ImageContainer>

<Container>
    <Text
     style={styles.textInput}> Name : {profile.name}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Admission No. {profile.admission_no}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> D.O.B :  {profile.dob}
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Class :  {profile.classes}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Section :  {profile.section}
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Address :   {profile.address}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Contact :   {profile.contact}
    </Text>
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
    color: "#000000",
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});
