import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Video from 'react-native-video'; /// alreadyimported this
import Icon1 from 'react-native-vector-icons/FontAwesome5'; // and this
import Icon from 'react-native-vector-icons/Ionicons'; // and this
import Orientation from 'react-native-orientation-locker';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const {width} = Dimensions.get('window');
import Slider from '@react-native-community/slider';
import style from './styles';

const samplevideo = require('./sample.mp4');

 const Customvideo =props=> {
     console.log('props:',props.samplevideo)
const[currentTime,setcurrentTime]= useState()
const[duration,setduration]= useState()
const[paused,setpaused]= useState()
const[overlay,setoverlay]= useState()
const[fullscreen,setfullscreen]= useState()
const [isFullScreen, setIsFullScreen] = useState(false);
const[landscape,setlandscape]= useState()
const[source,setsource]= useState()

const [screenType, setScreenType] = useState('content');

var video=''
var overlayTimer=''
var timer=0
 var lastTap = null;
 const handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(timer);
      doubleTapCallback();
    } else {
lastTap = now;
      timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

 const getTime = t => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  };

  const load = ({duration}) => setduration(duration); // now here the duration is update on load video
 const progress = ({currentTime}) => setcurrentTime(currentTime); // here the current time is upated

 const  backward = () => {
    video.seek(currentTime - 5);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 1500);
  };
const   forward = () => {
    video.seek(currentTime + 5); // here the video is seek to 5 sec forward
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 1500);
  };

  const onslide = slide => {
    video.seek(slide * duration); // here the upation is maked for video seeking
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setoverlay(false), 1500);
  };

const  youtubeSeekLeft = () => {
    handleDoubleTap(
      () => {
    video.seek(currentTime - 5);
      },
      () => {
setoverlay(true);
        overlayTimer = setTimeout(
          () => setoverlay(false),
          1500,
        );
      },
    );
  };
 const youtubeSeekRight = () => {
 
    handleDoubleTap(
      () => {
        // this fn is used to detect the double tap first callback
        video.seek(currentTime + 5);
      },
      () => {
        setoverlay(true);
        overlayTimer = setTimeout(
          () => setoverlay(false),
          1500,
        );
      },
    );
  };

  const videofullscreen = () => {
    props.viewvideo
    if (fullscreen) {

      Orientation.lockToPortrait();
    } 
    // if(landscape)
    // {
    //   Orientation.lockToLandscape()
    // }
    else {
      //Orientation.lockToPortrait();
      Orientation.lockToLandscape()
    }

    setfullscreen(!fullscreen);
  };
  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };
 const onEnd = () => {
    setcurrentTime(currentTime === 0);
    setpaused(!paused);
    video.seek(0);
  };


  

    return (
      // <View style={style.container}>
        <View style={fullscreen ? 
          style.fullscreenVideolandscpae :
           style.video}>
          {fullscreen ? <StatusBar hidden={true} /> : null}
          <Video
            fullscreen={fullscreen}
            paused={paused} // this will manage the pause and play
            ref={ref => (video = ref)}
            source={props.samplevideo}
            style={{...StyleSheet.absoluteFill}}
            resizeMode="cover"
            onLoad={load}
            onProgress={progress}
            onEnd={onEnd}
            repeat={true}
            //repeat={true}
            // onVideoEnd={this.onEndVideo}
          />
          <View style={style.overlay}>
            {/* now we can remove this not */}
            {overlay ? (
              <View style={{...style.overlaySet, backgroundColor: '#0006'}}>
                <Icon
                  name="play-skip-back"
                  style={style.icon}
                  onPress={backward}
                />
                <Icon
                  name={paused ? 'play' : 'pause'}
                  style={style.icon}
                  onPress={() =>setpaused(!paused)}
                />
                <Icon
                  name="play-skip-forward"
                  style={style.icon}
                  onPress={forward}
                />
                <View style={style.sliderCont}>
                  <View style={style.timer}>
                    <Text style={{color: 'white'}}>
                      {'   '}

                      {getTime(currentTime)}
                    </Text>
                    <Text style={{color: 'white'}}>
                      {getTime(duration)}
                      {'   '}
                      <TouchableNativeFeedback onPress={props.viewhide}>
                      <Icon
                        onPress={videofullscreen}
                        name={fullscreen ? 'contract' : 'expand'}
                        style={{fontSize: responsiveFontSize(2.5)}}
                      />
                      </TouchableNativeFeedback>
                  
                    </Text>
                  </View>
                  <Slider
                    // we want to add some param here

                    maximumTrackTintColor="white"
                    minimumTrackTintColor="white"
                    thumbTintColor="white" // now the slider and the time will work
                    value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                    onValueChange={onslide}
                  />
                </View>
              </View>
            ) : (
              <View style={style.overlaySet}>
                <TouchableNativeFeedback onPress={youtubeSeekLeft}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={youtubeSeekRight}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
        </View>
    //  </View>
    );

}
export default Customvideo