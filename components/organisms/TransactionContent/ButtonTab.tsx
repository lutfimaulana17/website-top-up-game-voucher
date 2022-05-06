import cx from "classnames";
interface ButtonTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}
export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, onClick } = props;
  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
}
