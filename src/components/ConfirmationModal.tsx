import { View, Text } from "react-native";
import { Button } from "./Button";

export default function ConfirmationModal({
  title,
  onAccept,
  onDismiss,
}: {
  title: string;
  onAccept: () => void;
  onDismiss: () => void;
}) {
  return (
    <View className="p-5 flex-col gap-10">
      <Text className="text-3xl font-kronaone-regular text-white">{title}</Text>
      {/* Buttons */}
      <View className="flex-row gap-3">
        <Button onPress={onDismiss}>
          <Text className="text-white">Non</Text>
        </Button>
        <Button onPress={onAccept}>
          <Text className="text-white">Oui</Text>
        </Button>
      </View>
    </View>
  );
}
