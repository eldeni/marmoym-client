import ActionType from '@constants/ActionType';

export default {
  'GET_DEFINITIONS': (payload) => {
    return {
      type: ActionType.GET_DEFINITIONS,
      payload,
    };
  },
  'GET_DEFINITIONS_SUCCESS': (payload) => {
    return {
      type: ActionType.GET_DEFINITIONS_SUCCESS,
      payload,
    };
  },
  'GET_DEFINITION_IDS': (payload) => {
    return {
      type: ActionType.GET_DEFINITION_IDS,
      payload,
    };
  },
  'GET_DEFINITION_IDS_SUCCESS': (payload) => {
    return {
      type: ActionType.GET_DEFINITION_IDS_SUCCESS,
      payload,
    };
  },
  'GET_LOCALE': (payload) => {
    return {  
      type: ActionType.GET_LOCALE,
      payload,
    };
  },
  'GET_LOCALE_SUCCESS': (payload) => {
    return {  
      type: ActionType.GET_LOCALE_SUCCESS,
      payload,
    };
  },
  'SEARCH': (payload) => {
    return {
      type: ActionType.SEARCH,
      payload,
    };
  },
  'SIGN_IN_USER': (payload) => {
    return {
      type: ActionType.SIGN_IN_USER,
      payload,
    };
  },
  'SIGN_IN_USER_SUCCESS': (payload) => {
    return {
      type: ActionType.SIGN_IN_USER_SUCCESS,
      payload,
    };
  },
  'SIGN_UP_USER': (payload) => {
    return {
      type: ActionType.SIGN_UP_USER,
      payload,
    };
  },
  'SIGN_UP_USER_SUCCESS': (payload) => {
    return {
      type: ActionType.SIGN_UP_USER_SUCCESS,
      payload,
    };
  },
  'TEMP': (payload) => {
    return {
      type: 'TEMP',
      payload,
    };
  }
}
