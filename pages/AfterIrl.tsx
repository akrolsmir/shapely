import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'
import { ChipFeedback } from "../components/chip-feedback";

export default function  AfterIrl ()  {
    let answered = true;
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h3 className="text-lg bg-slate-200 w-full">How was your date with Name?</h3>

      <div>badge icons</div>
      <div> other misc feedback</div>


        <ChipFeedback size="large"></ChipFeedback>
    </div>
    </BasePage>
  )
}
