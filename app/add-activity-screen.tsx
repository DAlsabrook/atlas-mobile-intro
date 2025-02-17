import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function AddActivityScreen() {
    return (
        <View style={styles.container}>
            <Text>Add Activity screen</Text>
            <Link style={styles.button} href={'/'} replace>
                <Text style={styles.buttonText}>Home</Text>
            </Link>
        </View>
    )
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
