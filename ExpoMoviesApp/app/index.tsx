import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack } from "expo-router"

import Carousel from "react-native-reanimated-carousel"

const width = Dimensions.get("window").width

const primaryButtonColor = "#420044"
const bgColor = "#ffffff"

const screenStyles = StyleSheet.create({
  outerContainer: {
    fontFamily: "Roboto",
    padding: 16,
    display: "flex",
    flex: 1,
    flexDirection: "column",
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
    borderColor: primaryButtonColor,
    padding: 16,
    borderRadius: 20,
    borderWidth: 5,
  },
  text: {
    color: primaryButtonColor,
    fontSize: 24,
  },
})

const imageStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageWrap: {
    flex: 1,
    alignContent: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  logo: {
    height: 180,
    width: 180,
    margin: "auto",
  },
})

const carouselStyles = StyleSheet.create({
  carousel: {
    marginTop: 16,
    flexDirection: "column",
  },
  itemContainer: {
    flex: 1,
  },
  item: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  image: {
    height: 150,
    position: "relative",
    textAlign: "center",
    margin: "auto",
    flex: 3,
  },
  title: {
    flex: 1,
    textAlign: "center",
    width: "100%",
    verticalAlign: "bottom",
    fontSize: 24,
    marginTop: 40,
  },
})

export default function App() {
  const data = [
    {
      imagePath: require("../assets/images/coffee-to-go.png"),
      title: "Americano",
    },
    {
      imagePath: require("../assets/images/ice-coffee.png"),
      title: "Iced coffee",
    },
    {
      imagePath: require("../assets/images/irish-coffee.png"),
      title: "Cold brew",
    },
  ]

  return (
    <SafeAreaView style={screenStyles.outerContainer}>
      <Stack.Screen
        options={{
          title: "Home",
          contentStyle: {
            backgroundColor: bgColor,
          },
        }}
      />

      <View style={imageStyles.container}>
        <View style={imageStyles.imageWrap}>
          <Image
            style={imageStyles.logo}
            source={require("../assets/images/logo.png")}
          />
        </View>
      </View>

      <Carousel
        style={carouselStyles.carousel}
        loop={false}
        width={width - 32}
        autoPlay={false}
        data={[0, 1, 2]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => {
          const { imagePath, title } = data[index]

          return (
            <View style={carouselStyles.itemContainer}>
              <View style={carouselStyles.item}>
                <Image
                  style={carouselStyles.image}
                  source={imagePath}
                  resizeMode="contain"
                />
              </View>
              <Text style={carouselStyles.title}>{title}</Text>
            </View>
          )
        }}
      />

      <View style={buttonStyles.container}>
        <Link href="/details" asChild>
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Find out more</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  )
}
