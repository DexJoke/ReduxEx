import React from 'react';
import {connect} from 'react-redux'
import {setNewPoint} from '../actions';

const UpPoint = (props) => {
    const upPoint = () => props.setNewPoint(props.totalPoint + 1);

    const callback = () => props.upPoint();

    return (
        <div>
            <button onClick={upPoint}>redux</button>
            <button onClick={callback}>callBack</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        totalPoint: state.point
    }
};

const mapDispatchToProps = (dispatch) => ({
    setNewPoint: (point) => dispatch(setNewPoint(point))
});
export default connect(mapStateToProps, mapDispatchToProps)(UpPoint)
