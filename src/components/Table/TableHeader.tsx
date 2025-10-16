"use client";
import { ArrowUpDown } from "lucide-react";

interface Props {
  onSort: (field: string) => void;
  onSelectAll: (checked: boolean) => void;
  isAllSelected: boolean;
  isIndeterminate: boolean;
}

export default function TableHeader({ onSort, onSelectAll, isAllSelected, isIndeterminate }: Props) {
  const headers = [
    { label: "Email", field: "email" },
    { label: "Phone Number", field: "phoneNumber" },
    { label: "Postcode", field: "postcode" },
    { label: "Vendor Type", field: "vendorType" },
    { label: "Service Offering", field: "serviceOffering" },
    { label: "Signup Date", field: "createdAt" },
    { label: "Status", field: "registrationStatus" },
    { label: "Actions", field: "actions" },
  ];

  return (
    <thead className="bg-gray-100 text-gray-700 ">
      <tr>
        <th className="p-3">
          <input 
            type="checkbox" 
            checked={isAllSelected}
            ref={(input) => {
              if (input) input.indeterminate = isIndeterminate;
            }}
            onChange={(e) => onSelectAll(e.target.checked)}
            className="w-4 h-4 accent-blue-500"
          />
        </th>
        {headers.map((header) => (
          <th
            key={header.label}
            className="p-3 text-left cursor-pointer select-none"
            onClick={() => header.field && onSort(header.field)}
          >
            <div className="flex items-center gap-1">
              {header.label}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
