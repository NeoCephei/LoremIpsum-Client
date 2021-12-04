import {
  WorkExperienceState,
  WorkExperienceAction,
} from '../state_interfaces/experiences';

const initState: WorkExperienceState = {
  experience: [],
  loading: false,
  error: null,
};

const experienceReducer = (
  state = initState,
  { type, payload, id, error }: WorkExperienceAction
) => {
  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FAILED':
      return {
        ...state,
        loading: false,
        error: error,
      };
    case 'ALL_EXPERIENCES':
      return {
        ...state,
        loading: false,
        error: null,
        experience: payload,
      };
    case 'POST_EXPERIENCE':
      return {
        ...state,
        loading: false,
        error: null,
        experience: [...state.experience, payload],
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        loading: false,
        error: null,
        experience: state.experience.map(exp => {
          if (exp.id === id)
            return {
              ...exp,
              ...payload,
            };
          return exp;
        }),
      };
    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        loading: false,
        error: null,
        experience: state.experience.filter(exp => exp.id !== id),
      };
    default:
      return state;
  }
};

export default experienceReducer;
