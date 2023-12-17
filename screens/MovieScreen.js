import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useRoute, useNavigation  } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast';
import MovieList from '../components/movieList';

const ios = Platform.OS == 'ios';
const topMargin = ios? '':' mt-3';
var {width, height} = Dimensions.get('window');

export default function MovieScreen() {
    const {params: item} = useRoute();
    const [isFavourite, toogleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    useEffect(() => {
        // call the movie details api
    },[item])

  return (

    <ScrollView
        contentContainerStyle={{paddingBottom: 20}} 
        className="flex-1 bg-neutral-900">
        
        {/* back button and movie poster*/}
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 "+ topMargin}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toogleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite? theme.background : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image
                source={require('../assets/images/moviePoster2.png')}
                style={{width, height: height*0.55}}
                />
            </View>
            <LinearGradient 
                colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']} 
                style={{width, height: height*0.40}}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
            />
        </View>
        
        {/* movie details */}
        <View style={{marginTıo: -(height*0.09)}} className="space-y-3">

            {/* title */}
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {
                    movieName
                }
            </Text>

            {/* status, release, runtime */}
            <Text className="text-neutral-400 font-semibold text-base text-center">
                Released • 2020 • 170 min
            </Text>

            {/* genres*/}
            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy
                </Text>
            </View>

            {/* decription */}
            <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </View>

        {/* cast */}
        <Cast navigation={navigation} cast={cast}/>
        
        {/* similar movies */}
        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>

    </ScrollView>
  )
}