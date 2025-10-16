"use client";

import { ServiceProvider } from "@/types";
import { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

interface Props {
  data: ServiceProvider[];
  onEditUser: (provider: ServiceProvider) => void;
}

export default function ServiceTable({ data, onEditUser }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const itemsPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = useMemo(() => data.slice(startIndex, endIndex), [data, startIndex, endIndex]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(currentData.map(provider => provider.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };

  const isAllSelected = currentData.length > 0 && currentData.every(provider => selectedIds.includes(provider.id));
  const isIndeterminate = selectedIds.length > 0 && !isAllSelected;

  return (
    <div className="w-full">
      {/* Scroll hint for mobile */}
      <div className="block sm:hidden text-xs text-gray-500 mb-2 text-center">
        ← Swipe to scroll →
      </div>
      
      {/* Selection indicator */}
      {selectedIds.length > 0 && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <span className="text-sm text-blue-700 font-medium">
            {selectedIds.length} row{selectedIds.length !== 1 ? 's' : ''} selected
          </span>
          <button 
            onClick={() => setSelectedIds([])}
            className="ml-3 text-xs text-blue-600 hover:text-blue-800 underline"
          >
            Clear selection
          </button>
        </div>
      )}
      
      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <table className="min-w-full text-sm">
            <TableHeader 
              onSort={() => {}} 
              onSelectAll={handleSelectAll}
              isAllSelected={isAllSelected}
              isIndeterminate={isIndeterminate}
            />
            <tbody>
              {currentData.map((provider, index) => (
                <TableRow
                  key={provider.id}
                  provider={provider}
                  selected={selectedIds.includes(provider.id)}
                  onSelect={(checked) => handleSelectRow(provider.id, checked)}
                  onEdit={() => onEditUser(provider)}
                  isEvenRow={index % 2 === 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination - separate div on the left */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      
      {/* Additional mobile optimization */}
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 6px;
        }
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background-color: #f3f4f6;
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        
        /* Better touch scrolling on mobile */
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        
        /* Ensure table doesn't break on very small screens */
        @media (max-width: 640px) {
          table {
            min-width: 800px; /* Ensure table maintains readability */
          }
        }
      `}</style>
    </div>
  );
}
