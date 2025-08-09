import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Plus, 
  Users, 
  GraduationCap, 
  Award,
  TrendingUp,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const { toast } = useToast();

  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1 (555) 123-4567',
      avatar: '/api/placeholder/40/40',
      status: 'active',
      course: 'Advanced Mathematics',
      progress: 85,
      points: 1240,
      joinDate: '2024-01-15',
      lastActive: '2 hours ago',
      testsCompleted: 12,
      averageScore: 89,
      rank: 3,
      plan: 'premium'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1 (555) 234-5678',
      avatar: '/api/placeholder/40/40',
      status: 'active',
      course: 'Physics Fundamentals',
      progress: 72,
      points: 980,
      joinDate: '2024-01-20',
      lastActive: '1 day ago',
      testsCompleted: 8,
      averageScore: 76,
      rank: 8,
      plan: 'basic'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      phone: '+1 (555) 345-6789',
      avatar: '/api/placeholder/40/40',
      status: 'inactive',
      course: 'Chemistry Basics',
      progress: 45,
      points: 620,
      joinDate: '2024-02-01',
      lastActive: '1 week ago',
      testsCompleted: 5,
      averageScore: 68,
      rank: 15,
      plan: 'basic'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || variants.active;
  };

  const getPlanBadge = (plan: string) => {
    const variants = {
      basic: 'bg-blue-100 text-blue-800',
      premium: 'bg-purple-100 text-purple-800',
      enterprise: 'bg-orange-100 text-orange-800'
    };
    return variants[plan as keyof typeof variants] || variants.basic;
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || student.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'active').length;
  const totalPoints = students.reduce((sum, student) => sum + student.points, 0);
  const averageProgress = Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length);

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setAddStudentOpen(false);
    toast({
      title: "Student added successfully",
      description: "The new student has been enrolled and will receive an invitation email.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600">Manage your student roster and track their progress</p>
        </div>
        <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enroll a new student in your courses.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <Label htmlFor="student-name">Full Name</Label>
                <Input id="student-name" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="student-email">Email</Label>
                <Input type="email" id="student-email" placeholder="john@example.com" required />
              </div>
              <div>
                <Label htmlFor="student-phone">Phone Number</Label>
                <Input type="tel" id="student-phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="student-course">Enroll in Course</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Advanced Mathematics</SelectItem>
                    <SelectItem value="physics">Physics Fundamentals</SelectItem>
                    <SelectItem value="chemistry">Chemistry Basics</SelectItem>
                    <SelectItem value="english">English Literature</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="student-plan">Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Plan</SelectItem>
                    <SelectItem value="premium">Premium Plan</SelectItem>
                    <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Add Student</Button>
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
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Students</p>
                <p className="text-2xl font-bold text-gray-900">{activeStudents}</p>
              </div>
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">{totalPoints.toLocaleString()}</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                <p className="text-2xl font-bold text-gray-900">{averageProgress}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
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
                placeholder="Search students by name, email, or course..."
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
                variant={selectedFilter === 'inactive' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('inactive')}
                size="sm"
              >
                Inactive
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <CardDescription>{student.email}</CardDescription>
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
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Student
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Student
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge className={getStatusBadge(student.status)}>
                  {student.status}
                </Badge>
                <Badge className={getPlanBadge(student.plan)}>
                  {student.plan}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Course Progress</span>
                  <span>{student.progress}%</span>
                </div>
                <Progress value={student.progress} className="h-2" />
                <p className="text-sm text-gray-600">{student.course}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900">{student.points}</p>
                  <p className="text-gray-600">Points</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">#{student.rank}</p>
                  <p className="text-gray-600">Rank</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{student.testsCompleted}</p>
                  <p className="text-gray-600">Tests</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{student.averageScore}%</p>
                  <p className="text-gray-600">Avg Score</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Joined: {new Date(student.joinDate).toLocaleDateString()}</span>
                <span>Active: {student.lastActive}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first student'}
            </p>
            <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
              </DialogTrigger>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Students;