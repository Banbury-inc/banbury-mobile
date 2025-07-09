import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

type ProfileItem = 
  | { label: string; value: string; icon: string; action?: never }
  | { label: string; icon: string; action: string; value?: never };

type ProfileSection = {
  title: string;
  items: ProfileItem[];
};

const ProfileScreen: React.FC = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '👤',
    joinDate: 'January 2024',
    location: 'New York, NY',
  };

  const profileSections: ProfileSection[] = [
    {
      title: 'Personal Information',
      items: [
        { label: 'Full Name', value: userInfo.name, icon: '👤' },
        { label: 'Email', value: userInfo.email, icon: '📧' },
        { label: 'Location', value: userInfo.location, icon: '📍' },
        { label: 'Member Since', value: userInfo.joinDate, icon: '📅' },
      ],
    },
    {
      title: 'Account Settings',
      items: [
        { label: 'Change Password', icon: '🔒', action: 'password' },
        { label: 'Privacy Settings', icon: '🛡️', action: 'privacy' },
        { label: 'Notification Preferences', icon: '🔔', action: 'notifications' },
        { label: 'Language', icon: '🌐', action: 'language' },
      ],
    },
  ];

  const handleAction = (action: string) => {
    // Handle different actions
    console.log(`Action: ${action}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>{userInfo.avatar}</Text>
          </View>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
          <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Sections */}
        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.itemRow}
                  onPress={() => item.action && handleAction(item.action)}
                  activeOpacity={0.7}
                >
                  <View style={styles.itemLeft}>
                    <Text style={styles.itemIcon}>{item.icon}</Text>
                    <View style={styles.itemText}>
                      <Text style={styles.itemLabel}>{item.label}</Text>
                      {item.value && (
                        <Text style={styles.itemValue}>{item.value}</Text>
                      )}
                    </View>
                  </View>
                  {item.action && (
                    <Text style={styles.itemArrow}>→</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>42</Text>
              <Text style={styles.statLabel}>Days Active</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>156</Text>
              <Text style={styles.statLabel}>Actions</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>89%</Text>
              <Text style={styles.statLabel}>Completion</Text>
            </View>
          </View>
        </View>
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  avatar: {
    fontSize: 48,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F4',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  itemText: {
    flex: 1,
  },
  itemLabel: {
    fontSize: 16,
    color: '#212529',
    marginBottom: 2,
  },
  itemValue: {
    fontSize: 14,
    color: '#6C757D',
  },
  itemArrow: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  statsSection: {
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6C757D',
    textAlign: 'center',
  },
});

export default ProfileScreen; 