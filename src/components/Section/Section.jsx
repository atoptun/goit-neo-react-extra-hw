import style from './Section.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Section({ children }) {
  return <section className={style.section}>{children}</section>;
}
