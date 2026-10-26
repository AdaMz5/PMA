import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  FlatList,
} from "react-native";
import ItemTask from "./components/ItemTask";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    const title = task.trim();
    if (!title) return;

    const id = "id" + Math.random().toString(16).slice(2);

    setTaskList((currentTasks) => [
      ...currentTasks,
      { title, done: false, id },
    ]);
    setTask("");
  }

  function changeStyleDone(id) {
    setTaskList((currentTasks) =>
      currentTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj ulohu ..."
        />
        <Button onPress={handleAddButton} title="ADD" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <ItemTask task={item} changeStyle={changeStyleDone} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adadad",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ff0505",
    borderRadius: 8,
    width: "85%",
    height: "10%",
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 2,
    margin: 20,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
  },
});
