import React from "react"

interface Propa{
children:React.ReactNode
className?:string


}


const Container = ({children,className}:Propa) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 px-4 xl:px-0 ${className}`}>{children}</div>
  )
}

export default Container 