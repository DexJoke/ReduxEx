export const setNewPoint = (point) => {
    console.log("action point");
    return {
        type: "SET_POINT",
        totalPoint: point
    };
};

export const setDefaultPoint = () => {
    return {
        type: "GET_DEFAULT_POINT",
        totalPoint: 0
    };
};
