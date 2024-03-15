import { Text, View } from "react-native";

export default function headingTitle({ headingTitle }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>{headingTitle}</Text>
            <Text style={{ fontSize: 18, fontWeight: 600, color: '#95CF6A' }}>See All</Text>
        </View>
    );
}

