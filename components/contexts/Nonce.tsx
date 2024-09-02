import type { ReactNode } from "react"
import { createContext } from "react"

export const NonceContext = createContext<string | undefined>(undefined)

type NonceProviderProps = {
	nonce: string | undefined
	children: ReactNode
}

export default function NonceProvider({ nonce, children }: NonceProviderProps) {
	return <NonceContext.Provider value={nonce}>{children}</NonceContext.Provider>
}
