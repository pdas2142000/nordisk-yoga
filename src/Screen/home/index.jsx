import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import ElipseIconOne from '../../../asstes/svgs/elipse-1.svg';
import ElipseIconTwo from '../../../asstes/svgs/elipse-2.svg';
import ElipseIconThree from '../../../asstes/svgs/elipse-3.svg';
import { IconProps } from '../../utils/helpers/Iconprops';
import { ms } from '../../utils/helpers/Metrics';

const HomeScreen = () => {
    const rotationOne = useSharedValue(0);
    const rotationTwo = useSharedValue(0);
    const rotationThree = useSharedValue(0);
    const scaleOne = useSharedValue(2.5);
    const scaleTwo = useSharedValue(2.8);
    const scaleThree = useSharedValue(1.5);

    const positionOneX = useSharedValue(0);
    const positionOneY = useSharedValue(0);
    const positionTwoX = useSharedValue(0);
    const positionTwoY = useSharedValue(0);
    const positionThreeX = useSharedValue(0);
    const positionThreeY = useSharedValue(0);

    useEffect(() => {
        // Function to animate icons to random positions with rotation
        const animateToRandomPosition = () => {
            positionOneX.value = withTiming(Math.random() * ms(10) - ms(50), { duration: 1000 });
            positionOneY.value = withTiming(Math.random() * ms(100) - ms(50), { duration: 1000 });
            positionTwoX.value = withTiming(Math.random() * ms(100) - ms(50), { duration: 1000 });
            positionTwoY.value = withTiming(Math.random() * ms(100) - ms(50), { duration: 1000 });
            positionThreeX.value = withTiming(Math.random() * ms(100) - ms(50), { duration: 1000 });
            positionThreeY.value = withTiming(Math.random() * ms(100) - ms(50), { duration: 1000 });

            // Repeat this animation infinitely
            setTimeout(animateToRandomPosition, 1000);
        };

        // Initial animation to center
        setTimeout(() => {
            positionOneX.value = withTiming(0, { duration: 1000 });
            positionOneY.value = withTiming(0, { duration: 1000 });
            positionTwoX.value = withTiming(0, { duration: 1000 });
            positionTwoY.value = withTiming(0, { duration: 1000 });
            positionThreeX.value = withTiming(0, { duration: 1000 });
            positionThreeY.value = withTiming(0, { duration: 1000 });

            // Start the random position animation after 1 second
            setTimeout(animateToRandomPosition, 1000);
        }, 1);
    }, []);

    const animatedStyleOne = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionOneX.value },
                { translateY: positionOneY.value },
                { rotate: `${rotationOne.value}deg` },
                { scale: scaleOne.value }
            ],
        };
    });

    const animatedStyleTwo = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionTwoX.value },
                { translateY: positionTwoY.value },
                { rotate: `${rotationTwo.value}deg` },
                { scale: scaleTwo.value }
            ],
        };
    });

    const animatedStyleThree = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionThreeX.value },
                { translateY: positionThreeY.value },
                { rotate: `${rotationThree.value}deg` },
                { scale: scaleThree.value }
            ],
        };
    });

    return (
        <View style={styles.ny_container}>

            <Animated.View style={[animatedStyleOne, styles.icon]}>
                <ElipseIconOne {...IconProps(ms(100))} />
            </Animated.View>
            <Animated.View style={[animatedStyleTwo, styles.icon]}>
                <ElipseIconTwo {...IconProps(ms(100))} />
            </Animated.View>
            <Animated.View style={[animatedStyleThree, styles.icon]}>
                <ElipseIconThree {...IconProps(ms(100))} />
            </Animated.View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    ny_container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
    },
});
