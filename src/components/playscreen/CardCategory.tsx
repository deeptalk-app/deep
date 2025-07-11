import { Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { Category } from "@/src/types/category.type";

export function CardCategory({
  title,
  icon,
  category,
  onCategoryClick,
}: {
  title: string;
  icon?: React.ReactNode;
  category: Category;
  onCategoryClick: () => void;
}) {
  const { theme } = category;

  return (
    <TouchableHighlight
      onPress={onCategoryClick}
      disabled={category.cards.length === 0}
      className={[
        "rounded-md bg-black/[.4] p-10",
        category.cards.length === 0 && "opacity-40",
      ].join(" ")}
    >
      <View>
        {/* Top */}
        <View>
          {/* Deck title & icon */}
          <View className="flex-row items-center justify-between">
            <Text className="text-lg text-white font-kronaone-regular">
              {title}
            </Text>
            <View className="scale-50">{icon}</View>
          </View>
          {/* Theme */}
          <Text className="text-md text-white font-kronaone-regular">
            {theme}
          </Text>
        </View>
        {/* Bot */}
        <View className="flex-1 justify-end">
          {/* Cards left */}
          <Text className="text-xs text-white font-kronaone-regular text-right">
            {category.cards.length} cards left
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
