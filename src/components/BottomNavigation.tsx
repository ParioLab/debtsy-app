import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

interface NavigationItem {
  id: string;
  title: string;
  icon: any;
  isActive: boolean;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      title: 'Home',
      icon: require('../../assets/home.png'),
      isActive: activeTab === 'home',
    },
    {
      id: 'debt',
      title: 'Debt',
      icon: require('../../assets/debt.png'),
      isActive: activeTab === 'debt',
    },
    {
      id: 'activity',
      title: 'Activity',
      icon: require('../../assets/activity.png'),
      isActive: activeTab === 'activity',
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: require('../../assets/settings.png'),
      isActive: activeTab === 'settings',
    },
  ];

  return (
    <View style={styles.container}>
      {navigationItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.navItem}
          onPress={() => onTabPress(item.id)}
        >
          <Image
            source={item.icon}
            style={[
              styles.navIcon,
              { tintColor: item.isActive ? '#111111' : '#A0A0A0' },
            ]}
          />
          <Text
            style={[
              styles.navText,
              { color: item.isActive ? '#111111' : '#A0A0A0' },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F3F3',
    paddingHorizontal: 24,
    paddingVertical: 8,
    gap: 20,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'System',
    lineHeight: 27,
  },
});

export default BottomNavigation; 