import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  Image as ImageIcon,
  FileText,
  Award,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    news: 0,
    gallery: 0,
    toppers: 0,
    enquiries: 0,
  });

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch counts for KPI cards
        const [
          { count: newsCount },
          { count: galleryCount },
          { count: toppersCount },
          { count: enquiriesCount },
        ] = await Promise.all([
          supabase
            .from("news_events")
            .select("*", { count: "exact", head: true }),
          supabase.from("gallery").select("*", { count: "exact", head: true }),
          supabase.from("toppers").select("*", { count: "exact", head: true }),
          supabase
            .from("admission_enquiries")
            .select("*", { count: "exact", head: true }),
        ]);

        setStats({
          news: newsCount || 0,
          gallery: galleryCount || 0,
          toppers: toppersCount || 0,
          enquiries: enquiriesCount || 0,
        });

        // Fetch recent enquiries for charts and list
        const { data: recentEnquiries } = await supabase
          .from("admission_enquiries")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(20);

        if (recentEnquiries) {
          setEnquiries(recentEnquiries);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Process data for the Stream Pie Chart
  const streamDataMap = enquiries.reduce((acc, curr) => {
    const stream = curr.stream
      ? curr.stream.charAt(0).toUpperCase() + curr.stream.slice(1)
      : "Unknown";
    acc[stream] = (acc[stream] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(streamDataMap).map((key) => ({
    name: key,
    value: streamDataMap[key],
  }));

  // Process data for the Enquiries over Time Area Chart (Last 7 days approx based on mock data grouping)
  // For a real app, you'd group by Date. Here we just take the recent dates.
  const dateDataMap = [...enquiries].reverse().reduce((acc, curr) => {
    const date = new Date(curr.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const areaData = Object.keys(dateDataMap).map((key) => ({
    name: key,
    Enquiries: dateDataMap[key],
  }));

  const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 font-nuno mb-1">
          {title}
        </p>
        <h3 className="text-3xl font-bold text-gray-800 font-merri">{value}</h3>
      </div>
      <div className={`p-4 rounded-full ${colorClass} bg-opacity-10`}>
        <Icon
          className={`w-8 h-8 ${colorClass.replace("bg-", "text-").replace("-100", "-600")}`}
        />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold font-merri text-gray-900">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-gray-500 font-nuno">
          Welcome back to the Rotary PU College CMS. Here is what is happening
          today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Enquiries"
          value={stats.enquiries}
          icon={Users}
          colorClass="bg-blue-100"
        />
        <StatCard
          title="News Articles"
          value={stats.news}
          icon={FileText}
          colorClass="bg-green-100"
        />
        <StatCard
          title="Gallery Photos"
          value={stats.gallery}
          icon={ImageIcon}
          colorClass="bg-purple-100"
        />
        <StatCard
          title="Toppers Listed"
          value={stats.toppers}
          icon={Award}
          colorClass="bg-yellow-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Main Column */}
        <div className="col-span-1 lg:col-span-2 space-y-8">
          {/* Area Chart: Enquiries Over Time */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold font-merri text-gray-800 mb-6">
              Recent Admission Inquiries
            </h2>
            <div className="h-[300px] w-full">
              {areaData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={areaData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorEnquiries"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#2563eb"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2563eb"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tickMargin={10}
                      className="text-xs font-nuno text-gray-500"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickMargin={10}
                      className="text-xs font-nuno text-gray-500"
                    />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      itemStyle={{ fontFamily: "Nunito", color: "#1f2937" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="Enquiries"
                      stroke="#2563eb"
                      fillOpacity={1}
                      fill="url(#colorEnquiries)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400 font-nuno">
                  No enquiry data available yet.
                </div>
              )}
            </div>
          </div>

          {/* Recent Enquiries List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold font-merri text-gray-800">
                Latest Enquiries
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {enquiries.slice(0, 5).map((enquiry) => (
                <div
                  key={enquiry.id}
                  className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold font-nuno">
                      {enquiry.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 font-nuno">
                        {enquiry.name}
                      </p>
                      <p className="text-xs text-gray-500 font-nuno">
                        {enquiry.email} • {enquiry.phone}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {enquiry.stream}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(enquiry.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
              {enquiries.length === 0 && (
                <div className="p-8 text-center text-gray-500 font-nuno">
                  No recent enquiries.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analytics Sidebar Column */}
        <div className="col-span-1 space-y-8">
          {/* Pie Chart: Stream Preferences */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold font-merri text-gray-800 mb-6">
              Stream Preference
            </h2>
            <div className="h-[250px] w-full flex justify-center">
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      itemStyle={{ fontFamily: "Nunito", color: "#1f2937" }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400 font-nuno">
                  No data available.
                </div>
              )}
            </div>
            {/* Custom Legend for Pie Chart */}
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm text-gray-600 font-nuno">
                    {entry.name} ({entry.value})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
