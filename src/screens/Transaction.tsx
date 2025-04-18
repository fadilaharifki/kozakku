import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {transactions} from '../constant/dummy';
import {useFocusEffect} from '@react-navigation/native';
import {TransactionInterface} from '../interface/dummyInterface';

interface RenderTransaction {
  item: TransactionInterface;
}

const TransactionItem = ({item}: RenderTransaction) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  const renderIcon = () => {
    if (item.iconType === 'fontawesome') {
      return (
        <View
          style={[
            styles.transactionIcon,
            {backgroundColor: item.iconBg || '#f0f0f0'},
          ]}>
          <Icon2 name={item.icon} size={16} color="white" />
        </View>
      );
    } else {
      return (
        <View
          style={[
            styles.transactionIcon,
            {backgroundColor: item.iconBg || '#f0f0f0'},
          ]}>
          <Text style={styles.iconText}>{item.icon}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.transactionItem}>
      {renderIcon()}
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <View style={styles.transactionDate}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.amountText}>{item.amount}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );
};

const TransactionScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}
              style={styles.avatar}
            />
            <View style={styles.welcomeText}>
              <Text style={styles.welcomeBack}>Welcome Back,</Text>
              <Text style={styles.userName}>Tawfikul Emon</Text>
            </View>
          </View>
          <View style={styles.gridIcon}>
            <Icon3 name="grid-view" size={24} color="#333" />
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Your Balance Is</Text>
            <View style={styles.balanceAmountContainer}>
              <Text style={styles.balanceAmount}>$ 100,321.00</Text>
            </View>
            <Text style={styles.balanceDate}>Today 14 Sep 2022</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <LinearGradient
            colors={['#0f2027', '#203a43', '#2c5364']}
            style={styles.cardGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.cardTitle}>Life Style</Text>
            <Text style={styles.cardCurrency}>EURO</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#8a2387', '#e94057', '#f27121']}
            style={[styles.cardGradient, styles.cardSecond]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.cardCircles}>
              <View style={styles.circle} />
              <View style={[styles.circle, styles.circleOverlap]} />
            </View>
            <Text style={styles.cardCurrency}>USD</Text>
          </LinearGradient>
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Transactions</Text>
          <View style={styles.transactionsList}>
            <FlatList
              data={transactions}
              renderItem={({item}) => <TransactionItem item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
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
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    flexDirection: 'column',
  },
  welcomeBack: {
    color: '#888',
    fontSize: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  gridIcon: {
    padding: 8,
  },
  balanceContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  balanceInfo: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  balanceLabel: {
    color: '#a278f1',
    fontSize: 16,
    marginBottom: 5,
  },
  balanceAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },

  balanceDate: {
    color: '#888',
    fontSize: 14,
  },
  cardContainer: {
    marginBottom: 20,
    height: 170,
    position: 'relative',
    alignItems: 'center',
  },
  cardGradient: {
    borderRadius: 15,
    padding: 15,
    height: 120,
    width: '98%',
    justifyContent: 'space-between',
  },
  cardSecond: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 2,
    width: '100%',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cardCurrency: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
  cardCircles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  circleOverlap: {
    marginLeft: -10,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  transactionsContainer: {
    flex: 1,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  transactionsList: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  flatList: {
    flex: 1,
    padding: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#888',
    fontSize: 12,
    marginRight: 5,
  },

  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timeText: {
    color: '#888',
    fontSize: 12,
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

export default TransactionScreen;
