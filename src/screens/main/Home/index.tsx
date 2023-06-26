/**import react  */
import React from 'react';
/**import react-native */
import { Pressable, Text, View } from 'react-native';
/**import FlashList for handle vertical list view */
import { FlashList } from '@shopify/flash-list';
/**import theme handle controller */
import { useAppTheme } from '@src/theme/theme';
import { FocusAwareStatusBar } from '@src/components/FocusAwareStatusBar';
/**import Header User interface */
import Header from '@src/components/Header';
/**import Loading User interface */
import Loader from '@src/components/Loader';
/**import custom controller tool */
import { formatDate } from '@src/utils/helperFunctions';
import useLounchList from '@src/hooks/launchLatest';
/** import appolo query */
import LAUNCHPAD_QUERY from '@src/appolo-client/query/Launches.graphql';
/**import navigation tool */
import { HomeStackNavigationProps } from '@src/types/navigation';
import { useNavigation } from '@react-navigation/native';
/**import redux tool */
import { useDispatch } from 'react-redux';
import { setLounchId } from '@src/redux/actions';
/**import custom styles */
import makeStyles from './styles';


const MissionCard = (item: any) => {
  console.log('item', item);
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeStackNavigationProps>();

  return (
    <Pressable
      style={styles.missionCard}
      onPress={() => {
        dispatch(setLounchId(item.id));
        navigation.navigate('MissionDetails', { data: item });
      }}>
      <Text style={styles.missionNumber}> #{item?.flight_number}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.missionTitle}>{item?.mission_name}</Text>
          <View style={styles.titleContainer}>
            <Text> 🚀 {item.rocket.rocket_name}</Text>
            <Text> 📅 {formatDate(item.launch_date_local)}</Text>
            <Text>{item.launch_success}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const tellon = useLounchList({ query: LAUNCHPAD_QUERY });
  const { loading, lounchData, handleLoadmore } = tellon;
  /**
   * desctructure data object from controller
   * */

  // if (loading) {
  //   return <Loader />;
  // }
  /**
   * when loading data from query 
   * */
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <Header />
      {lounchData?.length ? (
        <FlashList
          data={lounchData}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <MissionCard {...item} />}
          estimatedItemSize={lounchData.length}
          onEndReached={handleLoadmore}
        />
      ) : <Loader />}
    </View>
  );
};

export default Home;
