import { View, Text, Dimensions, ScrollView, Platform, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute, useNavigation  } from '@react-navigation/native';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme';
import MovieList from '../components/movieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.IOS == 'ios';
const verticalMargin = ios? '' : 'my-6';

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4]);
  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom: 20}}>

       {/* back button */}
       <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4 "+ verticalMargin}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite? 'red' : "white"} />
                </TouchableOpacity>
        </SafeAreaView>

         {/* person details */}
         <View>
            <View className="flex-row justify-center"
                style={{
                    shadowColor: 'gray',
                    shadowRadius: 40,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 1,
                }}
            >
                <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                    <Image source={require('../assets/images/castImage2.png')}
                        style={{height: height*0.43,width:  width*0.74}}
                    />
                </View>

            </View>
            <View className="mt-6">
                <Text className="text-3xl text-white font-bold text-center">
                    Keanu Reeves
                </Text>
                <Text className="text-base text-neutral-500 text-center">
                    London, United Kingdom
                </Text>
            </View>
            <View className=" mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold">Gender</Text>
                    <Text className="text-neutral-300 text-sm">Male</Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold">Birthday</Text>
                    <Text className="text-neutral-300 text-sm">1964-09-02</Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                    <Text className="text-white font-semibold">Known for</Text>
                    <Text className="text-neutral-300 text-sm">Acting</Text>
                </View>
                <View className="px-2 items-center">
                    <Text className="text-white font-semibold">Popularity</Text>
                    <Text className="text-neutral-300 text-sm">64.23</Text>
                </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">Biography</Text>
                <Text className="text-neutral-400 tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>

            {/* movies*/}
            <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
         </View>
    </ScrollView>
  )
}