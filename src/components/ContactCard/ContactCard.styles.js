export const cardStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 1,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 3,
  },
};

export const fieldBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  minWidth: 0,
};

export const fieldNameStyles = {
  fontWeight: 500,
  fontSize: '1.1rem',
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
};

export const fieldPhoneStyles = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
};

export const actionsBoxStyles = {
  flexDirection: 'column',
  gap: 0.5,
  p: 0.5,
  flexShrink: 0,
  alignItems: 'center',
  '& > :not(style) ~ :not(style)': {
    marginLeft: 0,
  },
};

export const actionButtonBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};
