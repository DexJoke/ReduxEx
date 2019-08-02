import React from 'react';
import {connect} from 'react-redux'

const Point = (props) => {
    return (
        <div>
            <p>Redux: {props.totalPoint}</p>
            <p>Callback: {props.point}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        totalPoint: state.point
    }
};

export default connect(mapStateToProps)(Point)
