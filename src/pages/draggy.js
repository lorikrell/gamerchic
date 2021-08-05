import React, { Component } from 'react';
import './draggy.scss';
import Dialog from '../Components/Dialog';


export default class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        }
    }

    _showDialog() {
        this.setState({showDialog: !this.state.showDialog});
    }
	
	render() {
        
		return (
			<div className='board'>
                
				<div className='planch-button' onClick={this._showDialog.bind(this)}> <img src='../../static/img/icons/icon-planchette.png'/></div>
                <Dialog onClose={this._showDialog.bind(this)} show={this.state.showDialog}/>

			</div>

		);
	}
} 
