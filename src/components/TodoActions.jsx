import React from 'react';

const TodoActions = () => {
	return (
		<div className="TodoActions">

			<button className="TodoActions--complete">
				/
			</button>
			<button className="TodoActions--delete">
				-
			</button>
			<button className="TodoActions--edit">
				edit
			</button>
		</div>
	);
};

export default TodoActions;