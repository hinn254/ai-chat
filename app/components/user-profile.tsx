import Image from "next/image";

export default function UserProfile() {
  return (
    <li className="-mx-6 mt-auto">
      <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
        <Image
          src={`https://ui-avatars.com/api/?name=Benny+Otieno`}
          alt="Benny Otieno"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="sr-only">Benny Otieno profile</span>
        <span aria-hidden="true">Benny Otieno</span>
      </div>
    </li>
  );
}
