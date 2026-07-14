export const baseBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  gap: 3,
  px: 2,
};

export const iconBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 120,
  height: 120,
  borderRadius: '50%',
  backgroundColor: 'action.hover',
  color: 'text.secondary',
  mb: 1,
};

export const nonTypo = {
  fontSize: { xs: '4rem', sm: '6rem' },
  fontWeight: 800,
  color: 'primary.main',
  lineHeight: 1,
};

export const goHomeBtn = {
  px: 4,
  py: 1.5,
  borderRadius: 2,
  textTransform: 'none',
  fontSize: '1.1rem',
  boxShadow: 2,
  '&:hover': {
    boxShadow: 4,
  },
};
