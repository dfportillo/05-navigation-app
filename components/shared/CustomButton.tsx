import { Text, Pressable, PressableProps, View } from "react-native";
import React from "react";

export interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secundary" | "tertiary";
  variant?: "contained" | "text-only";
  className?:string
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className
    }: CustomButtonProps,
    ref: React.Ref<View>
  ) => {
    const bgColor = {
      primary: "bg-primary",
      secundary: "bg-secundary",
      tertiary: "bg-tertiary",
    } as const;

    const textColor = {
      primary: "text-primary",
      secundary: "text-secundary",
      tertiary: "text-tertiary",
    } as const
    
    

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          {/** agregado de opacidad en nativeWind v4 */}
          <Text className={`text-center ${textColor[color]} font-work-medium`}>{children}</Text>
        </Pressable>
      );
    }
    return (
      <Pressable
        className={`${className} ${bgColor[color]} p-3 rounded-md  active:opacity-90 mt-3`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        {/** agregado de opacidad en nativeWind v4 */}
        <Text className=" text-white text-center text-lg font-work-black capitalize">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
