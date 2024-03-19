// WEB 890271087578-khb58ck1netr9g2d96oblpina7g8trtf.apps.googleusercontent.com
// IOS 890271087578-84nhmv0icis7b0hm4dfrh82abeafbqp3.apps.googleusercontent.com
// ANDROID 890271087578-aefittavful3fi66ac6fa5lpv1o0d15m.apps.googleusercontent.com
import { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
WebBrowser.maybeCompleteAuthSession()
export default function LoginPage({ navigation }) {
  const [token, setToken] = useState("");
  const [userFB, setUserFB] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "890271087578-khb58ck1netr9g2d96oblpina7g8trtf.apps.googleusercontent.com",
    iosClientId: "890271087578-84nhmv0icis7b0hm4dfrh82abeafbqp3.apps.googleusercontent.com",
    androidClientId: "890271087578-aefittavful3fi66ac6fa5lpv1o0d15m.apps.googleusercontent.com",
  });
  useEffect(() => {
    handleEffect();
  }, [response, token]);
  async function handleEffect() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      navigation.navigate('Home')
    }
  }
  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };
  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      console.log(JSON.stringify(user.given_name))
      await AsyncStorage.setItem("@user", '');
      await AsyncStorage.setItem("@user", JSON.stringify(user.given_name));
      navigation.navigate('Home')
    } catch (error) {
      // Add your own error handler here
    }
  };

  const [requestFB, responseFB, promptAsyncFB] = Facebook.useAuthRequest({
    clientId: "375383875386306", // change this for yours
  });

  useEffect(() => {
    if (responseFB && responseFB.type === "success" && responseFB.authentication) {
      (async () => {
        const userFBInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${responseFB.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userFBInfo = await userFBInfoResponse.json();
        // await AsyncStorage.setItem("@userFB", JSON.stringify(userFBInfo.name));
        await AsyncStorage.setItem("@user", '');
        await AsyncStorage.setItem("@user", JSON.stringify(userFBInfo.name));
        navigation.navigate('Home')
      })();
    }
  }, [responseFB]);

  const handlePressAsync = async () => {
    const result = await promptAsyncFB();
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', paddingHorizontal: 15 }}>
      {userInfo?.name && (
        <Text style={{ fontSize: 48, fontWeight: 700, marginBottom: 10 }}>{userInfo?.name}</Text>
      )}
      <Text style={{ fontSize: 48, fontWeight: 700, marginBottom: 10 }}>WELCOME...</Text>
      <Text style={{ fontSize: 22, color: 'grey' }}>A Online loan app plateform, easy to use.</Text>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: 'https://play-lh.googleusercontent.com/o1haZc7TUnKOIQH7ssWH7S04cA9k9vaKj1CBhvtZWk0F7bBmGas2qHSHmb4Fs3G35AEQ' }} height={150} width={150} style={{ marginVertical: 30 }} />
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} disabled={!request} onPress={() => { promptAsync(); }}>
        <Text style={styles.buttonText}>
          <AntDesign name="google" size={25} color="white" /> {'  '}GOOGLE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#355C8F' }]} onPress={() => handlePressAsync()}>
        <Text style={styles.buttonText}>
          <FontAwesome name="facebook-official" size={25} color="white" /> {'  '}FACEBOOK
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, color: 'grey', marginTop: 20 }}>By sigging up, you agree to <Text style={{ fontWeight: 600, textDecorationLine: 'underline' }}>Terms of use and Privacy Policy.</Text></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    padding: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// import { useState, useEffect } from "react";
// import { Button, Image, StyleSheet, Text, View } from "react-native";
// import * as Facebook from "expo-auth-session/providers/facebook";
// import * as WebBrowser from "expo-web-browser";

// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [userFB, setUserFB] = useState(null);
//   const [request, response, promptAsync] = Facebook.useAuthRequest({
//     clientId: "375383875386306", // change this for yours
//   });

//   useEffect(() => {
//     if (response && response.type === "success" && response.authentication) {
//       (async () => {
//         const userFBInfoResponse = await fetch(
//           `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
//         );
//         const userFBInfo = await userFBInfoResponse.json();
//         setUserFB(userFBInfo.name);
//         await AsyncStorage.setItem("@userFB", JSON.stringify(userFBInfo.name));
//       })();
//     }
//   }, [response]);

//   const handlePressAsync = async () => {
//     const result = await promptAsync();
//     if (result.type !== "success") {
//       alert("Uh oh, something went wrong");
//       return;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {userFB ? (
//         <Profile userFB={userFB} />
//       ) : (
//         <Button
//           disabled={!request}
//           title="Sign in with Facebook"
//           onPress={handlePressAsync}
//         />
//       )}
//     </View>
//   );
// }

// function Profile({ userFB }) {
//   return (
//     <View style={styles.profile}>
//       <Text style={styles.name}>{userFB}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   name: {
//     fontSize: 20,
//   },
// });