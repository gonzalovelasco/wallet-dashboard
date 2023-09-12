import React, { useState } from "react";

interface AddAddressFormProps {
  onSubmit: (address: string) => void;
}
export default function AddAddressForm({
  onSubmit,
}: AddAddressFormProps): JSX.Element {
  const [address, setAddress] = useState("");
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit(address);
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="first-name"
              >
                New Address
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Enter wallet address"
                  type="text"
                  value={address}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
