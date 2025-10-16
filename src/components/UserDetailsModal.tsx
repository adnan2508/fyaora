"use client";
import { ServiceProvider } from "@/types";
import { X } from "lucide-react";

interface Props {
  provider: ServiceProvider | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UserDetailsModal({ provider, isOpen, onClose }: Props) {
  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.phoneNumber}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postcode
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.postcode}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registration Status
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              <span className={`px-2 py-1 text-xs rounded-full ${
                provider.registrationStatus === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {provider.registrationStatus}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Type
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.vendorType}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Offering
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.serviceOffering}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Signup Date
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              {provider.createdAt}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
              <span className={`px-2 py-1 text-xs rounded-full ${
                provider.status === "Onboarded"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-orange-100 text-orange-700"
              }`}>
                {provider.status}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              // Handle edit action here
              console.log("Edit user:", provider);
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
}