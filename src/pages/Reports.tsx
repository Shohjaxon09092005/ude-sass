import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  DollarSign, 
  Award,
  FileText,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('6months');
  const [reportType, setReportType] = useState('all');

  // Mock data for various reports
  const performanceTrends = [
    { month: 'Jul', avgScore: 78, attendance: 85, enrollment: 120 },
    { month: 'Aug', avgScore: 82, attendance: 88, enrollment: 135 },
    { month: 'Sep', avgScore: 79, attendance: 92, enrollment: 142 },
    { month: 'Oct', avgScore: 85, attendance: 89, enrollment: 155 },
    { month: 'Nov', avgScore: 88, attendance: 94, enrollment: 168 },
    { month: 'Dec', avgScore: 91, attendance: 96, enrollment: 175 }
  ];

  const revenueData = [
    { month: 'Jul', revenue: 12500, students: 120, courses: 8 },
    { month: 'Aug', revenue: 15200, students: 135, courses: 9 },
    { month: 'Sep', revenue: 18300, students: 142, courses: 10 },
    { month: 'Oct', revenue: 21100, students: 155, courses: 11 },
    { month: 'Nov', revenue: 24800, students: 168, courses: 12 },
    { month: 'Dec', revenue: 28500, students: 175, courses: 13 }
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', avgScore: 85, students: 45, passRate: 88 },
    { subject: 'Physics', avgScore: 82, students: 32, passRate: 85 },
    { subject: 'Chemistry', avgScore: 78, students: 28, passRate: 82 },
    { subject: 'English', avgScore: 89, students: 22, passRate: 92 },
    { subject: 'Computer Science', avgScore: 91, students: 38, passRate: 95 },
    { subject: 'Art History', avgScore: 87, students: 18, passRate: 90 }
  ];

  const courseDistribution = [
    { name: 'STEM', value: 45, color: '#3B82F6' },
    { name: 'Liberal Arts', value: 25, color: '#10B981' },
    { name: 'Technology', value: 20, color: '#F59E0B' },
    { name: 'Arts', value: 10, color: '#EF4444' }
  ];

  const topPerformers = [
    { id: 1, name: 'Alice Johnson', score: 95, course: 'Mathematics', rank: 1 },
    { id: 2, name: 'Bob Smith', score: 93, course: 'Physics', rank: 2 },
    { id: 3, name: 'Carol Davis', score: 92, course: 'English', rank: 3 },
    { id: 4, name: 'David Wilson', score: 91, course: 'Computer Science', rank: 4 },
    { id: 5, name: 'Eva Brown', score: 90, course: 'Chemistry', rank: 5 }
  ];

  const paymentAnalytics = [
    { month: 'Jul', collected: 12000, pending: 500, overdue: 200 },
    { month: 'Aug', collected: 14800, pending: 400, overdue: 150 },
    { month: 'Sep', collected: 17900, pending: 400, overdue: 100 },
    { month: 'Oct', collected: 20700, pending: 400, overdue: 200 },
    { month: 'Nov', collected: 24200, pending: 600, overdue: 300 },
    { month: 'Dec', collected: 27800, pending: 700, overdue: 250 }
  ];

  const keyMetrics = [
    {
      title: 'Total Students',
      value: '175',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Average Score',
      value: '87%',
      change: '+3%',
      trend: 'up',
      icon: Award,
      color: 'green'
    },
    {
      title: 'Course Completion',
      value: '89%',
      change: '+5%',
      trend: 'up',
      icon: BookOpen,
      color: 'purple'
    },
    {
      title: 'Monthly Revenue',
      value: '$28,500',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'yellow'
    }
  ];

  const attendanceData = [
    { week: 'Week 1', attendance: 95 },
    { week: 'Week 2', attendance: 92 },
    { week: 'Week 3', attendance: 88 },
    { week: 'Week 4', attendance: 94 },
    { week: 'Week 5', attendance: 96 },
    { week: 'Week 6', attendance: 93 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into student performance and business metrics</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 Month</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                  <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="detailed">Detailed</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Average scores and enrollment over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="avgScore" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="attendance" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Course Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Course Distribution</CardTitle>
                <CardDescription>Students enrolled by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={courseDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {courseDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Growth</CardTitle>
              <CardDescription>Monthly revenue and student enrollment trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="revenue" fill="#3B82F6" />
                  <Line yAxisId="right" type="monotone" dataKey="students" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Average scores by subject area</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="avgScore" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Highest scoring students this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Award className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{student.score}%</p>
                        <Badge variant="secondary">Rank #{student.rank}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Subject Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Subject Analysis</CardTitle>
              <CardDescription>Comprehensive performance metrics by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Subject</th>
                      <th className="text-left p-4">Students</th>
                      <th className="text-left p-4">Avg Score</th>
                      <th className="text-left p-4">Pass Rate</th>
                      <th className="text-left p-4">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectPerformance.map((subject) => (
                      <tr key={subject.subject} className="border-b">
                        <td className="p-4 font-medium">{subject.subject}</td>
                        <td className="p-4">{subject.students}</td>
                        <td className="p-4">{subject.avgScore}%</td>
                        <td className="p-4">{subject.passRate}%</td>
                        <td className="p-4">
                          <Badge className={subject.avgScore >= 85 ? 'bg-green-100 text-green-800' : 
                                         subject.avgScore >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                                         'bg-red-100 text-red-800'}>
                            {subject.avgScore >= 85 ? 'Excellent' : 
                             subject.avgScore >= 80 ? 'Good' : 'Needs Improvement'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          {/* Payment Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Analytics</CardTitle>
              <CardDescription>Revenue collection and payment status trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={paymentAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="collected" stackId="1" stroke="#10B981" fill="#10B981" />
                  <Area type="monotone" dataKey="pending" stackId="1" stroke="#F59E0B" fill="#F59E0B" />
                  <Area type="monotone" dataKey="overdue" stackId="1" stroke="#EF4444" fill="#EF4444" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">$156,800</div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                  +18% from last period
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Pending Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-2">$3,200</div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 mr-1 text-yellow-500" />
                  +5% from last period
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Overdue Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600 mb-2">$1,200</div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
                  -2% from last period
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          {/* Attendance Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trends</CardTitle>
              <CardDescription>Weekly attendance rates across all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="attendance" stroke="#3B82F6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Attendance by Course */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance by Course</CardTitle>
              <CardDescription>Course-wise attendance comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{subject.subject}</span>
                      <span className="text-sm text-gray-600">
                        {Math.floor(Math.random() * 10) + 85}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 10) + 85}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-6">
          {/* Comprehensive Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Engagement Metrics</CardTitle>
                <CardDescription>Detailed engagement analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Average Session Duration</span>
                    <span className="text-lg font-bold text-blue-600">45 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Test Completion Rate</span>
                    <span className="text-lg font-bold text-green-600">92%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Assignment Submission Rate</span>
                    <span className="text-lg font-bold text-purple-600">87%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Student Satisfaction</span>
                    <span className="text-lg font-bold text-yellow-600">4.6/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
                <CardDescription>Achievement and completion statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Course Completion Rate</span>
                    <span className="text-lg font-bold text-blue-600">89%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Certification Pass Rate</span>
                    <span className="text-lg font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Skill Improvement</span>
                    <span className="text-lg font-bold text-purple-600">+23%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Retention Rate</span>
                    <span className="text-lg font-bold text-yellow-600">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Export Options */}
          <Card>
            <CardHeader>
              <CardTitle>Export Reports</CardTitle>
              <CardDescription>Download detailed reports in various formats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-16 flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  Student Performance Report
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <DollarSign className="h-6 w-6 mb-2" />
                  Financial Summary
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  Attendance Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;