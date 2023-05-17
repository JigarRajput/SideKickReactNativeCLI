import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { profileCardStyles } from "../styles/ProfileCardStyles";
import getFirstLetters from "../utilities/getFirstLetters";
import { Avatar, Snackbar } from "react-native-paper";
import { SaveProfilesContext } from "../../context/SaveProfilesContext";
import { useNavigation } from "@react-navigation/native";

const ProfileCard = ({ profile }) => {
  const navigation = useNavigation();
  const [isSaved, setIsSaved] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const avatarLabel = getFirstLetters(profile?.fullName);
  const { savedProfiles, setSavedProfiles } = useContext(SaveProfilesContext);

  useEffect(() => {
    const savedFilterResult = savedProfiles.filter(
      (thisProfile) => thisProfile._id === profile._id
    );
    setIsSaved(savedFilterResult.length !== 0);
  }, []);

  const handleCall = async () => {
    try {
      await Linking.openURL("tel:+" + profile?.mobileNumber);
    } catch (e) {}
  };

  const handleSaveProfile = () => {
    if (!isSaved) {
      setIsSaved(!isSaved);
      setSavedProfiles([...savedProfiles, profile]);
    } else {
      setIsSaved(!isSaved);
      setSavedProfiles(
        savedProfiles.filter((thisProfile) => thisProfile._id !== profile._id)
      );
    }
  };

  return (
    <View style={profileCardStyles.mainContainer}>
      <View style={profileCardStyles.topContainer}>
        <View style={profileCardStyles.topLeftContainer}>
          <Avatar.Text
            size={42}
            label={avatarLabel}
            style={{ backgroundColor: "#000", paddingBottom: 2 }}
          />
          <View style={profileCardStyles.nameServiceContainer}>
            <Text style={profileCardStyles.nameText}>{profile.fullName}</Text>
            <Text>{profile.serviceCategory}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Chats", {
              screen: "Message",
              params: { receiver: profile },
            })
          }
        >
          <Image
            source={require("../assets/chatIcon.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={profileCardStyles.bottomContainer}>
        <View style={profileCardStyles.locationContainer}>
          <Image
            source={require("../assets/location.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={profileCardStyles.areaText}>{profile.city}</Text>
        </View>
        <TouchableOpacity
          style={profileCardStyles.contactContainer}
          onPress={handleCall}
        >
          <Image
            source={require("../assets/phoneIcon.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={profileCardStyles.numberText}>
            {profile.mobileNumber}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveProfile}>
          {!isSaved ? (
            <Image
              source={require("../assets/saveIcon.png")}
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <Image
              source={require("../assets/savedIcon.png")}
              style={{ width: 20, height: 20 }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
