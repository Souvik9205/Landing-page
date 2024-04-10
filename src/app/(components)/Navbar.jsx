"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./(navbar component)/Logo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="justify-between sm:p-5 p-1 sm:px-16 px-8"
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link color="foreground" href="/" className="cursor-pointer">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-5" justify="center">
        {menuItems.map((menuItem, index) => (
          <NavbarItem key={index}>
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
            >
              <Link
                color="foreground"
                href={menuItem.href}
                className={`${
                  menuItem.href === path ? "underlined" : "underline-animation"
                }`}
              >
                <p className="text-base cursor-pointer text-gray-900 font-medium">
                  {menuItem.label}
                </p>
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="p-20">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
            >
              <Link
                color="foreground"
                className={`${
                  item.href === path
                    ? "underlined text-medium"
                    : "underline-animation"
                } w-full`}
                href={item.href}
                size="lg"
              >
                <p className="text-base cursor-pointer text-gray-900 font-medium">
                  {item.label}
                </p>
              </Link>
            </motion.div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
