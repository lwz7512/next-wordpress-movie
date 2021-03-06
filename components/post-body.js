import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto my-28">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
