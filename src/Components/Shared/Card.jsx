export default function Card({ icon, title, content, children, className = '', style = {}, onClick }) {
  return (
    <div className={className} style={style} onClick={onClick}>
      {icon}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
}
