interface NavDataType {
  name: string;
  path: string;
  iconName: string;
}

const NavData: NavDataType[] = [
  { name: "Home", path: "#home", iconName: "name" },
  { name: "About", path: "#about", iconName: "name" },
  { name: "Projects", path: "#projects", iconName: "name" },
  { name: "Contact", path: "#contact", iconName: "name" },
];

export default NavData;
