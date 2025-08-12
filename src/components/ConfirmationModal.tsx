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
    <View className="p-5 flex-col gap-10 pb-10">
      <Text className="text-2xl font-kronaone-regular text-white w-full text-center">
        {title}
      </Text>
      {/* Buttons */}
      <View className="flex-row gap-3">
        <Button onPress={onDismiss} className="bg-white py-3">
          <Text className="text-lg text-black">Non</Text>
        </Button>
        <Button
          onPress={onAccept}
          className="border border-white bg-white/20 py-3"
        >
          <Text className="text-lg text-white">Oui</Text>
        </Button>
      </View>
    </View>
  );
}
