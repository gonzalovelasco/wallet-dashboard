import React, { useState } from "react";
import { type WalletDto } from "common";

interface WalletListInterface {
  wallets: WalletDto[]; // An array of wallet objects
}
export default function WalletList({
  wallets,
}: WalletListInterface): JSX.Element {
  const [favoriteWallets, setFavoriteWallets] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("createdAt"); // Default sorting by createdAt

  const toggleFavorite = (walletId: number): void => {
    if (favoriteWallets.includes(walletId)) {
      setFavoriteWallets(favoriteWallets.filter((id) => id !== walletId));
    } else {
      setFavoriteWallets([...favoriteWallets, walletId]);
    }
  };

  // Sort wallets based on the selected sorting criteria
  const sortedWallets = wallets.slice().sort((a, b) => {
    if (sortBy === "createdAt") {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return dateA.getTime() - dateB.getTime();
    } else if (sortBy === "favorites") {
      const isAFavorite = favoriteWallets.includes(a.id);
      const isBFavorite = favoriteWallets.includes(b.id);
      if (isAFavorite && !isBFavorite) return -1;
      if (!isAFavorite && isBFavorite) return 1;
      return 0;
    }
    return 0;
  });

  return (
    <div>
      <label className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        Sort by:
        <select
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          value={sortBy}
        >
          <option value="createdAt">Created At</option>
          <option value="favorites">Favorites</option>
        </select>
      </label>
      <ul className="divide-y divide-gray-100">
        {sortedWallets.map((wallet) => (
          <li className="flex justify-between gap-x-6 py-5" key={wallet.id}>
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {wallet.address}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  toggleFavorite(wallet.id);
                }}
              >
                {favoriteWallets.includes(wallet.id)
                  ? "Unfavorite"
                  : "Favorite"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
