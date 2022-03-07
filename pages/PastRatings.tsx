import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'
import { CheckIcon } from '@heroicons/react/outline'

export default function  PastRatings ()  {
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h3 className="text-lg">Past Ratings:</h3>
      <div className="flex flex-row flex-wrap mt-6">
        <div className="m-2 w-1/3 bg-white shadow">Name photo info badges</div>
        <div className="m-2 w-1/3 bg-white shadow">Name photo info badges</div>
      </div>

        
    </div>
    </BasePage>
  )
}
