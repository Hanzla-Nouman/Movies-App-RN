
import { StatusBar, Text, View ,StyleSheet} from "react-native";

export default function Index() {
  return (
    <>
   

    <View style={styles.container} >
      <Text >Edit app/.</Text>
    </View>
    
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#171717"
  },
})