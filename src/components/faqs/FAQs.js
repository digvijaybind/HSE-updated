/*eslint-disable*/
import React from 'react'
import { View,FlatList } from 'react-native'
import QuestionAnswerCards from './QuestionAnswerCards'
import VerticalSeperator from '../seperator/VerticalSeperator'

export default function FAQs() {
    const faqs=[
        {question:"Question 1?",answer:'Solution'},
        {question:"Question 2?",answer:'Solution'},
        {question:"Question 3?",answer:'Solution'},
        {question:"Question 4?",answer:'Solution'},
        {question:"Question 5?",answer:'Solution'},
        {question:"Question 6?",answer:'Solution'},
    ]
  return (
    <View>
    {/* {<FlatList
        data={faqs}
        ItemSeparatorComponent={()=>(<VerticalSeperator height={15}/>)}
        renderItem={({item})=>(<QuestionAnswerCards question={item.question} answer={item.answer}/>)}
    />} */}
    {faqs&&faqs.map((item,index)=>( <View key={index}><QuestionAnswerCards  question={item.question} answer={item.answer}/><VerticalSeperator height={15}/></View>))} 
    </View>
  )
}
