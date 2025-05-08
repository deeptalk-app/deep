import { Card } from "@/src/types/card.type";
import { View, Text } from "react-native";


export default function PlayingCard({card}: {card: Card}) {
  return (
    <View>
      <Text>{card.content}</Text>
    </View>
  );
}