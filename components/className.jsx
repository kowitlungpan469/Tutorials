// Class to ClassName
export default function Class({ class: classProp, ...props }) {
  return <div className={classProp} {...props} />;
}
