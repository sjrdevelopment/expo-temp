import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack } from "expo-router"
import { useEffect, useState } from "react"

const secondaryButtonColor = "#d86e0c"
const bgColor = "#daedfe"

const screenStyles = StyleSheet.create({
  outerContainer: {
    padding: 16,
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  container: {
    padding: 16,
  },
  header: {
    width: "100%",
    textAlign: "center",
    fontSize: 26,
  },
})

const imageStyles = StyleSheet.create({
  container: {
    marginTop: 46,
  },
  imageWrap: {
    textAlign: "center",
    justifyContent: "center",
  },
  image: {
    height: 160,
    width: 160,
    position: "relative",
    margin: "auto",
  },
  header: {
    marginTop: 46,
    textAlign: "center",
    fontSize: 26,
  },
  moreInfo: {
    fontSize: 18,
    marginTop: 32,
  },
})

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    position: "absolute",
    bottom: 36,
    left: 0,
    right: 0,
  },
  button: {
    borderColor: secondaryButtonColor,
    padding: 16,
    borderRadius: 20,
    borderWidth: 5,
  },
  text: {
    color: secondaryButtonColor,
    fontSize: 24,
  },
})

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
  },
  inactive: {
    display: "none",
  },
})

export default function Part2() {
  const [loadingState, setLoadingState] = useState("active")

  useEffect(() => {
    setTimeout(() => {
      setLoadingState("inactive")
    }, 1000)
  }, [])

  return (
    <SafeAreaView style={screenStyles.outerContainer}>
      <Stack.Screen
        options={{
          title: "Details",
          contentStyle: {
            backgroundColor: bgColor,
          },
        }}
      />

      <View style={screenStyles.container}>
        <Text style={screenStyles.header}>Americano</Text>

        <View
          style={[
            loadingStyles.container,
            loadingState === "inactive" && loadingStyles.inactive,
          ]}
        >
          <ActivityIndicator size="large" />
        </View>

        <View
          style={[
            imageStyles.container,
            loadingState === "active" && loadingStyles.inactive,
          ]}
        >
          <View style={imageStyles.imageWrap}>
            <Image
              style={imageStyles.image}
              source={require("../assets/images/coffee-to-go.png")}
            />
          </View>
          <Text style={imageStyles.moreInfo}>
            Caffe Americano, also known as americano or American, is a type of
            coffee drink prepared by diluting an espresso shot with hot water at
            a 1:3 to 1:4 ratio, resulting in a drink that retains the complex
            flavors of espresso, but in a lighter way. Its strength varies with
            the number of shots of espresso and the amount of water added.
          </Text>
        </View>
      </View>

      <View style={buttonStyles.container}>
        <Link href="/" asChild>
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Back to coffees</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  )
}
