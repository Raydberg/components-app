import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}


const ThemedView = ({
    style,
    className,
    children,
    margin = false,
    safe = false,
    bgColor
}: Props) => {
    const backgroudColor = bgColor ?? useThemeColor({}, 'background')
    const safeArea = useSafeAreaInsets()
    return (
        // <View className='bg-light-background dark:bg-dark-background'>
        <View style=
            {[
                {
                    backgroundColor: backgroudColor,
                    flex: 1,
                    paddingTop: safe ? safeArea.top : 0,
                    marginHorizontal: margin ? 10 : 0,
                },
                style
            ]}
            className={className}
        >
            {children}
        </View>
    )
}

export default ThemedView