export const baseBox = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

export const bgBox = {
  background: 'linear-gradient(135deg, #e3f2fd 0%, #f5f5f5 100%)',
  py: { xs: 8, md: 12 },
  borderBottom: '1px solid',
  borderColor: 'divider',
};

export const mainIconBox = {
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: 'primary.main',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 4,
};

export const nameTypo = {
  fontWeight: 800,
  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
  color: 'text.primary',
  letterSpacing: '-0.02em',
};

export const subTitleTypo = { maxWidth: 600, fontWeight: 400, lineHeight: 1.6 };

export const getStartedBtn = {
  px: 5,
  py: 2,
  borderRadius: 3,
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 3,
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: 6,
  },
};

export const featurePaper = {
  p: 4,
  height: '100%',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:hover': {
    borderColor: 'primary.light',
    boxShadow: '0px 10px 20px rgba(25, 118, 210, 0.05)',
  },
};
