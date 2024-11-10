import Image from "next/image";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
}

function ServiceCard({ service }: Props) {
  return (
    <div>
      <div className="shadow-2xl p-6 rounded-lg bg-gray-600 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
        <Image
          src={service.icon}
          alt={service.title}
          height={50}
          width={50}
        />
        <h1 className="text-[17px] mt-4 font-bold text-gray-200">{service.title}</h1>
        <p className="mt-3 text-sm text-white opacity-70">{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard