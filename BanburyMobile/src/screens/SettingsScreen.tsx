import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Alert,
} from 'react-native';

const SettingsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const settingsSections = [
    {
      title: 'App Preferences',
      items: [
        {
          label: 'Push Notifications',
          description: 'Receive notifications for important updates',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
          icon: '🔔',
        },
        {
          label: 'Dark Mode',
          description: 'Use dark theme throughout the app',
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
          icon: '🌙',
        },
        {
          label: 'Biometric Authentication',
          description: 'Use fingerprint or face ID to unlock',
          type: 'switch',
          value: biometricAuth,
          onValueChange: setBiometricAuth,
          icon: '👆',
        },
        {
          label: 'Auto Sync',
          description: 'Automatically sync data in background',
          type: 'switch',
          value: autoSync,
          onValueChange: setAutoSync,
          icon: '🔄',
        },
      ],
    },
    {
      title: 'Account & Privacy',
      items: [
        {
          label: 'Privacy Policy',
          type: 'link',
          icon: '📄',
          action: () => Alert.alert('Privacy Policy', 'Privacy policy content would go here.'),
        },
        {
          label: 'Terms of Service',
          type: 'link',
          icon: '📋',
          action: () => Alert.alert('Terms of Service', 'Terms of service content would go here.'),
        },
        {
          label: 'Data Usage',
          type: 'link',
          icon: '📊',
          action: () => Alert.alert('Data Usage', 'Data usage information would go here.'),
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          label: 'Help & FAQ',
          type: 'link',
          icon: '❓',
          action: () => Alert.alert('Help & FAQ', 'Help content would go here.'),
        },
        {
          label: 'Contact Support',
          type: 'link',
          icon: '📞',
          action: () => Alert.alert('Contact Support', 'Contact support information would go here.'),
        },
        {
          label: 'Rate App',
          type: 'link',
          icon: '⭐',
          action: () => Alert.alert('Rate App', 'App rating functionality would go here.'),
        },
      ],
    },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => console.log('Logout pressed') },
      ]
    );
  };

  const renderSettingItem = (item: any, index: number) => {
    return (
      <View key={index} style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Text style={styles.settingIcon}>{item.icon}</Text>
          <View style={styles.settingText}>
            <Text style={styles.settingLabel}>{item.label}</Text>
            {item.description && (
              <Text style={styles.settingDescription}>{item.description}</Text>
            )}
          </View>
        </View>
        <View style={styles.settingRight}>
          {item.type === 'switch' && (
            <Switch
              value={item.value}
              onValueChange={item.onValueChange}
              trackColor={{ false: '#E5E5E5', true: '#007AFF' }}
              thumbColor={item.value ? '#FFFFFF' : '#FFFFFF'}
            />
          )}
          {item.type === 'link' && (
            <TouchableOpacity onPress={item.action} activeOpacity={0.7}>
              <Text style={styles.settingArrow}>→</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appName}>Banbury Mobile</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => renderSettingItem(item, itemIndex))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.7}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    padding: 20,
  },
  appInfo: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 16,
    color: '#6C757D',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 15,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F4',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  settingText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: '#212529',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 14,
    color: '#6C757D',
    lineHeight: 18,
  },
  settingRight: {
    alignItems: 'center',
  },
  settingArrow: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SettingsScreen; 