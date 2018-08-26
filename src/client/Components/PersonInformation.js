import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

import PersonModel from 'Store/Person';

@observer
class PersonInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    const { person } = this.props;
    person.setFirstName('Foo');
    person.setLastName('Bar');
  }

  handleNameChange(event) {
    const { person } = this.props;

    const { target } = event;
    const { value, name } = target;
    if (name === 'firstName') {
      person.setFirstName(value);
    } else if (name === 'lastName') {
      person.setLastName(value);
    }
  }

  render() {
    const { person } = this.props;
    return (
      <div>
        {person.fullName}
        <input type="text" name="firstName" onChange={this.handleNameChange} />
        <input type="text" name="lastName" onChange={this.handleNameChange} />
      </div>
    );
  }
}

PersonInformation.propTypes = {
  person: PropTypes.instanceOf(PersonModel).isRequired,
};

export default PersonInformation;
