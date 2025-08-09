import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3, 
  CreditCard, 
  Award,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Comprehensive student profiles, attendance tracking, and performance monitoring'
    },
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Create and manage courses with flexible payment plans and credit systems'
    },
    {
      icon: FileText,
      title: 'Tests & Assignments',
      description: 'Create online tests, assignments, and track completion rates'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reports',
      description: 'Detailed analytics and reports on student performance and financial data'
    },
    {
      icon: CreditCard,
      title: 'Payment Tracking',
      description: 'Real-time payment tracking, partial payments, and financial reports'
    },
    {
      icon: Award,
      title: 'Points & Rankings',
      description: 'Gamification system with points, badges, and leaderboards'
    }
  ];

  const stats = [
    { label: 'Teachers Using EduManage', value: '10,000+', icon: Users },
    { label: 'Students Managed', value: '500,000+', icon: Users },
    { label: 'Tests Completed', value: '2M+', icon: FileText },
    { label: 'Uptime', value: '99.9%', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">EduManage</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/pricing">Pricing</Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Manage Your Students
            <span className="text-indigo-600 block">Efficiently</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Complete SaaS solution for teachers to manage students, track payments, create tests, 
            and generate detailed reports. Everything you need in one platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3" asChild>
              <Link to="/dashboard">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Everything You Need</h3>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to streamline your teaching and student management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-indigo-200 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Teaching?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of teachers who are already using EduManage to streamline their workflow
          </p>
          <Button size="lg" className="px-8 py-3" asChild>
            <Link to="/dashboard">Get Started Today</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">EduManage</h4>
              <p className="text-gray-400">
                The complete student management solution for modern teachers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Student Management</li>
                <li>Course Creation</li>
                <li>Payment Tracking</li>
                <li>Reports & Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Contact Us</li>
                <li>System Status</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduManage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;