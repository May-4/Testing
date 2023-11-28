import { StyleSheet, View, FlatList, StatusBar, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Icon, Text, Input, CheckBox } from '@rneui/themed'
import { useQuery } from 'react-query'
import { TouchableOpacity } from 'react-native'
import TodoService from '../../service/todoService'
import useStyle from './todo.style'
import { ScrollView } from 'react-native'

const TodoHome = () => {

  const style = useStyle();

  const [isFetching, setIsFetching] = useState(false);
  const [userId, setUserId] = useState(7);


  const { data: todos, isLoading, isError, refetch } = useQuery({
    queryKey: ['todoLists', userId],
    queryFn: async () => await TodoService.getTodoLists(userId),
    enabled: isFetching,
  })

  const renderList = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', }} key={index.toString()}>
        <CheckBox
          checked={item.completed}
          onPress={() => toggleCheckbox(item.id)}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
        />
        <Text> {item.title} </Text>
      </View>
    )
  }

  const toggleCheckbox = (todoId) => {
    console.log(todoId);
  }
  const loadData = () => {
    return (
      isLoading ?
        <Button type="clear" loading />
        :
        isError || !todos?.length && (
          <Text h3 > Could not loads todos </Text>
        )
    )
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.container}>
        <View style={style.flexRow}>
          <Input
            onChangeText={(text) => setUserId(parseInt(text))}
            value={userId}
            label="Enter User Id"
            keyboardType='numeric'
            containerStyle={{ width: '50%' }}
          />
          <Button type='solid' title="Search Todo" onPress={() => setIsFetching(true)} />
        </View>

        {loadData()}

        {
          <FlatList
            data={todos}
            renderItem={renderList}
            keyExtractor={(_, index) => { index.toString() }}
          />
        }
      </SafeAreaView>
    </>
  )

}

export default TodoHome

