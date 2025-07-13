'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import {Button} from "@/shared/ui/button";
import {Menu} from "lucide-react";
import {usePathname} from "next/navigation";
import {Switch} from "@/shared/ui/switch";
import {Label} from "@/shared/ui/label";
import {useTheme} from "next-themes";
const TheHeader = () => {

    const [links, setLinks] = useState<Array<{
        text: string,
        href: string,
    }>>([
        {
            text: 'About us',
            href: '/about',
        },
        {
            text: 'Our products',
            href: '/',
        }
    ]);

    const path = usePathname()
    const theme = useTheme()

    return (
        <header>
            <div className='flex gap-2 justify-between p-3 container items-center mx-auto'>
                <span className='font-bold'>LOGO</span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='cursor-pointer'>
                        <Button variant="outline"><Menu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align='end'>
                        <DropdownMenuLabel>Menu</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {links.map((link)=>{
                            return (
                                <DropdownMenuItem
                                    key={link.href}
                                    disabled={path === link.href}
                                    className={'p-0'}
                                >
                                    <Link className='hover:opacity-80 w-full p-2' href={link.href}>{link.text}</Link>
                                </DropdownMenuItem>
                            )
                        })}
                        <div className="flex items-center space-x-2 p-2">
                            <Switch className='cursor-pointer' defaultChecked={theme.resolvedTheme === 'dark'} id="dark-mode" onCheckedChange={(value)=>{theme.setTheme(value ? 'dark' : 'light')}} />
                            <Label className='cursor-pointer' htmlFor="dark-mode">Dark mode</Label>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default TheHeader;