import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/Header";
import Link from "next/link";
import Input from "@/components/form/Input";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>DietFuelAppp</title>
        <link rel="icon" href="/favicon.ico" />
        <Link rel="preconnect" href="https:fonts.googleapis.com" />
        <Link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="true" />

      </Head>
    
      <Home/>
     
    </div>
  );
}