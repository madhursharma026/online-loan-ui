import { StyleSheet, Text, View } from "react-native";

export default function LoanPayments({ Title, Amount }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ fontSize: 18, color: '#A7A7A7' }}>{Title}</Text>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>{Amount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalRule: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#BEBEBE',
    },
});

