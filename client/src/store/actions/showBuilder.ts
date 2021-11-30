import { Dispatch } from 'redux';
import { ActionType, Action } from './index';

export const showCvBuilder = (flag:boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_CVBUILDER,
      payload: flag
    })
  }
} 