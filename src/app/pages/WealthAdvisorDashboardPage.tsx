import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ─── Design tokens (matches other pages) ─────────────────────────────────────
const T = {
  bg: "#f9fafe",
  card: "#ffffff",
  border: "#e9ecef",
  text: "#2e3338",
  muted: "#657381",
  blue: "#0645ad",
  green: "#00a36c",
  greenLight: "#e8f5e9",
  red: "#dc2020",
  redLight: "#ffeeee",
  amber: "#f59e0b",
  amberLight: "#fff4e6",
};

// Chart palette — vibrant data colors work fine on white
const PALETTE = ["#6366f1", "#0645ad", "#f59e0b", "#dc2020", "#06b6d4", "#a855f7", "#ec4899", "#14b8a6"];
const STACK_COLORS = ["#6366f1", "#0645ad", "#f59e0b", "#06b6d4", "#a855f7"];

const tooltipStyle = {
  backgroundColor: T.card,
  border: `1px solid ${T.border}`,
  color: T.text,
  borderRadius: 8,
  fontSize: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(v: number): string {
  if (v >= 1e6) return "$" + (v / 1e6).toFixed(2) + "M";
  if (v >= 1e3) return "$" + (v / 1e3).toFixed(1) + "K";
  return "$" + v.toFixed(0);
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg border border-[#e9ecef] p-6">
      <h2 className="text-base font-semibold text-[#2e3338] mb-4">{title}</h2>
      {children}
    </div>
  );
}

function ObjectiveBadge({ objective }: { objective: string }) {
  const map: Record<string, string> = {
    Growth: "bg-[#e8f5e9] text-[#00a36c]",
    Balanced: "bg-blue-50 text-[#0645ad]",
    "Aggressive Growth": "bg-[#ffeeee] text-[#dc2020]",
    Defensive: "bg-[#fff4e6] text-[#f59e0b]",
    Conservative: "bg-cyan-50 text-cyan-600",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[objective] ?? "bg-gray-100 text-[#657381]"}`}>
      {objective}
    </span>
  );
}

function ConcentrationBar({ label, pct, colorClass }: { label: string; pct: string; colorClass: string }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-[#2e3338]">{label}</span>
        <span className="font-mono text-xs text-[#2e3338] font-semibold">{pct}% of AUM</span>
      </div>
      <div className="bg-[#e9ecef] rounded h-2">
        <div className={`${colorClass} rounded h-2 transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const assetAllocationData = [
  { name: "Equity", value: 62.49 },
  { name: "Fixed Income", value: 26.61 },
  { name: "Cash & Equiv.", value: 7.30 },
  { name: "Other", value: 3.31 },
  { name: "Balanced", value: 0.23 },
  { name: "Alternative", value: 0.02 },
];

const objectiveData = [
  { name: "Balanced", value: 660.79 },
  { name: "Growth", value: 217.43 },
  { name: "Aggressive Growth", value: 48.23 },
  { name: "Defensive", value: 14.75 },
  { name: "Conservative", value: 2.21 },
];

const modelLabels = [
  "Purpose Balanced", "Purpose Growth", "Purpose Conservative",
  "Purpose Equity", "Cash Equivalents", "Balanced (Manual)", "Growth (Manual)", "Other",
];
const modelCountData = modelLabels.map((name, i) => ({
  name, value: [1622, 913, 321, 222, 205, 51, 29, 50][i],
}));
const modelAUMData = modelLabels.map((name, i) => ({
  name, value: [537.46, 195.94, 104.01, 45.90, 12.09, 21.04, 13.09, 13.87][i],
}));

const tierData = [
  { name: "$0", accounts: 336, aum: 0 },
  { name: "$1-$50K", accounts: 730, aum: 13.83 },
  { name: "$50K-$250K", accounts: 1246, aum: 166.57 },
  { name: "$250K-$500K", accounts: 558, aum: 197.40 },
  { name: "$500K-$1M", accounts: 355, aum: 249.34 },
  { name: "$1M-$5M", accounts: 187, aum: 310.83 },
  { name: "$5M+", accounts: 1, aum: 5.45 },
];

const topClients: [string, string, string, number][] = [
  ["Omese Xgwdcu", "Growth (Manual)", "Growth", 5446444.94],
  ["Flxg Wtplhy", "Purpose Balanced", "Balanced", 4885229.09],
  ["Mfsz Naghlbar", "Purpose Balanced", "Balanced", 4726724.50],
  ["Aih Pxikgjbo Xho", "Purpose Balanced", "Balanced", 4412909.71],
  ["Jcfqp Qeholz", "Purpose Balanced", "Balanced", 4290532.29],
  ["Oievi Gsgx", "Purpose Balanced", "Balanced", 4217314.18],
  ["Xiv Ddoka", "Purpose Balanced", "Balanced", 3714684.69],
  ["Wbdzb Mvsp", "Balanced (Manual)", "Balanced", 3465521.50],
  ["Rpffgfd Vcaw Qkfhuwxl", "Purpose Balanced", "Balanced", 3348139.58],
  ["Ujkdva Nljexhk", "Purpose Balanced", "Balanced", 3336450.23],
  ["Uwgjpxgnj Vd Vrwbo", "Purpose Equity", "Aggressive Growth", 3318926.19],
  ["Arngcml Pxk", "Purpose Growth", "Growth", 3265264.44],
  ["Gmuzib Rabvc", "Purpose Equity", "Aggressive Growth", 3264386.11],
  ["Eftdj Sfzgiwz", "Purpose Conservative", "Balanced", 3258082.96],
  ["Lvwtvv Mmi", "Purpose Balanced", "Balanced", 3234258.65],
  ["Djifsrm Fwtrjvfco", "Balanced (Manual)", "Balanced", 3180253.14],
  ["Bqzjfd Nauwzg", "Purpose Growth", "Growth", 3177312.86],
  ["Wbejb Mvflzlqq", "Purpose Equity", "Aggressive Growth", 2881847.94],
  ["Qxdvn Funzgema Mge", "Purpose Equity", "Aggressive Growth", 2829174.91],
  ["Jdzxszws Nrgqpv Koyzwr", "Balanced (Manual)", "Balanced", 2813529.91],
];

const totalAUM = 943413571.49;

const objectiveAssetData = [
  { objective: "Balanced", Equity: 58.2, "Fixed Income": 28.5, "Cash & Equiv.": 8.5, Other: 4.5, Alternative: 0.3 },
  { objective: "Growth", Equity: 76.8, "Fixed Income": 21.2, "Cash & Equiv.": 1.5, Other: 0.3, Alternative: 0.2 },
  { objective: "Aggressive Growth", Equity: 93.5, "Fixed Income": 2.5, "Cash & Equiv.": 3.8, Other: 0.1, Alternative: 0.1 },
  { objective: "Defensive", Equity: 15.0, "Fixed Income": 5.0, "Cash & Equiv.": 75.0, Other: 4.5, Alternative: 0.5 },
  { objective: "Conservative", Equity: 47.2, "Fixed Income": 51.5, "Cash & Equiv.": 1.2, Other: 0, Alternative: 0.1 },
];

const households: [string, number][] = [
  ["Pfhtja Timmh & Hgwzd Cyyixx", 5446444.94],
  ["Gnijpx & Qwbe Tsaumk", 4885229.09],
  ["Eqwc & Xoeoy Zsmxsyhy", 4726724.50],
  ["Xyo & Mttho Idpfse", 4290532.29],
  ["Szvjr Lvbh", 4217314.18],
  ["Ghi Tmgf & Nuoheopiq Usud", 3465521.50],
  ["Ptcfsm Cmnlj & Icljrq Slidfjj", 3336450.23],
  ["Vezi Xp Hogei & Akyziaf Nhqrm", 3318926.19],
  ["Iik Mwkzl", 3265264.44],
  ["Rgvje & Qwzkwh Hlnjtmc", 3258082.96],
  ["Wwswiw Wjlmdwah & Iwakhr Zdocthoe", 3234258.65],
  ["Dhpmrnr & Utyhqr Bwcapjprf", 3180253.14],
  ["Lucdgtd & Cbxqc Mikqgpul", 2881847.94],
  ["Kpfjj Plxorkfd Mxu", 2829174.91],
  ["Bwm Qncggrqu Qaj Znue Mvecw", 2786367.82],
];

const tierTableData: [string, number, number][] = [
  ["$0", 336, 0],
  ["$1 - $50K", 730, 13826096],
  ["$50K - $250K", 1246, 166574704],
  ["$250K - $500K", 558, 197399369],
  ["$500K - $1M", 355, 249337300],
  ["$1M - $5M", 187, 310829658],
  ["$5M+", 1, 5446445],
];

const kpis = [
  { label: "Total AUM", value: "$943.4M", valueClass: "text-[#00a36c]", sub: "Across all client accounts" },
  { label: "Active Accounts", value: "3,077", valueClass: "text-[#0645ad]", sub: "336 zero-balance (9.8%)" },
  { label: "Avg Account Size", value: "$306.6K", valueClass: "text-[#2e3338]", sub: "Median: $154.2K" },
  { label: "Households", value: "1,454", valueClass: "text-[#f59e0b]", sub: "1,959 individual accounts" },
  { label: "Top Client AUM", value: "$5.45M", valueClass: "text-[#2e3338]", sub: "Largest single account" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WealthAdvisorDashboardPage() {
  const [modelTab, setModelTab] = useState<"count" | "aum">("count");

  const top10sum = topClients.slice(0, 10).reduce((a, c) => a + c[3], 0);
  const top20sum = topClients.slice(0, 20).reduce((a, c) => a + c[3], 0);
  const top50approx = top20sum * 2.1;
  const top10p = (top10sum / totalAUM * 100).toFixed(1);
  const top20p = (top20sum / totalAUM * 100).toFixed(1);
  const top50p = Math.min(top50approx / totalAUM * 100, 100).toFixed(1);

  return (
    <div className="w-full min-h-screen bg-[#f9fafe]">
      <div className="max-w-[1600px] mx-auto px-10 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#2e3338]">Insights &amp; Reports</h1>
            <p className="text-sm text-[#657381] mt-1">Data as of March 2, 2026 · 3,413 Accounts</p>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {kpis.map(k => (
            <div key={k.label} className="bg-white rounded-lg border border-[#e9ecef] p-5 hover:shadow-sm transition-shadow">
              <div className="text-xs text-[#657381] font-medium uppercase tracking-wide mb-2">{k.label}</div>
              <div className={`text-2xl font-semibold ${k.valueClass}`}>{k.value}</div>
              <div className="text-xs text-[#657381] mt-1">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#657381] mb-3">Portfolio Overview</p>

        {/* Row 1 — two donut charts */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Card title="AUM-Weighted Asset Allocation">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={assetAllocationData} dataKey="value" innerRadius="52%" outerRadius="72%" paddingAngle={2}>
                  {assetAllocationData.map((_, i) => <Cell key={i} fill={PALETTE[i]} strokeWidth={0} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: T.muted, paddingTop: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Investment Objective — AUM Split">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={objectiveData} dataKey="value" innerRadius="52%" outerRadius="72%" paddingAngle={2}>
                  {objectiveData.map((_, i) => <Cell key={i} fill={PALETTE[i]} strokeWidth={0} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `$${v.toFixed(1)}M`} contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: T.muted, paddingTop: 8 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Row 2 — model portfolio (tabbed) + tier chart */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card title="Model Portfolio Distribution">
            {/* Tabs */}
            <div className="flex border-b border-[#e9ecef] mb-4 -mt-1">
              {(["count", "aum"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setModelTab(tab)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    modelTab === tab
                      ? "border-[#0645ad] text-[#0645ad]"
                      : "border-transparent text-[#657381] hover:text-[#2e3338]"
                  }`}
                >
                  {tab === "count" ? "By Account Count" : "By AUM"}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={modelTab === "count" ? modelCountData : modelAUMData}
                layout="vertical"
                margin={{ left: 8, right: 24, top: 4, bottom: 4 }}
              >
                <XAxis type="number" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={modelTab === "aum" ? v => `$${v}M` : undefined} />
                <YAxis type="category" dataKey="name" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={138} />
                <Tooltip
                  formatter={(v: number) => modelTab === "count" ? [`${v} accounts`, ""] : [`$${v.toFixed(1)}M`, ""]}
                  contentStyle={tooltipStyle}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={14}>
                  {(modelTab === "count" ? modelCountData : modelAUMData).map((_, i) => (
                    <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Client Segmentation by AUM Tier">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tierData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" orientation="left" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}M`} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: T.muted }} />
                <Bar yAxisId="left" dataKey="accounts" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={18} />
                <Bar yAxisId="right" dataKey="aum" name="AUM ($M)" fill="#0645ad" radius={[4, 4, 0, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#657381] mb-3">Client Details</p>

        {/* Row 3 — top clients + concentration */}
        <div className="grid gap-4 mb-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <Card title="Top 20 Clients by Market Value">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    {["#", "Client", "Model Portfolio", "Objective", "Market Value"].map((h, i) => (
                      <th key={h} className={`py-2 px-3 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] ${i === 4 ? "text-right" : "text-left"}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topClients.map((c, i) => (
                    <tr key={i} className="hover:bg-[#f9fafe] transition-colors">
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-[#657381] text-xs">{i + 1}</td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-[#2e3338] font-medium">{c[0]}</td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-xs text-[#657381]">{c[1]}</td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef]"><ObjectiveBadge objective={c[2]} /></td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-right font-mono text-xs text-[#2e3338] font-semibold">{fmt(c[3])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            <Card title="Concentration Risk">
              <div className="mt-1">
                <ConcentrationBar label="Top 10 Clients" pct={top10p} colorClass="bg-[#dc2020]" />
                <ConcentrationBar label="Top 20 Clients" pct={top20p} colorClass="bg-[#f59e0b]" />
                <ConcentrationBar label="Top 50 Clients" pct={top50p} colorClass="bg-[#00a36c]" />
              </div>
              <div className="mt-5 pt-4 border-t border-[#e9ecef]">
                <h3 className="text-sm font-semibold text-[#2e3338] mb-3">AUM Tier Breakdown</h3>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="py-1.5 px-2 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-left">Tier</th>
                      <th className="py-1.5 px-2 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-right">Accounts</th>
                      <th className="py-1.5 px-2 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-right">AUM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierTableData.map(([tier, count, aum]) => (
                      <tr key={tier} className="hover:bg-[#f9fafe] transition-colors">
                        <td className="py-2 px-2 border-b border-[#e9ecef] text-[#2e3338]">{tier}</td>
                        <td className="py-2 px-2 border-b border-[#e9ecef] text-right font-mono text-xs text-[#2e3338]">{count.toLocaleString()}</td>
                        <td className="py-2 px-2 border-b border-[#e9ecef] text-right font-mono text-xs text-[#2e3338]">{fmt(aum)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Row 4 — stacked bar + households */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card title="Asset Allocation by Objective">
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={objectiveAssetData}>
                <XAxis dataKey="objective" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={v => v + "%"} domain={[0, 100]} />
                <Tooltip formatter={(v: number, name: string) => [`${v.toFixed(1)}%`, name]} contentStyle={tooltipStyle} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 8, color: T.muted }} />
                <Bar dataKey="Equity" stackId="a" fill={STACK_COLORS[0]} />
                <Bar dataKey="Fixed Income" stackId="a" fill={STACK_COLORS[1]} />
                <Bar dataKey="Cash & Equiv." stackId="a" fill={STACK_COLORS[2]} />
                <Bar dataKey="Other" stackId="a" fill={STACK_COLORS[3]} />
                <Bar dataKey="Alternative" stackId="a" fill={STACK_COLORS[4]} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Top 15 Households by AUM">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-3 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-left">#</th>
                    <th className="py-2 px-3 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-left">Household</th>
                    <th className="py-2 px-3 text-xs font-medium uppercase tracking-wide text-[#657381] border-b border-[#e9ecef] text-right">AUM</th>
                  </tr>
                </thead>
                <tbody>
                  {households.map(([name, aum], i) => (
                    <tr key={i} className="hover:bg-[#f9fafe] transition-colors">
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-[#657381] text-xs">{i + 1}</td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-[#2e3338] font-medium">{name}</td>
                      <td className="py-2.5 px-3 border-b border-[#e9ecef] text-right font-mono text-xs text-[#2e3338] font-semibold">{fmt(aum)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-6 text-xs text-[#657381] border-t border-[#e9ecef]">
          Dashboard generated on March 2, 2026 · Data is anonymized · For informational purposes only
        </div>

      </div>
    </div>
  );
}
