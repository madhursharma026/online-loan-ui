import Avatar from "../components/Avatar";
import LoanDetails from "../components/LoanDetails";
import HomeFooter from "../components/Footer/HomeFooter";
import HeadingDetails from "../components/HeadingDetails";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomePage() {

    return (
        <View>
            <ScrollView style={{ padding: 15, backgroundColor: 'white', marginBottom: 70 }}>
                <Text style={[styles.mainHeading, { fontWeight: 700 }]}>
                    Get Loans in Minutes!
                </Text>
                <Text style={styles.subHeading}>Currently you have 2 loans</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F0D2F6', padding: 20, marginTop: 20, borderRadius: 50 }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dollar_sign_in_circle.svg/1024px-Dollar_sign_in_circle.svg.png' }} width={25} height={25} />
                    <Text style={{ fontSize: 15, fontWeight: 600 }}>All Loan Amounts</Text>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>$75,526.30</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#D2F0E6', padding: 20, marginTop: 20, borderRadius: 50 }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dollar_sign_in_circle.svg/1024px-Dollar_sign_in_circle.svg.png' }} width={25} height={25} />
                    <Text style={{ fontSize: 15, fontWeight: 600 }}>Monthly Payment</Text>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>$1245.30</Text>
                </View>
                <HeadingDetails headingTitle='Transfers' />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Avatar source={'https://cdn-icons-png.freepik.com/512/8898/8898982.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                        <Avatar source={'https://cdn-icons-png.flaticon.com/256/149/149071.png'} />
                    </View>
                </ScrollView>
                <HeadingDetails headingTitle='Recent Transactions' />
                <LoanDetails source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc2Wdf-yURFK06e13N56opdHb_gBpwf6Vr4ZCU3uQcg&s' />
                <LoanDetails source='https://png.pngtree.com/background/20210711/original/pngtree-green-prismatic-city-building-background-picture-image_1151460.jpg' />
                <LoanDetails source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc2Wdf-yURFK06e13N56opdHb_gBpwf6Vr4ZCU3uQcg&s' />
                <LoanDetails source='https://png.pngtree.com/background/20210711/original/pngtree-green-prismatic-city-building-background-picture-image_1151460.jpg' />
                <LoanDetails source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc2Wdf-yURFK06e13N56opdHb_gBpwf6Vr4ZCU3uQcg&s' />
            </ScrollView>
            <HomeFooter pageName='Home' />
        </View>
    );
}

const styles = StyleSheet.create({
    mainHeading: {
        fontSize: 26,
    },
    subHeading: {
        fontSize: 18,
        color: '#A7A7A7',
    }
});

