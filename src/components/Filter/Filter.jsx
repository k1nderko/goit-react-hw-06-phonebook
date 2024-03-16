import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return <input type="text" name="filter" value={value} onChange={onChange} />;
};
