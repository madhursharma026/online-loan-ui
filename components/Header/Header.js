import { useEffect, useState } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeHeader({ navigation, pageName }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(async () => {
        const data = await AsyncStorage.getItem("@user");
        if (!data) return null;
        setUserInfo(JSON.parse(data));
    }, [1])

    async function logoutFunction() {
        await AsyncStorage.removeItem("@user")
        navigation.navigate('Login')
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: 'white' }}>
            {pageName === 'Home' ?
                <>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Text style={{ backgroundColor: 'black', padding: 10, borderRadius: 100 }}>
                            <AntDesign name="menu-fold" size={16} color="white" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, fontWeight: 700 }}>Hello {userInfo}</Text>
                    <TouchableOpacity onPress={() => logoutFunction()}>
                        <Text style={{ backgroundColor: 'black', padding: 10, borderRadius: 100 }}>
                            <MaterialCommunityIcons name="logout" size={16} color="white" />
                        </Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ backgroundColor: '#F2F2F2', padding: 10, borderRadius: 100 }}>
                            <AntDesign name="left" size={16} color="black" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, fontWeight: 700 }}>{pageName}</Text>
                    <TouchableOpacity onPress={() => console.log('Bell icon pressed')}>
                        <Text style={{ backgroundColor: '#F2F2F2', padding: 10, borderRadius: 100 }}>
                            {pageName === 'Loans' ?
                                <MaterialIcons name="notifications-none" size={24} color="black" />
                                :
                                <></>
                            }
                            {pageName === 'Finances' ?
                                <Entypo name="dots-three-horizontal" size={24} color="black" />
                                :
                                <></>
                            }
                        </Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    );
}

