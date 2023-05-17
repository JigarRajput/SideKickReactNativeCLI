import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import getAllProfiles from "../../utilities/getAllProfiles";
import ProfileCard from "../../components/ProfileCard";
import { useRoute } from "@react-navigation/native";
import ListEmpty from "../../components/ListEmpty";

const SearchScreen = () => {
  const [matchedProfiles, setMatchedProfiles] = useState([]);
  const category = useRoute()?.params?.category;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProfiles();
      if (category) {
        const filteredProfiles = res?.filter((profile) =>
          profile?.serviceCategory
            .toUpperCase()
            .includes(category.toUpperCase())
        );
        setMatchedProfiles(filteredProfiles);
      } else {
        setMatchedProfiles(res);
      }
    };
    fetchData();
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        matchedProfiles={matchedProfiles}
        setMatchedProfiles={setMatchedProfiles}
      />
      {matchedProfiles.length === 0 ? (
        <ActivityIndicator size="large" animating={true} color={"#000"} />
      ) : (
        <FlatList
          data={matchedProfiles}
          ListEmptyComponent={<ListEmpty />}
          renderItem={({ item }) => <ProfileCard profile={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});
