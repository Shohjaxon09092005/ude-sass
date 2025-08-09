import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Save, 
  BookOpen,
  Clock,
  Award,
  FileText,
  Calendar,
  Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: '',
    course: '',
    type: 'homework',
    description: '',
    instructions: '',
    dueDate: '',
    assignedDate: '',
    points: 50,
    difficulty: 'medium',
    estimatedTime: '2 hours',
    materials: '',
    submissionFormat: 'text'
  });

  const [requirements, setRequirements] = useState([
    { id: 1, requirement: '', completed: false }
  ]);

  const handleAddRequirement = () => {
    const newRequirement = {
      id: requirements.length + 1,
      requirement: '',
      completed: false
    };
    setRequirements([...requirements, newRequirement]);
  };

  const handleRemoveRequirement = (id: number) => {
    setRequirements(requirements.filter(r => r.id !== id));
  };

  const handleRequirementChange = (id: number, value: string) => {
    setRequirements(requirements.map(r => 
      r.id === id ? { ...r, requirement: value } : r
    ));
  };

  const handleSaveTask = () => {
    console.log('Saving task:', { taskData, requirements });
    // Here you would typically save to your backend
    navigate('/tests');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/tests')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tests & Tasks
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Task</h1>
            <p className="text-gray-600">Assign a new task or assignment to your students</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Save as Draft
          </Button>
          <Button onClick={handleSaveTask}>
            <Save className="h-4 w-4 mr-2" />
            Assign Task
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Task Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  value={taskData.title}
                  onChange={(e) => setTaskData({...taskData, title: e.target.value})}
                  placeholder="Enter task title"
                />
              </div>
              
              <div>
                <Label htmlFor="course">Course</Label>
                <Select value={taskData.course} onValueChange={(value) => setTaskData({...taskData, course: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Task Type</Label>
                <Select value={taskData.type} onValueChange={(value) => setTaskData({...taskData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homework">Homework</SelectItem>
                    <SelectItem value="project">Project</SelectItem>
                    <SelectItem value="presentation">Presentation</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="lab">Lab Work</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={taskData.description}
                  onChange={(e) => setTaskData({...taskData, description: e.target.value})}
                  placeholder="Brief description of the task"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="instructions">Detailed Instructions</Label>
                <Textarea
                  id="instructions"
                  value={taskData.instructions}
                  onChange={(e) => setTaskData({...taskData, instructions: e.target.value})}
                  placeholder="Provide detailed instructions for completing this task"
                  rows={5}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Requirements Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {requirements.map((req, index) => (
                <div key={req.id} className="flex items-center space-x-2">
                  <Badge variant="outline">#{index + 1}</Badge>
                  <Input
                    value={req.requirement}
                    onChange={(e) => handleRequirementChange(req.id, e.target.value)}
                    placeholder="Enter requirement"
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveRequirement(req.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={handleAddRequirement} className="w-full">
                Add Requirement
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Task Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule & Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="assignedDate">Assigned Date</Label>
                <Input
                  id="assignedDate"
                  type="date"
                  value={taskData.assignedDate}
                  onChange={(e) => setTaskData({...taskData, assignedDate: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="datetime-local"
                  value={taskData.dueDate}
                  onChange={(e) => setTaskData({...taskData, dueDate: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="estimatedTime">Estimated Time</Label>
                <Select value={taskData.estimatedTime} onValueChange={(value) => setTaskData({...taskData, estimatedTime: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30 minutes">30 minutes</SelectItem>
                    <SelectItem value="1 hour">1 hour</SelectItem>
                    <SelectItem value="2 hours">2 hours</SelectItem>
                    <SelectItem value="3 hours">3 hours</SelectItem>
                    <SelectItem value="5 hours">5 hours</SelectItem>
                    <SelectItem value="1 day">1 day</SelectItem>
                    <SelectItem value="1 week">1 week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Grading & Difficulty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="points">Points</Label>
                <Input
                  id="points"
                  type="number"
                  value={taskData.points}
                  onChange={(e) => setTaskData({...taskData, points: parseInt(e.target.value)})}
                />
              </div>

              <div>
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select value={taskData.difficulty} onValueChange={(value) => setTaskData({...taskData, difficulty: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="submissionFormat">Submission Format</Label>
                <Select value={taskData.submissionFormat} onValueChange={(value) => setTaskData({...taskData, submissionFormat: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text Response</SelectItem>
                    <SelectItem value="file">File Upload</SelectItem>
                    <SelectItem value="link">Link/URL</SelectItem>
                    <SelectItem value="presentation">Presentation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Materials & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="materials">Required Materials/Resources</Label>
                <Textarea
                  id="materials"
                  value={taskData.materials}
                  onChange={(e) => setTaskData({...taskData, materials: e.target.value})}
                  placeholder="List any materials, books, software, or resources needed"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTask;