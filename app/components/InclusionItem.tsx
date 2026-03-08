interface InclusionItemProps {
    item: string;
  }
  
  const InclusionItem: React.FC<InclusionItemProps> = ({ item }) => {
    return (
      <div className="relative pl-6">
        <div className="qi-bar absolute left-0 top-0 h-full w-1 bg-shock-pink origin-top" />
        <p className="qi-text text-xl font-medium text-white">{item}</p>
      </div>
    );
  };
  
  export default InclusionItem;
  