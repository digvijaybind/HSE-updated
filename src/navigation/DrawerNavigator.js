/*eslint-disable*/
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import TabNavigator from './TabNavigator'
import { lightColors } from '../theme/color'
import { View} from 'react-native'
import DrawerContent from '../components/drawer/DrawerContent'
import CustomText from '../components/text/CustomText'
export default function DrawerNavigator({navigation}) {
  
    const Drawer=createDrawerNavigator()
  return (
    <Drawer.Navigator
    drawerContent={props=>(
    <DrawerContent {...props} />
    )}
     
     drawerOptions={{
      isConfigured:true
    }} initialRouteName="entry"
  
     screenOptions={{
     headerShown:false,
      
     }}>
        <Drawer.Screen  
          name='entry'  component={TabNavigator} 

          options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Home'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
            drawerLabelStyle:{justifyContent:"center",alignItems:'center'}
          }}
          />
          <Drawer.Screen   name='invetments'  component={TabNavigator} options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'View Investments'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }} />
          <Drawer.Screen name='documents'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Documents'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='refer'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Refer a Friend'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen  name='privacyPolicy'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Privacy Policy'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='helpSupport'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Help & Support'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='faq'  component={TabNavigator} 
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'FAQ'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='keyRisks'  component={TabNavigator}
             options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Key Risks'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='settings'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Settings'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
          <Drawer.Screen name='logout'  component={TabNavigator}
            options={{
            drawerLabel:({focused})=>(
            <View>
              <CustomText topic={'Logout'} color={focused?lightColors.text.tertiary:lightColors.text.primary} fontWeight={'bold'} fontSize={18}/>
            </View>
            ),
            drawerActiveBackgroundColor:lightColors.background.secondary,
          }}
          />
    </Drawer.Navigator>
  )
}
