import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const actions = [
  { title: 'Learn', subtitle: 'Continue your lessons', icon: 'book-outline' as const, route: '/learn' as const },
  { title: 'Tests', subtitle: 'Daily & live challenges', icon: 'timer-outline' as const, route: '/tests' as const },
  { title: 'Leaderboard', subtitle: 'See your ranking', icon: 'trophy-outline' as const, route: '/leaderboard' as const },
  { title: 'Games', subtitle: 'Practice by playing', icon: 'game-controller-outline' as const, route: '/games' as const },
];

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View><Text style={styles.kicker}>MATHS LEAGUE</Text><Text style={styles.title}>Ready to level up?</Text></View>
        <View style={styles.avatar}><Text style={styles.avatarText}>OJ</Text></View>
      </View>
      <View style={styles.hero}>
        <View><Text style={styles.heroLabel}>CURRENT LEVEL</Text><Text style={styles.level}>Level 12</Text><Text style={styles.xp}>7,240 XP · 76% progress</Text></View>
        <Ionicons name="school" size={54} color="#fff" />
      </View>
      <View style={styles.stats}>
        <Stat value="7" label="Day streak" icon="flame" />
        <Stat value="#18" label="Global rank" icon="trophy" />
        <Stat value="82%" label="Avg. score" icon="analytics" />
      </View>
      <Text style={styles.section}>Your learning hub</Text>
      <View style={styles.grid}>{actions.map((item) => <Pressable key={item.title} style={styles.card} onPress={() => router.push(item.route)}><View style={styles.icon}><Ionicons name={item.icon} size={25} color="#2563eb" /></View><Text style={styles.cardTitle}>{item.title}</Text><Text style={styles.cardSub}>{item.subtitle}</Text></Pressable>)}</View>
      <View style={styles.daily}><View><Text style={styles.dailyLabel}>TODAY'S CHALLENGE</Text><Text style={styles.dailyTitle}>10 questions · 10 minutes</Text><Text style={styles.dailySub}>Earn up to 100 XP</Text></View><Pressable style={styles.start} onPress={() => router.push('/tests')}><Text style={styles.startText}>Start</Text></Pressable></View>
    </ScrollView>
  );
}
function Stat({ value, label, icon }: { value: string; label: string; icon: any }) { return <View style={styles.stat}><Ionicons name={icon} size={18} color="#64748b" /><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>; }
const styles = StyleSheet.create({ page:{flex:1,backgroundColor:'#f8fafc'},content:{padding:20,paddingBottom:40,gap:18},header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:8},kicker:{fontSize:12,fontWeight:'800',letterSpacing:1.6,color:'#2563eb'},title:{fontSize:25,fontWeight:'800',color:'#0f172a',marginTop:4},avatar:{width:44,height:44,borderRadius:22,backgroundColor:'#dbeafe',alignItems:'center',justifyContent:'center'},avatarText:{fontWeight:'800',color:'#1d4ed8'},hero:{backgroundColor:'#172554',borderRadius:24,padding:22,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},heroLabel:{color:'#bfdbfe',fontSize:11,fontWeight:'800',letterSpacing:1.2},level:{fontSize:30,fontWeight:'900',color:'#fff',marginTop:4},xp:{color:'#dbeafe',marginTop:3},stats:{backgroundColor:'#fff',borderRadius:20,padding:15,flexDirection:'row',justifyContent:'space-around',shadowOpacity:.04,shadowRadius:10},stat:{alignItems:'center',gap:3},statValue:{fontSize:18,fontWeight:'800',color:'#0f172a'},statLabel:{fontSize:11,color:'#64748b'},section:{fontSize:19,fontWeight:'800',color:'#0f172a'},grid:{flexDirection:'row',flexWrap:'wrap',gap:12},card:{backgroundColor:'#fff',borderRadius:18,padding:16,width:'48%',minHeight:145},icon:{width:44,height:44,borderRadius:14,backgroundColor:'#eff6ff',alignItems:'center',justifyContent:'center',marginBottom:14},cardTitle:{fontSize:17,fontWeight:'800',color:'#0f172a'},cardSub:{fontSize:12,color:'#64748b',marginTop:5,lineHeight:17},daily:{backgroundColor:'#eff6ff',borderRadius:20,padding:18,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},dailyLabel:{fontSize:10,fontWeight:'900',letterSpacing:1,color:'#1d4ed8'},dailyTitle:{fontSize:16,fontWeight:'800',color:'#172554',marginTop:5},dailySub:{fontSize:12,color:'#475569',marginTop:3},start:{backgroundColor:'#2563eb',paddingHorizontal:18,paddingVertical:11,borderRadius:12},startText:{color:'#fff',fontWeight:'800'}});