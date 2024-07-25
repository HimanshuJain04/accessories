import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({ path: "../../apps/api/.env.local" });

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL not found in environment variables!");
}

export default {
    schema: "./src/schema/*",
    out: "./src/migrations",
    driver: "mysql2",
    dbCredentials: {
        uri: DATABASE_URL,
    },
    breakpoints: true,
} satisfies Config;
