export function Badge(props: { icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="m-1 p-1text-sm text-white h-55 w-1/5 shrink-0">
      <div className="p-1 bg-red-700 w-full h-16">
          {props.icon}
        {props.children}
        </div>
        <div className="w-full" style={{
  borderLeft: "20px solid transparent",
  borderRight: "20px solid transparent",
  borderTop: "20px solid rgb(185 28 28)",
  marginTop: "-1px"}}></div>
        
      </div>
    );
  }
  