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
import ItemTask from "./components/itemTask";

export default function App() {
  const [task, setTask] = useState("use state");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    setTaskList([...taskList, { title: task, done: false }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj ulohu ..."
        />
        <Button onPress={handleAddButton} title="ADD" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => <ItemTask task={item} />}
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
    borderWidth: 4,
    borderColor: "#ff0505",
    borderRadius: 8,
    width: "80%",
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
  },
});
