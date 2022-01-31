const s = [
    {
        "Brand": "Saucony",
        "Model": "kinwara",
        "Type": "Road Running",
        "Miles": "300",
        "Cost": "$80"
    },
    {
        "Brand": "Adidas",
        "Model": "Adizero",
        "Type": "Road Running",
        "Miles": "250",
        "Cost": "$107"
    }];
const shoeReducer = function shoes(state = s, action) {
    switch (action.type) {
        case 'ADD_SHOE':
            return [...state.action.shoes]
        default:
            return state
    }
}

export default shoeReducer;
