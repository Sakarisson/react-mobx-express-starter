import React from 'react';
import PropTypes from 'prop-types';

import PersonStoreModel from 'Store/PersonStore';

const PersonInformation = ({ store }) => (
  <div>
    {store.fullName}
  </div>
);

PersonInformation.propTypes = {
  store: PropTypes.instanceOf(PersonStoreModel).isRequired,
};

export default PersonInformation;
