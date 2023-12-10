import { StyleSheet, View, FlatList, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Icon, Text, Input, CheckBox, Overlay } from '@rneui/themed'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import TodoService from '../../service/todoService'
import useStyle from './todo.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'

const TodoHome = () => {

  const style = useStyle();

  const [isToastVisible, setToastVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const [page, setPage] = useState(1);
  const [todoTitle, setTodoTitle] = useState('');
  const [complete, setComplete] = useState(false);
  const queryClient = useQueryClient();
  const [refreshing, setIsRefreshing] = useState(false);

  
  const { data: todos, isLoading, isError, refetch } = useQuery({
    queryKey: ['todoLists', userId],
    queryFn: async () => await TodoService.getTodoLists(userId),
  })

  

  const { data: todoByPage, isLoading: isLoadingByPage, isError: isErrorByPage, refetch: refetchByPage, } =
    useQuery({
      queryKey: ["todoByPage", page],
      queryFn: async () => await TodoService.getTodoListsByPage(page),
      getNextPageParam: (lastPage) => lastPage?.nextPage || null,
      enabled: !userId
    })
  const addMutation = useMutation({
    mutationFn: TodoService.createTodo,
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ['todoLists', userId] });
      setTodoTitle('');
      showToastAlert();
    },
    onError: async (error) => {
      console.log("Fail Create::", error);
    },

  })
  const updateMutation = useMutation({
    mutationFn: TodoService.updateTodo,
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ['todoLists', userId] });
    },
    onError: async (error) => {
      console.log("Fail Update::", error);
    },
  })

  const createTodo = () => {
    const todoItem = {
      userId: userId,
      title: todoTitle,
      completed: complete
    }
    addMutation.mutate(todoItem)
  }
  const toggleCheckbox = (todoItem) => {
    updateMutation.mutate({ ...todoItem, completed: !todoItem["completed"] });
  }

  const showToastAlert = () => {
    setToastVisible(true)
    setTimeout(() => { setToastVisible(false) }, 1500)
  }
  const renderList = ({ item, index }) => {
    return (
      <React.Fragment key={index.toString()}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }} >
          <CheckBox
            checked={item.completed}
            onPress={() => toggleCheckbox(item)}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
          />
          <Text> {item.title} </Text>
        </View>
      </React.Fragment>
    )
  }

  const loadData = () => {
    return (
      isLoading || isLoadingByPage || addMutation.isLoading || updateMutation.isLoading ?
        <Overlay>
          <Button type="clear" loading />
        </Overlay>
        :
        isError || isErrorByPage && (
          <Text h3 > Could not loads todos </Text>
        )
    )
  }
  const refreshTodDo = async () => {
    setIsRefreshing(true)
    await refetchByPage()
    await refetch()
    setIsRefreshing(false)
  }

  const reachedMoreTodo = async () => {
    setPage((prev) => prev + 1)
  }
  const toastAlert = () => {
    return (
      <Overlay isVisible={isToastVisible} overlayStyle={{ padding: 20, position: 'absolute', top: 20, }}>
        <Text>Create Success!</Text>
      </Overlay>
    )
  }

  return (
    <>
      <StatusBar />
      {toastAlert()}

      <SafeAreaView style={style.container}>
        <View style={style.flexRow}>
          <Input
            onChangeText={(text) => setUserId(parseInt(text))}
            value={userId}
            label="Enter User Id"
            keyboardType='numeric'
          />

          <Input
            value={todoTitle}
            onChangeText={(txt) => setTodoTitle(txt)}
            label="Add List"
            containerStyle={{ width: '70%' }}
            multiline={true}
          />
          <Button onPress={createTodo}
            type='solid' title="Add Todo" disabled={!userId} disabledStyle={{ backgroundColor: 'grey', }} />
        </View>

        {loadData()}
        <FlatList
          data={userId ? todos : todoByPage}
          renderItem={renderList}
          keyExtractor={(_, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={refreshTodDo}
          onEndReachedThreshold={0.3}
          onEndReached={reachedMoreTodo}
          ItemSeparatorComponent={<Divider />}
        />
      </SafeAreaView>
    </>
  )

}

export default TodoHome

