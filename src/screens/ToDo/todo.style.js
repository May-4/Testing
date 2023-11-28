import { makeStyles } from "@rneui/themed";

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingVertical: 20,
    width: '100%',
    paddingHorizontal:20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent:'space-between'
  },
  todoWrapper: {
    backgroundColor: theme.colors.grey5,
    marginBottom: 20,
  }
}))

export default useStyle;