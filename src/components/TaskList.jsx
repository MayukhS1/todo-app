import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const { taskList } = useContext(TaskContext);
    return taskList.length ? (
        <div className="task-list">
            <ul>
                {taskList.map((task) => {
                    return <TaskDetails task={task} key={task.id} />;
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No tasks pending! Enjoy your day</div>
    );
};

export default TaskList;
