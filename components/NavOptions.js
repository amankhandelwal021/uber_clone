import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames'
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 123,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScree",
  },
];

const NavOptions = () => {

  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        >
          <View style={tw`items-start bg-gray-200 mx-1 px-4 pt-4 pb-4 rounded-xl`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image
              }}
            />
            <Text style={tw`mt-2 text-base font-semibold`}>{item.title}</Text>
            <Icon 
            name="arrowright" color="white" type="antdesign" size={16}
            style={tw`p-1 bg-black rounded-full mt-1`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
