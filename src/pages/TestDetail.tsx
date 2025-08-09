import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Edit, 
  Users, 
  BarChart3, 
  Clock, 
  FileText, 
  Award, 
  Calendar,
  CheckCircle,
  XCircle,
  MoreVertical,
  Download,
  Eye
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TestDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const testData = {
    id: 1,
    title: 'Calculus Midterm Exam',
    course: 'Advanced Mathematics',
    type: 'exam',
    description: 'Comprehensive midterm covering derivatives, integrals, and applications',
    questions: 25,
    duration: 120,
    totalPoints: 100,
    createdDate: '2024-01-15',
    dueDate: '2024-01-30',
    status: 'active',
    submissions: 42,
    totalStudents: 45,
    averageScore: 78.5,
    passRate: 85,
    difficulty: 'hard',
    category: 'Mathematics'
  };

  const submissions = [
    { id: 1, student: 'Alice Johnson', score: 92, status: 'submitted', submitTime: '2024-01-29 14:30', duration: 118 },
    { id: 2, student: 'Bob Smith', score: 78, status: 'submitted', submitTime: '2024-01-29 15:45', duration: 120 },
    { id: 3, student: 'Carol Davis', score: 85, status: 'submitted', submitTime: '2024-01-29 16:20', duration: 115 },
    { id: 4, student: 'David Wilson', score: 0, status: 'not-submitted', submitTime: '', duration: 0 },
    { id: 5, student: 'Emma Brown', score: 88, status: 'submitted', submitTime: '2024-01-30 09:15', duration: 110 },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    return variants[status as keyof typeof variants] || variants.active;
  };

  const getDifficultyBadge = (difficulty: string) => {
    const variants = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800'
    };
    return variants[difficulty as keyof typeof variants] || variants.medium;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/tests')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tests
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{testData.title}</h1>
            <p className="text-gray-600">{testData.course}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Results
          </Button>
          <Button variant="outline" onClick={() => navigate(`/tests/${id}/edit`)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Test
          </Button>
        </div>
      </div>

      {/* Test Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{testData.submissions}/{testData.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Score</p>
                <p className="text-2xl font-bold text-gray-900">{testData.averageScore}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                <p className="text-2xl font-bold text-gray-900">{testData.passRate}%</p>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Time Limit</p>
                <p className="text-2xl font-bold text-gray-900">{testData.duration}min</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Test Details */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getStatusBadge(testData.status)}>
                  {testData.status}
                </Badge>
                <Badge className={getDifficultyBadge(testData.difficulty)}>
                  {testData.difficulty}
                </Badge>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium capitalize">{testData.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Questions:</span>
                  <span className="font-medium">{testData.questions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Points:</span>
                  <span className="font-medium">{testData.totalPoints}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-medium">{new Date(testData.createdDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="font-medium">{new Date(testData.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description:</p>
                <p className="text-sm">{testData.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completed</span>
                  <span>{testData.submissions}/{testData.totalStudents}</span>
                </div>
                <Progress value={(testData.submissions / testData.totalStudents) * 100} className="h-2" />
                <p className="text-xs text-gray-500">
                  {testData.totalStudents - testData.submissions} students haven't submitted yet
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Submissions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Submissions</CardTitle>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All Results
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {submission.student.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{submission.student}</p>
                        <p className="text-sm text-gray-500">
                          {submission.status === 'submitted' 
                            ? `Submitted: ${submission.submitTime}`
                            : 'Not submitted'
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          {submission.status === 'submitted' ? `${submission.score}%` : '-'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {submission.status === 'submitted' ? `${submission.duration}min` : ''}
                        </p>
                      </div>
                      <div>
                        {submission.status === 'submitted' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Submission</DropdownMenuItem>
                          <DropdownMenuItem>Grade Manually</DropdownMenuItem>
                          <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;