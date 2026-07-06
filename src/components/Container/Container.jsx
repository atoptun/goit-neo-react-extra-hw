import styled from './Container.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Container({ children }) {
  return <div className={styled.container}>{children}</div>;
}
