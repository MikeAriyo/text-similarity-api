"use client";
import { FC } from "react";

import type { Metadata } from "next";
import LargeHeading from "@/app/components/ui/LargeHeading";
import Paragraph from "@/app/components/ui/Paragraph";
import DocumentationTabs from "@/app/components/DocumentationTabs";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free & Open-source text similarity API",
};

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a Request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
