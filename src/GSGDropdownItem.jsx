import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGDropdownItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _item = this.props.item;
    let _itemDOM = {};

    _itemDOM = (
      <li><a>{_item.props.children}</a></li>
    );

    if (_item.props.isDivider) {
      _itemDOM = (
        <li className="divider"></li>
      );  
    }    

    return _itemDOM;
  }
};

GSGDropdownItem.propTypes = {
  isDivider: PropTypes.bool
};

GSGDropdownItem.defaultProps = {
  isDivider: false
};
