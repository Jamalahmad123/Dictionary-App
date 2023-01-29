const LayoutContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-6 xl:max-w-3xl space-y-14">
      {children}
    </div>
  );
};

export default LayoutContainer;
