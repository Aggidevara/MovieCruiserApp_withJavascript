import React,{Component,Fragment} from 'react';
export default class CartoonsDirectory extends Component{
    state={
        "cartoons":[
            {
                "id":0,
                "name":"Tom and Jerry",
                "creator":"Hannaha and barbera"
            },
            {
                "id":1,
                "name":"Micky Mouse",
                "creator":"walt disney"
            }
        ]
    }
    render(){
        return( 
        <Fragment>
        <h2>{this.state.name}</h2>
                <ul>
                    {
                        this.state.cartoons.map(
                            cartoon =><li>{cartoon.ceator}</li>
                        )
                    }
                </ul>
        </Fragment>
            );
    }
}