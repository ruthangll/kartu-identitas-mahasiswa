import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kartu Identitas Mahasiswa</Text>

      <Image
        source={require('../../assets/images/fotome.jpeg')}
        style={styles.profilePic}
      />

      <View style={styles.card}>
        <Text style={styles.name}>Ruth Angel Sitorus</Text>
        <Text style={styles.info}>NIM: 243303621245</Text>
        <Text style={styles.info}>Jurusan: Sistem Informasi</Text>

        <View style={styles.bioCard}>
          <Text style={styles.bioText}>
            Be better than you were yesterday.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0882',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#ffffff',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#0f0065b5',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1,
  },
  bioCard: {
    marginTop: 15,
    backgroundColor: '#153aaa',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  bioText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});