import React, { createContext, useState } from 'react';
import { v1 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [taskList, setTaskList] = useState([
        { title: 'Add a new task', details: 'Add some details', id: v1() },
        { title: 'Checkout new features', details: '', id: v1() }
    ]);

    const addTask = (title, details) => {
        setTaskList([...taskList, { title, details, id: v1() }]);
    };

    const removeTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };
    return (
        <TaskContext.Provider value={{ taskList, addTask, removeTask }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
