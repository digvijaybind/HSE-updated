/*eslint-disable*/
import React from 'react'
import { View } from 'react-native'
import DownloadCards from './DownloadCards'
import VerticalSeperator from '../seperator/VerticalSeperator'
export default function Documents() {
    const downloadDocumnet=(documentName)=>{
        console.log(documentName)
    }
  return (
    <View>
     <DownloadCards onPress={downloadDocumnet} title={'Title Deed'}/>
     <VerticalSeperator height={10}/>
     <DownloadCards onPress={downloadDocumnet} title={'Floor Layouts'}/>
     <VerticalSeperator height={10}/>
     <DownloadCards onPress={downloadDocumnet} title={'Company Details'}/>
     <VerticalSeperator  height={10}/>
     <DownloadCards onPress={downloadDocumnet} title={'Ownership Documents'}/>
     <VerticalSeperator height={10}/>
    </View>
  )
}
