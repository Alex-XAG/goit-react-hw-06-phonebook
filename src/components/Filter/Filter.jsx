import React from 'react';
import { FilterLabel, FilerInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ option }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilerInput
        name="filter"
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </>
  );
};
