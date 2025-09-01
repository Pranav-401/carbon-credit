"use client"

import { useEffect, useRef } from "react"
import { View, Text, StyleSheet, Pressable, ScrollView, Animated, Easing } from "react-native"

type NGODashboardProps = {
  navigation: any
}

export default function NGODashboard({ navigation }: NGODashboardProps) {
  const headerOpacity = useRef(new Animated.Value(0)).current
  const headerTranslate = useRef(new Animated.Value(12)).current
  const cardOpacities = useRef([0, 1, 2, 3].map(() => new Animated.Value(0))).current
  const cardScales = useRef([0, 1, 2, 3].map(() => new Animated.Value(0.96))).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 450,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(headerTranslate, {
        toValue: 0,
        duration: 450,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      const anims = cardOpacities.map((opacity, i) =>
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 350,
            delay: i * 80,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.spring(cardScales[i], {
            toValue: 1,
            damping: 16,
            stiffness: 140,
            useNativeDriver: true,
          }),
        ]),
      )
      Animated.stagger(80, anims).start()
    })
  }, [headerOpacity, headerTranslate, cardOpacities, cardScales])

  const statsTop = [
    { label: "Carbon Credits", value: "120" },
    { label: "Trees Planted", value: "5,400" },
  ]
  const statsBottom = [
    { label: "Hectares Restored", value: "32" },
    { label: "Reports Pending", value: "5" },
  ]

  const achievements = ["Community Steward", "Top Planter", "Verified Reporter"]

  const recent = [
    { title: "Submitted plantation report for Taluka East", time: "2h ago" },
    { title: "Updated survival rate data (Block 7)", time: "Yesterday" },
    { title: "Approved community volunteer batch", time: "2 days ago" },
  ]

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Animated.View
        style={{
          opacity: headerOpacity,
          transform: [{ translateY: headerTranslate }],
          marginBottom: 12,
        }}
      >
        <Text style={styles.title}>NGO Dashboard</Text>
        <Text style={styles.subtitle}>Welcome back. Here’s your project overview</Text>
      </Animated.View>

      {/* Primary Stats - Row 1 */}
      <View style={styles.row}>
        {statsTop.map((s, idx) => (
          <Animated.View
            key={s.label}
            style={[
              styles.card,
              {
                opacity: cardOpacities[idx],
                transform: [{ scale: cardScales[idx] }],
              },
            ]}
          >
            <Text style={styles.cardValue}>{s.value}</Text>
            <Text style={styles.cardLabel}>{s.label}</Text>
          </Animated.View>
        ))}
      </View>

      {/* Primary Stats - Row 2 */}
      <View style={styles.row}>
        {statsBottom.map((s, idx) => (
          <Animated.View
            key={s.label}
            style={[
              styles.card,
              {
                opacity: cardOpacities[idx + 2],
                transform: [{ scale: cardScales[idx + 2] }],
              },
            ]}
          >
            <Text style={styles.cardValue}>{s.value}</Text>
            <Text style={styles.cardLabel}>{s.label}</Text>
          </Animated.View>
        ))}
      </View>

      {/* Plantation Stats with simple progress bars */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Plantation Stats</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Survival Rate</Text>
          <Text style={styles.statValue}>86%</Text>
        </View>
        <View style={styles.progressTrack} accessible accessibilityLabel="Survival rate progress">
          <View style={[styles.progressFill, { width: "86%" }]} />
        </View>

        <View style={{ height: 16 }} />

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Annual Target</Text>
          <Text style={styles.statValue}>10,000 trees</Text>
        </View>
        <View style={styles.progressTrack} accessible accessibilityLabel="Annual target progress">
          <View style={[styles.progressFill, { width: "54%" }]} />
        </View>
      </View>

    
      {/* Recent Activity */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recent.map((r, i) => (
          <View key={i} style={styles.activityItem}>
            <View style={styles.activityBar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.activityTitle}>{r.title}</Text>
              <Text style={styles.activityTime}>{r.time}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <ActionButton title="Upload Plantation Report" onPress={() => navigation?.navigate?.("UploadReport")} />
        <ActionButton title="View Submitted Reports" onPress={() => navigation?.navigate?.("ViewReports")} />
        <ActionButton title="Track Carbon Credits" onPress={() => navigation?.navigate?.("CarbonCredits")} />
      </View>
    </ScrollView>
  )
}

function ActionButton({
  title,
  onPress,
}: {
  title: string
  onPress?: () => void
}) {
  const scale = useRef(new Animated.Value(1)).current

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
      damping: 20,
      stiffness: 200,
    }).start()
  }
  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      damping: 20,
      stiffness: 200,
    }).start()
  }

  return (
    <Animated.View style={{ transform: [{ scale }], marginVertical: 6 }}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityRole="button"
        accessible
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </Animated.View>
  )
}

/**
 * Styles
 * Palette (exactly 5 colors):
 * - Primary: #2E7D32
 * - Accent:  #22C55E
 * - Bg:      #F2FDF5
 * - White:   #FFFFFF
 * - Gray:    #4B5563
 */
const COLORS = {
  primary: "#2E7D32",
  accent: "#22C55E",
  bg: "#F2FDF5",
  white: "#FFFFFF",
  gray: "#4B5563",
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.bg,
    flexGrow: 1,
  },

  // Header
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: 16,
  },

  // Cards grid
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 6,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: COLORS.gray,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "center",
  },

  // Section Card
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: COLORS.gray,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: COLORS.primary,
  },

  // Plantation Stats
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.gray,
  },
  statValue: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "#E6F4EA", // light tint of green, visually aligned with palette
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.accent,
  },

  // Achievements
  badgeWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "#EAF8EE",
    borderColor: COLORS.accent,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  // Recent Activity
  activityItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  activityBar: {
    width: 4,
    height: "100%",
    backgroundColor: COLORS.accent,
    borderRadius: 2,
    marginRight: 12,
  },
  activityTitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "600",
  },

  // Button
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
  },
})
