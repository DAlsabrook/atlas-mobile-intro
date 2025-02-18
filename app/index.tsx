import { useActivities } from "@/hooks/useActivities";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { FlashList } from '@shopify/flash-list'
import { router } from "expo-router";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function Index() {
  let { activities, deleteAllActivities, deleteActivity } = useActivities();
  if (!activities) activities = []


  const handleDelete = () => {
    deleteAllActivities();
    router.push("/");
    Alert.alert('All steps deleted')
  }

  const renderActions = (id: number) => {
    return (
      <Pressable style={styles.swipeDeleteButton} onPress={() => deleteActivity(id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.activities}>
        <FlashList
          data={activities}
          estimatedItemSize={200}
          renderItem={({ item }) => (
            <ReanimatedSwipeable
              renderRightActions={() => renderActions(item.id)}
              renderLeftActions={() => renderActions(item.id)}
            >
              <View key={item.id} style={styles.activityContainer}>
                <Text style={styles.dateText}>{new Date(item.date * 1000).toLocaleString()}</Text>
                <Text style={styles.stepsText}>Steps: {item.steps}</Text>
              </View>
            </ReanimatedSwipeable>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Link style={styles.button} href={'/add-activity-screen'} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
        <Pressable style={styles.deleteButton} onPress={() => handleDelete()}>
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
  swipeDeleteButton: {
    alignSelf: 'center',
    backgroundColor: "#D00414",
    padding: 16,
    width: '100%',
    height: '80%',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  },
});
