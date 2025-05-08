import { StyleSheet, View, Text } from "react-native";
import { CardCategorie } from "../../components/playscreen/CardCategorie";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { Card } from "@/src/types/card.type";
import { Category } from "@/src/types/category.type";
import PlayingCard from "@/src/components/playscreen/PlayingCard";

export default function PlayingPage() {
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>();

  const cards: Card[] = [{id: 1, content: "Card 1"}, {id: 2, content: "Card 2"}];

  const initialCategories: Category[] = [{id: 1, theme: "Ami", level: 1, cardAmount : 31}, {id: 2, theme: "Amour", level: 2, cardAmount : 2}, {id: 3, theme: "Parent", level: 3, cardAmount : 19}];
  const [categories, setCategories] = useState(initialCategories);

  function handleCategoryClick(id:number) {
    const nextCategories = categories.map((category) => {if (category.id === id) { return { ...category, cardAmount: category.cardAmount - 1 }; } else { return category;} });
    setCategories(nextCategories);
  }


  if (selectedCardId !== undefined) {
    const selectedCard = cards.find(({ id }) => id === selectedCardId);
    if (!selectedCard) 
      return <Text>Card not found</Text>;
    
    return <View>
      <PlayingCard card={selectedCard}></PlayingCard>
    </View>;
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <Text>Piochez !</Text>
      <View style={styles.list}>
        {
          categories.map((category) => (
            <CardCategorie
              key={category.id}
              category={category}
              onCategoryClick={() => handleCategoryClick(category.id)}
            />
          ))
        }
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
