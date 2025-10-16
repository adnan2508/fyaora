"use client";
import { ServiceProvider } from "@/types";
import { Edit } from "lucide-react";

interface Props {
  provider: ServiceProvider;
  selected: boolean;
  onSelect: (checked: boolean) => void;
  onEdit: (provider: ServiceProvider) => void;
  isEvenRow: boolean;
}

export default function TableRow({ provider, selected, onSelect, onEdit, isEvenRow }: Props) {
  return (
    <tr className={`hover:bg-gray-50 ${isEvenRow ? 'bg-[#EAEEF3]' : 'bg-white'}`}>
      <td className="p-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
          className="w-4 h-4 accent-blue-500"
        />
      </td>
      <td className="p-3 font-medium">{provider.email}</td>
      <td className="p-3">{provider.phoneNumber}</td>
      <td className="p-3">{provider.postcode}</td>
      <td className="p-3">
        {/*<span
          className={`px-2 py-1 text-xs rounded-full ${
            provider.registrationStatus === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {provider.registrationStatus}
        </span>*/}
        {provider.vendorType}
      </td>
      <td className="p-3">{provider.serviceOffering}</td>
      <td className="p-3">{provider.createdAt}</td>
      <td className="p-3">{provider.status}</td>
      <td className="p-3">
        <button
          onClick={() => onEdit(provider)}
          className="text-black hover:underline"
        >
          <Edit size={16} />
        </button>
      </td>
    </tr>
  );
}
