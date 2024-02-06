'use client';

import React, { useState, FormEvent } from 'react';
import { useContractWrite, useAccount } from 'wagmi';
import abi from '@/contracts/stTBY_MockERC20.json';
import { Input, ConnectButtomCustom } from '@/components';

const contractAddress: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

const MintToken: React.FC = () => {
  const [hash, setHash] = useState<string>('');
  const { isConnected } = useAccount();

  const { write, data, isLoading, isSuccess, error } = useContractWrite({
    address: contractAddress as `0x${string}`,
    abi,
    functionName: 'mint',
    onMutate(data) {
      console.log('Mutating:', data);
    },
    onSuccess(data) {
      setHash(data.hash);
      console.log('Transaction hash:', data.hash);
    },
    onError(error) {
      console.error('Transaction failed:', error);
    },
  });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const toAddress = formData.get('toAddress') as string;
    const amount = formData.get('amount') as string;

    write({
      args: [toAddress, amount],
    });
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-white font-poppins font-semibold ss:text-[42px] text-[52px] ss:leading-[100.8px] leading-[75px] mb-0">
        Mint Token
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
        Mint Account
      </p>

      {isConnected ? (
        <form
          onSubmit={submit}
          className="w-full max-w-md flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col w-full">
            <label className="text-white font-poppins mb-2">
              Recipient Address
            </label>
            <Input name="toAddress" placeholder="e.g., 0x123..." />
            <p className="text-dimWhite font-poppins text-[14px] mt-2">
              Enter the address of the recipient.
            </p>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-white font-poppins mb-2">Amount</label>
            <Input name="amount" placeholder="e.g., 10000" />
            <p className="text-dimWhite font-poppins text-[14px] mt-2">
              Enter a valid amount.
            </p>
          </div>

          <button className="w-[200px] h-[50px] bg-gradient-to-r from-[#FFA5A5] to-[#FF3D3D] rounded-[10px] text-white font-poppins font-semibold text-[18px]">
            Mint
          </button>
        </form>
      ) : (
        <>
          <p className="text-white font-poppins font-semibold text-[18px]">
            Please connect your wallet to mint tokens.
          </p>
          <ConnectButtomCustom />
        </>
      )}
      {isLoading && (
        <div className="text-blue-500 font-poppins font-semibold text-[18px]">
          Processing transaction...
        </div>
      )}
      {error && (
        <div className="text-red-500 font-poppins font-semibold text-[18px]">
          Error: {error.message}
        </div>
      )}
      {isSuccess && hash && isConnected && (
        <div className="text-green-500 font-poppins font-semibold text-[18px]">
          Transaction Hash:{' '}
          <span className="text-green-500 break-all">{hash}</span>
        </div>
      )}
    </div>
  );
};

export default MintToken;
