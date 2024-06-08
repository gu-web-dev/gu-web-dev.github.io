import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/NavigationMenu";
import { motion } from "framer-motion";

const navItems: { name: string; href: string }[] = [
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Team", href: "/#team" },
];
const Navbar = () => {
  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
    >
      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="space-x-10">
            {navItems.map((item) => (
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:opacity-80 transition opacity duraction-200 ease-in-out"
                  href={item.href}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
};

export default Navbar;
