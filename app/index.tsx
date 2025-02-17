import { router, Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.button} href={'/add-activity-screen'} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: '100%',
    textAlign: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
})
