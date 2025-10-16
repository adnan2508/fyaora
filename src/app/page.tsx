"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import ServiceTable from "@/components/Table/ServiceTable";
import MobileMenuButton from "@/components/MobileMenuButton";
import UserDetailsModal from "@/components/UserDetailsModal";
import { providers } from "@/lib/data";
import { ServiceProvider } from "@/types";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<ServiceProvider | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (provider: ServiceProvider) => {
    setSelectedUser(provider);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Filter providers based on search query
  const filteredProviders = useMemo(() => {
    if (!searchQuery.trim()) {
      return providers;
    }
    
    const query = searchQuery.toLowerCase();
    return providers.filter(provider => 
      provider.email.toLowerCase().includes(query) ||
      provider.phoneNumber.toLowerCase().includes(query) ||
      provider.postcode.toLowerCase().includes(query) ||
      provider.vendorType.toLowerCase().includes(query) ||
      provider.serviceOffering.toLowerCase().includes(query) ||
      provider.status.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header with mobile menu button */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
          <MobileMenuButton />
          <h1 className="text-xl font-semibold">Waitlist</h1>
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
                <div>service providers</div>
                <div>service providers</div>
            </div>
            <input type="text" />
        </div>
          <div></div> {/* Spacer for center alignment */}
           
        </header>
        
        {/* Main content */}
        <div className="flex-1 p-4 lg:p-6">
          <h1 className="hidden lg:block text-[#12153A] text-2xl font-semibold mb-4">Waitlist</h1>
          
          {/* Service providers, customers and search */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-6">
              <div className="text-sm font-medium text-gray-700 bg-[#C8D5D9] px-4 py-2 rounded-lg">Service Providers</div>
              <div className="text-sm font-medium text-gray-700 px-4 py-2 rounded-lg border border-[#807664]">Customers</div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search User"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
              />
              <Search 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18} 
              />
            </div>
          </div>
          
          <ServiceTable data={filteredProviders} onEditUser={handleEditUser} />
        </div>
      </div>
      
      {/* User Details Modal */}
      <UserDetailsModal
        provider={selectedUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
