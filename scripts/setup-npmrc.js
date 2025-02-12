const fs = require("node:fs")

console.debug("Creating the .npmrc file...")

// Load the template and the .env files
const templateContent = fs.readFileSync(".npmrc.template", "utf8")
const envContent = fs.readFileSync(".env", "utf8")

// Parse the .env file content and turn it into a key-value object
const env = envContent.split("\n").reduce((acc, line) => {
	if (!line || line.startsWith("#")) return acc
	const [key, value] = line.split("=")
	acc[key] = value
	return acc
}, {})

// Also add the preloaded environment variables coming from the environment itself (Coolify, Vercel, etc.)
Object.assign(env, process.env)

// Replace the placeholders in the template with the values from the .env file
// (E.g. "$NPMRC_CYBEARL_AUTH_TOKEN" => "123456")
const npmrcContent = templateContent.replace(/\$([A-Z_]+)\b/g, (_, key) => env[key])

// Write the final .npmrc file
fs.writeFileSync(".npmrc", npmrcContent)

console.debug("The .npmrc file has been created!")
