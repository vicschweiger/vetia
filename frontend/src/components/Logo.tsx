import { View, Image, ImageStyle, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LogoProps {
  style: ImageStyle
}

export function Logo({ style }: LogoProps) {

    const navigation = useNavigation();
  
    const navToHome = () => {
      navigation.navigate('Home');
    }

  return (
    <View>
      <TouchableOpacity
        onPress={navToHome}
      >
        <Image 
          source={require('../../assets/images/logo.png')}
          style={[{ resizeMode: 'contain' }, style]}
        />
      </TouchableOpacity>
    </View>
  );
}
