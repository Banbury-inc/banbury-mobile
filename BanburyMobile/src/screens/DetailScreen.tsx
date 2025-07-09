import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Detail: { id: string; title: string };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { id } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const featureDetails = {
    '1': {
      title: 'Feature One',
      description: 'This is an amazing feature that showcases the power of React Native with TypeScript. It demonstrates modern mobile app development practices and provides a solid foundation for building scalable applications.',
      longDescription: `Feature One is a comprehensive solution that combines cutting-edge technology with user-friendly design. Built with React Native and TypeScript, it offers:

• Cross-platform compatibility
• Type-safe development
• Modern UI/UX design
• Performance optimization
• Scalable architecture

This feature serves as a template for building robust mobile applications that can handle complex business logic while maintaining excellent user experience.`,
      icon: '🚀',
      color: '#FF6B6B',
      stats: {
        users: '10K+',
        rating: '4.8',
        downloads: '50K+',
      },
    },
    '2': {
      title: 'Feature Two',
      description: 'Another incredible feature that will blow your mind with its innovative approach to mobile development.',
      longDescription: `Feature Two represents the next generation of mobile app features. It leverages advanced React Native patterns and TypeScript best practices to deliver:

• Advanced state management
• Real-time data synchronization
• Offline-first architecture
• Custom animations
• Accessibility features

This feature demonstrates how modern mobile apps can provide rich, interactive experiences while maintaining high performance and reliability.`,
      icon: '💡',
      color: '#4ECDC4',
      stats: {
        users: '15K+',
        rating: '4.9',
        downloads: '75K+',
      },
    },
    '3': {
      title: 'Feature Three',
      description: 'The third feature that completes the experience with its comprehensive functionality and elegant design.',
      longDescription: `Feature Three is the culmination of our development efforts, offering a complete solution that addresses real-world mobile app challenges:

• Comprehensive testing suite
• CI/CD integration
• Performance monitoring
• Analytics integration
• Security best practices

This feature showcases how professional-grade mobile applications are built, with attention to every detail from development to deployment.`,
      icon: '⭐',
      color: '#45B7D1',
      stats: {
        users: '20K+',
        rating: '4.7',
        downloads: '100K+',
      },
    },
  };

  const currentFeature = featureDetails[id as keyof typeof featureDetails];

  const handleLike = () => {
    setIsLiked(!isLiked);
    Alert.alert('Success', isLiked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    Alert.alert('Success', isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleShare = () => {
    Alert.alert('Share', 'Sharing functionality would be implemented here');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: currentFeature.color }]}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>{currentFeature.icon}</Text>
            <Text style={styles.headerTitle}>{currentFeature.title}</Text>
            <Text style={styles.headerSubtitle}>{currentFeature.description}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentFeature.stats.users}</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentFeature.stats.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentFeature.stats.downloads}</Text>
            <Text style={styles.statLabel}>Downloads</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, isLiked && styles.actionButtonActive]}
            onPress={handleLike}
            activeOpacity={0.7}
          >
            <Text style={[styles.actionButtonText, isLiked && styles.actionButtonTextActive]}>
              {isLiked ? '❤️' : '🤍'} Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, isBookmarked && styles.actionButtonActive]}
            onPress={handleBookmark}
            activeOpacity={0.7}
          >
            <Text style={[styles.actionButtonText, isBookmarked && styles.actionButtonTextActive]}>
              {isBookmarked ? '🔖' : '📖'} Bookmark
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleShare} activeOpacity={0.7}>
            <Text style={styles.actionButtonText}>📤 Share</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>About This Feature</Text>
          <Text style={styles.contentText}>{currentFeature.longDescription}</Text>
        </View>

        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalInfoTitle}>Technical Details</Text>
          <View style={styles.techSpecs}>
            <View style={styles.techSpec}>
              <Text style={styles.techSpecLabel}>Framework</Text>
              <Text style={styles.techSpecValue}>React Native</Text>
            </View>
            <View style={styles.techSpec}>
              <Text style={styles.techSpecLabel}>Language</Text>
              <Text style={styles.techSpecValue}>TypeScript</Text>
            </View>
            <View style={styles.techSpec}>
              <Text style={styles.techSpecLabel}>Version</Text>
              <Text style={styles.techSpecValue}>1.0.0</Text>
            </View>
            <View style={styles.techSpec}>
              <Text style={styles.techSpecLabel}>Platform</Text>
              <Text style={styles.techSpecValue}>iOS & Android</Text>
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
    paddingBottom: 20,
  },
  header: {
    padding: 30,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 64,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6C757D',
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  actionButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6C757D',
  },
  actionButtonTextActive: {
    color: '#FFFFFF',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 15,
  },
  contentText: {
    fontSize: 16,
    color: '#6C757D',
    lineHeight: 24,
  },
  additionalInfo: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 15,
  },
  techSpecs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  techSpec: {
    width: '48%',
    marginBottom: 15,
  },
  techSpecLabel: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 5,
  },
  techSpecValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
});

export default DetailScreen; 