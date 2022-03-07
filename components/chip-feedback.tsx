import { Chip } from "../components/chip";

export function ChipFeedback(props: { size: string }) {
    return (
      <div className="mt-16">
      <div className="text-left " >What did we do well?</div>
      <input className="h-8 w-full border border-slate-400"/>
    <div className="flex flex-row">
        <Chip text="Funny"></Chip>
        <Chip text="Interesting"></Chip>
        <Chip text="Outgoing"></Chip>
    </div>

    <div className="text-left ">What would you want to change for the next date?</div>
      <input className="h-8 w-full border border-slate-400"/>
    <div className="flex flex-row">
        <Chip text="More Funny"></Chip>
        <Chip text="Less Funny"></Chip>
        <Chip text="More Introverted"></Chip>
        <Chip text="More Extroverted"></Chip>
    </div>
      </div>
    );
  }
  