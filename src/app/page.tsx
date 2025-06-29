'use client'
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useState } from "react";


const Page = () => {
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(0);
  console.log("rendering count...")
  const handleSetCount=()=>{
    setCount(count+1);
    console.log("setcount rendering..."+count);
    setCount1(count1+1);
    console.log("setcount1 rendering..."+count1);
  }
  return <div>
    <Button onClick={handleSetCount} >+</Button>
 
  </div>;
};

export default Page;