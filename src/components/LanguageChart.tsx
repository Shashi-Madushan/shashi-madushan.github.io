// components/LanguageChart.tsx
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

interface Props {
  data: Record<string, number>;
}

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#10b981",
  "#f59e0b"
];

export function LanguageChart({ data }: Props) {
  const items = Object.entries(data || {}).map(([name, value]) => ({
    name,
    value: Number(value)
  }));

  if (items.length === 0) {
    return <div>No language data available</div>;
  }

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Show label for all slices, even small percentages
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  // const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{ width: '100%', height: 500 }}>
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-4 text-center">
        Language Usage
      </h3>
      <ResponsiveContainer>
        <PieChart>
          <defs>
            {COLORS.map((color, index) => (
              <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={color} stopOpacity={0.95} />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={items}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={170}
            paddingAngle={3}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {items.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#gradient-${index % COLORS.length})`}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={1}
              />
            ))}
          </Pie>
          {/* <Tooltip 
            contentStyle={{ 
              
              border: 'none',
              borderRadius: '8px',
              padding: '8px',
              

            }}
            formatter={(value: number, name: string) => {
              const percent = total ? ((value as number) / total * 100).toFixed(1) : '0';
              return [`${value} (${percent}%)`, name];
            }}
          /> */}
          <Legend
            wrapperStyle={{
              padding: '10px',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
