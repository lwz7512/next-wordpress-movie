export default function Container({ children, className }) {
  return (
    <div className={`mx-auto px-0 ${className}`}>
      {children}
    </div>
  )
}
