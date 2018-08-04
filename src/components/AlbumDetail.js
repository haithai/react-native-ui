import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSelection from './CardSelection'
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  return (
    <Card>
      <CardSelection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSelection>
      <CardSelection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSelection>
      <CardSelection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now!
        </Button>
      </CardSelection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  imageStyle: {
    height: 300,
    flex: 1,
  },
}

export default AlbumDetail
