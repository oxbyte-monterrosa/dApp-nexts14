'use client'

import { solidity, abi } from '@/lib/code-interaction'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';
import Code from './ui/Code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-xl w-full mb-24'>
      <TabsList>
        <TabsTrigger value='nodejs'>Solidity</TabsTrigger>
        <TabsTrigger value='python'>ABI</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'
      style={{ 
      backgroundColor: 'black'
     }}
      >
        <SimpleBar forceVisible='y'>
          <Code  animated code={solidity} language='javascript' show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value='python'
        style={{ 
        backgroundColor: 'black'
    }}
      >
        <SimpleBar forceVisible='y'>
          <Code  animated code={abi} language='python' show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs