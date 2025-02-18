import { Pressable, TextInput, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { useActivities } from "@/hooks/useActivities";
import { router } from "expo-router";

export default function AddActivityScreen() {
    const [text, setText] = useState<string>('');
    const {insertActivity} = useActivities();

    const handleInsert = (steps: string) => {
        const stepsInt = parseInt(steps, 10);
        if (!isNaN(stepsInt)) {
            insertActivity(stepsInt, new Date());
            router.push("/");
        } else {
            console.error("Invalid steps input");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Activity</Text>
            <TextInput
            style={styles.input}
              onChangeText={newText => setText(newText)}
              value={text}
              placeholder="Enter steps"
            />
            <Pressable onPress={() => handleInsert(text)} style={styles.button}>
              <Text style={styles.buttonText}>Add Activity</Text>
            </Pressable>
            <Link style={styles.backButton} href={'/'} replace>
                <Text style={styles.buttonText}>Go Back</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FEF9E6'
  },
  header: {
    fontSize: 25,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: '100%',
    textAlign: 'center'
  },
  backButton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: '100%',
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
    margin: 20
  }
})
