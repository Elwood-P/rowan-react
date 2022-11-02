const PageHeader = ({ title, children }) => {
  return (
    <header className="flex flex-col items-center space-y-6 | my-fl-400">
      <h1 className="font-serif font-normal text-800">{title}</h1>
      {children}
    </header>
  );
};

export default PageHeader;
