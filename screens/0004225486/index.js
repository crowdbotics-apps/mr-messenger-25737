import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_429}>
        <View style={styles.View_1_449}>
          <Text style={styles.Text_1_449}>potem sie zobaczy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0a/4a5e/dde778850ea72359edf1441a9ff28b31"
          }}
          style={styles.ImageBackground_1_456}
        />
        <View style={styles.View_1_443}>
          <Text style={styles.Text_1_443}>01 Feb</Text>
        </View>
        <View style={styles.View_1_436}>
          <Text style={styles.Text_1_436}>Marzena Klasa</Text>
        </View>
        <View style={styles.View_1_448}>
          <Text style={styles.Text_1_448}>no pracujemy z domu przez 5 ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1a/0f32/cc11a96400584d3d4bf9e6f25c141bc0"
          }}
          style={styles.ImageBackground_1_455}
        />
        <View style={styles.View_1_442}>
          <Text style={styles.Text_1_442}>01 Feb</Text>
        </View>
        <View style={styles.View_1_435}>
          <Text style={styles.Text_1_435}>MC Bastek</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e8e/b471/e39a6936f9b6f6d75581fe6243738d90"
          }}
          style={styles.ImageBackground_1_465}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb91/fee4/09701483a6347e0e3eb38c7a7b342880"
          }}
          style={styles.ImageBackground_1_454}
        />
        <View style={styles.View_1_441}>
          <Text style={styles.Text_1_441}>18 Mar</Text>
        </View>
        <View style={styles.View_1_434}>
          <Text style={styles.Text_1_434}>Krysia Eurydyka</Text>
        </View>
        <View style={styles.View_1_447}>
          <Text style={styles.Text_1_447}>
            Here is another tutorial, if you...
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd4/731d/45e4dbaa0b14fede58a7b9e2a06769d9"
          }}
          style={styles.ImageBackground_1_453}
        />
        <View style={styles.View_1_440}>
          <Text style={styles.Text_1_440}>23 Mar</Text>
        </View>
        <View style={styles.View_1_433}>
          <Text style={styles.Text_1_433}>Maciej Orłowski</Text>
        </View>
        <View style={styles.View_1_446}>
          <Text style={styles.Text_1_446}>Uploaded file.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df5b/fb90/7e767229b8df5c2accacbed012befd78"
          }}
          style={styles.ImageBackground_1_452}
        />
        <View style={styles.View_1_439}>
          <Text style={styles.Text_1_439}>Sun</Text>
        </View>
        <View style={styles.View_1_432}>
          <Text style={styles.Text_1_432}>Bożenka Malina</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f16/1504/1eacd0af79f8d06e61e7b53b70e3f186"
          }}
          style={styles.ImageBackground_1_464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125b/25c1/f7740d3653dd6d2a2e39f329254221c3"
          }}
          style={styles.ImageBackground_1_457}
        />
        <View style={styles.View_1_445}>
          <Text style={styles.Text_1_445}>Will do, super, thank you</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8d0/812d/abe57a9e89a7f97dac283d9b31dd3418"
          }}
          style={styles.ImageBackground_1_451}
        />
        <View style={styles.View_1_438}>
          <Text style={styles.Text_1_438}>Tue</Text>
        </View>
        <View style={styles.View_1_431}>
          <Text style={styles.Text_1_431}>Odeusz Piotrowski</Text>
        </View>
        <View style={styles.View_1_444}>
          <Text style={styles.Text_1_444}>maciej.kowalski@email.com</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b15/5ac3/89f0a04a91f6cbfce79c639868a299bd"
          }}
          style={styles.ImageBackground_1_450}
        />
        <View style={styles.View_1_437}>
          <Text style={styles.Text_1_437}>08:43</Text>
        </View>
        <View style={styles.View_1_430}>
          <Text style={styles.Text_1_430}>Maciej Kowalski</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68bd/f221/0275e818c7df721003d22fdd1a326979"
        }}
        style={styles.ImageBackground_1_405}
      />
      <ImageBackground style={styles.ImageBackground_1_422} />
      <View style={styles.View_1_471}>
        <View style={styles.View_1_472}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_473}
          />
          <View style={styles.View_1_474} />
        </View>
        <View style={styles.View_1_475}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_476}
          />
          <View style={styles.View_1_477} />
        </View>
      </View>
      <View style={styles.View_1_423}>
        <Text style={styles.Text_1_423}>Bożenka Malina</Text>
      </View>
      <ImageBackground style={styles.ImageBackground_1_425} />
      <View style={styles.View_1_485}>
        <View style={styles.View_1_486}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_487}
          />
          <View style={styles.View_1_488} />
        </View>
        <View style={styles.View_1_489}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_490}
          />
          <View style={styles.View_1_491} />
        </View>
      </View>
      <View style={styles.View_1_427}>
        <Text style={styles.Text_1_427}>Magdalena Pomorska</Text>
      </View>
      <ImageBackground style={styles.ImageBackground_1_424} />
      <View style={styles.View_1_478}>
        <View style={styles.View_1_479}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_480}
          />
          <View style={styles.View_1_481} />
        </View>
        <View style={styles.View_1_482}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_483}
          />
          <View style={styles.View_1_484} />
        </View>
      </View>
      <View style={styles.View_1_426}>
        <Text style={styles.Text_1_426}>Anastazja Ziemkowska</Text>
      </View>
      <ImageBackground style={styles.ImageBackground_1_428} />
      <View style={styles.View_1_470}>
        <Text style={styles.Text_1_470}>Możenka Walina</Text>
      </View>
      <View style={styles.View_1_492}>
        <View style={styles.View_1_493}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced5/0a6b/166130f841285659a3b29b2bfc9ee245"
            }}
            style={styles.ImageBackground_1_494}
          />
          <View style={styles.View_1_495} />
        </View>
        <View style={styles.View_1_496}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced5/0a6b/166130f841285659a3b29b2bfc9ee245"
            }}
            style={styles.ImageBackground_1_497}
          />
          <View style={styles.View_1_498} />
        </View>
      </View>
      <View style={styles.View_1_421}>
        <Text style={styles.Text_1_421}>Chatrooms</Text>
      </View>
      <View style={styles.View_1_1349} />
      <View style={styles.View_1_1350}>
        <Text style={styles.Text_1_1350}>Search...</Text>
      </View>
      <View style={styles.View_1_1351}>
        <View style={styles.View_1_1353} />
        <View style={styles.View_1_1354}>
          <Text style={styles.Text_1_1354}>+</Text>
        </View>
      </View>
      <View style={styles.View_1_1355}>
        <View style={styles.View_1_1356} />
        <View style={styles.View_1_1357}>
          <View style={styles.View_1_1358}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f5d/57b1/ef1a6dd0750342fd747df3bfcbf938af"
              }}
              style={styles.ImageBackground_1_1359}
            />
            <View style={styles.View_1_1360} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a6c/8454/f3358f499e5577933e2307d4e956fab7"
            }}
            style={styles.ImageBackground_1_1361}
          />
        </View>
      </View>
      <View style={styles.View_1_420}>
        <Text style={styles.Text_1_420}>Martina Wolna</Text>
      </View>
      <View style={styles.View_1_499}>
        <View style={styles.View_1_500} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/198a/03e7/f2f99eec97c067ea2a24a36e79b2857d"
          }}
          style={styles.ImageBackground_1_501}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_429: {
    width: wp("85.86666666666667%"),
    minWidth: wp("85.86666666666667%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("53.96174863387978%")
  },
  View_1_449: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("60.51912568306011%")
  },
  Text_1_449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_456: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.51366120218579%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_443: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("57.37704918032787%")
  },
  Text_1_443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_436: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("57.37704918032787%")
  },
  Text_1_436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_448: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("50.95628415300547%")
  },
  Text_1_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_455: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.950819672131146%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_442: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("47.81420765027323%")
  },
  Text_1_442: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_435: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("47.81420765027323%")
  },
  Text_1_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_465: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("41.393442622950815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%")
  },
  ImageBackground_1_454: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.387978142076506%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_441: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.99999999999999%"),
    top: hp("38.25136612021858%")
  },
  Text_1_441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_434: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("38.25136612021858%")
  },
  Text_1_434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_447: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("31.830601092896174%")
  },
  Text_1_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_453: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.825136612021865%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_440: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.99999999999999%"),
    top: hp("28.688524590163937%")
  },
  Text_1_440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_433: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("28.688524590163937%")
  },
  Text_1_433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_446: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("22.267759562841533%")
  },
  Text_1_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_452: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.262295081967224%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_439: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%"),
    top: hp("19.125683060109296%")
  },
  Text_1_439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_432: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("19.125683060109296%")
  },
  Text_1_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_464: {
    width: wp("4.461629231770833%"),
    height: hp("2.0491803278688523%"),
    top: hp("12.704918032786878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%")
  },
  ImageBackground_1_457: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("12.704918032786878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.26666666666667%")
  },
  View_1_445: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("12.704918032786878%")
  },
  Text_1_445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_451: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912576%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_438: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    top: hp("9.562841530054648%")
  },
  Text_1_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_431: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("9.562841530054648%")
  },
  Text_1_431: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_444: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("3.1420765027322375%")
  },
  Text_1_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_450: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_437: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666666%"),
    top: hp("0%")
  },
  Text_1_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_430: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999999999999996%"),
    top: hp("0%")
  },
  Text_1_430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_405: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("50%")
  },
  ImageBackground_1_422: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("26.639344262295083%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_471: {
    width: wp("4.65327657063802%"),
    minWidth: wp("4.65327657063802%"),
    height: hp("2.3838507021711175%"),
    minHeight: hp("2.3838507021711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466650390625%"),
    top: hp("41.73497267759563%")
  },
  View_1_472: {
    width: wp("3.6284273783365886%"),
    minWidth: wp("3.6284273783365886%"),
    height: hp("1.858825501197023%"),
    minHeight: hp("1.858825501197023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4850127006489089%")
  },
  ImageBackground_1_473: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00001627604166642982%"),
    top: hp("0%")
  },
  View_1_474: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000162760416671%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_475: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0248535156250007%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_476: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.855224609375%"),
    top: hp("0%")
  },
  View_1_477: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%"),
    top: hp("0.4098360655737636%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_423: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("37.84153005464481%")
  },
  Text_1_423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_425: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("26.639344262295083%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_485: {
    width: wp("4.65327657063802%"),
    minWidth: wp("4.65327657063802%"),
    height: hp("2.3838507021711175%"),
    minHeight: hp("2.3838507021711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("41.73497267759563%")
  },
  View_1_486: {
    width: wp("3.6284273783365886%"),
    minWidth: wp("3.6284273783365886%"),
    height: hp("1.858825501197023%"),
    minHeight: hp("1.858825501197023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4850127006489089%")
  },
  ImageBackground_1_487: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00001627604164866625%"),
    top: hp("0%")
  },
  View_1_488: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.80001627604166%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_489: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0248535156249972%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_490: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.855224609375%"),
    top: hp("0%")
  },
  View_1_491: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333332575%"),
    top: hp("0.4098360655737636%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_427: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("37.84153005464481%")
  },
  Text_1_427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_424: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("26.639344262295083%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_478: {
    width: wp("4.65327657063802%"),
    minWidth: wp("4.65327657063802%"),
    height: hp("2.3838507021711175%"),
    minHeight: hp("2.3838507021711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.799983723958334%"),
    top: hp("41.73497267759563%")
  },
  View_1_479: {
    width: wp("3.6284273783365886%"),
    minWidth: wp("3.6284273783365886%"),
    height: hp("1.858825501197023%"),
    minHeight: hp("1.858825501197023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4850127006489089%")
  },
  ImageBackground_1_480: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041669982533%"),
    top: hp("0%")
  },
  View_1_481: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000162760416671%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_482: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0248535156249972%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_483: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.855224609375%"),
    top: hp("0%")
  },
  View_1_484: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333286%"),
    top: hp("0.4098360655737636%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_426: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("37.84153005464481%")
  },
  Text_1_426: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_428: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.66666666666667%"),
    top: hp("26.639344262295083%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_470: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.33333333333334%"),
    top: hp("37.84153005464481%")
  },
  Text_1_470: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_492: {
    width: wp("6.074180094401042%"),
    minWidth: wp("6.074180094401042%"),
    height: hp("3.111772589344796%"),
    minHeight: hp("3.111772589344796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.46666666666667%"),
    top: hp("40.57377049180328%")
  },
  View_1_493: {
    width: wp("4.837902832031251%"),
    minWidth: wp("4.837902832031251%"),
    height: hp("2.478433827884862%"),
    minHeight: hp("2.478433827884862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6333314655908495%")
  },
  ImageBackground_1_494: {
    width: wp("3.394112650553385%"),
    minWidth: wp("3.394112650553385%"),
    height: hp("1.7387872185212014%"),
    minHeight: hp("1.7387872185212014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_495: {
    width: wp("3.7712364196777344%"),
    minWidth: wp("3.7712364196777344%"),
    height: hp("1.9319858707365443%"),
    minHeight: hp("1.9319858707365443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_496: {
    width: wp("4.571236165364583%"),
    minWidth: wp("4.571236165364583%"),
    height: hp("2.341821806026938%"),
    minHeight: hp("2.341821806026938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.39248860677084%"),
    top: hp("0.6830601092896202%")
  },
  ImageBackground_1_497: {
    width: wp("3.394112396240234%"),
    minWidth: wp("3.394112396240234%"),
    height: hp("1.738787088237825%"),
    minHeight: hp("1.738787088237825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1771240234375%"),
    top: hp("0%")
  },
  View_1_498: {
    width: wp("3.7712361653645834%"),
    minWidth: wp("3.7712361653645834%"),
    height: hp("1.9319857404531677%"),
    minHeight: hp("1.9319857404531677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_421: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("22.131147540983605%")
  },
  Text_1_421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_1349: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("15.027322404371585%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1350: {
    width: wp("17.333333333333336%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%")
  },
  Text_1_1350: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1351: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("15.027322404371585%")
  },
  View_1_1353: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 169, 241, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1354: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("1.2295081967213086%")
  },
  Text_1_1354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_1355: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("15.027322404371585%")
  },
  View_1_1356: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 94, 112, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_1357: {
    width: wp("5.512419128417969%"),
    minWidth: wp("5.512419128417969%"),
    height: hp("2.7136560346259446%"),
    minHeight: hp("2.7136560346259446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.272216796874986%"),
    top: hp("1.2978142076502728%")
  },
  View_1_1358: {
    width: wp("7.7901880900065095%"),
    minWidth: wp("7.7901880900065095%"),
    height: hp("3.9908750461098927%"),
    minHeight: hp("3.9908750461098927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9388834635416572%"),
    top: hp("-0.48099371904883803%")
  },
  ImageBackground_1_1359: {
    width: wp("6.411101786295573%"),
    minWidth: wp("6.411101786295573%"),
    height: hp("3.284375915110437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1360: {
    width: wp("3.2055508931477865%"),
    minWidth: wp("3.2055508931477865%"),
    height: hp("1.6421879575552185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("1.6656427435536205%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_1361: {
    width: wp("3.7712364196777344%"),
    minWidth: wp("3.7712364196777344%"),
    height: hp("1.9319858707365443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3944498697916714%"),
    top: hp("0.19521244236680246%")
  },
  View_1_420: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("7.923497267759563%")
  },
  Text_1_420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_499: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("6.967213114754098%")
  },
  View_1_500: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_1_501: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("2.5956284153005464%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
