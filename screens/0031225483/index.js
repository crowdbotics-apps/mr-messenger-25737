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
      <View style={styles.View_1_601}>
        <View style={styles.View_1_602} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eab/9309/ad251fb9969a2cbdc3a3c27523451614"
          }}
          style={styles.ImageBackground_1_603}
        />
      </View>
      <View style={styles.View_1_600} />
      <View style={styles.View_1_606}>
        <View style={styles.View_1_607}>
          <View style={styles.View_1_608} />
          <View style={styles.View_1_609} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0586/8a1c/8631f9005f81531f5a229409838e1c14"
          }}
          style={styles.ImageBackground_1_610}
        />
      </View>
      <View style={styles.View_1_598} />
      <View style={styles.View_1_599}>
        <Text style={styles.Text_1_599}>
          Hello, hw are you? This is out ream chat, you can write here about
          your projects. I heared you have experience in marketing, I would like
          to hear more about it. We need to focuse more on promoting our
          products.
        </Text>
      </View>
      <View style={styles.View_1_547} />
      <View style={styles.View_1_554}>
        <Text style={styles.Text_1_554}>Hi Ola!</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bf6/da50/6ed54d52da761fb018abca1f5e1d1167"
        }}
        style={styles.ImageBackground_1_569}
      />
      <View style={styles.View_1_622}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/340f/fd8c/31d537aae70cda5a93ca3e64d13ecdd9"
          }}
          style={styles.ImageBackground_1_623}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ded4/3d89/af07176055f159db6eafd150ec4ee270"
          }}
          style={styles.ImageBackground_1_624}
        />
      </View>
      <View style={styles.View_1_617}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/340f/fd8c/31d537aae70cda5a93ca3e64d13ecdd9"
          }}
          style={styles.ImageBackground_1_618}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ded4/3d89/af07176055f159db6eafd150ec4ee270"
          }}
          style={styles.ImageBackground_1_619}
        />
      </View>
      <View style={styles.View_1_546} />
      <View style={styles.View_1_552}>
        <Text style={styles.Text_1_552}>Hello everybody! I’m Ola.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f29/0144/a98f33b6ca65747dbe08279908279e7a"
        }}
        style={styles.ImageBackground_1_568}
      />
      <View style={styles.View_1_553}>
        <Text style={styles.Text_1_553}>Marissa joined.</Text>
      </View>
      <View style={styles.View_1_549} />
      <View style={styles.View_1_556}>
        <Text style={styles.Text_1_556}>
          This is our new manager, She will join chat. Her name is Ola.
        </Text>
      </View>
      <View style={styles.View_1_611}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/860c/f26a/f9b3c8fbb32077fc93835eb4f2423936"
          }}
          style={styles.ImageBackground_1_612}
        />
        <View style={styles.View_1_613}>
          <View style={styles.View_I1_613_3695_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9e3/4d1b/f7846cbc11e3c1362cbd722eb775e726"
              }}
              style={styles.ImageBackground_I1_613_4030_43043}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d11/1001/85141a5f5d54c9f3c75f7e2ced84c266"
              }}
              style={styles.ImageBackground_I1_613_3695_44}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_614}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9904/a594/3215a3d3c6cddfad23451ff90e2a02a4"
          }}
          style={styles.ImageBackground_1_615}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b67/2fb2/1291644c8bc69dac0dab8858fba1f6d5"
          }}
          style={styles.ImageBackground_1_616}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a0/dc02/be46f3cb9f81072ca435cab63338353c"
        }}
        style={styles.ImageBackground_1_544}
      />
      <View style={styles.View_1_545} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/828d/f128/8ec95aa4f3a3ee9c3832a6afb56b03af"
        }}
        style={styles.ImageBackground_1_567}
      />
      <View style={styles.View_1_551}>
        <Text style={styles.Text_1_551}>
          All good here. We wash hands and stay home.
        </Text>
      </View>
      <View style={styles.View_1_548} />
      <View style={styles.View_1_555}>
        <Text style={styles.Text_1_555}>
          At out office 3 ppl are infected. We work from home.
        </Text>
      </View>
      <View style={styles.View_1_543} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fbe/52d6/a22261f442d39b96dfbddd346f1df1b0"
        }}
        style={styles.ImageBackground_1_570}
      />
      <View style={styles.View_1_550}>
        <Text style={styles.Text_1_550}>Anybody affected by coronavirus?</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0def/65e0/cf8fe699ac3ee76f2db4717279687b09"
        }}
        style={styles.ImageBackground_1_580}
      />
      <View style={styles.View_1_542}>
        <Text style={styles.Text_1_542}>3 MAR 13:34</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68a8/13fb/f7fe4aed22290ced6f03651793329952"
        }}
        style={styles.ImageBackground_1_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db2c/9a00/d70d9a7e4154ad0c34531ddd76ecce7d"
        }}
        style={styles.ImageBackground_1_576}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/466c/af7c/32d386456a1bc2afad3898902c14c3f2"
        }}
        style={styles.ImageBackground_1_574}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07b4/af8a/be91128dec62225c891166fb5843424c"
        }}
        style={styles.ImageBackground_1_579}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d62/23ea/1399f5f888f70075110f16297a80cb0f"
        }}
        style={styles.ImageBackground_1_577}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d9/0a39/566a1bc9c16dedd45871b03a9dee1cb5"
        }}
        style={styles.ImageBackground_1_575}
      />
      <View style={styles.View_1_571}>
        <View style={styles.View_1_572} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3600/d8af/377066e2d003c68db53e3f67b73eddfa"
          }}
          style={styles.ImageBackground_1_573}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_601: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("98.36065573770492%")
  },
  View_1_602: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(131, 125, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_603: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.458998153769905%"),
    minHeight: hp("2.458998153769905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.5027322404371688%")
  },
  View_1_600: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("91.53005464480874%"),
    backgroundColor: "rgba(0, 172, 131, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_606: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    top: hp("93.16939890710383%")
  },
  View_1_607: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_608: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(89, 103, 135, 1)",
    borderColor: "rgba(89, 103, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_609: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0%"),
    backgroundColor: "rgba(89, 103, 135, 1)",
    borderColor: "rgba(89, 103, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_1_610: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.8196721311475414%")
  },
  View_1_598: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("85.38251366120218%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_599: {
    width: wp("65.86666666666666%"),
    top: hp("85.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%")
  },
  Text_1_599: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_547: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("78.55191256830601%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_554: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("78.55191256830601%")
  },
  Text_1_554: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_569: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("80.73770491803278%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_622: {
    width: wp("3.0893529256184897%"),
    minWidth: wp("3.0893529256184897%"),
    height: hp("2.337453664977694%"),
    minHeight: hp("2.337453664977694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("79.91803278688525%")
  },
  ImageBackground_1_623: {
    width: wp("2.8308380126953128%"),
    height: hp("1.4243162394872781%"),
    top: hp("0.8424685952441848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005533854166657193%")
  },
  ImageBackground_1_624: {
    width: wp("3.0893529256184897%"),
    height: hp("2.337453664977694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_617: {
    width: wp("3.0893529256184897%"),
    minWidth: wp("3.0893529256184897%"),
    height: hp("2.337453664977694%"),
    minHeight: hp("2.337453664977694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("79.91803278688525%")
  },
  ImageBackground_1_618: {
    width: wp("2.8308380126953128%"),
    height: hp("1.4243162394872781%"),
    top: hp("0.8424685952441848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005533854166657193%")
  },
  ImageBackground_1_619: {
    width: wp("3.0893529256184897%"),
    height: hp("2.337453664977694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_546: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("71.72131147540983%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_552: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("71.72131147540983%")
  },
  Text_1_552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_568: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.86666666666667%"),
    top: hp("73.90710382513662%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_553: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("66.2568306010929%")
  },
  Text_1_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_549: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("58.060109289617486%"),
    backgroundColor: "rgba(39, 42, 53, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_556: {
    width: wp("57.599999999999994%"),
    minWidth: wp("57.599999999999994%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("58.060109289617486%")
  },
  Text_1_556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_611: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_1_612: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_613: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_613_3695_42: {
    flexGrow: 1,
    width: wp("2.6307146708170572%"),
    height: hp("1.5304607120368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5743652343750014%"),
    top: hp("0.23503538037910232%")
  },
  ImageBackground_I1_613_4030_43043: {
    width: wp("2.6307159423828126%"),
    height: hp("0.8274635330575412%"),
    top: hp("0.7030049308401658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1_613_3695_44: {
    width: wp("0.6290599822998046%"),
    height: hp("1.2963646748026862%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0006347656250014%")
  },
  View_1_614: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_1_615: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_616: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%")
  },
  ImageBackground_1_544: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.00000000000001%"),
    top: hp("43.44262295081967%"),
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_545: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_567: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("38.3879781420765%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_551: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("34.83606557377049%")
  },
  Text_1_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_548: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("26.639344262295083%"),
    backgroundColor: "rgba(39, 42, 53, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_555: {
    width: wp("56.8%"),
    minWidth: wp("56.8%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%"),
    top: hp("26.639344262295083%")
  },
  Text_1_555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_543: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_570: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("21.994535519125684%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_550: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("19.808743169398905%")
  },
  Text_1_550: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_1_580: {
    width: wp("4.530971272786458%"),
    height: hp("2.0847196787432893%"),
    top: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%")
  },
  View_1_542: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("16.256830601092894%")
  },
  Text_1_542: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_578: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("8.333333333333332%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_1_576: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("8.333333333333332%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_1_574: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("8.333333333333332%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_1_579: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("6.967213114754098%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_577: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333334%"),
    top: hp("6.967213114754098%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_1_575: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("6.967213114754098%"),
    resizeMode: "cover",
    borderColor: "rgba(179, 71, 234, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_571: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("6.967213114754098%")
  },
  View_1_572: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  ImageBackground_1_573: {
    width: wp("5.641481526692709%"),
    minWidth: wp("5.641481526692709%"),
    height: hp("0.7225258102833899%"),
    minHeight: hp("0.7225258102833899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6118489583333329%"),
    top: hp("1.961129610655738%")
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
