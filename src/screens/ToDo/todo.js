import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Icon, Text, Input, CheckBox } from '@rneui/themed'
import { getTodos } from '../../server/todoService'
import { useQuery } from 'react-query'
import { TouchableOpacity } from 'react-native'

const TodoHome = () => {


  const todo = [
    {
      id: 1,
      text: "first Todo",
      done: false
    },
    {
      id: 2,
      text: "second Todo",
      done: true
    }
  ]

  const todoQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const renderList = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', }} key={index}>
        <CheckBox
          checked={item.done}
          //onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          containerStyle={{ padding: 0 }}
        />
        <Text> {item.text} </Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30 }}>
        <Input
          label="Add ToDo"
          placeholder='New ToDo'
          placeholderTextColor={'black'}
          containerStyle={{ paddingRight: 20 }}
        />

        <TouchableOpacity onPress={{}}>
          <Icon
            name="plus-box"
            type='material-community'
            color='#517fa4'
            size={40}
          />
        </TouchableOpacity>
      </View>
      <Text>todo List</Text>
      {
        todoQuery.isLoading && (
          <Button type="clear" loading />
        )
      }
      {
        todoQuery.isError && (
          <Text h3 > Could not loads todos </Text>
        )
      }
      {
        <FlatList
          data={todo}
          renderItem={renderList}
          keyExtractor={(_, index) => { index.toString() }}
        />
      }
    </View>
  )
}

export default TodoHome

