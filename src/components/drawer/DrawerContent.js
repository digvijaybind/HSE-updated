/*eslint-disable*/
import React from 'react'
import { StyleSheet,View ,Image,Text} from 'react-native'
import { lightColors } from '../../theme/color'

export default function DrawerContent() {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: 'https://i.imgur.com/tI7uwUW.png' }} style={styles.drawerImage} />
        <Text style={styles.drawerHeaderText}>Hello, User</Text>
      </View>
      <View style={styles.drawerContent}>
        <Text style={styles.drawerItem}>My Profile</Text>
        <Text style={styles.drawerItem}>View Investments</Text>
        {/* Add more drawer items here */}
      </View>
      <View style={styles.drawerFooter}>
        <Text style={styles.drawerFooterText}>Logout</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
      drawerHeader: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      drawerImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
      },
      drawerHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      drawerContent: {
        marginTop: 30,
      },
      drawerItem: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      drawerFooter: {
        marginTop: 30,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
      },
      drawerFooterText: {
        fontSize: 16,
        textAlign: 'center',
      },
})
