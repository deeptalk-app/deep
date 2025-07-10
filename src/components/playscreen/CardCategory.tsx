import { Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { Category } from "@/src/types/category.type";

export function CardCategory({
  category,
  onCategoryClick,
}: {
  category: Category;
  onCategoryClick: () => void;
}) {
  const { level, theme } = category;

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
          {/* Level */}
          <Text className="text-lg text-white font-kronaone-regular">
            Niveau {level}
          </Text>
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
