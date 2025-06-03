type Props = {
  children?: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <div className="section-beige grid mt-8 border rounded-3xl shadow-sm p-8 xl:p-16 ">{children}</div>;
};

export default Section;