import React, { Component } from 'react';

import sharedStyles from '../../resources/sharedStyles';

export default class ViewModeNavButton extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        }
        this.handleHover = this.handleHover.bind(this);
    }    

    handleHover() {
        this.setState({
            hover: !this.state.hover,
        })
    }
    render() {
        return (
            <div 
                onClick={() => this.props.handleViewModeNavClick(this.props.viewMode)} 
                onMouseEnter={() => this.handleHover()} 
                onMouseLeave={() => this.handleHover()} 
                style={(this.props.currentViewMode === this.props.viewMode ? 
                    {...styles.button, ...styles.buttonActive}
                    :
                    styles.button
                )}
            >{this.props.children}</div>
        );
    }
}

const styles = {
  button: {
    height: "60px",
    width: "60px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: sharedStyles.color.fadedBlue,
    cursor: "pointer",
  },
  buttonActive: {
    backgroundColor: sharedStyles.color.blue,
  }
}