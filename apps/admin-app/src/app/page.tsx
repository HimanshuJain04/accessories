import Image from "next/image";
import { Input } from "ui";
import { Hello } from "utils";
import { Admin } from "admin-app-ui";

export default function Home() {
  return (
   <div className="text-white">
      Admin-main-app
      <Input/>
      <Admin/>
   </div>
  );
}
