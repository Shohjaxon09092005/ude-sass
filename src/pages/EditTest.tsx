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
  Trash2,
  Plus,
  FileText,
  Clock,
  Award,
  AlertTriangle
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTest = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, this would come from API
  const [testData, setTestData] = useState({
    title: 'Calculus Midterm Exam',
    course: 'math',
    type: 'exam',
    description: 'Comprehensive midterm covering derivatives, integrals, and applications',
    duration: 120,
    totalPoints: 100,
    dueDate: '2024-01-30T23:59',
    difficulty: 'hard',
    category: 'Mathematics',
    instructions: 'Please read all questions carefully before answering.'
  });

  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What is the derivative of x²?',
      options: ['2x', 'x', '2', 'x²'],
      correctAnswer: 0,
      points: 5
    },
    {
      id: 2,
      type: 'short-answer',
      question: 'Explain the fundamental theorem of calculus.',
      options: [],
      correctAnswer: -1,
      points: 10
    }
  ]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      points: 5
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleQuestionChange = (id: number, field: string, value: any) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ));
  };

  const handleOptionChange = (questionId: number, optionIndex: number, value: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt) }
        : q
    ));
  };

  const handleSaveTest = () => {
    console.log('Updating test:', { testData, questions });
    // Here you would typically save to your backend
    navigate(`/tests/${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate(`/tests/${id}`)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Test Details
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Test</h1>
            <p className="text-gray-600">Modify test settings and questions</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Test
          </Button>
          <Button onClick={handleSaveTest}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Warning for active tests */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="font-medium text-yellow-800">Warning: Active Test</p>
              <p className="text-sm text-yellow-700">
                This test is currently active and has submissions. Changes may affect student results.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Test Settings */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Test Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Test Title</Label>
                <Input
                  id="title"
                  value={testData.title}
                  onChange={(e) => setTestData({...testData, title: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="course">Course</Label>
                <Select value={testData.course} onValueChange={(value) => setTestData({...testData, course: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Test Type</Label>
                <Select value={testData.type} onValueChange={(value) => setTestData({...testData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quiz">Quiz</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={testData.description}
                  onChange={(e) => setTestData({...testData, description: e.target.value})}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Test Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={testData.duration}
                  onChange={(e) => setTestData({...testData, duration: parseInt(e.target.value)})}
                />
              </div>

              <div>
                <Label htmlFor="totalPoints">Total Points</Label>
                <Input
                  id="totalPoints"
                  type="number"
                  value={testData.totalPoints}
                  onChange={(e) => setTestData({...testData, totalPoints: parseInt(e.target.value)})}
                />
              </div>

              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="datetime-local"
                  value={testData.dueDate}
                  onChange={(e) => setTestData({...testData, dueDate: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select value={testData.difficulty} onValueChange={(value) => setTestData({...testData, difficulty: value})}>
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
            </CardContent>
          </Card>
        </div>

        {/* Questions Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Questions ({questions.length})
                </CardTitle>
                <Button onClick={handleAddQuestion}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions.map((question, index) => (
                <Card key={question.id} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Q{index + 1}</Badge>
                        <Select 
                          value={question.type} 
                          onValueChange={(value) => handleQuestionChange(question.id, 'type', value)}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                            <SelectItem value="short-answer">Short Answer</SelectItem>
                            <SelectItem value="essay">Essay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={question.points}
                          onChange={(e) => handleQuestionChange(question.id, 'points', parseInt(e.target.value))}
                          className="w-20"
                          placeholder="Points"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveQuestion(question.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Question</Label>
                      <Textarea
                        value={question.question}
                        onChange={(e) => handleQuestionChange(question.id, 'question', e.target.value)}
                        placeholder="Enter your question here..."
                        rows={2}
                      />
                    </div>

                    {question.type === 'multiple-choice' && (
                      <div>
                        <Label>Answer Options</Label>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`correct-${question.id}`}
                                checked={question.correctAnswer === optionIndex}
                                onChange={() => handleQuestionChange(question.id, 'correctAnswer', optionIndex)}
                                className="text-blue-600"
                              />
                              <Input
                                value={option}
                                onChange={(e) => handleOptionChange(question.id, optionIndex, e.target.value)}
                                placeholder={`Option ${optionIndex + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditTest;