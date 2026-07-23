import { config } from "dotenv";
config({ path: ".env" }); // Note: Change this to ".env.local" if that is the name of your file!

import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.DATABASE_URL!);