import React, { createContext, useReducer, useEffect } from 'react';
import { taskReducer } from '../reducer/TaskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [taskList, dispatch] = useReducer(taskReducer, [], () => {
        const localData = localStorage.getItem('taskList');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    return (
        <TaskContext.Provider value={{ taskList, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
