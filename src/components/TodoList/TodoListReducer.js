const initValue = [
    { id: "1", name: "Learn Yoga", completed: true, priority: "Low" },
    { id: "2", name: "Learn JS", completed: false, priority: "Hight" },
    { id: "3", name: "Learn HTML", completed: true, priority: "Medium" },
    { id: "4", name: "Learn CSS", completed: false, priority: "Low" },
    { id: "5", name: "Learn Yoga1", completed: false, priority: "Low" },
    { id: "6", name: "Learn JS2", completed: true, priority: "Hight" },
    { id: "7", name: "Learn HTML3", completed: false, priority: "Medium" },
    { id: "8", name: "Learn CSS4", completed: false, priority: "Low" },
];

const todoListReducer = (state = initValue, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default todoListReducer;
