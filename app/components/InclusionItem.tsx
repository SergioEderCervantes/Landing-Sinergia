interface InclusionItemProps {
    item: string;
  }
  
  const InclusionItem: React.FC<InclusionItemProps> = ({ item }) => {
    return (
      <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-shock-pink before:content-['']">
        <p className="text-xl font-medium text-white">{item}</p>
      </div>
    );
  };
  
  export default InclusionItem;
  