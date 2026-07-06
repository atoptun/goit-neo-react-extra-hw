import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Heading.module.css';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string | string[]} [props.className]
 * @param {number} [props.top]
 * @param {number} [props.bottom]
 * @param {string} [props.color]
 * @param {'center' | 'left' | 'right'} [props.align='center']
 * @param {boolean} [props.underline=false]
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'} [props.tag='h2']
 */
export default function Heading({
  children,
  className,
  top,
  bottom,
  color,
  align = 'center',
  underline = false,
  tag: Tag = 'h2',
}) {
  const inlineStyles = {
    '--heading-top': top ? `${top}px` : undefined,
    '--heading-bottom': bottom ? `${bottom}px` : undefined,
    '--heading-align': align,
    '--heading-color': color,
  };

  return (
    <Tag
      style={inlineStyles}
      className={clsx(styles.title, className, {
        [styles.withUnderline]: underline,
      })}
    >
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  top: PropTypes.number,
  bottom: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  underline: PropTypes.bool,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
};
