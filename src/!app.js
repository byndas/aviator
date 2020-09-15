import { FirebaseContext } from "./firebase/!firebase";

export default function App(props) {
  const { app, api } = useContext(FirebaseContext);
  // you can access todos from the Redux store
  const todos = useSelector(state => state.todo.todos);

  useEffect(() => {
    api.getTodos();
  }, []);

  // return ( ... )
}
