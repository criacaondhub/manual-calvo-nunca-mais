import styles from './ProgressIndicator.module.css'

export default function ProgressIndicator({ current, total }) {
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className={styles.indicator}>
      <span className={styles.current}>{pad(current + 1)}</span>
      <span className={styles.separator}>/</span>
      <span className={styles.total}>{pad(total)}</span>
    </div>
  )
}
