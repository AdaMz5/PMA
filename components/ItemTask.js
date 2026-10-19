export default function ItemTask({ item }) {
  return (
    <Pressable style={styles.itemContainer}>
      <text>{item}</text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ff0505",
  },
});
