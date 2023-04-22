import { nodejs, python } from "@/helpers/documentation-code";
import { TabsContent } from "@radix-ui/react-tabs";
import { FC } from "react";
import Code from "../components/Code";
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>

      <TabsContent value="nodejs">
        <Code animated language="javascript" code={nodejs} show />
      </TabsContent>
      <TabsContent value="python">
        <Code animated language="javascript" code={python} show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
