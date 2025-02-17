import { useActivities } from "@/hooks/useActivities";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const {activities} = useActivities();

  return (
    <View
      style={styles.container}
    >
      <Text>{JSON.stringify(activities)}</Text>
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
