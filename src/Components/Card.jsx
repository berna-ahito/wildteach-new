



export default function Card({ icon,title, content, children, className = '', style = {} }) {
  return (
    <div className={className} style={style}>
      {icon}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
}
