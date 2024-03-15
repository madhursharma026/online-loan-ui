import HomePage from './screens/HomePage';
import LoansPage from './screens/LoansPage';
import LoginPage from './screens/LoginPage';
import Header from './components/Header/Header';
import FinancesPage from './screens/FinancesPage';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LogBox, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

LogBox.ignoreAllLogs();

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <Drawer.Navigator screenOptions={{ drawerType: 'slide', overlayColor: 'transparent', drawerStyle: styles.drawerStyle, drawerActiveBackgroundColor: '#000000', drawerItemStyle: styles.drawerItemStyle, drawerActiveTintColor: 'white', drawerLabelStyle: styles.drawerLabelStyle }}>
        <Drawer.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={HomePage} options={{ header: ({ navigation }) => <Header navigation={navigation} pageName={'Home'} />, drawerIcon: ({ color }) => (<AntDesign name="home" size={20} color={color} />) }} />
        <Drawer.Screen name="Loans" component={LoansPage} options={{ header: ({ navigation }) => <Header navigation={navigation} pageName={'Loans'} />, drawerIcon: ({ color }) => (<Feather name="pie-chart" size={20} color={color} />) }} />
        <Drawer.Screen name="Finances" component={FinancesPage} options={{ header: ({ navigation }) => <Header navigation={navigation} pageName={'Finances'} />, drawerIcon: ({ color }) => (<AntDesign name="wallet" size={20} color={color} />) }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    width: 240,
  },
  drawerItemStyle: {
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  drawerLabelStyle: {
    fontSize: 20,
  }
})

