import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description);
        setTitle('');
        setDescription('');
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
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <input type="submit" />
        </form>
    );
};

export default TaskForm;
