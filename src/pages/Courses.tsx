import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Plus, 
  BookOpen, 
  Users, 
  Calendar, 
  DollarSign,
  Clock,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  PlayCircle,
  PauseCircle
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [createCourseOpen, setCreateCourseOpen] = useState(false);
  const { toast } = useToast();

  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Comprehensive course covering calculus, algebra, and statistical analysis',
      instructor: 'Dr. Sarah Johnson',
      students: 45,
      maxStudents: 50,
      duration: '12 weeks',
      startDate: '2024-02-01',
      endDate: '2024-04-26',
      price: 599,
      status: 'active',
      category: 'Mathematics',
      progress: 60,
      totalLessons: 24,
      completedLessons: 14,
      enrollmentDeadline: '2024-01-25',
      credits: 3,
      level: 'Advanced',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      description: 'Introduction to classical mechanics, thermodynamics, and electromagnetism',
      instructor: 'Prof. Michael Chen',
      students: 32,
      maxStudents: 40,
      duration: '10 weeks',
      startDate: '2024-01-15',
      endDate: '2024-03-22',
      price: 499,
      status: 'active',
      category: 'Science',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      enrollmentDeadline: '2024-01-10',
      credits: 3,
      level: 'Intermediate',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Chemistry Basics',
      description: 'Essential chemistry concepts including organic and inorganic chemistry',
      instructor: 'Dr. Emily Rodriguez',
      students: 28,
      maxStudents: 35,
      duration: '8 weeks',
      startDate: '2024-03-01',
      endDate: '2024-04-26',
      price: 399,
      status: 'upcoming',
      category: 'Science',
      progress: 0,
      totalLessons: 16,
      completedLessons: 0,
      enrollmentDeadline: '2024-02-25',
      credits: 2,
      level: 'Beginner',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'English Literature',
      description: 'Analysis of classic and contemporary literature with writing workshops',
      instructor: 'Ms. Amanda Wilson',
      students: 22,
      maxStudents: 30,
      duration: '14 weeks',
      startDate: '2024-01-08',
      endDate: '2024-04-12',
      price: 449,
      status: 'active',
      category: 'Literature',
      progress: 85,
      totalLessons: 28,
      completedLessons: 24,
      enrollmentDeadline: '2024-01-01',
      credits: 4,
      level: 'Intermediate',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'Computer Science Intro',
      description: 'Programming fundamentals with Python and introduction to algorithms',
      instructor: 'Dr. James Kim',
      students: 38,
      maxStudents: 45,
      duration: '16 weeks',
      startDate: '2024-02-15',
      endDate: '2024-06-07',
      price: 699,
      status: 'active',
      category: 'Technology',
      progress: 25,
      totalLessons: 32,
      completedLessons: 8,
      enrollmentDeadline: '2024-02-10',
      credits: 4,
      level: 'Beginner',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'Art History',
      description: 'Journey through art movements from Renaissance to contemporary',
      instructor: 'Prof. Maria Garcia',
      students: 18,
      maxStudents: 25,
      duration: '12 weeks',
      startDate: '2023-11-01',
      endDate: '2024-01-24',
      price: 349,
      status: 'completed',
      category: 'Arts',
      progress: 100,
      totalLessons: 24,
      completedLessons: 24,
      enrollmentDeadline: '2023-10-25',
      credits: 3,
      level: 'Intermediate',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      upcoming: 'bg-blue-100 text-blue-800',
      completed: 'bg-gray-100 text-gray-800',
      paused: 'bg-yellow-100 text-yellow-800'
    };
    return variants[status as keyof typeof variants] || variants.active;
  };

  const getLevelBadge = (level: string) => {
    const variants = {
      Beginner: 'bg-green-100 text-green-800',
      Intermediate: 'bg-yellow-100 text-yellow-800',
      Advanced: 'bg-red-100 text-red-800'
    };
    return variants[level as keyof typeof variants] || variants.Beginner;
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || course.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const categories = [...new Set(courses.map(course => course.category))];
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = courses.reduce((sum, course) => sum + (course.price * course.students), 0);

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    setCreateCourseOpen(false);
    toast({
      title: "Course created successfully",
      description: "Your new course has been added to the catalog.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage your course catalog and track student progress</p>
        </div>
        <Dialog open={createCourseOpen} onOpenChange={setCreateCourseOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
              <DialogDescription>
                Set up a new course for your students.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateCourse} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="course-title">Course Title</Label>
                  <Input id="course-title" placeholder="Advanced Mathematics" required />
                </div>
                <div>
                  <Label htmlFor="course-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="literature">Literature</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="course-description">Description</Label>
                <Textarea id="course-description" placeholder="Comprehensive course covering..." required />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="course-price">Price ($)</Label>
                  <Input type="number" id="course-price" placeholder="399" min="0" required />
                </div>
                <div>
                  <Label htmlFor="course-duration">Duration (weeks)</Label>
                  <Input type="number" id="course-duration" placeholder="12" min="1" required />
                </div>
                <div>
                  <Label htmlFor="course-credits">Credits</Label>
                  <Input type="number" id="course-credits" placeholder="3" min="1" max="6" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="course-level">Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="max-students">Max Students</Label>
                  <Input type="number" id="max-students" placeholder="50" min="1" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input type="date" id="start-date" required />
                </div>
                <div>
                  <Label htmlFor="enrollment-deadline">Enrollment Deadline</Label>
                  <Input type="date" id="enrollment-deadline" required />
                </div>
              </div>
              
              <Button type="submit" className="w-full">Create Course</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.filter(c => c.status === 'active').length}
                </p>
              </div>
              <PlayCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-600" />
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
                placeholder="Search courses by title, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
                variant={selectedFilter === 'upcoming' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('upcoming')}
                size="sm"
              >
                Upcoming
              </Button>
              <Button
                variant={selectedFilter === 'completed' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('completed')}
                size="sm"
              >
                Completed
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <div className="absolute top-4 right-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
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
                      Edit Course
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="h-4 w-4 mr-2" />
                      Manage Students
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Course
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={getStatusBadge(course.status)}>
                  {course.status}
                </Badge>
                <Badge className={getLevelBadge(course.level)}>
                  {course.level}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {course.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Course Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students}/{course.maxStudents}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(course.startDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ${course.price}
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span className="text-gray-600">
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              {/* Instructor */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Instructor:</span>
                <span className="font-medium">{course.instructor}</span>
              </div>

              {/* Category and Credits */}
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{course.category}</Badge>
                <span className="text-sm text-gray-600">{course.credits} credits</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="h-4 w-4 mr-1" />
                  Students
                </Button>
                <Button variant="outline" size="sm">
                  {course.status === 'active' ? (
                    <PauseCircle className="h-4 w-4" />
                  ) : (
                    <PlayCircle className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first course'}
            </p>
            <Dialog open={createCourseOpen} onOpenChange={setCreateCourseOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
                </Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Courses;