import { iCustomIcon } from "./CustomIcon.props";

export function CustomIcon(props: iCustomIcon) {
  const { icon: Icon } = props;
  return (
    <div className="p-2 bg-slate-400/20 rounded-lg">
      <Icon className="w-4 h-4" strokeWidth={1} />
    </div>
  );
}
