import React from 'react';
import cycleTile from './cycleTile';

class CycleStore extends React.Component{
    render(){
        return (
            <div className="Cycle Store">
                <h4> Cycles</h4>
            {this.props.cycles.map((cycle)=>{
            return <cycleTile cycle={cycle}/>
            })
            }   
            </div>
        )
}
}
export default CycleStore;