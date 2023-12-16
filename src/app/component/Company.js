"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchCompanies } from '../redux/slice';
import ReactPaginate from 'react-paginate';

const Company = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isFilterVisible, setFilterVisibility] = useState(false);

  const { companies, status, error, currentPage, lastPage, totalEntries, nextPageUrl, prevPageUrl } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const filteredCompanies = companies.filter((company) => {
    const nameMatches = company.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatches = statusFilter === '' || company.company_status === statusFilter;
    return nameMatches && statusMatches;
  });

  return (
    <div className="container mx-auto my-8 rounded p-4 bg-white shadow">
      <div className="mb-4 flex items-center justify-end">
        <button
          className="px-4 py-2 border rounded mr-4"
          onClick={() => setFilterVisibility(!isFilterVisible)}
        >
          {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
        </button>
        {isFilterVisible && (
          <>
            <label className="mr-2">Company Name:</label>
            <input
              type="text"
              name="company_name"
              className="p-2 border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <label className="ml-4 mr-2">Status:</label>
            <select
              name="company_status"
              className="p-2 border border-gray-300"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="1">In Progress</option>
              <option value="2">Done</option>
            </select>
          </>
        )}
      </div>

      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Company Name</th>
            <th className="p-3 text-left">Company Phone</th>
            <th className="p-3 text-left">Address 1</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, index) => (
              <tr key={company.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b`}>
                <td className="p-3">{company.company_name}</td>
                <td className="p-3">{company.company_phone}</td>
                <td className="p-3">{company.city}</td>
                <td className="p-3">{company.address1}</td>
                <td className="p-3">
                  {company.company_status === '1' ? 'In Progress' : 'Done'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-end">
        <ReactPaginate
          pageCount={Math.ceil(filteredCompanies.length / 5)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          containerClassName="pagination flex space-x-2"
          previousLabel="Prev"
          nextLabel="Next"
          activeClassName="border text-black p-5 rounded"
          disabledClassName="text-gray-300 cursor-not-allowed"
          previousClassName="px-2 py-4 border rounded"
          nextClassName="px-2 py-4 border rounded"
        />
      </div>
    </div>
  );
};

export default Company;
