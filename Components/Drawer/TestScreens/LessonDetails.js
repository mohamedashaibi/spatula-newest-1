import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { Vimeo } from 'react-native-vimeo-iframe'
import {WebView} from 'react-native-webview'
import { useSelector } from 'react-redux'
import Loading from '../../Loading'
//import Video from 'react-native-video'

function LessonDetails(props) {
    const selector = useSelector(state=>state.courses)
    const regex = /(<([^>]+)>)/ig;

    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(props.route.params.id)
    useEffect(()=>{
      const unsubscribe = props.navigation.addListener('focus', () => {
  
      });

        return ()=>{
          unsubscribe
        }
    },[])

    return (
        <View style={{  flex: 4, backgroundColor: 'white' }}>
            {loading?<Loading/>:
            <>
            <View style={{ flex: 1, padding: 0 }}>
            <WebView
                userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
                allowsFullscreenVideo
                style={{ height: 350, width: "100%", resizeMode: 'cover', flex: 1 }}
                injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                scalesPageToFit={false}
                scrollEnabled={false}
                source={{
                    html: `
                    <div style="padding:0 0 0 0;position:absolute;width:100%;top:0;bottom:0;left:0;right:0;">
                    <iframe src="${selector!= undefined?selector.course.videos.find(c=>c.id == id).video:null}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    </iframe></div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                    `,
                }}
                />
            </View>
            <View style={{ flex: 2.5, backgroundColor: 'white' }}>
                <Text style={{ fontFamily: 'AmiriBold1', fontSize: 26, color: 'grey', textAlign:'center' }}>
                {selector.course.videos.find(c=>c.id === props.route.params.id).title.replace(regex, '')}
                </Text>
                <Text style={{ fontFamily: 'AmiriBold', fontSize: 30, color: 'grey', textAlign: 'center' }}>
                {selector.course.videos.find(c=>c.id === props.route.params.id).description.replace(regex, '')}

                </Text>
                <ScrollView>
                <List.Section>
      <List.Accordion
        style={{  }}
        titleStyle={{ color: 'grey', textAlign:'right',  fontSize: 30, fontFamily: 'AmiriBold'}}
        title="نبذة عن الفيديو والمحتوى"
        >
        <List.Item titleStyle={{ paddingRight: 30,textAlign: 'right', color: 'grey', fontSize: 30, fontFamily:'AmiriBold'}} title={selector.course.videos.find(c=>c.id === props.route.params.id).description.replace(regex, '')}/>
        
      </List.Accordion>
      <List.Accordion
        style={{  }}
        titleStyle={{ color: 'grey', textAlign:'right',  fontSize: 30, fontFamily: 'AmiriBold'}}
        title="تحذيرات اثناء اعداد هذه الوصفة"
        >
        <List.Item titleStyle={{ paddingRight: 30,textAlign: 'right', color: 'grey', fontSize: 30, fontFamily:'AmiriBold'}} title={selector.course.videos.find(c=>c.id === props.route.params.id).warning.replace(regex, '')}/>
            
      </List.Accordion>
      <List.Accordion
        style={{  }}
        titleStyle={{ color: 'grey', textAlign:'right',  fontSize: 30, fontFamily: 'AmiriBold'}}
        title="المقادير المستخدمة"
        >
        <List.Item titleStyle={{ paddingRight: 30,textAlign: 'right', color: 'grey', fontSize: 30, fontFamily:'AmiriBold'}} title={selector.course.videos.find(c=>c.id === props.route.params.id).ingredient.replace(regex, '')}/>
            
      </List.Accordion>
      <List.Accordion
        style={{  }}
        titleStyle={{ color: 'grey', textAlign:'right',  fontSize: 30, fontFamily: 'AmiriBold'}}
        title="معرض الصور"
        >
          {console.log("ImAGE = " + JSON.stringify(selector.course.videos.find(c=>c.id === props.route.params.id).image))}
          
<Image style={{width: Dimensions.get('screen').width/2,resizeMode: 'contain', height: Dimensions.get('screen').width/2}} source={{ uri: selector.course.videos.find(c=>c.id === props.route.params.id).pic }}/>
      </List.Accordion>
    </List.Section>
    </ScrollView>
           </View>
           </>
        }
        </View>
    )
}

export default LessonDetails
