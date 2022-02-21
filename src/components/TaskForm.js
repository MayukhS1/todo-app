import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            task: {
                title,
                details
            }
        });
        setTitle('');
        setDetails('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                required
            />
            <input
                type="text"
                placeholder="Add descriptions (not mandatory)"
                value={details}
                onChange={(e) => {
                    setDetails(e.target.value);
                }}
            />
            <input type="submit" />
        </form>
    );
};

export default TaskForm;
