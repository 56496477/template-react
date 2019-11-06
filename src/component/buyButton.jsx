import React from 'react';

class BuyButton extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div {...this.props} className={this.props.className || 'buy-button'}>
                <div>{`${this.props.ml}ML`}</div>
                <div>{this.props.children}</div>
            </div>
        );
    }

}

export default BuyButton;