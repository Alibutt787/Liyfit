import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const Help = ({ navigation }) => {
  return (
    <View>
      <SubHeadericon name="arrow-left" des="Help " navigation={navigation} />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact_us');
          }}>
          <View style={styles.Item}>
            <Icon name="user" size={25} color="grey" />
            <View>
              <Text style={styles.size}> Contact US</Text>
              <Text style={{ fontSize: 10, paddingLeft: 10 }}>
                Question? Need Help?
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Help_content', { screen: 'TermsConditionPage' });
          }}>
          <View style={styles.Item}>
            <Text style={styles.size}>
              {' '}
              <Icon name="key" size={25} color="grey" />
              Terms and Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AppInfo');
          }}>
          <View style={styles.Item}>
            <Text style={styles.size}>
              {' '}
              <Icon name="key" size={25} color="grey" />
              App Info
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: 'center', marginTop: '70%' }}>From Liyfit</Text>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  card: {
    // height: 250,
    margin: 10,
    paddingBottom: 2,
    borderRadius: 10,
    marginVertical: 30,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
  },
  Item: { flexDirection: 'row', padding: 20 },
  ItemLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  size: { fontSize: 20, fontFamily: 'serif' },
  Link: { color: 'green', textDecorationLine: 'underline' },
});
