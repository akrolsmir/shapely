import type { NextPage } from "next"
import Head from "next/head"
import BasePage from '../components/base-page'

export default function  NextDate ()  {
  return (
    <BasePage>
    <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
      <h3 className="text-lg">Next Date:</h3>
      <h1 className="text-4xl m-3">Name</h1>
      <div className="m-8 self-center w-60 bg-white shadow"><div>Date</div><div>Time</div></div>
      <button className="bg-lime-600 w-32 h-8 rounded-lg">check mark</button>
    </div>
    </BasePage>
  )
}
