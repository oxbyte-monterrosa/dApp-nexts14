'use client';

import React, { FC } from 'react';
import DocumentationTabs from './DocumentationTabs';
import { layout } from "@/CustomStyles";

const SmartContract: FC = () => {
  return (
    <section id="product" className={layout.section}>
      <div className="container max-w-7xl mx-auto mt-6">
        <div className="flex flex-col items-center gap-6">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mb-0">
            Engage with Our Smart Contracts
          </h1>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
            Are you a developer? Let's connect!
          </p>
          <DocumentationTabs />
        </div>
      </div>
    </section>
  );
};

export default SmartContract;
