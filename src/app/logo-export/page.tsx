"use client";

import { Logo } from "@/components/logo";

export default function LogoExportPage() {
  const sizes = [
    // Profile Pictures
    { name: "Twitter Profile", size: 400, label: "400×400px - Twitter" },
    { name: "Facebook Profile", size: 180, label: "180×180px - Facebook" },
    { name: "LinkedIn Profile", size: 300, label: "300×300px - LinkedIn" },
    { name: "Instagram Profile", size: 110, label: "110×110px - Instagram" },
    { name: "Discord Profile", size: 128, label: "128×128px - Discord" },
    // High-res
    { name: "High-res PNG", size: 1024, label: "1024×1024px - High-res" },
    // Favicon
    { name: "Favicon 32", size: 32, label: "32×32px - Favicon" },
    { name: "Favicon 16", size: 16, label: "16×16px - Favicon" },
  ];

  const banners = [
    { name: "Twitter Header", width: 1500, height: 500, label: "1500×500px - Twitter Header" },
    { name: "Facebook Cover", width: 820, height: 312, label: "820×312px - Facebook Cover" },
    { name: "LinkedIn Banner", width: 1128, height: 191, label: "1128×191px - LinkedIn Banner" },
    { name: "GitHub", width: 1200, height: 630, label: "1200×630px - GitHub" },
  ];

  const getSizeProp = (size: number): "sm" | "md" | "lg" | "xl" => {
    if (size <= 32) return "sm";
    if (size <= 128) return "md";
    if (size <= 400) return "lg";
    return "xl";
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Transaktio Logo Export</h1>
        <p className="text-gray-400 mb-8">
          Use browser DevTools or a screenshot tool to export these logos. Right-click and "Inspect" to get clean images.
        </p>

        {/* Profile Pictures Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Profile Pictures</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sizes.map((item) => (
              <div
                key={item.name}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
                data-logo-size={item.size}
                style={{
                  width: `${item.size + 48}px`,
                  height: `${item.size + 100}px`,
                }}
              >
                <div className="mb-4 text-center">
                  <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                  <div
                    className="mx-auto flex items-center justify-center bg-transparent"
                    style={{
                      width: `${item.size}px`,
                      height: `${item.size}px`,
                    }}
                  >
                    <Logo
                      size={getSizeProp(item.size)}
                      animated={false}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Banners & Cover Photos</h2>
          <div className="space-y-8">
            {banners.map((banner) => (
              <div
                key={banner.name}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
                data-banner={banner.name}
              >
                <p className="text-sm text-gray-400 mb-4">{banner.label}</p>
                <div
                  className="mx-auto flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded"
                  style={{
                    width: `${banner.width}px`,
                    height: `${banner.height}px`,
                    maxWidth: "100%",
                  }}
                >
                  <Logo size="xl" animated={false} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Export Instructions */}
        <section className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Export Instructions</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Method 1: Browser Screenshot</h3>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Right-click on the logo you want to export</li>
                <li>Select "Inspect" or "Inspect Element"</li>
                <li>In DevTools, right-click the element and select "Capture node screenshot"</li>
                <li>Save the image</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Method 2: Using Browser Extensions</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use "Full Page Screen Capture" extension</li>
                <li>Or use "Nimbus Screenshot" for precise area selection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Method 3: Command Line (Puppeteer)</h3>
              <p className="text-sm">Run the export script: <code className="bg-slate-700 px-2 py-1 rounded">npm run export-logos</code></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

