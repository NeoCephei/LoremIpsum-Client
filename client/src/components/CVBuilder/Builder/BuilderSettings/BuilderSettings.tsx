import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
import { toggleModal } from '../../../../redux/AppState/actionCreators/toggleModal';
import { useDispatch } from 'react-redux';

export default function BuilderSettings() {
  const dispatch = useDispatch();

  function handleClick () {
    // dispatch(toggleModal(true, 'pdf'));
  }

  return (
    <div>
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5" onClick={() => handleClick()}>
        <Button name="Download"/>
      </div>
    </div>
  );
}