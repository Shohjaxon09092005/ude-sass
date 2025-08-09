import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft,
  Mail, 
  Phone, 
  Calendar,
  Award,
  BookOpen,
  FileText,
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const StudentProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock student data
  const student = {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 123-4567',
    enrollmentDate: '2024-01-15',
    status: 'active',
    courses: ['Mathematics', 'Physics', 'Chemistry'],
    completedTests: 12,
    totalTests: 15,
    points: 850,
    rank: 3,
    attendance: 95,
    lastPayment: '2024-01-01',
    paymentStatus: 'paid',
    performance: 'excellent',
    avatar: '/api/placeholder/100/100',
    totalCredits: 120,
    completedCredits: 95,
    gpa: 3.8,
    address: '123 Main St, City, State 12345',
    parentContact: 'John Johnson - +1 (555) 123-4568',
    notes: 'Excellent student with strong analytical skills. Shows great potential in STEM subjects.'
  };

  const performanceData = [
    { month: 'Jan', score: 78, attendance: 92 },
    { month: 'Feb', score: 82, attendance: 88 },
    { month: 'Mar', score: 85, attendance: 95 },
    { month: 'Apr', score: 88, attendance: 90 },
    { month: 'May', score: 92, attendance: 98 },
    { month: 'Jun', score: 95, attendance: 95 }
  ];

  const testResults = [
    { id: 1, test: 'Math Quiz #5', course: 'Mathematics', score: 95, date: '2024-01-20', status: 'completed' },
    { id: 2, test: 'Physics Lab Report', course: 'Physics', score: 88, date: '2024-01-18', status: 'completed' },
    { id: 3, test: 'Chemistry Midterm', course: 'Chemistry', score: 92, date: '2024-01-15', status: 'completed' },
    { id: 4, test: 'Math Assignment #8', course: 'Mathematics', score: null, date: '2024-01-25', status: 'pending' },
    { id: 5, test: 'Physics Quiz #3', course: 'Physics', score: 85, date: '2024-01-10', status: 'completed' }
  ];

  const paymentHistory = [
    { id: 1, date: '2024-01-01', amount: 500, description: 'Monthly Tuition', status: 'paid', method: 'Credit Card' },
    { id: 2, date: '2023-12-01', amount: 500, description: 'Monthly Tuition', status: 'paid', method: 'Bank Transfer' },
    { id: 3, date: '2023-11-01', amount: 500, description: 'Monthly Tuition', status: 'paid', method: 'Credit Card' },
    { id: 4, date: '2023-10-15', amount: 100, description: 'Lab Fee', status: 'paid', method: 'Cash' }
  ];

  const assignments = [
    { id: 1, title: 'Calculus Problem Set #10', course: 'Mathematics', dueDate: '2024-01-30', status: 'pending', priority: 'high' },
    { id: 2, title: 'Physics Lab Report #3', course: 'Physics', dueDate: '2024-02-02', status: 'in-progress', priority: 'medium' },
    { id: 3, title: 'Chemistry Research Paper', course: 'Chemistry', dueDate: '2024-02-05', status: 'not-started', priority: 'low' },
    { id: 4, title: 'Math Presentation', course: 'Mathematics', dueDate: '2024-01-28', status: 'completed', priority: 'medium' }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'not-started': 'bg-gray-100 text-gray-800',
      paid: 'bg-green-100 text-green-800',
      overdue: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/students">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Students
            </Link>
          </Button>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
              <p className="text-gray-600">Student ID: {student.id} • Rank #{student.rank}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          <Button>
            <User className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Score</p>
                <p className="text-2xl font-bold text-gray-900">{student.gpa}/4.0</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance</p>
                <p className="text-2xl font-bold text-gray-900">{student.attendance}%</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tests Completed</p>
                <p className="text-2xl font-bold text-gray-900">{student.completedTests}/{student.totalTests}</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">{student.points}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Student Information */}
            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Email</p>
                    <p className="text-sm">{student.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Phone</p>
                    <p className="text-sm">{student.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Enrollment Date</p>
                    <p className="text-sm">{new Date(student.enrollmentDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Status</p>
                    <Badge className={getStatusBadge(student.status)}>
                      {student.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Address</p>
                  <p className="text-sm">{student.address}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Parent Contact</p>
                  <p className="text-sm">{student.parentContact}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Notes</p>
                  <p className="text-sm text-gray-700">{student.notes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-gray-600">
                    {student.completedCredits}/{student.totalCredits} credits
                  </span>
                </div>
                <Progress value={(student.completedCredits / student.totalCredits) * 100} />
                
                <div className="space-y-3">
                  {student.courses.map((course, index) => (
                    <div key={course} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{course}</span>
                      </div>
                      <Badge variant="secondary">
                        {Math.floor(Math.random() * 20) + 80}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Test scores and attendance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="attendance" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Average scores by subject</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { subject: 'Math', score: 92 },
                    { subject: 'Physics', score: 88 },
                    { subject: 'Chemistry', score: 90 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>Complete history of test scores and submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testResults.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${test.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                        {test.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Clock className="h-5 w-5 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{test.test}</p>
                        <p className="text-sm text-gray-600">{test.course} • {test.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {test.score ? (
                        <div className="text-lg font-bold">{test.score}%</div>
                      ) : (
                        <Badge className={getStatusBadge(test.status)}>
                          {test.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Current and upcoming assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${assignment.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <FileText className={`h-5 w-5 ${assignment.status === 'completed' ? 'text-green-600' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-gray-600">{assignment.course} • Due: {assignment.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getPriorityColor(assignment.priority)}>
                        {assignment.priority}
                      </Badge>
                      <Badge className={getStatusBadge(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Payment Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Total Paid</span>
                  <span className="text-lg font-bold text-green-600">$2,100</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="font-medium">Outstanding Balance</span>
                  <span className="text-lg font-bold text-yellow-600">$0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Next Payment Due</span>
                  <span className="text-lg font-bold text-blue-600">Feb 1, 2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${payment.amount}</p>
                        <Badge className={getStatusBadge(payment.status)}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentProfile;
