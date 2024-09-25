'use client'

import { ChakraProvider, theme } from "@chakra-ui/react"
import { FC, ReactElement, ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
