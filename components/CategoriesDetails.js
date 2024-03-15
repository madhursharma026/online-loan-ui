import { Image, Text, View } from "react-native";

export default function CategoriesDetails({ Text1, Text2, source, Amount }) {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Image source={{ uri: source }} width={32} height={32} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 600 }}>{Text1}</Text>
                    <Text style={{ fontSize: 16, color: '#A7A7A7' }}>{Text2}</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>{Amount}</Text>
            </View>
        </View>
    );
}

