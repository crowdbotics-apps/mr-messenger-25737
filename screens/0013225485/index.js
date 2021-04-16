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
      <View style={styles.View_1_314}>
        <Text style={styles.Text_1_314}>potem sie zobaczy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0a/4a5e/dde778850ea72359edf1441a9ff28b31"
        }}
        style={styles.ImageBackground_1_323}
      />
      <View style={styles.View_1_311}>
        <Text style={styles.Text_1_311}>01 Feb</Text>
      </View>
      <View style={styles.View_1_307}>
        <Text style={styles.Text_1_307}>Marzena Klasa</Text>
      </View>
      <View style={styles.View_1_313}>
        <Text style={styles.Text_1_313}>no pracujemy z domu przez 5 ...</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1a/0f32/cc11a96400584d3d4bf9e6f25c141bc0"
        }}
        style={styles.ImageBackground_1_322}
      />
      <View style={styles.View_1_310}>
        <Text style={styles.Text_1_310}>01 Feb</Text>
      </View>
      <View style={styles.View_1_306}>
        <Text style={styles.Text_1_306}>jarosław kowalski</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e8e/b471/e39a6936f9b6f6d75581fe6243738d90"
        }}
        style={styles.ImageBackground_1_332}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb91/fee4/09701483a6347e0e3eb38c7a7b342880"
        }}
        style={styles.ImageBackground_1_321}
      />
      <View style={styles.View_1_309}>
        <Text style={styles.Text_1_309}>18 Mar</Text>
      </View>
      <View style={styles.View_1_305}>
        <Text style={styles.Text_1_305}>Krysia Eurydyka</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e54/95d7/e2de73751b9c226c8ca2a7d9841e4d01"
        }}
        style={styles.ImageBackground_1_387}
      />
      <View style={styles.View_1_388} />
      <View style={styles.View_1_389}>
        <View style={styles.View_1_393}>
          <Text style={styles.Text_1_393}>jarek.kowal@emaile.com</Text>
        </View>
        <View style={styles.View_1_392}>
          <Text style={styles.Text_1_392}>+22</Text>
        </View>
        <View style={styles.View_1_391}>
          <Text style={styles.Text_1_391}>01 Feb</Text>
        </View>
        <View style={styles.View_1_390}>
          <Text style={styles.Text_1_390}>jarosław kowalski</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ad/4976/057147fd314afd0b957addb755d3ee46"
        }}
        style={styles.ImageBackground_1_379}
      />
      <View style={styles.View_1_394}>
        <View style={styles.View_1_397}>
          <Text style={styles.Text_1_397}>How is koronavirus?</Text>
        </View>
        <View style={styles.View_1_398} />
        <View style={styles.View_1_399}>
          <Text style={styles.Text_1_399}>+3</Text>
        </View>
        <View style={styles.View_1_396}>
          <Text style={styles.Text_1_396}>Mon</Text>
        </View>
        <View style={styles.View_1_395}>
          <Text style={styles.Text_1_395}>Krysia Eurydyka</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f16/1504/1eacd0af79f8d06e61e7b53b70e3f186"
        }}
        style={styles.ImageBackground_1_331}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125b/25c1/f7740d3653dd6d2a2e39f329254221c3"
        }}
        style={styles.ImageBackground_1_324}
      />
      <View style={styles.View_1_312}>
        <Text style={styles.Text_1_312}>Will do, super, thank you</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8d0/812d/abe57a9e89a7f97dac283d9b31dd3418"
        }}
        style={styles.ImageBackground_1_320}
      />
      <View style={styles.View_1_308}>
        <Text style={styles.Text_1_308}>Tue</Text>
      </View>
      <View style={styles.View_1_304}>
        <Text style={styles.Text_1_304}>Odeusz Piotrowski</Text>
      </View>
      <View style={styles.View_1_380}>
        <View style={styles.View_1_383}>
          <Text style={styles.Text_1_383}>Uploaded file.</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783b/3d1c/957b5c4b98bfd488dc8c15bd29c4a3e6"
          }}
          style={styles.ImageBackground_1_384}
        />
        <View style={styles.View_1_385} />
        <View style={styles.View_1_386}>
          <Text style={styles.Text_1_386}>+5</Text>
        </View>
        <View style={styles.View_1_382}>
          <Text style={styles.Text_1_382}>Sun</Text>
        </View>
        <View style={styles.View_1_381}>
          <Text style={styles.Text_1_381}>Bożenka Malina</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68bd/f221/0275e818c7df721003d22fdd1a326979"
        }}
        style={styles.ImageBackground_1_281}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2f7/fe93/420113c83edeaeed00134cb162267def"
        }}
        style={styles.ImageBackground_1_297}
      />
      <View style={styles.View_1_338}>
        <View style={styles.View_1_339}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_340}
          />
          <View style={styles.View_1_341} />
        </View>
        <View style={styles.View_1_342}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_343}
          />
          <View style={styles.View_1_344} />
        </View>
      </View>
      <View style={styles.View_1_298}>
        <Text style={styles.Text_1_298}>Bożenka Malina</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6bd/84c1/b4adceaae67c00157577aa4f28c75a59"
        }}
        style={styles.ImageBackground_1_300}
      />
      <View style={styles.View_1_352}>
        <View style={styles.View_1_353}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_354}
          />
          <View style={styles.View_1_355} />
        </View>
        <View style={styles.View_1_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_357}
          />
          <View style={styles.View_1_358} />
        </View>
      </View>
      <View style={styles.View_1_302}>
        <Text style={styles.Text_1_302}>Magdalena Pomorska</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c0/c806/5bc8a6444046029294322dfe3b7971c9"
        }}
        style={styles.ImageBackground_1_299}
      />
      <View style={styles.View_1_345}>
        <View style={styles.View_1_346}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_347}
          />
          <View style={styles.View_1_348} />
        </View>
        <View style={styles.View_1_349}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
            }}
            style={styles.ImageBackground_1_350}
          />
          <View style={styles.View_1_351} />
        </View>
      </View>
      <View style={styles.View_1_301}>
        <Text style={styles.Text_1_301}>Anastazja Ziemkowska</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06a2/7132/34cf16ebf0b69444f750f2266711240a"
        }}
        style={styles.ImageBackground_1_303}
      />
      <View style={styles.View_1_337}>
        <Text style={styles.Text_1_337}>Możenka Walina</Text>
      </View>
      <View style={styles.View_1_359}>
        <View style={styles.View_1_360}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced5/0a6b/166130f841285659a3b29b2bfc9ee245"
            }}
            style={styles.ImageBackground_1_361}
          />
          <View style={styles.View_1_362} />
        </View>
        <View style={styles.View_1_363}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced5/0a6b/166130f841285659a3b29b2bfc9ee245"
            }}
            style={styles.ImageBackground_1_364}
          />
          <View style={styles.View_1_365} />
        </View>
      </View>
      <View style={styles.View_1_296}>
        <Text style={styles.Text_1_296}>Favourites</Text>
      </View>
      <View style={styles.View_1_366} />
      <View style={styles.View_1_367}>
        <Text style={styles.Text_1_367}>Search...</Text>
      </View>
      <View style={styles.View_1_368}>
        <View style={styles.View_1_370} />
        <View style={styles.View_1_371}>
          <Text style={styles.Text_1_371}>+</Text>
        </View>
      </View>
      <View style={styles.View_1_372}>
        <View style={styles.View_1_373} />
        <View style={styles.View_1_374}>
          <View style={styles.View_1_375}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f5d/57b1/ef1a6dd0750342fd747df3bfcbf938af"
              }}
              style={styles.ImageBackground_1_376}
            />
            <View style={styles.View_1_377} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a6c/8454/f3358f499e5577933e2307d4e956fab7"
            }}
            style={styles.ImageBackground_1_378}
          />
        </View>
      </View>
      <View style={styles.View_1_400}>
        <Text style={styles.Text_1_400}>Martina Wolna</Text>
      </View>
      <View style={styles.View_1_401}>
        <View style={styles.View_1_402} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/198a/03e7/f2f99eec97c067ea2a24a36e79b2857d"
          }}
          style={styles.ImageBackground_1_403}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_314: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("114.48087431693989%")
  },
  Text_1_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_323: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("111.47540983606557%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_311: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("111.33879781420765%")
  },
  Text_1_311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_307: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("111.33879781420765%")
  },
  Text_1_307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_313: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("104.91803278688525%")
  },
  Text_1_313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_322: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("101.91256830601093%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_310: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("101.77595628415301%")
  },
  Text_1_310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_306: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("101.77595628415301%")
  },
  Text_1_306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_332: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("95.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_1_321: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("92.34972677595628%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_309: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("92.21311475409836%")
  },
  Text_1_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_305: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("92.21311475409836%")
  },
  Text_1_305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_387: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("84.15300546448088%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_388: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("82.78688524590164%"),
    backgroundColor: "rgba(65, 71, 86, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_389: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("82.65027322404372%")
  },
  View_1_393: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("3.1420765027322375%")
  },
  Text_1_393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_392: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213122%")
  },
  Text_1_392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_391: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0%")
  },
  Text_1_391: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_390: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("0%")
  },
  Text_1_390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_379: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("74.59016393442623%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_394: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("73.08743169398907%")
  },
  View_1_397: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("3.1420765027322375%")
  },
  Text_1_397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_398: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(65, 71, 86, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_399: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("1.2295081967213122%")
  },
  Text_1_399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_396: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    top: hp("0%")
  },
  Text_1_396: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_395: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0%")
  },
  Text_1_395: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_331: {
    width: wp("4.461629231770833%"),
    height: hp("2.0491803278688523%"),
    top: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  ImageBackground_1_324: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%")
  },
  View_1_312: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("66.66666666666666%")
  },
  Text_1_312: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_320: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("63.661202185792355%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_308: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%"),
    top: hp("63.52459016393443%")
  },
  Text_1_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_304: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("63.52459016393443%")
  },
  Text_1_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_380: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("53.96174863387978%")
  },
  View_1_383: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("3.1420765027322375%")
  },
  Text_1_383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_384: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("1.5027322404371546%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_385: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(65, 71, 86, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_386: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("1.2295081967213122%")
  },
  Text_1_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_382: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("0%")
  },
  Text_1_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_381: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0%")
  },
  Text_1_381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_281: {
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
  ImageBackground_1_297: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("26.639344262295083%")
  },
  View_1_338: {
    width: wp("4.6532648722330725%"),
    minWidth: wp("4.6532648722330725%"),
    height: hp("2.3838447091357953%"),
    minHeight: hp("2.3838447091357953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("41.73497267759563%")
  },
  View_1_339: {
    width: wp("3.628428395589193%"),
    minWidth: wp("3.628428395589193%"),
    height: hp("1.858826022330529%"),
    minHeight: hp("1.858826022330529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4850127006489089%")
  },
  ImageBackground_1_340: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_341: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_342: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0248372395833343%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_343: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.855232747395835%"),
    top: hp("0%")
  },
  View_1_344: {
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
  View_1_298: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("37.84153005464481%")
  },
  Text_1_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_300: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("26.639344262295083%")
  },
  View_1_352: {
    width: wp("4.653265889485677%"),
    minWidth: wp("4.653265889485677%"),
    height: hp("2.383845230269302%"),
    minHeight: hp("2.383845230269302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("41.73497267759563%")
  },
  View_1_353: {
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
  ImageBackground_1_354: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_355: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_356: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.024839274088535%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_357: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8552286783854157%"),
    top: hp("0%")
  },
  View_1_358: {
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
  View_1_302: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("37.84153005464481%")
  },
  Text_1_302: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_299: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("26.639344262295083%")
  },
  View_1_345: {
    width: wp("4.653263854980469%"),
    minWidth: wp("4.653263854980469%"),
    height: hp("2.383844188002289%"),
    minHeight: hp("2.383844188002289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.80000406901042%"),
    top: hp("41.73497267759563%")
  },
  View_1_346: {
    width: wp("3.6284294128417964%"),
    minWidth: wp("3.6284294128417964%"),
    height: hp("1.8588265434640352%"),
    minHeight: hp("1.8588265434640352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4850127006489089%")
  },
  ImageBackground_1_347: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_348: {
    width: wp("2.8284271240234373%"),
    minWidth: wp("2.8284271240234373%"),
    height: hp("1.4489893053398757%"),
    minHeight: hp("1.4489893053398757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000043%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_349: {
    width: wp("3.6284271240234376%"),
    minWidth: wp("3.6284271240234376%"),
    height: hp("1.8588253709136464%"),
    minHeight: hp("1.8588253709136464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0248331705729115%"),
    top: hp("0.4781420765027349%")
  },
  ImageBackground_1_350: {
    width: wp("2.6398653666178387%"),
    minWidth: wp("2.6398653666178387%"),
    height: hp("1.3523900443738928%"),
    minHeight: hp("1.3523900443738928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8552286783854157%"),
    top: hp("0%")
  },
  View_1_351: {
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
  View_1_301: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("37.84153005464481%")
  },
  Text_1_301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_303: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.66666666666667%"),
    top: hp("26.639344262295083%")
  },
  View_1_337: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.33333333333334%"),
    top: hp("37.84153005464481%")
  },
  Text_1_337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_359: {
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
  View_1_360: {
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
  ImageBackground_1_361: {
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
  View_1_362: {
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
  View_1_363: {
    width: wp("4.571236165364583%"),
    minWidth: wp("4.571236165364583%"),
    height: hp("2.341821806026938%"),
    minHeight: hp("2.341821806026938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.392486572265625%"),
    top: hp("0.6830601092896202%")
  },
  ImageBackground_1_364: {
    width: wp("3.394112396240234%"),
    minWidth: wp("3.394112396240234%"),
    height: hp("1.738787088237825%"),
    minHeight: hp("1.738787088237825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1771237691243357%"),
    top: hp("0%")
  },
  View_1_365: {
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
  View_1_296: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("22.131147540983605%")
  },
  Text_1_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_366: {
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
  View_1_367: {
    width: wp("17.333333333333336%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%")
  },
  Text_1_367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_368: {
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
  View_1_370: {
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
  View_1_371: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("1.2295081967213086%")
  },
  Text_1_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_372: {
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
  View_1_373: {
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
  View_1_374: {
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
  View_1_375: {
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
  ImageBackground_1_376: {
    width: wp("6.411101786295573%"),
    minWidth: wp("6.411101786295573%"),
    height: hp("3.284375915110437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_377: {
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
  ImageBackground_1_378: {
    width: wp("3.7712364196777344%"),
    minWidth: wp("3.7712364196777344%"),
    height: hp("1.9319858707365443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3944498697916714%"),
    top: hp("0.19521244236680246%")
  },
  View_1_400: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("8.333333333333332%")
  },
  Text_1_400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_401: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("6.967213114754098%")
  },
  View_1_402: {
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
  ImageBackground_1_403: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.004752604166666%"),
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
