import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Home' }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      
      {/* Navigation Header */}
      <View style={styles.navigationHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require('../../assets/person-icon.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.headerTitle}>{title}</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationsButton}>
            <Image
              source={require('../../assets/notifications-icon.png')}
              style={styles.notificationsIcon}
            />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  navigationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 16,
    height: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111111',
    fontFamily: 'System',
    lineHeight: 38,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notificationsButton: {
    position: 'relative',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationsIcon: {
    width: 16,
    height: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: -12,
    right: -12,
    width: 16,
    height: 16,
    backgroundColor: '#D12131',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'System',
    lineHeight: 23,
  },
});

export default Header; 