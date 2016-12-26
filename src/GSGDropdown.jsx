import '../node_modules/gsg-common-style/less/dropdown/index.less';
import '../node_modules/gsg-common-style/less/button/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import DropdownItem from './GSGDropdownItem.jsx';

export default class GSGDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdownItems = this.toggleDropdownItems.bind(this);
  }

  toggleDropdownItems(e) {
    let _dropdownDOM = ReactDOM.findDOMNode(this);
    _dropdownDOM.classList.toggle('open');
  }

  render() {
    let _bClass = {
      'btn': true,
      'dropdown-toggle': true
    };

    _bClass = objectAssign(_bClass, {
      [`btn-${this.props.bStyle}`]: true
    });

    if (this.props.bSize) {
      _bClass = objectAssign(_bClass, {
        [`btn-${this.props.bSize}`]: true
      });
    }

    _bClass = classNames(_bClass);

    let _bDropClass = {
      'dropdown': true
    };

    if (this.props.isDropup) {
      _bDropClass = objectAssign(_bDropClass, {
        'dropup': true
      });
    }

    if (this.props.isRight) {
      _bDropClass = objectAssign(_bDropClass, {
        'pull-right': true
      });
    }

    _bDropClass = classNames(_bDropClass);

    let _bMenuClass = {
      'dropdown-menu': true
    };

    if (this.props.isRight) {
      _bMenuClass = objectAssign(_bMenuClass, {
        'dropdown-menu-right': true
      });
    }

    _bMenuClass = classNames(_bMenuClass);
 
    let _listItems = this.props.children.map((listitem) => <DropdownItem key={listitem.index} item={listitem}></DropdownItem>);

    return (
      <div className={_bDropClass}>
        <button onClick={this.toggleDropdownItems} className={_bClass} type="button" data-toggle="dropdown">{this.props.title}</button>
        <ul className={_bMenuClass}>{_listItems}</ul>
      </div>
    );
  }
};

GSGDropdown.propTypes = {
  title: PropTypes.string,
  bStyle: PropTypes.string,
  bSize: PropTypes.string,
  isDropup: PropTypes.bool,
  isRight: PropTypes.bool
};

GSGDropdown.defaultProps = {
  bStyle: 'default',
  isDropup: false,
  isRight: false,
  isDivider: false
};
