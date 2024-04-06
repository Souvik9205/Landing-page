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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
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
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium">
              Products
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium">
              Solutions
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium">
              Careers
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium">
              Case Studies
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium">
              About Us
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="underline-animation">
            <p className="text-base cursor-pointer text-gray-900 font-medium ">
              Contact Us
            </p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              <p className="underline-animation">{item.label}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
