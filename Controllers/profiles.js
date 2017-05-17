import {
  AsyncStorage,
} from 'react-native';

import Profile from '../models/profile';
import moment from 'moment';

export const index = (req, res, next) => {

  AsyncStorage.gettem('username').then((value) => {
    Profile.find({'email': value}).lean().exec((err, profiles) => res.json(
      // Iterate through each movie
      { profiles: profiles.map(profile => ({
        ...profile,
       }))}
    ));
  };
  }).done();
};
