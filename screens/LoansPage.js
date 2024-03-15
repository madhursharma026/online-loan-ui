import LoanDetails from "../components/LoanDetails";
import LoanPayments from "../components/LoanPayments";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoansPage() {
    return (
        <ScrollView style={{ padding: 15, backgroundColor: 'white' }}>
            <LoanDetails source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc2Wdf-yURFK06e13N56opdHb_gBpwf6Vr4ZCU3uQcg&s' />
            <LoanDetails source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc2Wdf-yURFK06e13N56opdHb_gBpwf6Vr4ZCU3uQcg&s' />
            <LoanPayments Title={'Loan 01 Payments'} Amount={'$40,500.30'} />
            <LoanPayments Title={'Monthly Pay'} Amount={'$500.20'} />
            <View style={styles.horizontalRule} />
            <LoanPayments Title={'Loan 02 Payments'} Amount={'$10,000'} />
            <LoanPayments Title={'Monthly Pay'} Amount={'$2000.25'} />
            <View style={styles.horizontalRule} />
            <LoanPayments Title={'Max Total'} Amount={'$50500.30'} />
            <TouchableOpacity style={styles.button} onPress={() => console.log("Pay Money Button Clicked!")}>
                <Text style={styles.buttonText}>
                    PAY MONEY
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    horizontalRule: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BEBEBE',
    },
    button: {
        marginTop: 40,
        borderRadius: 40,
        paddingVertical: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

