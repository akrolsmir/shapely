import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'
import { ChipFeedback } from "../components/chip-feedback";
import { Badge } from "../components/badge";
import { SparklesIcon, BanIcon, ExclamationIcon, FireIcon, LightningBoltIcon, AnnotationIcon } from '@heroicons/react/outline'

export default function  AfterIrl ()  {
    let answered = true;
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h3 className="text-lg bg-slate-200 w-full">How was your date with Name?</h3>

      <div className="flex flex-row">
          <Badge><ExclamationIcon className="h-6"/> Comically bad date</Badge>
          <Badge><BanIcon className="h-6"/> Liar</Badge>
          <Badge><SparklesIcon className="h-6"/> Amazing match!!</Badge>
          <Badge><LightningBoltIcon className="h-6"/> Great &amp; Terrible</Badge>
          <Badge><FireIcon className="h-6"/> Super attractive</Badge>
      </div>
      <div> other misc feedback</div>


        <ChipFeedback size="large"></ChipFeedback>
    </div>
    </BasePage>
  )
}
