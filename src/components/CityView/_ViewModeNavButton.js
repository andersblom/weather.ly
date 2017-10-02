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
            <div onClick={() => this.props.handleViewModeNavClick()} onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleHover()} style={styles.button}>{this.props.children}</div>
        );
    }
}

const styles = {
  button: {
    height: "80px",
    width: "80px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: sharedStyles.color.blue,
    cursor: "pointer",
  }
}