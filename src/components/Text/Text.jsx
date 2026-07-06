import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Text.module.css';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string | string[]} [props.className]
 * @param {number} [props.top]
 * @param {number} [props.bottom]
 * @param {number} [props.left]
 * @param {number} [props.right]
 * @param {string} [props.color]
 * @param {'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'} [props.align='start']
 * @param {'p' | 'span' | 'div' | 'li' | 'b' | 'strong' | 'i' | 'em' | 'label' | 'time'} [props.tag='p']
 */
export default function Text({
  children,
  className,
  top,
  bottom,
  left,
  right,
  color,
  align = 'start',
  tag: Tag = 'p',
}) {
  const inlineStyles = {
    '--text-align': align,
    '--text-color': color,

    '--text-margin-top': top ? `${top}px` : undefined,
    '--text-margin-bottom': bottom ? `${bottom}px` : undefined,
    '--text-padding-left': left ? `${left}px` : undefined,
    '--text-padding-right': right ? `${right}px` : undefined,
  };

  return (
    <Tag style={inlineStyles} className={clsx(styles.text, className)}>
      {children}
    </Tag>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf([
    'start',
    'end',
    'left',
    'right',
    'center',
    'justify',
    'match-parent',
  ]),
  tag: PropTypes.oneOf([
    'p',
    'span',
    'div',
    'li',
    'b',
    'strong',
    'i',
    'em',
    'label',
    'time',
  ]),
};
