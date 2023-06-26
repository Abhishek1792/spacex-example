/*  Library Imports */
import React from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

/* Local App Imports */
import { useAppTheme } from '@src/theme/theme';
import { formatDate } from '@src/utils/helperFunctions';
import makeStyles from './styles';
/** import web view */
import { WebView } from 'react-native-webview';
/** import custom controller */
import useLaunchDetail from '@src/hooks/launchDetail';
import LAUNCH_DETAIL_QUERY from '@src/appolo-client/query/launch.graphql';

const MissionDetails = () => {
  /** handle custom controller object */
  const tellon = useLaunchDetail({ query: LAUNCH_DETAIL_QUERY });
  const { lounchDetail } = tellon;

  /** use theme and styling */
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  /**handle youtube view link and redirect to youtube app  */
  const openInYoutube = () => {
    Linking.openURL(lounchDetail?.links?.video_link);
  };

  return (
    <View>
      <Pressable style={styles.playButton} onPress={openInYoutube}>
        <Entypo name="youtube-with-circle" size={50} color="red" />
      </Pressable>
      <ScrollView
        style={styles.detailContainer}
        contentContainerStyle={styles.detailContainer}>
        <Text style={styles.heading}>{lounchDetail?.mission_name}</Text>

        <View style={styles.detailCard}>
          <Text style={styles.cardHeading}>Descriptions</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailRowLabel}>Launch Date</Text>
            <Text style={styles.detailRowValue}>
              {formatDate(lounchDetail?.launch_date_utc)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailRowLabel}>Launch Status</Text>
            <Text style={styles.detailRowValue}>
              {lounchDetail?.launch_success ? 'Sucsess' : 'Failed'}
            </Text>
          </View>

          <Text style={styles.detailText}>{lounchDetail?.details}</Text>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.cardHeading}>Rocket</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailRowLabel}>Name</Text>
            <Text style={styles.detailRowValue}>
              {lounchDetail?.rocket?.rocket_name}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailRowLabel}>Type</Text>
            <Text style={styles.detailRowValue}>
              {lounchDetail?.rocket?.rocket_type}
            </Text>
          </View>
        </View>

        <View style={styles.detailCard}>
          <Text style={styles.cardHeading}>Article</Text>
          <View style={{ height: 500 }}>
            <WebView source={{ uri: lounchDetail?.links?.article_link }} style={{ flex: 1, marginTop: 20 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MissionDetails;
