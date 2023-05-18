import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'

import { useFonts, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NlWLogo from './src/assets/logo-mobile.svg'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center justify-center bg-zinc-950 px-8 py-10"
      imageStyle={{
        position: 'absolute',
        left: '-100%',
      }}
    >
      <View className="flex-1 items-center justify-center gap-6">
        <NlWLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl text-gray-50">
            Sua cápsula do Tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes na sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-10 py-3"
        >
          <Text className="font-alt text-sm uppercase">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat por SonnetoCode
      </Text>

      <StyledStripes className="absolute left-2" />
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
