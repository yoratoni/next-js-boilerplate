import type { DocumentContext, DocumentInitialProps } from "next/document"
import NextDocument, { Head, Html, Main, NextScript } from "next/document"

type DocumentProps = DocumentInitialProps & { nonce: string }

function Document({ nonce }: DocumentProps) {
	return (
		<Html lang="en">
			<Head nonce={nonce}>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript nonce={nonce} />
			</body>
		</Html>
	)
}

Document.getInitialProps = async (ctx: DocumentContext) => {
	const initialProps = await NextDocument.getInitialProps(ctx)
	const nonce = ctx.req?.headers?.["x-nonce"] as string

	return {
		...initialProps,
		nonce,
	}
}

export default Document
