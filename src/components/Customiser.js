import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setData } from './redux/actions'

class Customiser extends Component {


    render() {
        console.log(this.props.data)
        return (
            <>
           { 

               (Object.keys(this.props.data).length == 0)
               ?(null)
               :(<div id='CustomiserBG'>
                <form id='Customiser'>
                <button onClick={()=>this.props.dataToCustomiser({})}>X</button>
                <h1>{this.props.data.name}</h1>
                </form>
                </div>)
            }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataToCustomiser: (data) => dispatch(setData(data))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customiser)
