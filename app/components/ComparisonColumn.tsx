interface ComparisonColumnProps {
    title: string;
    items: string[];
    titleClassName: string;
    listClassName: string;
    wrapperClassName?: string;
  }
  
  const ComparisonColumn: React.FC<ComparisonColumnProps> = ({
    title,
    items,
    titleClassName,
    listClassName,
    wrapperClassName,
  }) => {
    return (
      <div className={wrapperClassName}>
        <h3 className={`mb-8 text-3xl font-bold uppercase tracking-wide ${titleClassName}`}>
          {title}
        </h3>
        <ul className={`space-y-4 text-lg ${listClassName}`}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ComparisonColumn;
  