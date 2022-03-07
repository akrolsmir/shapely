import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'
import { CheckIcon, CalendarIcon, XIcon } from '@heroicons/react/outline'

export default function  MatchScreen ()  {
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h2 className="text-2xl ">They want to see you too!</h2>

      {/* NOTE: location should probably just be a coffee shop within reasonable distance from both of their
          locations, with some randomization for safety */}
      {/* NOTE: we should maybe make people enter select the dates/times they're available when they say
          they want to see the person again */}
      <div className="m-8 mt-16 bg-orange-200 self-center w-60  shadow"><div>Location</div><div>Date</div><div>Time</div></div>
      <button className="bg-lime-600 p-4 text-white text-lg mt-16 rounded-full">
        <CheckIcon className="h-8 inline-block" aria-hidden="true" />
         Confirm
      </button>
      <button className="text-slate-600"> <CalendarIcon className="text-slate-600 inline-block h-4" aria-hidden="true" /> Add to Google calendar</button>
      <button className="text-slate-600"> <CalendarIcon className="text-slate-600 inline-block h-4" aria-hidden="true" /> Remind me an hour before</button>
        
      <button className="bg-gray-200 p-4 mt-16 rounded-sm">
        <XIcon className="h-4 inline-block" aria-hidden="true" />
        I changed my mind
      </button>
    </div>
    </BasePage>
  )
}
