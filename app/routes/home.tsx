import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export const loader = () => {
  console.log('loder called!')
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  console.log('home called!')
  return <Welcome />;
}
