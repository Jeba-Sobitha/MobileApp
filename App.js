import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NewsScreen from './Screens/NewsScreen';
import ReadScreen from './Screens/ReadScreen';
import DailyBreadScreen from './Screens/DailyBreadScreen';
import CalendarScreen from './Screens/CalendarScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () =>{
  return(
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name='Home' component={HomeScreen}
          options={{
            drawerIcon: ()=>(
              <>
              <FontAwesome5 name="home" size={24}/>
              </>
            )
          }}
        />
        <Drawer.Screen name='Profile' component={ProfileScreen}
        options={{
          drawerIcon: ()=>(
            <>
            <AntDesign name="profile" size={24}/>
            </>
          )
        }}
      />
        <Drawer.Screen name='News' component={NewsScreen}
        options={{
          drawerIcon: ()=>(
            <>
            <MaterialCommunityIcons name="newspaper" size={24}/>
            </>
          )
        }}
      />
        <Drawer.Screen name="Read" component = {ReadScreen} options={{
            drawerIcon: ()=>(
              <>
              <FontAwesome5 name="book-reader" size={20}/>
              </>
            )
          }}
        />
        <Drawer.Screen name="Daily Bread" component = {DailyBreadScreen} options={{
            drawerIcon: ()=>(
              <>
              <FontAwesome5 name="bread-slice" size={20}/>
              </>
            )
          }}
        />
        <Drawer.Screen name="Calendar" component = {CalendarScreen} options={{
            drawerIcon: ()=>(
              <>
              <MaterialCommunityIcons name="calendar" size={24}/>
              </>
            )
          }}
        />
      </Drawer.Navigator>
  );
};

export const CustomHeader = () =>{

  const navigation = useNavigation();

  const menuClicked = () => {
    console.log("Clicked")
    navigation.openDrawer()
  }

  return (
    <View style = {styles.header}>
      <TouchableOpacity onPress={menuClicked}>
      <FontAwesome5 name="bars" size={30} color="black" />
      </TouchableOpacity>
      {/* <Icon name="menu"></Icon> */}
      <Text style={{color: 'black', fontFamily:'LeagueSpartan-Bold', fontWeight:'900', fontSize:30}} >WCF</Text>
      <AntDesign name='search1' size={30} style={{fontWeight:'bold'}} color="black" onPress={() => console.log('Search icon pressed')}/>
    </View>
  );
};

function App() {  
  return (
   
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <Stack.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
        <Stack.Screen name="StackHome" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  header: {
    backgroundColor:'white',
    height : 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: StatusBar.currentHeight +20,
}
});
