type Props = {
  children?: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <div className="section-beige grid p-16 mt-8 border rounded-3xl shadow-sm">{children}</div>;
};

export default Section;