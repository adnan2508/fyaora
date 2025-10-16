"use client";
import { useState } from "react";
import { Calendar } from "lucide-react";

export default function SidebarFilters() {
  const [filters, setFilters] = useState({
    postcode: "",
    onboarded: false,
    rejected: false,
    startDate: "",
    endDate: "",
    vendorIndependent: false,
    vendorCompany: false,
    housekeeping: false,
    windowCleaning: false,
    carValet: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleFilter = () => {
    console.log("Applied Filters:", filters);
  };

  const handleClear = () => {
    setFilters({
      postcode: "",
      onboarded: false,
      rejected: false,
      startDate: "",
      endDate: "",
      vendorIndependent: false,
      vendorCompany: false,
      housekeeping: false,
      windowCleaning: false,
      carValet: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Postcode */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Postcode
        </label>
        <input
          type="text"
          placeholder="ZIP"
          value={filters.postcode}
          onChange={(e) => handleChange("postcode", e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Registration Status */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Registration Status
        </h4>
        <div className="space-y-2">
          {["Onboarded", "Rejected"].map((label) => (
            <label key={label} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={
                  label === "Onboarded"
                    ? filters.onboarded
                    : filters.rejected
                }
                onChange={(e) =>
                  handleChange(
                    label === "Onboarded" ? "onboarded" : "rejected",
                    e.target.checked
                  )
                }
                className="w-4 h-4 accent-blue-500"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Registered */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Date Registered
        </h4>
        <div className="flex items-center gap-1">
          {/* Start Date */}
          <div className="relative flex-1 min-w-0">
            <label className="absolute -top-2 left-1 bg-[#F4F7F9] px-1 text-xs text-gray-500 z-10">
              Date
            </label>
            <input
              type="date"
              placeholder="Start"
              value={filters.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              className="w-full border border-blue-500 rounded-md p-1.5 text-xs pl-6 focus:outline-none"
            />
            <Calendar
              className="absolute left-1 top-2 text-gray-500"
              size={12}
            />
          </div>

          {/* End Date */}
          <div className="relative flex-1 min-w-0">
            <label className="absolute -top-2 left-1 bg-[#F4F7F9] px-1 text-xs text-gray-500 z-10">
              Date
            </label>
            <input
              type="date"
              placeholder="End"
              value={filters.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
              className="w-full border border-blue-500 rounded-md p-1.5 text-xs pl-6 focus:outline-none"
            />
            <Calendar
              className="absolute left-1 top-2 text-gray-500"
              size={12}
            />
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>MM/DD/YYYY</span>
          <span>MM/DD/YYYY</span>
        </div>
      </div>

      {/* Vendor Type */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Vendor Type
        </h4>
        <div className="space-y-2">
          {["Independent", "Company"].map((label) => (
            <label key={label} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={
                  label === "Independent"
                    ? filters.vendorIndependent
                    : filters.vendorCompany
                }
                onChange={(e) =>
                  handleChange(
                    label === "Independent"
                      ? "vendorIndependent"
                      : "vendorCompany",
                    e.target.checked
                  )
                }
                className="w-4 h-4 accent-blue-500"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Service Offering */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Service Offering
        </h4>
        <div className="space-y-2">
          {["Housekeeping", "Window Cleaning", "Car Valet"].map((label) => (
            <label key={label} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters[label.replace(" ", "").toLowerCase() as keyof typeof filters] as boolean}
                onChange={(e) =>
                  handleChange(
                    label.replace(" ", "").toLowerCase(),
                    e.target.checked
                  )
                }
                className="w-4 h-4 accent-blue-500"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-centerspace-y-3">
        <button
          onClick={handleFilter}
          className="rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 transition shadow-3xl"
        >
          Filter
        </button>
       
      </div>
    </div>
  );
}
