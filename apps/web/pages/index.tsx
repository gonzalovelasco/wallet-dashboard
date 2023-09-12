import { useEffect } from "react";
import Link from "next/link";
import {
  useGetWalletAddressesQuery,
  useGetUserQuery,
} from "../src/store/services/api";
import WalletList from "../src/components/user/wallet-list";
import UserInfo from "../src/components/user/user-info";

export default function Web(): JSX.Element {
  const {
    data: walletAddresses = [],
    isError,
    isLoading,
    refetch,
  } = useGetWalletAddressesQuery();

  const { data: userData } = useGetUserQuery();

  useEffect(() => {
    void refetch();
  }, [refetch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error loading wallet addresses</p>;
  } else {
    content = (
      <>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Addresses
        </h2>
        <WalletList wallets={walletAddresses} />
      </>
    );
  }

  return (
    <div className="bg-white">
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Wallet dashboard
            </h2>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              className="text-sm font-semibold leading-6 text-gray-900"
              href="/admin"
            >
              Admin
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {userData ? <UserInfo user={userData} /> : null}
          </div>
        </nav>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">{content}</div>
    </div>
  );
}
