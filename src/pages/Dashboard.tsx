import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  BookOpen, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Award,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  const [studentDialogOpen, setStudentDialogOpen] = useState(false);
  const { toast } = useToast();

  const stats = [
    {
      title: 'Total Students',
      value: '142',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Courses',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Pending Tests',
      value: '23',
      change: '-5',
      trend: 'down',
      icon: FileText,
      color: 'orange'
    },
    {
      title: 'Monthly Revenue',
      value: '$3,420',
      change: '+18%',
      trend: 'up',
      icon: CreditCard,
      color: 'purple'
    }
  ];

  const recentActivity = [
    { id: 1, student: 'Alice Johnson', action: 'Completed Math Test #5', time: '2 hours ago', status: 'success' },
    { id: 2, student: 'Bob Smith', action: 'Submitted Physics Assignment', time: '4 hours ago', status: 'success' },
    { id: 3, student: 'Carol Davis', action: 'Missed Chemistry Test', time: '1 day ago', status: 'warning' },
    { id: 4, student: 'David Wilson', action: 'Made payment for Course A', time: '2 days ago', status: 'success' },
    { id: 5, student: 'Eva Brown', action: 'Enrolled in Advanced Math', time: '3 days ago', status: 'info' }
  ];

  const performanceData = [
    { month: 'Jan', students: 65, revenue: 2400 },
    { month: 'Feb', students: 78, revenue: 2800 },
    { month: 'Mar', students: 95, revenue: 3200 },
    { month: 'Apr', students: 110, revenue: 3600 },
    { month: 'May', students: 125, revenue: 3800 },
    { month: 'Jun', students: 142, revenue: 4200 }
  ];

  const courseDistribution = [
    { name: 'Mathematics', value: 35, color: '#3B82F6' },
    { name: 'Science', value: 28, color: '#10B981' },
    { name: 'English', value: 22, color: '#F59E0B' },
    { name: 'History', value: 15, color: '#EF4444' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Grade Math Test #6', deadline: 'Today, 5:00 PM', priority: 'high' },
    { id: 2, task: 'Prepare Physics Quiz', deadline: 'Tomorrow, 2:00 PM', priority: 'medium' },
    { id: 3, task: 'Review Student Applications', deadline: 'Friday, 10:00 AM', priority: 'low' },
    { id: 4, task: 'Send Monthly Reports', deadline: 'Monday, 9:00 AM', priority: 'high' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleScheduleClass = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduleDialogOpen(false);
    toast({
      title: "Class scheduled successfully",
      description: "Your class has been added to the schedule.",
    });
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentDialogOpen(false);
    toast({
      title: "Student added successfully",
      description: "The new student has been enrolled.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your students.</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={scheduleDialogOpen} onOpenChange={setScheduleDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                Schedule Class
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule New Class</DialogTitle>
                <DialogDescription>
                  Schedule a new class session for your students.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleScheduleClass} className="space-y-4">
                <div>
                  <Label htmlFor="course">Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Advanced Mathematics</SelectItem>
                      <SelectItem value="physics">Physics Fundamentals</SelectItem>
                      <SelectItem value="chemistry">Chemistry Basics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="datetime">Date & Time</Label>
                  <Input type="datetime-local" id="datetime" required />
                </div>
                <div>
                  <Label htmlFor="duration">Duration (hours)</Label>
                  <Input type="number" id="duration" placeholder="2" min="1" max="8" required />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Room 101 or Online" required />
                </div>
                <Button type="submit" className="w-full">Schedule Class</Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={studentDialogOpen} onOpenChange={setStudentDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                  Enroll a new student in your courses.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddStudent} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="course-enrollment">Enroll in Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Advanced Mathematics</SelectItem>
                      <SelectItem value="physics">Physics Fundamentals</SelectItem>
                      <SelectItem value="chemistry">Chemistry Basics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Add Student</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Student enrollment and revenue trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="students" fill="#3B82F6" />
                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Course Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Course Distribution</CardTitle>
            <CardDescription>Students enrolled by subject</CardDescription>
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

      {/* Activity and Tasks Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest student actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                  {getStatusIcon(activity.status)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your scheduled tasks and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.deadline}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Dialog open={studentDialogOpen} onOpenChange={setStudentDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-20 flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  Add Student
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button variant="outline" className="h-20 flex-col">
              <BookOpen className="h-6 w-6 mb-2" />
              Create Course
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              New Test
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <CreditCard className="h-6 w-6 mb-2" />
              Track Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;