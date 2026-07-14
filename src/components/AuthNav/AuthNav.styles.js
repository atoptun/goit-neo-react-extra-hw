export const signUpBtn = {
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 2,
  px: 2,
  '&.active': {
    backgroundColor: 'action.selected',
  },
};

export const loginBtn = {
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 2,
  px: 2.5,
  borderWidth: '1.5px',
  '&:hover': {
    borderWidth: '1.5px',
  },
  '&.active': {
    backgroundColor: 'primary.main',
    color: 'white',
  },
};
