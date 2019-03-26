import ACTION from './actiontsTypes'

export const getAuthData =(data)=>{
  return {
      type: ACTION.AUTH_ACTION,
      data
  }
};

