interface QualificationColumnProps {
    title: string;
    items: string[];
    titleClassName: string;
    itemClassName: string;
  }
  
  const QualificationColumn: React.FC<QualificationColumnProps> = ({
    title,
    items,
    titleClassName,
    itemClassName,
  }) => {
    return (
      <div>
        <h3 className={`mb-8 text-2xl font-bold ${titleClassName}`}>
          {title}
        </h3>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index} className={`text-xl ${itemClassName}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default QualificationColumn;
  