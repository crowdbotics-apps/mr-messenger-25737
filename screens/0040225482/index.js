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
      <View style={styles.View_1_632}>
        <Text style={styles.Text_1_632}>MC Bastek</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1a/0f32/cc11a96400584d3d4bf9e6f25c141bc0"
        }}
        style={styles.ImageBackground_1_638}
      />
      <View style={styles.View_1_649} />
      <View style={styles.View_1_710}>
        <View style={styles.View_1_711} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_714}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_712}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/aab2/4be193e8a4024393e96513d704dc6a41"
          }}
          style={styles.ImageBackground_1_715}
        />
      </View>
      <View style={styles.View_1_664}>
        <View style={styles.View_1_666} />
        <View style={styles.View_1_667}>
          <Text style={styles.Text_1_667}>reglar access</Text>
        </View>
      </View>
      <View style={styles.View_1_684}>
        <View style={styles.View_1_686} />
        <View style={styles.View_1_687}>
          <Text style={styles.Text_1_687}>full access</Text>
        </View>
      </View>
      <View style={styles.View_1_633}>
        <Text style={styles.Text_1_633}>Krysia Eurydyka</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc61/aa32/41d3e710febc5bdd3a10b0f0ed5b6f4f"
        }}
        style={styles.ImageBackground_1_637}
      />
      <View style={styles.View_1_647} />
      <View style={styles.View_1_704}>
        <View style={styles.View_1_705} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_708}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_707}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_706}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/aab2/4be193e8a4024393e96513d704dc6a41"
          }}
          style={styles.ImageBackground_1_709}
        />
      </View>
      <View style={styles.View_1_660}>
        <View style={styles.View_1_662} />
        <View style={styles.View_1_663}>
          <Text style={styles.Text_1_663}>reglar access</Text>
        </View>
      </View>
      <View style={styles.View_1_680}>
        <View style={styles.View_1_682} />
        <View style={styles.View_1_683}>
          <Text style={styles.Text_1_683}>full access</Text>
        </View>
      </View>
      <View style={styles.View_1_634}>
        <Text style={styles.Text_1_634}>Maciej Orłowski</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d91e/cbab/673dc400c6634644b7453720efba2114"
        }}
        style={styles.ImageBackground_1_641}
      />
      <View style={styles.View_1_645} />
      <View style={styles.View_1_698}>
        <View style={styles.View_1_699} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_702}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_701}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_700}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/aab2/4be193e8a4024393e96513d704dc6a41"
          }}
          style={styles.ImageBackground_1_703}
        />
      </View>
      <View style={styles.View_1_656}>
        <View style={styles.View_1_658} />
        <View style={styles.View_1_659}>
          <Text style={styles.Text_1_659}>reglar access</Text>
        </View>
      </View>
      <View style={styles.View_1_676}>
        <View style={styles.View_1_678} />
        <View style={styles.View_1_679}>
          <Text style={styles.Text_1_679}>full access</Text>
        </View>
      </View>
      <View style={styles.View_1_636}>
        <Text style={styles.Text_1_636}>Bożenka Malina</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c04/eba3/4822beab44de62303ee1f01b5cb1750f"
        }}
        style={styles.ImageBackground_1_640}
      />
      <View style={styles.View_1_651} />
      <View style={styles.View_1_716}>
        <View style={styles.View_1_717} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_720}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_719}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_718}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/aab2/4be193e8a4024393e96513d704dc6a41"
          }}
          style={styles.ImageBackground_1_721}
        />
      </View>
      <View style={styles.View_1_668}>
        <View style={styles.View_1_670} />
        <View style={styles.View_1_671}>
          <Text style={styles.Text_1_671}>reglar access</Text>
        </View>
      </View>
      <View style={styles.View_1_688}>
        <View style={styles.View_1_690} />
        <View style={styles.View_1_691}>
          <Text style={styles.Text_1_691}>full access</Text>
        </View>
      </View>
      <View style={styles.View_1_635}>
        <Text style={styles.Text_1_635}>Odeusz Piotrowski</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73a/e82f/71936c17bdf9d974d75d3d282a4a2a32"
        }}
        style={styles.ImageBackground_1_639}
      />
      <View style={styles.View_1_643} />
      <View style={styles.View_1_692}>
        <View style={styles.View_1_693} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_696}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_695}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7bb/516f/7d9c2030619aa208eb4a3cc1c0d87c9e"
          }}
          style={styles.ImageBackground_1_694}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c7/aab2/4be193e8a4024393e96513d704dc6a41"
          }}
          style={styles.ImageBackground_1_697}
        />
      </View>
      <View style={styles.View_1_652}>
        <View style={styles.View_1_654} />
        <View style={styles.View_1_655}>
          <Text style={styles.Text_1_655}>reglar access</Text>
        </View>
      </View>
      <View style={styles.View_1_672}>
        <View style={styles.View_1_674} />
        <View style={styles.View_1_675}>
          <Text style={styles.Text_1_675}>full access</Text>
        </View>
      </View>
      <View style={styles.View_1_630}>
        <Text style={styles.Text_1_630}>Maciej Kowalski</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c613/949c/429a5cbf084ecbf3fdab8e362ef6163d"
        }}
        style={styles.ImageBackground_1_631}
      />
      <View style={styles.View_1_629}>
        <Text style={styles.Text_1_629}>Team</Text>
      </View>
      <View style={styles.View_1_726}>
        <View style={styles.View_1_728} />
        <View style={styles.View_1_729}>
          <Text style={styles.Text_1_729}>delete chatroom</Text>
        </View>
      </View>
      <View style={styles.View_1_722}>
        <View style={styles.View_1_724} />
        <View style={styles.View_1_725}>
          <Text style={styles.Text_1_725}>new user</Text>
        </View>
      </View>
      <View style={styles.View_1_628}>
        <Text style={styles.Text_1_628}>Chatroom </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_632: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    top: hp("119.39890710382515%")
  },
  Text_1_632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_638: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("117.62295081967213%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_649: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("108.60655737704919%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_710: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("110.24590163934427%")
  },
  View_1_711: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1_714: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.6830601092895989%")
  },
  ImageBackground_1_713: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092895989%")
  },
  ImageBackground_1_712: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092895989%")
  },
  ImageBackground_1_715: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("0.4644808873452776%"),
    minHeight: hp("0.4644808873452776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_664: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("108.60655737704919%")
  },
  View_1_666: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 129, 148, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_667: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_684: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("108.60655737704919%")
  },
  View_1_686: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_687: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_687: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_633: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("100.13661202185793%")
  },
  Text_1_633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_637: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("98.77049180327869%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_647: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("89.48087431693989%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_704: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("91.12021857923497%")
  },
  View_1_705: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1_708: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_707: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_706: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_709: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("0.4644808873452776%"),
    minHeight: hp("0.4644808873452776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_660: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("89.48087431693989%")
  },
  View_1_662: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 129, 148, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_663: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_663: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_680: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("89.48087431693989%")
  },
  View_1_682: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_683: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_634: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%"),
    top: hp("82.65027322404372%")
  },
  Text_1_634: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_641: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("81.28415300546447%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_645: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("71.72131147540983%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_698: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("73.36065573770492%")
  },
  View_1_699: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1_702: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_701: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_700: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_703: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("0.4644808873452776%"),
    minHeight: hp("0.4644808873452776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_656: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("71.72131147540983%")
  },
  View_1_658: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 129, 148, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_659: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.5027322404371688%")
  },
  Text_1_659: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_676: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("71.72131147540983%")
  },
  View_1_678: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_679: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("1.5027322404371688%")
  },
  Text_1_679: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_636: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("65.1639344262295%")
  },
  Text_1_636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_640: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("63.79781420765027%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_651: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("54.644808743169406%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_716: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("56.284153005464475%")
  },
  View_1_717: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.40983606557377783%"),
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1_720: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_719: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_718: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896273%")
  },
  ImageBackground_1_721: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("0.4644808873452776%"),
    minHeight: hp("0.4644808873452776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_668: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("54.644808743169406%")
  },
  View_1_670: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_671: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_671: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_688: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("54.644808743169406%")
  },
  View_1_690: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(179, 71, 234, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_691: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_635: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("47.6775956284153%")
  },
  Text_1_635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_639: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("46.31147540983606%"),
    resizeMode: "cover",
    borderColor: "rgba(179, 71, 234, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_643: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("36.885245901639344%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_692: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    top: hp("38.52459016393443%")
  },
  View_1_693: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(241, 131, 3, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_1_696: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_695: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_694: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_1_697: {
    width: wp("3.8079999287923174%"),
    minWidth: wp("3.8079999287923174%"),
    height: hp("0.4644808873452776%"),
    minHeight: hp("0.4644808873452776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_652: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("36.885245901639344%")
  },
  View_1_654: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 129, 148, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_655: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_672: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("36.885245901639344%")
  },
  View_1_674: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(55, 62, 78, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_675: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("1.5027322404371546%")
  },
  Text_1_675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_630: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("30.191256830601095%")
  },
  Text_1_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  ImageBackground_1_631: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("28.825136612021858%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 129, 148, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_629: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23.497267759562842%")
  },
  Text_1_629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
  },
  View_1_726: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%"),
    top: hp("14.89071038251366%")
  },
  View_1_728: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 131, 3, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_729: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666673%"),
    top: hp("1.5027322404371581%")
  },
  Text_1_729: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_722: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.89071038251366%")
  },
  View_1_724: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
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
  View_1_725: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("1.5027322404371581%")
  },
  Text_1_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_628: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8.469945355191257%")
  },
  Text_1_628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "capitalize"
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
