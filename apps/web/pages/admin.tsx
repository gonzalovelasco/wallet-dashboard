import React, { useState } from "react";
import { useRouter } from "next/router";
import AddAddressForm from "../src/components/admin/add-address-form";
import { useAddWalletAddressMutation } from "../src/store/services/api";

export default function AdminPage(): JSX.Element {
  const [addWalletAddress] = useAddWalletAddressMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onsubmit = async (address: string): Promise<void> => {
    try {
      await addWalletAddress({ address }).unwrap();
      router.back();
    } catch (error) {
      const errorMessageS =
        (error as { data?: { message?: string } }).data?.message ||
        "Error adding wallet address";

      setErrorMessage(errorMessageS);
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <h1 className="text-base font-semibold leading-7 text-gray-900">
        Admin Page
      </h1>
      <AddAddressForm
        onSubmit={(address) => {
          void onsubmit(address);
        }}
      />
      {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
    </div>
  );
}
