import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function SuccessCode({ loading, error, successCode }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (successCode !== false) {
    // return <div>{successCode.strings}</div>;
    const item = `The server received the string '${
      successCode.string.input
    }' successfully.`;
    return <ListItem item={item} />;
    // return <List items={successCode} component={InputItem} />;
  }

  return null;
}

SuccessCode.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  successCode: PropTypes.any,
};

export default SuccessCode;
