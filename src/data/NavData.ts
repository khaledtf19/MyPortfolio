interface NavDataType {
  name: string;
  path: string;
  iconName: string;
}

const NavData: NavDataType[] = [
  { name: "Home", path: "/", iconName: "name" },
  { name: "Skills", path: "/skills", iconName: "name" },
  { name: "Projects", path: "/projects", iconName: "name" },
  { name: "Contact", path: "#contact", iconName: "name" },
];

export default NavData;
