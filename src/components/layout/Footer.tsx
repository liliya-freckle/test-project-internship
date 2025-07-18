import React from 'react'
import  Link  from "next/link"

import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <div>
        
            <Button asChild>
            <Link href="/login">Login</Link>
            </Button>
        </div>
    )
}

export default Footer