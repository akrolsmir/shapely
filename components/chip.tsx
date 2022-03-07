export function Chip(props: { text: string }) {
    return (
      <div className="m-2 p-1 rounded-xl text-sm bg-teal-700 text-white">
        {props.text}
      </div>
    );
  }
  