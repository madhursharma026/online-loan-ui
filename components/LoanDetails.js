import { Image, Text, View } from "react-native";

export default function LoanDetails({ source }) {
    return (
        <View style={{ marginBottom: 15 }}>
            <Image source={{ uri: source }} height={130} style={{ borderRadius: 20, width: "100%" }} />
            <Text style={{ position: 'absolute', top: 10, left: 15, fontSize: 16, fontWeight: 600 }}>
                Loan 01
            </Text>
            <Text style={{ position: 'absolute', bottom: 45, left: 15, fontSize: 18, color: '#969595', fontWeight: 600 }}>
                Home Loan
            </Text>
            <Text style={{ position: 'absolute', bottom: 15, left: 15, fontSize: 24, fontWeight: 600 }}>
                $50,500.30
            </Text>
        </View>
    );
}

