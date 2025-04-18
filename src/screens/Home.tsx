import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

const {width} = Dimensions.get('window');

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <View style={styles.topNav}>
          <View style={styles.iconContainer}>
            <View style={styles.starIcon}>
              <Icon name="star-outline" size={24} color="#8a56ac" />
            </View>
            <View style={styles.circlesIcon}>
              <View style={[styles.circle, styles.circle1]} />
              <View style={[styles.circle, styles.circle2]} />
            </View>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <View style={styles.barContainer}>
            <View style={styles.bar1} />
            <View style={styles.bar2} />
            <View style={styles.bar3} />
            <LinearGradient colors={['#f178b6', '#a178f1']} style={styles.bar4}>
              <View style={styles.arrowContainer}>
                <Icon name="arrow-up-outline" size={20} color="white" />
              </View>
            </LinearGradient>
            <View style={styles.bar5} />
          </View>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.heading}>
            Find way to{'\n'}manage <Text style={styles.headingBlue}>your</Text>
            {'\n'}
            <Text style={styles.headingPink}>finance</Text>
          </Text>
          <Text style={styles.subheading}>
            The most Transparent &{'\n'}Security Bank ever
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'BottomNavigation'}],
              });
            }}>
            <LinearGradient
              colors={['#f178b6', '#a178f1']}
              style={styles.gradientButton}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 50,
    padding: 15,
    shadowColor: '#000',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageIndicator: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  pageIndicatorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
  },
  starIcon: {
    borderWidth: 2,
    borderColor: '#8a56ac',
    borderRadius: 15,
    padding: 5,
  },
  circlesIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8a56ac',
    backgroundColor: 'white',
  },
  circle1: {
    marginRight: -8,
  },
  circle2: {
    backgroundColor: '#8a56ac',
  },
  chartContainer: {
    height: 300,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bar1: {
    width: 45,
    height: '50%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  bar2: {
    width: 45,
    height: '40%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  bar3: {
    width: 45,
    height: '30%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  bar4: {
    width: 45,
    height: '80%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bar5: {
    width: 40,
    height: '65%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  arrowContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 15,
    padding: 5,
    marginTop: 10,
  },
  textContent: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 10,
  },
  headingBlue: {
    color: '#8a56ac',
  },
  headingPink: {
    color: '#f178b6',
  },
  subheading: {
    color: '#888',
    fontSize: 16,
    lineHeight: 22,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  btnContainer: {width: '100%'},
  gradientButton: {
    borderRadius: 25,
    flex: 1,
    marginRight: 15,
    padding: 15,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  scanButton: {
    backgroundColor: '#f0f0f0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIndicator: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  toPageIndicator: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  toPageText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
