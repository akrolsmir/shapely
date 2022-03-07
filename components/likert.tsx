export function Likert(props: { question: string }) {
  return (
    <div>
      {props.question}
      <div className="flex flex-row">
        <div className="w-1/3">
          <button className="p-4 m-4 text-lg bg-red-200">1</button>
        </div>
        <div className="w-1/3">
          <button className="p-4 m-4 text-lg bg-red-200">2</button>
        </div>
        <div className="w-1/3">
          <button className="p-4 m-4 text-lg bg-red-200">3</button>
        </div>
      </div>
    </div>
  );
}
