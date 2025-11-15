import { Logo } from "@/components/logo";

const sizes = [
  // Profile Pictures
  { width: 400, height: 400, label: "Twitter Profile" },
  { width: 180, height: 180, label: "Facebook Profile" },
  { width: 300, height: 300, label: "LinkedIn Profile" },
  { width: 110, height: 110, label: "Instagram Profile" },
  { width: 128, height: 128, label: "Discord Profile" },
  { width: 1024, height: 1024, label: "High Resolution" },
  { width: 32, height: 32, label: "Favicon 32px" },
  { width: 16, height: 16, label: "Favicon 16px" },
  // Banners
  { width: 1500, height: 500, label: "Twitter Header" },
  { width: 820, height: 312, label: "Facebook Cover" },
  { width: 1128, height: 191, label: "LinkedIn Banner" },
  { width: 1200, height: 630, label: "GitHub Social" },
];

function getSizeVariant(width: number): "sm" | "md" | "lg" | "xl" {
  if (width <= 32) return "sm";
  if (width <= 128) return "md";
  if (width <= 400) return "lg";
  return "xl";
}

export default function LogoExportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Transaktio Logo Export</h1>
        <p className="text-slate-400 mb-8">Export logos for social media and marketing use</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sizes.map((size, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold mb-1">{size.label}</h3>
                <p className="text-slate-400 text-sm">{size.width} × {size.height}px</p>
              </div>
              
              <div 
                className="flex items-center justify-center bg-white rounded-lg p-4 mx-auto"
                style={{ 
                  width: Math.min(size.width, 300), 
                  height: Math.min(size.height, 300),
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                id={`logo-${size.width}x${size.height}`}
              >
                <Logo 
                  size={getSizeVariant(size.width)} 
                  animated={false}
                />
              </div>
              
              <div className="mt-4 text-center">
                <button 
                  onClick={() => {
                    // Instructions for manual export
                    alert(`Right-click on the logo above and select "Inspect". Then right-click the div and choose "Capture node screenshot" to export ${size.width}x${size.height}px logo.`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                >
                  Export Instructions
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Export Instructions</h2>
          <div className="text-slate-300 space-y-2">
            <p>1. Right-click on any logo above</p>
            <p>2. Select "Inspect" or "Inspect Element"</p>
            <p>3. In DevTools, right-click the logo container (div)</p>
            <p>4. Select "Capture node screenshot"</p>
            <p>5. Save the image with appropriate filename</p>
          </div>
        </div>
      </div>
    </div>
  );
}
