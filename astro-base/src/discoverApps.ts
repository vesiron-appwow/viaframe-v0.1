import fs from "fs";
import path from "path";

export type DiscoveredApp = {
  id: string;
  name: string;
  description?: string;
  status?: string;
};

export function discoverApps(appsRoot: string): DiscoveredApp[] {
  const apps: DiscoveredApp[] = [];

  if (!fs.existsSync(appsRoot)) {
    return apps;
  }

  const entries = fs.readdirSync(appsRoot, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const appJsonPath = path.join(appsRoot, entry.name, "app.json");

    if (!fs.existsSync(appJsonPath)) continue;

    try {
      const raw = fs.readFileSync(appJsonPath, "utf-8");
      const data = JSON.parse(raw);

      apps.push({
        id: data.id,
        name: data.name,
        description: data.description,
        status: data.status,
      });
    } catch {
      // Invalid app.json is ignored by design
    }
  }

  return apps;
}
