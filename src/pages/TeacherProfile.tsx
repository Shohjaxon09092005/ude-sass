import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Calendar, 
  Clock, 
  Users, 
  BookOpen, 
  FileText, 
  CreditCard,
  Star,
  TrendingUp,
  Plus,
  Edit,
  Settings,
  Award,
  Target,
  DollarSign
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const TeacherProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Students', value: '142', icon: Users, color: 'blue' },
    { label: 'Active Courses', value: '8', icon: BookOpen, color: 'green' },
    { label: 'Tests Created', value: '45', icon: FileText, color: 'purple' },
    { label: 'Monthly Revenue', value: '$3,420', icon: DollarSign, color: 'orange' }
  ];

  const upcomingClasses = [
    { id: 1, title: 'Advanced Mathematics', time: '10:00 AM', date: '2024-01-15', students: 25 },
    { id: 2, title: 'Physics Lab', time: '2:00 PM', date: '2024-01-15', students: 18 },
    { id: 3, title: 'Chemistry Basics', time: '9:00 AM', date: '2024-01-16', students: 30 }
  ];

  const recentTests = [
    { id: 1, title: 'Algebra Quiz', course: 'Mathematics', students: 25, avgScore: 85 },
    { id: 2, title: 'Newton Laws Test', course: 'Physics', students: 18, avgScore: 78 },
    { id: 3, title: 'Organic Chemistry', course: 'Chemistry', students: 30, avgScore: 92 }
  ];

  const performanceData = [
    { month: 'Jan', students: 120, revenue: 2800 },
    { month: 'Feb', students: 135, revenue: 3200 },
    { month: 'Mar', students: 142, revenue: 3420 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl">{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                <p className="text-gray-600">{user?.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="capitalize">{user?.plan} Plan</Badge>
                  <Badge variant="outline">
                    <Star className="h-3 w-3 mr-1" />
                    4.9 Rating
                  </Badge>
                </div>
              </div>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:w-80">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Class
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Create Test
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'schedule', label: 'Schedule' },
            { id: 'students', label: 'Students' },
            { id: 'courses', label: 'Courses' },
            { id: 'payments', label: 'Payments' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Classes</CardTitle>
              <CardDescription>Your scheduled classes for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{class_.title}</p>
                      <p className="text-sm text-gray-600">{class_.date} at {class_.time}</p>
                    </div>
                    <Badge variant="outline">{class_.students} students</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Tests</CardTitle>
              <CardDescription>Latest test performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{test.title}</p>
                      <p className="text-sm text-gray-600">{test.course} • {test.students} students</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{test.avgScore}%</p>
                      <p className="text-sm text-gray-600">avg score</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Class Schedule</CardTitle>
                  <CardDescription>Manage your teaching schedule</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Class
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{class_.date}</p>
                          <p className="text-xs text-gray-600">{class_.time}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{class_.title}</p>
                          <p className="text-sm text-gray-600">{class_.students} students registered</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Cancel</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Course</label>
                <Input placeholder="Select course" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Date & Time</label>
                <Input type="datetime-local" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Duration (hours)</label>
                <Input type="number" placeholder="2" />
              </div>
              <Button className="w-full">Schedule Class</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'students' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Current Students</CardTitle>
              <CardDescription>Manage your student roster</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Alice Johnson', course: 'Mathematics', progress: 85, points: 1240 },
                { name: 'Bob Smith', course: 'Physics', progress: 78, points: 980 },
                { name: 'Carol Davis', course: 'Chemistry', progress: 92, points: 1560 }
              ].map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{student.progress}%</p>
                      <p className="text-xs text-gray-600">Progress</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{student.points}</p>
                      <p className="text-xs text-gray-600">Points</p>
                    </div>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'courses' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Courses you're teaching</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'Advanced Mathematics', students: 25, progress: '8/12 lessons' },
                  { title: 'Physics Lab', students: 18, progress: '5/10 lessons' },
                  { title: 'Chemistry Basics', students: 30, progress: '12/15 lessons' }
                ].map((course, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{course.students} students</span>
                      <span>{course.progress}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create New Course</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Course Title</label>
                <Input placeholder="Enter course title" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <Input placeholder="Course description" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Price</label>
                <Input type="number" placeholder="299" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Duration (weeks)</label>
                <Input type="number" placeholder="12" />
              </div>
              <Button className="w-full">Create Course</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'payments' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Overview</CardTitle>
              <CardDescription>Your earnings and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">$3,420</p>
                    <p className="text-sm text-green-600">This Month</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">$18,750</p>
                    <p className="text-sm text-blue-600">Total Earned</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Recent Payments</h4>
                  {[
                    { student: 'Alice Johnson', amount: '$299', course: 'Mathematics', date: '2024-01-10' },
                    { student: 'Bob Smith', amount: '$199', course: 'Physics', date: '2024-01-08' },
                    { student: 'Carol Davis', amount: '$399', course: 'Chemistry', date: '2024-01-05' }
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{payment.student}</p>
                        <p className="text-sm text-gray-600">{payment.course} • {payment.date}</p>
                      </div>
                      <p className="font-medium text-green-600">{payment.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure your payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Payment Method</label>
                <Input placeholder="Bank Account / PayPal" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Tax Rate (%)</label>
                <Input type="number" placeholder="8.5" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Currency</label>
                <Input placeholder="USD" />
              </div>
              <Button className="w-full">Update Settings</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;