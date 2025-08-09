import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Plus, 
  FileText, 
  Users, 
  Calendar, 
  Clock,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  PlayCircle,
  Award,
  Timer,
  BookOpen
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

const Tests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tests');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tests = [
    {
      id: 1,
      title: 'Calculus Midterm Exam',
      course: 'Advanced Mathematics',
      type: 'exam',
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
    },
    {
      id: 2,
      title: 'Physics Lab Quiz #3',
      course: 'Physics Fundamentals',
      type: 'quiz',
      questions: 15,
      duration: 45,
      totalPoints: 50,
      createdDate: '2024-01-20',
      dueDate: '2024-01-25',
      status: 'completed',
      submissions: 32,
      totalStudents: 32,
      averageScore: 41.2,
      passRate: 92,
      difficulty: 'medium',
      category: 'Science'
    },
    {
      id: 3,
      title: 'Chemistry Assignment #5',
      course: 'Chemistry Basics',
      type: 'assignment',
      questions: 10,
      duration: 60,
      totalPoints: 75,
      createdDate: '2024-01-22',
      dueDate: '2024-02-05',
      status: 'draft',
      submissions: 0,
      totalStudents: 28,
      averageScore: 0,
      passRate: 0,
      difficulty: 'easy',
      category: 'Science'
    },
    {
      id: 4,
      title: 'English Literature Essay',
      course: 'English Literature',
      type: 'assignment',
      questions: 3,
      duration: 180,
      totalPoints: 100,
      createdDate: '2024-01-18',
      dueDate: '2024-01-28',
      status: 'active',
      submissions: 18,
      totalStudents: 22,
      averageScore: 82.3,
      passRate: 90,
      difficulty: 'hard',
      category: 'Literature'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Python Programming Project',
      course: 'Computer Science Intro',
      type: 'project',
      assignedDate: '2024-01-10',
      dueDate: '2024-02-15',
      status: 'active',
      submissions: 25,
      totalStudents: 38,
      points: 150,
      difficulty: 'hard',
      estimatedTime: '20 hours',
      description: 'Create a web application using Python Flask framework'
    },
    {
      id: 2,
      title: 'Art History Presentation',
      course: 'Art History',
      type: 'presentation',
      assignedDate: '2024-01-12',
      dueDate: '2024-01-26',
      status: 'completed',
      submissions: 18,
      totalStudents: 18,
      points: 100,
      difficulty: 'medium',
      estimatedTime: '10 hours',
      description: 'Present on a chosen art movement with visual aids'
    },
    {
      id: 3,
      title: 'Math Problem Set #8',
      course: 'Advanced Mathematics',
      type: 'homework',
      assignedDate: '2024-01-25',
      dueDate: '2024-02-01',
      status: 'active',
      submissions: 35,
      totalStudents: 45,
      points: 50,
      difficulty: 'medium',
      estimatedTime: '3 hours',
      description: 'Solve calculus problems focusing on derivatives and integrals'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      draft: 'bg-gray-100 text-gray-800',
      overdue: 'bg-red-100 text-red-800'
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

  const getTypeIcon = (type: string) => {
    const icons = {
      exam: FileText,
      quiz: FileText,
      assignment: BookOpen,
      project: Award,
      presentation: PlayCircle,
      homework: FileText
    };
    const Icon = icons[type as keyof typeof icons] || FileText;
    return <Icon className="h-5 w-5" />;
  };

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || test.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || task.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tests & Tasks</h1>
          <p className="text-gray-600">Create and manage tests, quizzes, and assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/tasks/add')}>
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
          <Button onClick={() => navigate('/tests/add')}>
            <Plus className="h-4 w-4 mr-2" />
            New Test
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tests</p>
                <p className="text-2xl font-bold text-gray-900">{tests.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Tests</p>
                <p className="text-2xl font-bold text-gray-900">
                  {tests.filter(t => t.status === 'active').length}
                </p>
              </div>
              <PlayCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{tasks.length}</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Score</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(tests.reduce((sum, test) => sum + test.averageScore, 0) / tests.length)}%
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tests and tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={selectedFilter === 'active' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('active')}
                size="sm"
              >
                Active
              </Button>
              <Button
                variant={selectedFilter === 'completed' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('completed')}
                size="sm"
              >
                Completed
              </Button>
              <Button
                variant={selectedFilter === 'draft' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('draft')}
                size="sm"
              >
                Draft
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tests">Tests & Quizzes</TabsTrigger>
          <TabsTrigger value="tasks">Tasks & Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="tests" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {getTypeIcon(test.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                        <CardDescription>{test.course}</CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => navigate(`/tests/${test.id}`)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/tests/${test.id}/edit`)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Test
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="h-4 w-4 mr-2" />
                          View Results
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Test
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Status and Difficulty */}
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusBadge(test.status)}>
                      {test.status}
                    </Badge>
                    <Badge className={getDifficultyBadge(test.difficulty)}>
                      {test.difficulty}
                    </Badge>
                  </div>

                  {/* Test Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FileText className="h-4 w-4 mr-1" />
                      {test.questions} questions
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Timer className="h-4 w-4 mr-1" />
                      {test.duration} min
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-1" />
                      {test.totalPoints} points
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      Due: {new Date(test.dueDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Submission Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Submissions</span>
                      <span className="text-gray-600">
                        {test.submissions}/{test.totalStudents}
                      </span>
                    </div>
                    <Progress value={(test.submissions / test.totalStudents) * 100} className="h-2" />
                  </div>

                  {/* Performance Stats */}
                  {test.status === 'completed' && (
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Avg Score</p>
                        <p className="text-lg font-bold text-blue-600">{test.averageScore}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Pass Rate</p>
                        <p className="text-lg font-bold text-green-600">{test.passRate}%</p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => navigate(`/tests/${test.id}`)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => navigate(`/tests/${test.id}/edit`)}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        {getTypeIcon(task.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                        <CardDescription>{task.course}</CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Task
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="h-4 w-4 mr-2" />
                          View Submissions
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Task
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Status and Difficulty */}
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusBadge(task.status)}>
                      {task.status}
                    </Badge>
                    <Badge className={getDifficultyBadge(task.difficulty)}>
                      {task.difficulty}
                    </Badge>
                  </div>

                  {/* Task Description */}
                  <p className="text-sm text-gray-600">{task.description}</p>

                  {/* Task Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-1" />
                      {task.points} points
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {task.estimatedTime}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      Assigned: {new Date(task.assignedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Submission Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Submissions</span>
                      <span className="text-gray-600">
                        {task.submissions}/{task.totalStudents}
                      </span>
                    </div>
                    <Progress value={(task.submissions / task.totalStudents) * 100} className="h-2" />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tests;