import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.State === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.State)
            return <span>{location.State.title}</span>;
        else {
            return <span> state error </span>
        }
    }
}

export default Detail;