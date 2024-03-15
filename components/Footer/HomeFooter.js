import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeFooter({ pageName }) {
    return (
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={() => console.log('Home Icon Pressed')} style={{ backgroundColor: (pageName === 'Home' ? 'black' : ''), padding: 10, borderRadius: 100 }}>
                <AntDesign name="home" size={20} color={(pageName === 'Home' ? 'white' : 'black')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Chart Icon Pressed')} style={{ backgroundColor: (pageName === 'chartPage' ? 'black' : ''), padding: 10, borderRadius: 100 }}>
                <Feather name="pie-chart" size={20} color={(pageName === 'chartPage' ? 'white' : 'black')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Wallet Icon Pressed')} style={{ backgroundColor: (pageName === 'walletPage' ? 'black' : ''), padding: 10, borderRadius: 100 }}>
                <AntDesign name="wallet" size={20} color={(pageName === 'walletPage' ? 'white' : 'black')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Wave Icon Pressed')} style={{ backgroundColor: (pageName === 'wavePage' ? 'black' : ''), padding: 10, borderRadius: 100 }}>
                <MaterialCommunityIcons name="triangle-wave" size={20} color={(pageName === 'wavePage' ? 'white' : 'black')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Pofile Icon Pressed')} style={{ backgroundColor: (pageName === 'profilePage' ? 'black' : ''), padding: 10, borderRadius: 100 }}>
                <FontAwesome name="user-o" size={20} color={(pageName === 'profilePage' ? 'white' : 'black')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomView: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        justifyContent: 'space-between',
    }
});

