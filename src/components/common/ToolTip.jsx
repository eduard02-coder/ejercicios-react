const ToolTip = ({ message }) => {
  // Note: The <> fragment wrapper isn't needed when returning a single div
  return (
    <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 rounded text-xs whitespace-nowrap text-white bg-gray-700 shadow-md transition-colors">
      {message}

      {/* Small triangle arrow pointing down */}
      <div className="absolute top-full left-3 w-0 h-0 border-[5px] border-transparent border-t-gray-700" />
    </div>
  );
};

export default ToolTip;
