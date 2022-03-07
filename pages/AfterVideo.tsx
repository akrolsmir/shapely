import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'
import { ChipFeedback } from "../components/chip-feedback";

export default function  AfterVideo ()  {
    let answered = true;
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h3 className="text-lg">Do you want to see</h3>
      <h1 className="text-4xl m-3">Name</h1>
      <h3 className="text-lg">again?</h3>



      { !answered ? (
          <div>
            <button className="bg-lime-600 w-32 h-8 rounded-lg">YES!</button>
            <button className="bg-lime-600 w-32 h-8 rounded-lg">No</button>
        </div>
      ) : (
        <ChipFeedback size="small"></ChipFeedback>
      )}
    </div>
    </BasePage>
  )
}
