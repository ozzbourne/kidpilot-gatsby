import React from 'react';
import $ from 'jquery';

class ToggleButton extends React.Component {
    showMac = () => {
        $('#ios-section').fadeOut();
        $('#mac-section').fadeIn();
    }
    showiOS = () => {
        $('#mac-section').fadeOut();
        $('#ios-section').fadeIn();
    }
    render(){
        return(
            <div className="container">
              <div className="row btn-row">
                <div className="col-12">
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label 
                        onClick={this.showMac} 
                        className={`btn btn-primary btn-lg ${this.props.activeBtn === "mac" ? "active" : null}`}
                        id="mac">
                      <input type="radio" name="options" id="option1" autoComplete="off" />
                    for Mac
                    </label>
                    <label 
                        onClick={this.showiOS} 
                        className={`btn btn-primary btn-lg ${this.props.activeBtn === "ios" ? "active" : null}`}
                        id="ios">
                      <input type="radio" name="options" id="option2" autoComplete="off" /> for iOS
                    </label>
                      
                  </div>
                </div>
              </div>  
            </div>
        )
    }
}

export default ToggleButton;