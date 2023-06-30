import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilerInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ option }) => {
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilerInput
        name="filter"
        type="text"
        value={option}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </>
  );
};

Filter.propTypes = {
  option: PropTypes.string.isRequired,
};
