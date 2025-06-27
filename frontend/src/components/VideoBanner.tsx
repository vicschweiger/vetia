import React from 'react';
import { View, StyleSheet } from 'react-native';

import { VideoView, useVideoPlayer } from 'expo-video';

const videoSource = require('../../assets/videos/banner.mp4');

export const VideoBanner = () => {
  const player = useVideoPlayer(videoSource, (playerInstance) => {
    playerInstance.loop = true;
    
    // AQUI ESTÁ A CORREÇÃO: A propriedade correta é 'isMuted'
    playerInstance.muted = true; 
    
    playerInstance.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        nativeControls={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%', 
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 2 }],
  },
});
