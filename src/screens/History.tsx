import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {historyData} from '../constant/dummy';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../navigation/BottomNavigation';
import {HistoryInterface} from '../interface/dummyInterface';

type HistoryScreenNavigationProp = NativeStackNavigationProp<
  BottomTabParamList,
  'HistoryScreen'
>;

interface RenderHistory {
  item: HistoryInterface;
}

const HistoryScreen = () => {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const renderHistoryItem = ({item}: RenderHistory) => {
    return (
      <View style={styles.historyItem}>
        <View style={[styles.categoryIcon, {backgroundColor: item.iconBg}]}>
          <Icon2 name={item.icon} size={16} color="white" />
        </View>
        <View style={styles.categoryInfo}>
          <Text style={styles.categoryName}>{item.category}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{item.amount}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate('TransactionScreen');
            }}>
            <Icon name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Statistics</Text>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}
            style={styles.avatar}
          />
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Your Balance Is</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>$ 100,321.00</Text>
          </View>
        </View>

        <View style={styles.historyContainer}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>History</Text>
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.historyList}>
            <FlatList
              data={historyData}
              renderItem={renderHistoryItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
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
  card: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
    position: 'relative',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  balanceContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#a278f1',
    fontSize: 16,
    marginBottom: 5,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },

  chartContainer: {
    marginBottom: 20,
  },
  dayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  dayLabel: {
    color: '#888',
    fontSize: 14,
  },
  activeDayLabel: {
    color: '#333',
    fontWeight: 'bold',
  },
  historyContainer: {
    flex: 1,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  historyList: {
    borderRadius: 15,
    padding: 10,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#888',
    fontSize: 12,
    marginRight: 5,
  },
  amountContainer: {
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
  flatListContent: {},
});

export default HistoryScreen;
