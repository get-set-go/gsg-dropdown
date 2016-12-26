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

    return(
      <li><a>{_item.props.children}</a></li>
    );
  }
};

GSGDropdownItem.propTypes = {};

GSGDropdownItem.defaultProps = {};
