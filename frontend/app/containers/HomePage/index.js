/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectSuccessCode,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import SuccessCode from 'components/SuccessCode';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { pushString } from '../App/actions';
import { changeInput } from './actions';
import { makeSelectInput } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  input,
  loading,
  error,
  successCode,
  onSubmitForm,
  onChangeInput,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // DELETE: for original app
  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   if (username && username.trim().length > 0) onSubmitForm();
  // }, []);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (input && input.trim().length > 0) onSubmitForm();
  }, []);

  const successCodeProps = {
    loading,
    error,
    successCode,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.formInstructions} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            {/* Step7: consume the state in your function return */}
            <label htmlFor="input">
              <Input
                id="input"
                type="text"
                placeholder="string"
                value={input}
                onChange={onChangeInput}
              />
            </label>
          </Form>
        </CenteredSection>
        <Section>
          {/* <ReposList {...reposListProps} /> */}
          <SuccessCode {...successCodeProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  successCode: PropTypes.any,
  onSubmitForm: PropTypes.func,
  input: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangeInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  successCode: makeSelectSuccessCode(),
  input: makeSelectInput(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: evt => dispatch(changeInput(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(pushString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
