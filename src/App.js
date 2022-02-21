import TaskContextProvider from './contexts/TaskContext';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <div className="App">
            <TaskContextProvider>
                <NavBar />
                <TaskForm />
                <TaskList />
            </TaskContextProvider>
        </div>
    );
}

export default App;
