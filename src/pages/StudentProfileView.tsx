import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Trophy, 
  Clock, 
  BookOpen, 
  FileText, 
  Star,
  TrendingUp,
  Calendar,
  Award,
  Target,
  CheckCircle,
  XCircle,
  AlertCircle,
  Play
} from 'lucide-react';

const StudentProfileView = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentData = {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    avatar: '/placeholder-avatar.jpg',
    points: 1240,
    rank: 3,
    level: 'Advanced',
    joinDate: '2023-09-15',
    totalCourses: 4,
    completedCourses: 2,
    overallProgress: 78
  };

  const stats = [
    { label: 'Total Points', value: '1,240', icon: Trophy, color: 'yellow' },
    { label: 'Current Rank', value: '#3', icon: Award, color: 'purple' },
    { label: 'Courses Enrolled', value: '4', icon: BookOpen, color: 'blue' },
    { label: 'Tests Completed', value: '23', icon: FileText, color: 'green' }
  ];

  const enrolledCourses = [
    { 
      id: 1, 
      title: 'Advanced Mathematics', 
      progress: 85, 
      instructor: 'Dr. Smith',
      nextClass: '2024-01-15 10:00 AM',
      status: 'active'
    },
    { 
      id: 2, 
      title: 'Physics Fundamentals', 
      progress: 92, 
      instructor: 'Prof. Johnson',
      nextClass: '2024-01-16 2:00 PM',
      status: 'active'
    },
    { 
      id: 3, 
      title: 'Chemistry Lab', 
      progress: 100, 
      instructor: 'Dr. Brown',
      nextClass: null,
      status: 'completed'
    },
    { 
      id: 4, 
      title: 'Biology Basics', 
      progress: 45, 
      instructor: 'Prof. Davis',
      nextClass: '2024-01-17 9:00 AM',
      status: 'active'
    }
  ];

  const recentTests = [
    { id: 1, title: 'Algebra Quiz', course: 'Mathematics', score: 95, status: 'passed', date: '2024-01-10' },
    { id: 2, title: 'Physics Lab Report', course: 'Physics', score: 88, status: 'passed', date: '2024-01-08' },
    { id: 3, title: 'Chemistry Final', course: 'Chemistry', score: 92, status: 'passed', date: '2024-01-05' },
    { id: 4, title: 'Biology Test', course: 'Biology', score: 76, status: 'passed', date: '2024-01-03' }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Math Assignment #5', course: 'Mathematics', dueDate: '2024-01-18', priority: 'high' },
    { id: 2, title: 'Physics Lab Report', course: 'Physics', dueDate: '2024-01-20', priority: 'medium' },
    { id: 3, title: 'Biology Research', course: 'Biology', dueDate: '2024-01-25', priority: 'low' }
  ];

  const achievements = [
    { title: 'First Test Passed', description: 'Completed your first test', icon: '🎯', earned: true },
    { title: 'Course Completed', description: 'Finished your first course', icon: '🏆', earned: true },
    { title: 'Top Performer', description: 'Ranked in top 5', icon: '⭐', earned: true },
    { title: 'Perfect Score', description: 'Scored 100% on a test', icon: '💯', earned: false },
    { title: 'Streak Master', description: '7 days learning streak', icon: '🔥', earned: false }
  ];

  const schedule = [
    { day: 'Monday', time: '10:00 AM', course: 'Mathematics', instructor: 'Dr. Smith' },
    { day: 'Tuesday', time: '2:00 PM', course: 'Physics', instructor: 'Prof. Johnson' },
    { day: 'Wednesday', time: '9:00 AM', course: 'Biology', instructor: 'Prof. Davis' },
    { day: 'Friday', time: '11:00 AM', course: 'Mathematics', instructor: 'Dr. Smith' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
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
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={studentData.avatar} />
                <AvatarFallback className="text-2xl">{studentData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{studentData.name}</h1>
                <p className="text-gray-600">{studentData.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="capitalize">{studentData.level}</Badge>
                  <Badge variant="outline">
                    <Trophy className="h-3 w-3 mr-1" />
                    Rank #{studentData.rank}
                  </Badge>
                  <Badge variant="outline">
                    <Star className="h-3 w-3 mr-1" />
                    {studentData.points} Points
                  </Badge>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm text-gray-600">{studentData.overallProgress}%</span>
              </div>
              <Progress value={studentData.overallProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:w-80">
          <CardHeader>
            <CardTitle className="text-lg">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xl font-bold text-blue-600">{studentData.totalCourses}</p>
                <p className="text-xs text-blue-600">Total Courses</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-xl font-bold text-green-600">{studentData.completedCourses}</p>
                <p className="text-xs text-green-600">Completed</p>
              </div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xl font-bold text-purple-600">{studentData.points}</p>
              <p className="text-xs text-purple-600">Total Points Earned</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
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
            { id: 'courses', label: 'My Courses' },
            { id: 'tests', label: 'Tests & Tasks' },
            { id: 'schedule', label: 'Schedule' },
            { id: 'achievements', label: 'Achievements' }
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
              <CardTitle>Recent Test Results</CardTitle>
              <CardDescription>Your latest performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.slice(0, 4).map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{test.title}</p>
                      <p className="text-sm text-gray-600">{test.course} • {test.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{test.score}%</span>
                      <Badge className={getStatusColor(test.status)}>{test.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>Tasks and assignments due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-sm text-gray-600">{task.course} • Due: {task.dueDate}</p>
                    </div>
                    <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                      {course.status}
                    </Badge>
                  </div>
                  <CardDescription>Instructor: {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    {course.nextClass && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Next class: {course.nextClass}</span>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tests' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Tests</CardTitle>
              <CardDescription>Your test history and scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{test.title}</p>
                      <p className="text-sm text-gray-600">{test.course} • {test.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{test.score}%</p>
                        <Badge className={getStatusColor(test.status)}>{test.status}</Badge>
                      </div>
                      {test.status === 'passed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Assignments and tasks to complete</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-sm text-gray-600">{task.course}</p>
                      <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                      <Button size="sm">Start Task</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'schedule' && (
        <Card>
          <CardHeader>
            <CardTitle>Class Schedule</CardTitle>
            <CardDescription>Your weekly class timetable</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-center min-w-[80px]">
                      <p className="font-medium text-gray-900">{class_.day}</p>
                      <p className="text-sm text-gray-600">{class_.time}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{class_.course}</p>
                      <p className="text-sm text-gray-600">with {class_.instructor}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className={achievement.earned ? 'border-yellow-200 bg-yellow-50' : 'opacity-60'}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-medium text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                {achievement.earned ? (
                  <Badge variant="default" className="bg-yellow-100 text-yellow-800">Earned</Badge>
                ) : (
                  <Badge variant="outline">Not Earned</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentProfileView;