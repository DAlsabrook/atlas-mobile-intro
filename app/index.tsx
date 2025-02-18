import { useActivities } from "@/hooks/useActivities";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { FlashList } from '@shopify/flash-list'

export default function Index() {
  let { activities } = useActivities();
  if (!activities) activities = []

  return (
    <View style={styles.container}>
      <View style={styles.activities}>
        <FlashList
          data={activities}
          estimatedItemSize={200}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.activityContainer}>
              <Text style={styles.dateText}>{new Date(item.date * 1000).toLocaleString()}</Text>
              <Text style={styles.stepsText}>Steps: {item.steps}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Link style={styles.button} href={'/add-activity-screen'} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
        <Pressable style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete all activities</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#FEF9E6',
  },
  activities: {
    flex: 1,
    width: '100%',
    padding: 15
  },
  activityContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  dateText: {
    fontSize: 15,
  },
  stepsText: {
    fontSize: 30,
    marginBottom: 4
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: '100%',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  },
});
