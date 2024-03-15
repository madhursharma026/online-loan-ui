import CategoriesDetails from "../components/CategoriesDetails";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FinancesPage() {
    return (
        <ScrollView style={{ padding: 15, backgroundColor: 'white' }}>
            <View style={{ marginBottom: 15 }}>
                <Image source={{ uri: 'https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149231173.jpg' }} height={200} style={{ borderRadius: 20, width: '100%' }} />
                <Text style={{ position: 'absolute', color: 'white', top: 10, left: 15, fontSize: 24, fontWeight: 600 }}>
                    $10,500.10
                </Text>
                <Text style={{ position: 'absolute', color: 'white', top: 45, left: 15, fontSize: 16, fontWeight: 600 }}>
                    Estimated Payment
                </Text>
                <Text style={{ position: 'absolute', color: 'white', top: 65, left: 15, fontSize: 18, fontWeight: 600 }}>
                    --------------------------------
                </Text>
                <Text style={{ position: 'absolute', color: 'white', top: 90, left: 15, fontSize: 24, fontWeight: 600 }}>
                    $1,100/MT
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => console.log("Pay Money Button Clicked!")}>
                    <Text style={styles.buttonText}>
                        Details
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={{ marginVertical: 20, fontSize: 24, fontWeight: 600 }}>Categories</Text>
            <CategoriesDetails source={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} Text1={'Home loan'} Text2={'2 Homes premium'} Amount={'$5200.30'} />
            <CategoriesDetails source={'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg'} Text1={'Car loan'} Text2={'3 Car premium'} Amount={'$2350.30'} />
            <CategoriesDetails source={'https://static.thenounproject.com/png/2863109-200.png'} Text1={'Personal loan'} Text2={'1 Person'} Amount={'$720.30'} />
            <CategoriesDetails source={'https://cdn-icons-png.freepik.com/512/3309/3309977.png'} Text1={'Gold loan'} Text2={'5 Golds premium'} Amount={'$2230.01'} />
            <Text style={{ fontSize: 24, fontWeight: 600, marginTop: 20 }}>Transfer</Text>
            <Text style={{ fontSize: 16, marginTop: 10, color: '#A1A1A1' }}>You didn't make anny transer this month</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        right: 20,
        bottom: 20,
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 10,
        position: 'absolute',
        borderColor: 'white',
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

