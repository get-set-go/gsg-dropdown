import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGDropdownItem extends React.Component {
  render() {
    const { _item } = this.props;
    let _itemDOM = (
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
